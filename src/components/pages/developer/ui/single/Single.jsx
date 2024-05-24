import React from "react";
import UIHeader from "../partials/UIHeader";
import UIFooter from "../partials/UIFooter";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { devBaseImgUrl, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hook/useQueryData";
import Markdown from "react-markdown";


const Single = () => {
  const id = getUrlParam().get('id')

  const {
    isLoading,
    isFetching,
    error,
    data: post,
  } = useQueryData (
   `/v1/post/${id}`, // endpoint
   "get", // method
   "post", // key
  );

  return (
    <div>
      <UIHeader />
      <div className="banner mt-5 mb-10">
        <div className="container">
          <h1
            className="max-w-[800px] mx-auto text-center mb-0 w-full py-10 px-5 bg-header
        bg-opacity-10 rounded-lg border-2 border-header border-opacity-40
         "
          >
          {post?.data[0].post_title}
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="grid md:grid-cols-[2fr_1fr] gap-10">
          <div> 
          <img src={`${devBaseImgUrl}/${post?.data[0].post_image}`} alt=""  className="rounded-md"/>

          <article>
          <ul className=" flex justify-between items-center list-none">

         <li>{post?.data[0].post_category}</li>
         <li>{post?.data[0].post_publish_date}</li>
        </ul>

        <Markdown>
        {post?.data[0].post_article}
        </Markdown>

      
     </article>
            
          </div>
          <aside className="">

            <div className="sticky top-4">
            <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl mb-5">
                <img
                    src="https://via.placeholder.com/40x40"
                    alt=""
                    className="rounded-full size-10 object-cover mb-0 size-[100px] mb-5 mx-auto"
                  />
                  <h3 className="text-center">Jhonny Hale</h3>
                  <p  className="text-center mb-10 !leading-snug">Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Error, earum a deleniti in iusto fugiat repellat? Facilis voluptas porro laudantium.</p>

                     
        <ul className='flex justify-center gap-4'>
            <li><Link className='text-2xl'><FaFacebook/></Link></li>
            <li><Link className='text-2xl'><FaTwitter/></Link></li>
            <li><Link className='text-2xl'><FaInstagram/></Link></li>
            <li><Link className='text-2xl'><FaYoutube/></Link></li>
        </ul>
            </div>

            <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl mb-5">
                <h2>Latest Post</h2>

                <div className="grid grid-cols-[90px_1fr] gap-3 mb-4">
                <img
                src="https://i.pinimg.com/736x/9b/d9/cb/9bd9cb0aec2ea2fd2bfb766351952bdf.jpg"
                 alt=""
                 className="h-full w-full object-cover"
                />
                <div>
                    <h4 className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
                    <small>May 5, 2002</small>
                </div>
                </div>

                <div className="grid grid-cols-[90px_1fr] gap-3 mb-4">
                <img
                src="https://i.pinimg.com/736x/9b/d9/cb/9bd9cb0aec2ea2fd2bfb766351952bdf.jpg"
                 alt=""
                 className="h-full w-full object-cover"
                />
                <div>
                    <h4 className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
                    <small>May 5, 2002</small>
                </div>
                </div>

                <div className="grid grid-cols-[90px_1fr] gap-3 mb-4">
                <img
                src="https://i.pinimg.com/736x/9b/d9/cb/9bd9cb0aec2ea2fd2bfb766351952bdf.jpg"
                 alt=""
                 className="h-full w-full object-cover"
                />
                <div>
                    <h4 className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
                    <small>May 5, 2002</small>
                </div>
                </div>

                <div className="grid grid-cols-[90px_1fr] gap-3 mb-4">
                <img
                src="https://i.pinimg.com/736x/9b/d9/cb/9bd9cb0aec2ea2fd2bfb766351952bdf.jpg"
                 alt=""
                 className="h-full w-full object-cover"
                />
                <div>
                    <h4 className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
                    <small>May 5, 2002</small>
                </div>
                </div>
           </div>
            </div>
          
          </aside>
        </div>
      </div>
      <UIFooter />
    </div>
  );
};

export default Single;
