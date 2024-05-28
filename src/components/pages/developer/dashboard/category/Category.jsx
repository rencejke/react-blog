import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { Link } from 'react-router-dom'
import PostTable from './CategoryTable'
import { FiPlus } from 'react-icons/fi'
import useQueryData from '../../../../custom-hook/useQueryData'
import { setIsAdd } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import ModalError from '../../../../partials/modals/ModalError'
import Toast from '../../../../partials/Toast'
import Searchbar from '../../../../partials/Searchbar'
import ModalAddCategory from './ModalAddCategory'
import CategoryTable from './CategoryTable'
import { AnimatePresence, motion } from 'framer-motion'

const Category = () => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [isSearch, setIsSearch] = React.useState(false)
    const [keyword , setKeyword] = React.useState('');
    const [itemEdit , setItemEdit] = React.useState('');

    const {
        isLoading,
        isFetching,
        error,
        data: category,
      } = useQueryData (
       "/v1/category", // endpoint
       "get", // method
       "category", // key      
      );


      const handleAdd = () => {
        dispatch(setIsAdd(true));
        setItemEdit(null)
    }
  return (
    <section className='flex overflow-hidden'>
    <Navigation menu="category"/>
    <main className='w-[calc(100%-250px)] overflow-x-hidden'>
        <Header/>

    <div className='flex '>
        <div className={`main-wrapper transition-all px-4 py-3  sticky top-0 w-full`}>
            <div className='flex justify-between items-center'>
                <h1>Category</h1>
                <Searchbar setIsSeach={setIsSearch} setKeyword={setKeyword}/>
            </div>
        
            <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8 '>
                <h2>Seacrh</h2>
                <motion.button className='btn btn--accent' onClick={handleAdd} whileTap={{scale: 0.97}}>
                        <FiPlus/> New
                    </motion.button>
            </div>
            <CategoryTable isLoading={isLoading} category={category} isFetching={isFetching} setItemEdit={setItemEdit}/>
        </div>
    </div>
    </main>
     
    <AnimatePresence>
    {store.isAdd && <ModalAddCategory  itemEdit={itemEdit}/>}
    </AnimatePresence>
    
    {store.error && <ModalError position="center"/>}
    {store.success && <Toast/>}
</section>
  )
}

export default Category
