import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Home_IndustryNews = () => {
  const [industryNews, setIndustryNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append('cate_id', 9);
      urlEncodedData.append('number_of_posts', 6)
      setLoading(true);
      setError(null);

      try {
        const token = 'YXBwbndlYnRlY2hub2xvZ2llc0BnbWFpbC5jb206OWVmOTJmMDM5Y2FjMDVhYWU2ZDYzMTBhYWNiYzljMGU=';
        const response = await fetch('http://192.168.29.24/asiantrader/wp-json/api/v1/category-news/', {
          method: 'POST',
          headers: {
            Authorization: `Basic ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: urlEncodedData.toString(),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setIndustryNews(result);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  return (
    <section className="lg:pb-24 pb-8 product">
      <div className="container mx-auto sm:px-7 px-4 relative">
        <div className="inner-box2 flex items-center md:pb-[50px] sm:pb-[25px] pb-[15px] sm:pl-[36px] pl-[50px] text-[20px] text-red font-bold">
          <h2 className="uppercase text-nowrap text-[14px] sm:text-[20px] ">{industryNews?.data?.category_name}</h2>
          <div className="border-y-2 h-[13px] lg:w-[75%] w-[65%] ml-auto"></div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-9  md:col-span-8 col-span-12">
            <div className="bg-[#DAD9D7] sm:p-5 p-3 rounded-md lg:flex gap-5">
              <div className="flex flex-col sm:gap-5 gap-3">
                {loading === true ? (<> <Skeleton height={200} width={500} count={2} ></Skeleton></>) : error ? (<h3 className="container mx-auto px-7" >{error.message}</h3>) : (
                industryNews?.data?.posts.slice(0, 3).map((post, index) => (
                  index === 0 ? (
                    <div key={index} className="block">
                      <div className="rounded-[10px] bg-white h-full">
                        <div className="flex flex-col h-full">
                          <div>
                            <Link to={`/${post.post_slug}`}>
                              <img
                                src={post.post_image}
                                alt="industry news"
                                className=" md:max-h-52 object-cover rounded-[10px]"
                                style={{ height: "13rem", width: "100%" }}
                              /></Link>
                          </div>
                          <div className="sm:p-5 p-3">
                            <Link to={`cate/${post.cat?.cate_slug}/${post.cat.cate_id}`}>
                              <span className="text-[8px] text-[#9E9E9E] font-openSans font-semibold">
                                {post.cat?.cate_title.toUpperCase()}
                              </span></Link>
                            <Link to={`/${post.post_slug}`}>  <p className="text-[14px] mt-[23px] mb-[18px] font-bold wow fadeInDown min-h-[50px]">
                              {post.post_title}
                            </p></Link>

                          </div>
                          <div className="flex justify-between text-[10px] font-openSans font-semibold mt-auto pb-5 sm:px-5 px-3">
                            <p className="">{post.post_author}</p>
                            <p className="text-[#9E9E9E]">{post.post_date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div key={index}  >
                      <div className="rounded-[10px] bg-white flex">
                        <div className="shrink-0">
                          <Link to={`/${post.post_slug}`}>
                            <img
                              src={post.post_image}
                                alt="industry news"
                                className=" md:max-h-30 max-w-[118px] object-cover md:max-w-[168px] h-full rounded-[10px] "
                              style={{ width: "100%" }}
                            />
                          </Link>
                        </div>
                        <div className="pl-[23px] pr-2 pt-[15px]">
                          <Link to={`cate/${post.cat.cate_slug}/${post.cat.cate_id}`}>
                            <span className="text-[8px] text-[#9E9E9E] font-openSans font-semibold">
                              {post.cat?.cate_title.toUpperCase()}
                            </span></Link>
                          <Link to={`/${post.post_slug}`}><p className="font-black xl:text-sm text-xs mt-2 mb-[5px] wow fadeInDown">
                            {post.post_title}
                          </p></Link>

                        </div>
                      </div>
                    </div>)
                )))}
              </div>

              <div className="flex flex-col sm:gap-5 gap-3 mt-5 lg:mt-0">
                {industryNews?.data?.posts.slice(3, 6).map((post, index) => (index === 0 ? (<div key={index} className="block">
                  <div className="rounded-[10px] bg-white h-full">
                    <div className="flex flex-col h-full">
                      <div>
                        <Link to={`/${post.post_slug}`}>
                          <img
                            src={post.post_image}
                            alt="industry news"
                            className=" max-h-52 object-cover rounded-[10px]"
                            style={{ height: "13rem", width: "100%" }}
                          /></Link>
                      </div>
                      <div className="sm:p-5 p-3">
                        <Link to={`cate/${post.cat.cate_slug}/${post.cat.cate_id}`}>
                          <span className="text-[8px] text-[#9E9E9E] font-openSans font-semibold">
                            {post?.cat?.cate_title.toUpperCase()}
                          </span></Link>
                        <Link to={`/${post.post_slug}`}>
                          <p className="text-[14px] mt-[23px] mb-[18px] font-bold wow fadeInDown min-h-[50px]">
                            {post?.post_title}
                          </p></Link>
                      </div>
                      <div className="flex justify-between text-[10px] font-openSans font-semibold mt-auto pb-5 sm:px-5 px-3">
                        <p className="">{post.post_author}</p>
                        <p className="text-[#9E9E9E]">{post?.post_date}</p>
                      </div>
                    </div>
                  </div>
                </div>) : (
                  <div key={index} className="rounded-[10px] bg-white flex">
                    <div className="shrink-0">
                      <Link to={`/${post.post_slug}`}>
                          <img src={post.post_image} alt="industry news" className="md:max-h-30 object-cover max-w-[118px] md:max-w-[168px] h-full rounded-[10px]" 
                        style={{ width: "100%" }}
                         />
                      </Link> </div>
                    <div className="pl-[23px] pr-2 pt-[15px]">
                      <Link to={`cate/${post.cat?.cate_slug}/${post.cat.cate_id}`}>
                        <span className="text-[8px] text-[#9E9E9E] font-openSans font-semibold">
                          {post.cat?.cate_title.toUpperCase()}
                        </span></Link>
                      <Link to={`/${post.post_slug}`}>
                        <p className="font-black xl:text-sm text-xs mt-2 mb-[5px] wow fadeInDown">
                          {post?.post_title}
                        </p></Link>
                    </div>
                  </div>
                )))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:block hidden md:col-span-4 col-span-4 ">
            <div>
              <div className="bg-[#5A5A5A] text-white shadow-md px-5 py-6 max-w-md">
                <h1 className="text-[20px] font-black mb-4">NEWSLETTER</h1>
                <div className="h-[10px] border-y border-[#acacac] mt-5 mb-14"></div>
                <form action="#">
                  <div className="mb-5">
                    <input
                      type="text"
                      id="name"
                      className="shadow-sm w-full px-3 py-2 border border-white bg-[#5A5A5A] text-white focus:outline-none text-[10px] font-openSans"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="text"
                      id="email"
                      className="shadow-sm w-full px-3 py-2 bg-[#5A5A5A] text-white border border-gray-300 focus:outline-none text-[10px] font-openSans"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="Retailer"
                      className="shadow-sm w-full px-3 py-2 bg-[#5A5A5A] text-white border border-gray-300 focus:outline-none text-[10px] font-openSans"
                      placeholder="Retailer"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between mt-[62px] mb-5">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="h-2 w-2 rounded border-gray-300"
                      />
                      <label
                        htmlFor="remember"
                        className="ml-2 block text-[8px] text-white dark:text-gray-300 font-openSans"
                      >
                        Subscribing I accept the privacy rules of this site
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-black text-white bg-red hover:bg-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:red-500"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_IndustryNews;


//////////////storing data in local
// useEffect(() => {
//   const fetchData = async () => {
//     const urlEncodedData = new URLSearchParams();
//     urlEncodedData.append('cate_id', 9);
//     urlEncodedData.append('number_of_posts', 6);
//     setLoading(true);
//     setError(null);

//     try {
//       const token = 'YXBwbndlYnRlY2hub2xvZ2llc0BnbWFpbC5jb206OWVmOTJmMDM5Y2FjMDVhYWU2ZDYzMTBhYWNiYzljMGU=';
//       const response = await fetch('http://192.168.29.24/asiantrader/wp-json/api/v1/category-news/', {
//         method: 'POST',
//         headers: {
//           Authorization: `Basic ${token}`,
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: urlEncodedData.toString(),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       setIndustryNews(result);
//       localStorage.setItem('industryNews', JSON.stringify(result));
//     } catch (error) {
//       setError(error.toString());
//     } finally {
//       setLoading(false);
//     }
//   };

//   const cachedNews = localStorage.getItem('industryNews');
//   if (cachedNews) {
//     setIndustryNews(JSON.parse(cachedNews));
//     setLoading(false);
//   } else {
//     fetchData();
//   }
// }, []);

