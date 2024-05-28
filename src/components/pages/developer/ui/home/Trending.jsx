import React from 'react'
import SectionBanner from './SectionBanner'
import Card from './Card'
import useQueryData from '../../../../custom-hook/useQueryData';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { devBaseImgUrl } from '../../../../helpers/functions-general';


const Trending = () => {



    const {
        isLoading,
        isFetching,
        error,
        data: post,
      } = useQueryData(
        "/v1/post",
        "get", // method
        "post", // key
      );

      const getTrending = () => post?.data.filter((item) => item.post_category_id === 1  && 
      item.post_is_featured === 0)
      const getTrendingMain = () => post?.data.filter((item) => item.post_is_featured === 1)



  return (
    <section className='py-10'>
        <div className="container">
         <SectionBanner/>

         <div className="grid mt-10 gap-10  md:grid-cols-[1fr_2fr]">
          <Card item={!isLoading && getTrendingMain()[0]}/>

            <div className='grid gap-10 md:grid md:grid-cols-2'>

           {!isLoading && getTrending().slice(0, 4).map(
            (item, key) => (<div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl" key={key}>
            <div className='overflow-hidden rounded-xl h-[250px] mb-5 -mt-10'>
              <Link to={`/single?id=${item.post_aid}`}>
                <img src={`${devBaseImgUrl}/${item.post_image}`} alt="" className="w-full object-cover h-[300px] block   transition-transform hover:scale-110" />
                </Link>
            </div>
        <small className='hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
            text-xs'>{item.tag_title}</small>
            <h3 className='mt-4 my-0 whitespace-normal'>{item.post_category}.</h3>
        
            {/* <Markdown>{item.post_article}</Markdown> */}
            <p>{item.post_article}</p>
        </div> )
        )}
          
              
            </div>
         </div>
        </div>
    </section>
  )
}

export default Trending
