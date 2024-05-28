import React from 'react'
import SpinnerWindow from '../../../../partials/spinners/SpinnerWindow';
import { devBaseImgUrl } from '../../../../helpers/functions-general';
import useQueryData from '../../../../custom-hook/useQueryData';
import Slider from 'react-slick';

const BannerSlider = () => {

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

  var settings = {
    infinite: true,
    speed: 500,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,

  };


  return (
    <div className='banner-slider overflow-hidden'>
   
     <Slider {...settings}>
    {isLoading ? <SpinnerWindow/> : 
         post?.data.map((item, key)=>(
        <div className='relative place-content-center h-[50vh] bg-black'>
            <img src={`${devBaseImgUrl}/${item.post_image}`} alt="" className='object-cover h-[50vh] w-full absolute top-0 left-0 opacity-25' />
            <div className='text-center'>
                <ul className='flex justify-center gap-2'>
                    <li className='bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
                    text-xs'>{item.tag_title}</li>
                </ul>

                <h2 className='px-1 mt-4 text-balance text-3xl text-primary'>{item.post_title}.</h2>

                <ul className='flex justify-center gap-4 text-sm text-primary'>
                    <li>{item.post_author}</li>
                    <li>{item.publish_date}</li>
                </ul>
            </div>
        </div>
        ))
    }
</Slider>
    
</div>
  )
}

export default BannerSlider