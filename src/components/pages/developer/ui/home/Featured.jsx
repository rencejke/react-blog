import React from 'react'
import Card from './Card'
import SectionBanner from './SectionBanner'
import useQueryData from '../../../../custom-hook/useQueryData';
import SpinnerWindow from '../../../../partials/spinners/SpinnerWindow';

const Featured = () => {


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

  const getFeatured = () => post?.data.filter((item) => item.post_category_id === 2)


  return (
    <section className='featured py-10'>
  <div className="container">
    <SectionBanner title="Feature now" hasLink={true} link='/featured'/>
     <div className='grid gap-10 md:grid-cols-3 mt-10'>



{!isLoading && getFeatured().slice(0, 4).map(
            (item, key) => ( <Card height="sm" item={item} key={key}/>)
          )}

   
   </div>
  </div>
  </section>
  )
}

export default Featured