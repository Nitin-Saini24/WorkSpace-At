import  { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Home_MeAndMy = () => {
  const [meAndMyNews, setMeAndMyNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append('cate_id', 919);
      urlEncodedData.append('number_of_posts', 5)
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
        setMeAndMyNews(result);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  return (
    <section className="lg:pb-24 pb-8" id="memy">
      <div className="container mx-auto sm:px-7 px-4 relative">
        <div className="inner-box2 flex items-center md:pb-[50px] sm:pb-[25px] pb-[15px] sm:pl-[36px] pl-[50px] text-[20px] text-red font-bold">
          <h2 className="uppercase text-nowrap text-[14px] sm:text-[20px]">{meAndMyNews?.data?.category_name}</h2>
          <div className="border-y-2 h-[13px] lg:w-[75%] w-[65%] ml-auto"></div>
        </div>
        
        <div className="grid lg:grid-rows-3 lg:grid-flow-col lg:grid-cols-4 xl:gap-10 sm:gap-5 gap-2 bg-[#231E1E] xl:p-10 sm:p-5 p-2 rounded-lg " >
          <div className="relative lg:col-span-2 lg:row-span-2  md:col-span-12 col-span-12 black-overlay overflow-hidden rounded-[10px] ">
            {loading && <Skeleton count={1} height={200} />}
            {/* <div> */}
            <img
              src={meAndMyNews?.data?.posts[0]?.post_image}
              alt=""
                className="md:w-full  md:h-full sm:h-[375px] h-[325px] max-w-[100%]  object-cover rounded-[10px]"
            />
            {/* </div> */}
            <div className="sm:w-full sm:max-w-full max-w-[25rem] sm:p-5 p-2 absolute left-0 bottom-0">
              <Link to={`cate/${meAndMyNews?.data?.posts[0]?.cat?.cate_slug}/${meAndMyNews?.data?.posts[0]?.cat?.cate_id}`} >
                <span className="text-white bg-red px-7 py-1 text-[8px] font-openSans font-semibold">
                  {meAndMyNews?.data?.posts[0]?.cat?.cate_title.toUpperCase()}
                </span></Link>
              <Link to={`/${meAndMyNews?.data?.posts[0]?.post_slug}`}>
                <h2
                  className="md:text-[20px] text-[15px]  text-white mt-[10px] sm:mt-[23px] sm:mb-[14px] wow fadeInDown"
                  style={{ visibility: "visible", animationName: "fadeInDown" }}
                >
                  {meAndMyNews?.data?.posts[0]?.post_title}
                </h2></Link>

              <div className="flex justify-between text-[10px] text-gray-500 font-openSans font-semibold">
                <p className="">{meAndMyNews?.data?.posts[0]?.post_author}</p>
                <p className="">{meAndMyNews?.data?.posts[0]?.post_date}</p>
              </div>
            </div>

          </div>
         
          {meAndMyNews?.data?.posts?.slice(1).map((item, index) => (
            <div key={index} className="flex col-span-12 lg:col-span-2 md:col-span-6  lg:flex-row md:flex-col flex-row sm:gap-5 gap-2 bg-[#000000] rounded-md sm:p-5 ">
              <div className="shrink-0 md:w-auto  w-40 md:min-h-44 ">
                <Link to={`/${item.post_slug}`} >
                  <img
                    src={item?.post_image}
                    alt=""
                    className="w-full h-full lg:max-h-44 lg:max-w-52 md:max-h-44 object-cover rounded-[10px]"
                    // style={{ height: "8rem", width: "200px" }}
                  />
                </Link>
              </div>
              <div className="lg:px-0 sm:px-5 px-1 p-2 lg:pb-0 sm:pb-3 pb-1 flex flex-col h-full flex-1">
                <div>
                  <Link to={`cate/${item?.cat?.cate_slug}/${item?.cat?.cate_id}`}>
                    <span className="text-white bg-red sm:px-7 px-4 py-1 text-[8px] font-openSans font-semibold">
                      {item?.cat?.cate_title.toUpperCase()}
                    </span></Link>
                  <Link to={`/${item.post_slug}`} >
                    <p
                      className="xl:text-[20px] lg:text-[20px] md:text-[15px] text-[12px]  sm:pt-[18px] pt-[8px] lg:pb-0 sm:pb-[36px] pb-[10px] text-white wow fadeInDown"
                      style={{ visibility: "visible", animationName: "fadeInDown" }}
                    >
                      {item?.post_title}
                    </p></Link>
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 font-openSans font-semibold mt-auto">
                  <p className="">{item.post_author}</p>
                  <p className="">{item.post_date}</p>
                </div>
              </div>
            </div>

          ))}
        </div>
        {/* <div className="grid lg:grid-rows-3 lg:grid-flow-col lg:grid-cols-4 xl:gap-10 gap-5 bg-[#231E1E] xl:p-10 p-5 rounded-lg">
          {news.map((item, index) => (
            <div
              key={item.id}
              className={`relative lg:col-span-2 ${index === 0 ? "lg:row-span-2 col-span-4 black-overlay" : "col-span-2"
                } overflow-hidden rounded-[10px] ${index !== 0 ? "flex lg:flex-row flex-col gap-5 bg-[#000000] p-5" : ""}`}
            >
              <img
                src={item.imgSrc}
                alt=""
                className="w-full h-full object-cover rounded-[10px]"
              />
              <div className="w-full p-5 absolute left-0 bottom-0">
                <span className="text-white bg-red px-7 py-1 text-[8px] font-openSans font-semibold">
                  {item.category}
                </span>
                <h2
                  className={`text-[20px] text-white mt-[23px] mb-[14px] wow fadeInDown ${index !== 0 ? "lg:text-4 pt-[18px] lg:pb-0 pb-[36px]" : ""
                    }`}
                  style={{ visibility: "visible", animationName: "fadeInDown" }}
                >
                  {item.title}
                </h2>
                <div className="flex justify-between text-[10px] text-gray-500 font-openSans font-semibold mt-auto">
                  <p className="">{item.author}</p>
                  <p className="">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}


        {/* <div className="grid lg:grid-rows-3 lg:grid-flow-col lg:grid-cols-4 xl:gap-10 gap-5 bg-[#231E1E] xl:p-10 p-5 rounded-lg">
          <div className="relative lg:col-span-2 lg:row-span-2 col-span-4  black-overlay overflow-hidden rounded-[10px]">
            <img
              src={my_img}
              alt=""
              className="w-full h-full object-cover rounded-[10px]"
            />
            <div className="w-full p-5 absolute left-0 bottom-0">
              <span className="text-white bg-red px-7 py-1 text-[8px] font-openSans font-semibold">
                BRAND
              </span>
              <h2
                className="text-[20px] text-white mt-[23px] mb-[14px] wow fadeInDown"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              >
                Lord Karan Bilimoria of Cobra Beer
              </h2>

              <div className="flex justify-between text-[10px] text-gray-500 font-openSans font-semibold">
                <p className="">Kiran paul</p>
                <p className="">February 27, 2024</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 flex lg:flex-row flex-col gap-5 bg-[#000000] rounded-md p-5">
            <div className="shrink-0 lg:w-auto w-full">
              <img
                src={my_img2}
                alt=""
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="lg:px-0 px-5 lg:pb-0 pb-3 flex flex-col h-full flex-1">
              <div className="">
                <span className="text-white bg-red px-7 py-1 text-[8px] font-openSans font-semibold">
                  BRAND
                </span>
                <p
                  className="xl:text-[20px] lg:text-4 pt-[18px] lg:pb-0 pb-[36px] text-white wow fadeInDown"
                  style={{ visibility: "visible", animationName: "fadeInDown" }}
                >
                  Me and My Brand: David Relph of BuzzBallZ
                </p>
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 font-openSans font-semibold mt-auto">
                <p className="">Kiran paul</p>
                <p className="">February 27, 2024</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex lg:flex-row flex-col gap-5 bg-[#000000] rounded-md p-5">
            <div className="shrink-0 lg:w-auto w-full">
              <img
                src={my_img3}
                alt=""
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="lg:px-0 px-5 lg:pb-0 pb-3 flex flex-col h-full flex-1">
              <div>
                <span className="text-white bg-red px-7 py-1 text-[8px] font-openSans font-semibold">
                  BRAND
                </span>
                <p
                  className="xl:text-[20px] lg:text-4 pt-[18px] lg:pb-0 pb-[36px] text-white wow fadeInDown"
                  style={{ visibility: "visible", animationName: "fadeInDown" }}
                >
                  Me and My Brand: David Relph of BuzzBallz
                </p>
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 font-openSans font-semibold mt-auto">
                <p className="">Kiran paul</p>
                <p className="">February 27, 2024</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 flex lg:flex-row flex-col gap-5 bg-[#000000] rounded-md p-5">
            <div className="shrink-0 lg:w-auto w-full">
              <img
                src={my_img4}
                alt=""
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="lg:px-0 px-5 lg:pb-0 pb-3 flex flex-col h-full flex-1">
              <div>
                <span className="text-white bg-red px-7 py-1 text-[8px] font-openSans font-semibold">
                  BRAND
                </span>
                <p
                  className="xl:text-[20px] lg:text-4 pt-[18px] lg:pb-0 pb-[36px] text-white wow fadeInDown"
                  style={{ visibility: "visible", animationName: "fadeInDown" }}
                >
                  Me and My Brand: David Relph of BuzzBallz
                </p>
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 font-openSans font-semibold mt-auto">
                <p className="">Kiran paul</p>
                <p className="">February 27, 2024</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 flex lg:flex-row flex-col gap-5 bg-[#000000] rounded-md p-5">
            <div className="shrink-0 lg:w-auto w-full">
              <img
                src={my_img5}
                alt=""
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="lg:px-0 px-5 lg:pb-0 pb-3 flex flex-col h-full flex-1">
              <div>
                <span className="text-white bg-red px-7 py-1 text-[8px] font-openSans font-semibold">
                  BRAND
                </span>
                <p
                  className="xl:text-[20px] lg:text-4 pt-[18px] lg:pb-0 pb-[36px] text-white wow fadeInDown"
                  style={{ visibility: "visible", animationName: "fadeInDown" }}
                >
                  Me and My Brand: David Relph of BuzzBallz
                </p>
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 font-openSans font-semibold mt-auto">
                <p className="">Kiran paul</p>
                <p className="">February 27, 2024</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Home_MeAndMy;

