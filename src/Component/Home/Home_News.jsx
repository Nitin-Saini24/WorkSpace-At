import Image_8 from "../../assets/img/Image 8.png";
import Image_14 from "../../assets/img/Image 14.png";
import Mask_Group_3 from "../../assets/img/Mask Group 3.png";
import Image_9 from "../../assets/img/Image 9.png";
import Image_10 from "../../assets/img/Image 10.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from "../Loader";



function Home_News() {
  const [breaking, setBreaking] = useState(null);
  const [isLoading1, setIsLoading1] = useState(true);
  const [error1, setError1] = useState("");
  const [isLoading2, setIsLoading2] = useState(true);
  const [error2, setError2] = useState("");
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading1(true);
        setError1("");
        const token = 'YXBwbndlYnRlY2hub2xvZ2llc0BnbWFpbC5jb206OWVmOTJmMDM5Y2FjMDVhYWU2ZDYzMTBhYWNiYzljMGU=';
        const response = await fetch('http://192.168.29.24/asiantrader/wp-json/api/v1/breaking-news', {
          headers: {
            Authorization: `Basic ${token}`,
            'Content-Type': 'application/json'
          },
        });

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const jsonData = await response.json();
        if (jsonData.code === 401) throw new Error("Data Not Found");
        setBreaking(jsonData);
        setError1("");
      } catch (error) {
        setError1(error);
      }
      finally {
        setIsLoading1(false);
      }
    };

    const fetchTrandingNews = async () => {
      try {
        setIsLoading2(true);
        setError2("");
        const token = 'YXBwbndlYnRlY2hub2xvZ2llc0BnbWFpbC5jb206OWVmOTJmMDM5Y2FjMDVhYWU2ZDYzMTBhYWNiYzljMGU=';
        const response = await fetch('http://192.168.29.24/asiantrader/wp-json/api/v1/flash-news', {
          headers: {
            Authorization: `Basic ${token}`,
            'Content-Type': 'application/json'
          },
        });

        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const newsData = await response.json();
        if (newsData.code === 401) throw new Error("Data Not Found");
        setNews(newsData);
        setError2("");
      } catch (error) {
        setError2(error);
      }
      finally {
        setIsLoading2(false);
      }
    };


    fetchData();
    fetchTrandingNews();
  }, []);


  return (
    <section className="lg:pb-24 md:pb-8 pb-0 news-blog bg-blur">
      <div className="container sm:px-7 px-4 mx-auto ">
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-9 md:col-span-8 col-span-12">
            <div className="grid grid-cols-12 sm:gap-5 gap-3">
              <div className="col-span-12 bg-[#E8E8E8] rounded-md px-5 py-3">
                <img src={Image_8} alt="ads" className="w-auto mx-auto" />
              </div>

              <div className="col-span-12">
                <div className="relative rounded-[10px] breaking-img">
                  {(!isLoading1 && error1) && <div className="text-red-500 ">{error1.message}</div>}
                  {isLoading1 || error1 || !breaking || !breaking.data ? (
                    <Skeleton height={200} />
                    
                  ) : (
                      <Link to={`/${breaking.data.post_slug}`} rel="preload" fetchpriority="high">
                      <img
                        
                        src={breaking.data.post_image}
                        className="rounded-[10px] max-h-72 sm:max-h-64"
                        alt="breaking news"
                        style={{
                          height: "18rem",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div className="absolute sm:bottom-12 sm:left-11 bottom-6 left-5">
                        <span className="bg-red text-white text-[10px] px-3 py-1 text-center font-openSans font-semibold">
                          {breaking.data.cat ? breaking.data.cat.cate_title.toUpperCase() : ''}
                        </span>
                        <h1 className="text-[20px] leading-6 mt-[13px] pr-2 text-white max-w-[350px] font-black wow fadeInDown">
                          {breaking.data.post_title}
                        </h1>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
              <div className="news-blog-inner-first hidden md:block col-span-12 md:col-span-5">
                <img src={Image_14} alt="ads" className="lg:w-full" />
                <div className="mt-8 mb-5 relative flex items-center">
                  <h2 className="text-[14px] text-red font-bold pl-8 inner-box">
                    {news?.data?.trending_news?.trending_news_title}
                  </h2>
                  <div className="border-y-2 h-[13px] w-[225px] ml-[10px]"></div>
                </div>
              {!isLoading2 ?(
                news?.data?.trending_news?.posts.map((item, i) => (
                  <div key={i} className={`${i > 2 ? "grid grid-cols-12 gap-5 " : "grid grid-cols-12 gap-5 border-b border-greyb pb-5 mb-5"}`}>
                    <div className="col-span-4">
                      <Link to={`/${item.post_slug}`}>
                        <img
                          src={item?.post_image}
                          alt="flash news"
                          className="w-full lg:h-full  max-h-16  object-cover  rounded-[10px]"
                          style={{ height: "4rem", width: "100%" }}
                        /></Link>
                    </div>
                    <div className="col-span-8">
                      <Link to={`cate/${item?.cat?.cate_slug}/${item?.cat?.cate_id}`} >
                        <span className="text-[10px] text-red block font-openSans font-semibold">
                          {item?.cat?.cate_title.toUpperCase()}
                        </span></Link>
                      <Link to={`/${item.post_slug}`}>
                        <p className="font-bold text-xs lg:pr-0 pr-5 wow fadeInDown">
                          {item?.post_title}
                        </p>
                      </Link>

                    </div>
                  </div>
                ))): <Skeleton height={100} count={4}></Skeleton>}
              </div>

              
              <div className="news-blog-inner-second col-span-12 md:col-span-7 bg-[#E4E3E1] p-4 rounded-md">
                <div className="grid lg:grid-cols-2 news-blog-inner-1">
                  <div className="block lg:pr-5 lg:pl-0 lg:pb-0 pb-5 lg:border-r border-b border-greyb">
                    {!isLoading2 ? (
                    <div className="">
                      <Link to={`/${news?.data?.flash_news?.posts[0]?.post_slug}`}>
                        <img
                          src={news?.data?.flash_news?.posts[0]?.post_image}
                            alt="flash news"
                            className="w-full md:max-h-36 object-cover sm:max-h-72 rounded-[10px]"
                          // style={{ height: "9rem", width: "100%" }} 
                          />
                      </Link>
                      <Link to={`cate/${news?.data?.flash_news?.posts[0]?.cat?.cate_slug}/${news?.data?.flash_news?.posts[0]?.cat?.cate_id}`}>
                        <span className="text-red text-[10px] font-openSans font-semibold my-[10px]">
                          {news?.data?.flash_news?.posts[0]?.cat?.cate_title.toUpperCase()}
                        </span>
                      </Link>
                      <Link to={`/${news?.data?.flash_news?.posts[0]?.post_slug}`}>
                        <p className="font-bold text-sm wow fadeInDown">
                          {news?.data?.flash_news?.posts[0]?.post_title}
                        </p></Link>
                    </div>):<Skeleton height={150}></Skeleton>}
                  </div>

                  <div className="block lg:pl-5 border-b border-greyb" >
                    {!isLoading2 ? (
                    <div className="">
                      <Link to={`/${news?.data?.flash_news?.posts[1]?.post_slug}`}>
                        <img
                          src={news?.data?.flash_news?.posts[1]?.post_image}
                          alt="flash news"
                            className="lg:pt-0 pt-5 w-full md:max-h-36 sm:max-h-72 rounded-[10px]"
                          // style={{ height: "9rem", width: "100%" }}
                        /></Link>
                        <Link to={`cate/${news?.data?.flash_news?.posts[1]?.cat?.cate_slug}/${news?.data?.flash_news?.posts[1]?.cat?.cate_id}`}><span className="text-red text-[10px] font-openSans font-semibold my-[10px]">
                        {news?.data?.flash_news?.posts[1]?.cat?.cate_title.toUpperCase()}
                      </span></Link>
                      <Link to={`/${news?.data?.flash_news?.posts[1]?.post_slug}`}> <p className="font-bold text-sm pb-5 wow fadeInDown">
                        {news?.data?.flash_news?.posts[1]?.post_title}
                      </p></Link>
                      </div>) : <Skeleton height={150}></Skeleton>}
                  </div>
                  <div className="block lg:pr-5 lg:pl-0 lg:border-r lg:border-b lg:border-greyb"
                  >
                    {!isLoading2 ? (
                    <div className="">
                      <Link to={`/${news?.data?.flash_news?.posts[2]?.post_slug}`}> <img
                        src={news?.data?.flash_news?.posts[2]?.post_image}
                          alt="flash news"
                          className="mt-4 w-full md:max-h-36 sm:max-h-72 rounded-[10px]"
                        // style={{ height: "9rem", width: "100%" }}
                      /></Link>
                      <Link to={`cate/${news?.data?.flash_news?.posts[2]?.cat?.cate_slug}/${news?.data?.flash_news?.posts[2]?.cat?.cate_id}`}><span className="text-red text-[10px] font-openSans font-semibold my-[10px]">
                        {news?.data?.flash_news?.posts[2]?.cat?.cate_title.toUpperCase()}
                      </span></Link>
                      <Link to={`/${news?.data?.flash_news?.posts[2]?.post_slug}`}><p className="font-bold text-sm pb-5 wow fadeInDown">
                        {news?.data?.flash_news?.posts[2]?.post_title}
                      </p></Link>
                      </div>) : <Skeleton height={150}></Skeleton>}
                  </div>
                  <div className=" hidden lg:block">
                    <div

                      className="block lg:pl-5 border-b border-greyb"
                    >
                      {!isLoading2 ? (
                      <div>
                        <Link to={`/${news?.data?.flash_news?.posts[3]?.post_slug}`}> <img
                          src={news?.data?.flash_news?.posts[3]?.post_image}
                            alt="flash news"
                            className="mt-4 w-full md:max-h-36 sm:max-h-72 rounded-[10px]"
                          // style={{ height: "9rem", width: "100%" }}
                        /></Link>

                        <Link to={`cate/${news?.data?.flash_news?.posts[3]?.cat?.cate_slug}/${news?.data?.flash_news?.posts[3]?.cat?.cate_id}`}> <span className="text-red text-[10px] font-openSans font-semibold my-[10px]">
                          {news?.data?.flash_news?.posts[3]?.cat?.cate_title.toUpperCase()}
                        </span></Link>
                        <Link to={`/${news?.data?.flash_news?.posts[3]?.post_slug}`}><p className="font-bold text-sm pb-5 wow fadeInDown">
                          {news?.data?.flash_news?.posts[3]?.post_title}
                        </p></Link>

                        </div>) : <Skeleton height={150}></Skeleton>}
                    </div>
                  </div>
                  <div className=" hidden lg:block">
                    <div className="block lg:pr-5 lg:border-r border-greyb">
                      {!isLoading2 ? (
                      <div>
                        <Link to={`/${news?.data?.flash_news?.posts[4]?.post_slug}`}> <img
                          src={news?.data?.flash_news?.posts[4]?.post_image}
                            alt="flash news"
                            className="pt-4 w-full md:max-h-36 sm:max-h-72 rounded-[10px]"
                          // style={{ height: "9rem", width: "100%" }}
                        /></Link>

                        <Link to={`cate/${news?.data?.flash_news?.posts[4]?.cat?.cate_slug}/${news?.data?.flash_news?.posts[0]?.cat?.cate_id}`}><span className="text-red text-[10px] font-openSans font-semibold my-[10px]">
                          {news?.data?.flash_news?.posts[4]?.cat?.cate_title.toUpperCase()}
                        </span></Link>
                        <Link to={`/${news?.data?.flash_news?.posts[4]?.post_slug}`}><p className="font-bold text-sm md:pb-0 pb-5 wow fadeInDown">
                          {news?.data?.flash_news?.posts[4]?.post_title}
                        </p></Link>

                        </div>) : <Skeleton height={150}></Skeleton>}
                    </div>
                  </div>

                  <div className=" hidden lg:block">
                    <div className="block lg:pl-5">
                      {!isLoading2 ? (
                      <div>
                        <Link to={`/${news?.data?.flash_news?.posts[5]?.post_slug}`}> <img
                          src={news?.data?.flash_news?.posts[5]?.post_image}
                            alt="flash news"
                            className="pt-4 w-full md:max-h-36 sm:max-h-72 rounded-[10px]"
                          // style={{ height: "9rem", width: "100%" }}
                        /></Link>
                        <Link to={`cate/${news?.data?.flash_news?.posts[5]?.cat?.cate_slug}/${news?.data?.flash_news?.posts[5]?.cat?.cate_id}`}> <span className="text-red text-[10px] font-openSans font-semibold my-[10px]">
                          {news?.data?.flash_news?.posts[5]?.cat?.cate_title.toUpperCase()}
                        </span></Link>
                        <Link to={`/${news?.data?.flash_news?.posts[5]?.post_slug}`}> <p className="font-bold text-sm md:pb-0 pb-5 wow fadeInDown">
                          {news?.data?.flash_news?.posts[5]?.post_title}
                        </p></Link>
                        </div>) : <Skeleton height={150}></Skeleton>}
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-12">
            <div className="md:h-[600px] hidden md:block">
              <img src={Mask_Group_3} alt="ads" className="w-full object-cover h-full" style={{ height: "600px", width: "18rem" }} />
            </div>
            <div className="md:h-[250px]  hidden md:block">
              <img
                src={Image_9}
                alt="ads"
                className="md:mt-[40px] object-cover mt-[58px] w-full h-full"
              />
            </div>

            <div className="bg-[#E4E3E1] p-3 mb-3 rounded sm:hidden block">
              <img
                src={Image_9}
                alt="ads"
                className="my-[20px] object-cover  w-full h-full"
              />
            </div>
            <div className="md:h-[250px]  hidden md:block">
              <img src={Image_10} alt="ads" className="mt-5 w-full object-cover h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_News;



// const [data, setData] = useState({
//   breaking: [],
//   news: [],
// });
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState("");

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       setIsLoading(true);
//       setError("");
//       const token = 'YXBwbndlYnRlY2hub2xvZ2llc0BnbWFpbC5jb206OWVmOTJmMDM5Y2FjMDVhYWU2ZDYzMTBhYWNiYzljMGU=';
//       const [breakingResponse, newsResponse] = await Promise.all([
//         fetch('http://192.168.29.24/asiantrader/wp-json/api/v1/breaking-news', {
//           headers: {
//             Authorization: `Basic ${token}`,
//             'Content-Type': 'application/json'
//           },
//         }),
//         fetch('http://192.168.29.24/asiantrader/wp-json/api/v1/flash-news', {
//           headers: {
//             Authorization: `Basic ${token}`,
//             'Content-Type': 'application/json'
//           },
//         })
//       ]);

//       if (!breakingResponse.ok || !newsResponse.ok) {
//         throw new Error('Something went wrong');
//       }

//       const [breakingData, newsData] = await Promise.all([breakingResponse.json(), newsResponse.json()]);

//       if (breakingData.code === 401 || newsData.code === 401) {
//         throw new Error("Data Not Found");
//       }

//       setData({
//         breaking: breakingData,
//         news: newsData,
//       });
//     } catch (error) {
//       setError(error.message);
//     }
//     finally {
//       setIsLoading(false);
//     }
//   };

//   fetchData();
// }, []);

// import React, { useState, useEffect } from 'react';
// import Skeleton from 'react-loading-skeleton';
// import { Link } from 'react-router-dom';


//////////////////////////////////////////// optimised code

// function useFetchData(url, token) {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         setError(null);

//         const response = await fetch(url, {
//           headers: {
//             Authorization: `Basic ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Something went wrong');
//         }

//         const jsonData = await response.json();
//         if (jsonData.code === 401) throw new Error('Data Not Found');
//         setData(jsonData);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [url, token]);

//   return { data, isLoading, error };
// }

// function Home_News() {
  // const token = 'YXBwbndlYnRlY2hub2xvZ2llc0BnbWFpbC5jb206OWVmOTJmMDM5Y2FjMDVhYWU2ZDYzMTBhYWNiYzljMGU=';
  // const { data: breaking, isLoading: isLoading1, error: error1 } = useFetchData('http://192.168.29.24/asiantrader/wp-json/api/v1/breaking-news', token);
  // const { data: news, isLoading: isLoading2, error: error2 } = useFetchData('http://192.168.29.24/asiantrader/wp-json/api/v1/flash-news', token);

  // const renderError = (error) => error && <div className="text-red-500">{error.message}</div>;

  // const renderSkeleton = (count = 1, height = 200) => <Skeleton count={count} height={height} />;

//   const renderPost = (post, index) => (
//     <div key={index} className={`${index > 2 ? "grid grid-cols-12 gap-5" : "grid grid-cols-12 gap-5 border-b border-greyb pb-5 mb-5"}`}>
//       <div className="col-span-4">
//         <Link to={`/${post.post_slug}`}>
//           <img
//             src={post.post_image}
//             alt="flash news"
//             className="w-full lg:h-full max-h-16 object-cover rounded-[10px]"
//             style={{ height: '4rem', width: '100%' }}
//           />
//         </Link>
//       </div>
//       <div className="col-span-8">
//         <Link to={`cate/${post.cat.cate_slug}/${post.cat.cate_id}`}>
//           <span className="text-[10px] text-red block font-openSans font-semibold">
//             {post.cat.cate_title.toUpperCase()}
//           </span>
//         </Link>
//         <Link to={`/${post.post_slug}`}>
//           <p className="font-bold text-xs lg:pr-0 pr-5 wow fadeInDown">
//             {post.post_title}
//           </p>
//         </Link>
//       </div>
//     </div>
//   );

//   const renderTrendingNews = () => {
//     if (isLoading2) return renderSkeleton(4, 100);
//     if (error2) return renderError(error2);
//     return news?.data?.trending_news?.posts.map(renderPost);
//   };

//   const renderFlashNews = (index) => {
//     if (isLoading2) return renderSkeleton();
//     const post = news?.data?.flash_news?.posts[index];
//     return (
//       post && (
//         <div>
//           <Link to={`/${post.post_slug}`}>
//             <img
//               src={post.post_image}
//               alt="flash news"
//               className="w-full md:max-h-36 sm:max-h-72 rounded-[10px]"
//             />
//           </Link>
//           <Link to={`cate/${post.cat.cate_slug}/${post.cat.cate_id}`}>
//             <span className="text-red text-[10px] font-openSans font-semibold my-[10px]">
//               {post.cat.cate_title.toUpperCase()}
//             </span>
//           </Link>
//           <Link to={`/${post.post_slug}`}>
//             <p className="font-bold text-sm wow fadeInDown">
//               {post.post_title}
//             </p>
//           </Link>
//         </div>
//       )
//     );
//   };

//   return (
//     <section className="lg:pb-24 md:pb-8 pb-0 news-blog bg-blur">
//       <div className="container px-7 mx-auto">
//         <div className="grid grid-cols-12 gap-5">
//           <div className="md:col-span-9 col-span-12">
//             <div className="grid grid-cols-12 gap-5">
//               <div className="col-span-12 bg-[#E8E8E8] rounded-md px-5 py-3">
//                 <img src={Image_8} alt="ads" className="w-auto mx-auto" />
//               </div>
//               <div className="col-span-12">
//                 <div className="relative rounded-[10px] breaking-img">
//                   {renderError(error1)}
//                   {isLoading1 || error1 || !breaking || !breaking.data ? (
//                     renderSkeleton()
//                   ) : (
//                     <Link to={`/${breaking.data.post_slug}`} rel="preload" fetchpriority="high">
//                       <img
//                         src={breaking.data.post_image}
//                         className="rounded-[10px] max-h-72 sm:max-h-64"
//                         alt="breaking news"
//                         style={{
//                           height: '18rem',
//                           width: '100%',
//                           objectFit: 'cover',
//                         }}
//                       />
//                       <div className="absolute sm:bottom-12 sm:left-11 bottom-6 left-5">
//                         <span className="bg-red text-white text-[10px] px-3 py-1 text-center font-openSans font-semibold">
//                           {breaking.data.cat ? breaking.data.cat.cate_title.toUpperCase() : ''}
//                         </span>
//                         <h1 className="text-[20px] leading-6 mt-[13px] text-white max-w-[350px] font-black wow fadeInDown">
//                           {breaking.data.post_title}
//                         </h1>
//                       </div>
//                     </Link>
//                   )}
//                 </div>
//               </div>
//               <div className="news-blog-inner-first hidden md:block col-span-12 md:col-span-4">
//                 <img src={Image_14} alt="ads" className="lg:w-full" />
//                 <div className="mt-8 mb-5 relative flex items-center">
//                   <h2 className="text-[14px] text-red font-bold pl-8 inner-box">
//                     {news?.data?.trending_news?.trending_news_title}
//                   </h2>
//                   <div className="border-y-2 h-[13px] w-[225px] ml-[10px]"></div>
//                 </div>
//                 {renderTrendingNews()}
//               </div>
//               <div className="news-blog-inner-second col-span-12 md:col-span-8 bg-[#E4E3E1] p-4 rounded-md">
//                 <div className="grid lg:grid-cols-2 news-blog-inner-1">
//                   <div className="block lg:pr-5 lg:pl-0 lg:pb-0 pb-5 lg:border-r border-b border-greyb">
//                     {renderFlashNews(0)}
//                   </div>
//                   <div className="block lg:pl-5 border-b border-greyb">
//                     {renderFlashNews(1)}
//                   </div>
//                   <div className="block lg:pr-5 lg:pl-0 lg:border-r lg:border-b lg:border-greyb">
//                     {renderFlashNews(2)}
//                   </div>
//                   <div className="hidden lg:block">
//                     <div className="block lg:pl-5 border-b border-greyb">
//                       {renderFlashNews(3)}
//                     </div>
//                   </div>
//                   <div className="hidden lg:block">
//                     <div className="block lg:pr-5 lg:border-r border-greyb">
//                       {renderFlashNews(4)}
//                     </div>
//                   </div>
//                   <div className="hidden lg:block">
//                     <div className="block lg:pl-5">
//                       {renderFlashNews(5)}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="md:col-span-3 col-span-12">
//             <div className="md:h-[600px] hidden md:flex flex-col gap-y-5">
//               <img src={Image_9} alt="ads" className="w-full" />
//               <img src={Image_14} alt="ads" className="w-full" />
//             </div>
//             <div className="h-auto md:hidden flex flex-col gap-y-5">
//               <img src={Image_9} alt="ads" className="w-full" />
//               <img src={Image_14} alt="ads" className="w-full" />
//             </div>
//             <div className="news-blog-inner-first md:hidden block col-span-12 md:col-span-4">
//               <div className="mt-8 mb-5 relative flex items-center">
//                 <h2 className="text-[14px] text-red font-bold pl-8 inner-box">
//                   {news?.data?.trending_news?.trending_news_title}
//                 </h2>
//                 <div className="border-y-2 h-[13px] w-[225px] ml-[10px]"></div>
//               </div>
//               {renderTrendingNews()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home_News;
