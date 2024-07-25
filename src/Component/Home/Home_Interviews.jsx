import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

export default function Home_Interviews() {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // console.log(interviews)

  useEffect(() => {
    const fetchData = async () => {
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append('cate_id', 600);
      urlEncodedData.append('number_of_posts', 7)
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
        setInterviews(result);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="lg:pb-24 pb-8" id="inter">
      <div className="container mx-auto sm:px-7 px-4 relative">
        <div className="inner-box2 flex items-center md:pb-[50px] sm:pb-[25px] pb-[15px] sm:pl-[36px] pl-[50px] text-[20px] text-red font-bold">
          <h2 className="uppercase text-[14px] sm:text-[20px]">{interviews?.data?.category_name}</h2>
          <div className="border-y-2 h-[13px] lg:w-[75%] w-[65%] ml-auto"></div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          {loading === true ? (<> <Skeleton height={200} width={700} count={5} ></Skeleton></>) : error ? (<h3 className="container mx-auto px-7" >{error.message}</h3>) : (
          <>       
          {interviews?.data?.posts?.slice(0,3).map((item, index) => (
            <div key={index} className="md:col-span-4  col-span-12">
              <div className="rounded-[10px] bg-[#EEEEEE] h-full">
                <div className="flex flex-col h-full">
                  <Link to={`/${item.post_slug}`}>                
                    <img
                      src={item.post_image}
                      alt=""
                      className="w-full md:max-h-56 sm:max-h-80 max-h-80  object-cover rounded-[10px]"
                      loading="lazy"
                    />
                  </Link>
                  <div className=" sm:p-4 p-2 lg:px-8">
                    <Link to={`cate/${item?.cat?.cate_slug}/${item?.cat.cate_id}`} >
                    <span className="text-[8px] text-[#9E9E9E] font-openSans font-semibold">
                      {item.cat.cate_title.toUpperCase()}
                    </span>
                    </Link>
                    <Link to={`/${item.post_slug}`}>
                    <h2 className="font-bold text-[14px] sm:mt-[14px] sm:mb-6 mt-[8px] mb-3 wow fadeInDown">
                      {item.post_title}
                      </h2></Link>
                  </div>
                  <div className="flex justify-between text-[10px] font-openSans mt-auto sm:p-4 p-2 lg:px-8">
                    <p className="">{item.post_author}</p>
                    <p className="text-gray-500 ">{item.post_date}</p>
                  </div>
                </div>
              </div>
            </div>
      
          ))}{interviews?.data?.posts?.slice(3, 7).map((item, index) => (<div key={index} className="md:col-span-6 col-span-12">
            <div className="rounded-[10px] bg-[#EEEEEE] flex lg:flex-row md:flex-col flex-row   lg:pb-0  h-full">
              <div className="lg:min-w-6/12 flex-1">
                <Link to={`/${item.post_slug}`}>
                <img
                  src={item.post_image}
                  alt=""
                  className="w-full h-full md:max-h-48 object-cover rounded-[10px]"
                /></Link>
              </div>
              <div className="pt-4 px-4 w-6/12 flex-1">
                <Link to={`cate/${item?.cat?.cate_slug}/${item.cat.cate_id}`} >
                <span className="text-[8px] text-[#9E9E9E] font-openSans font-semibold">
                  {item.cat.cate_title.toUpperCase()}
                  </span></Link>
                <div className="md:min-h-[78px]">
                  <Link to={`/${item.post_slug}`}>
                  <h2 className="font-bold text-sm mt-[14px] wow fadeInDown">
                    {item.post_title}
                    </h2></Link>
                </div>
                <div className="mt-auto py-4">
                  <p className="text-[10px] font-openSans ">
                    {item.post_author}
                  </p>
                  <p className="text-[10px] text-[#9E9E9E] font-openSans ">
                    {item.post_date}
                  </p>
                </div>
              </div>
            </div>
          </div>))}</>)}
        </div>
        {/* <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4">
            <div className="rounded-[10px] bg-[#EEEEEE] h-full">
              <div className="flex flex-col h-full">
                <div className="">
                  <img
                    src={interviews_img_1}
                    alt=""
                    className="w-full rounded-[10px]"
                  />
                </div>
                <div className="p-4 lg:px-8">
                  <span className="text-[8px] text-[#9E9E9E] font-openSans font-semibold">
                    INDUSTRY NEWS
                  </span>
                  <h2 className="font-bold text-[14px] mt-[14px] mb-6 wow fadeInDown">
                    Making convenience more fun with asian trader award-winner
                  </h2>
                </div>
                <div className="flex justify-between text-[10px] font-openSans mt-auto p-4 lg:px-8">
                  <p className="">Kiran paul</p>
                  <p className="text-gray-500 ">February 27, 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="rounded-[10px] bg-[#EEEEEE] h-full">
              <div className="flex flex-col h-full">
                <div className="">
                  <img
                    src={interviews_img_2}
                    alt=""
                    className="w-full rounded-[10px]"
                  />
                </div>
                <div className="p-4 lg:px-8">
                  <span className="text-[8px] text-[#9E9E9E] font-openSans font-semibold">
                    INDUSTRY NEWS
                  </span>
                  <h2 className="font-bold text-[14px] mt-[14px] mb-6 wow fadeInDown">
                    Amrit shows the way
                  </h2>
                </div>
                <div className="flex justify-between text-[10px] font-openSans mt-auto p-4 lg:px-8">
                  <p className="">Kiran paul</p>
                  <p className="text-gray-500 ">February 27, 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="rounded-[10px] bg-[#EEEEEE] h-full">
              <div className="flex flex-col h-full">
                <div className="">
                  <img
                    src={interviews_img_3}
                    alt=""
                    className="w-full rounded-[10px]"
                  />
                </div>
                <div className="p-4 lg:px-8">
                  <span className="text-[8px] text-[#9E9E9E] font-openSans font-semibold">
                    INDUSTRY NEWS
                  </span>
                  <h2 className="font-bold text-[14px] mt-[14px] mb-6 wow fadeInDown">
                    Government introduces plans to exonerate post office scandal
                    victims
                  </h2>
                </div>
                <div className="flex justify-between text-[10px] font-openSans mt-auto p-4 lg:px-8">
                  <p className="">Kiran paul</p>
                  <p className="text-gray-500 ">February 27, 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <div className="rounded-[10px] bg-[#EEEEEE] flex lg:flex-row flex-col lg:pb-0 pb-5 h-full">
              <div className="lg:min-w-6/12 flex-1">
                <img
                  src={interviews_img_4}
                  alt=""
                  className="w-full h-full rounded-[10px]"
                />
              </div>
              <div className="pt-4 px-4 w-6/12 flex-1">
                <span className="text-[8px] text-[#9E9E9E] font-openSans font-semibold">
                  FEATURES
                </span>
                <div className="min-h-[78px]">
                  <h2 className="font-bold text-sm mt-[14px] wow fadeInDown">
                    Post office launches Post office launches probe to review
                  </h2>
                </div>
                <div className="mt-auto py-4">
                  <p className="text-[10px] font-openSans ">
                    Pooja Shrivastava
                  </p>
                  <p className="text-[10px] text-[#9E9E9E] font-openSans ">
                    February 27, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="rounded-[10px] bg-[#EEEEEE] flex lg:flex-row flex-col lg:pb-0 pb-5 h-full">
              <div className="lg:min-w-6/12 flex-1">
                <img
                  src={interviews_img_5}
                  alt=""
                  className="w-full h-full rounded-[10px]"
                />
              </div>
              <div className="pt-4 px-4 w-6/12 flex-1">
                <span className="text-[8px] text-[#9E9E9E] font-openSans font-semibold">
                  FEATURES
                </span>
                <div className="min-h-[78px]">
                  <h2 className="font-bold text-sm mt-[14px] wow fadeInDown">
                    Post office
                  </h2>
                </div>
                <div className="mt-auto py-4">
                  <p className="text-[10px] font-openSans ">
                    Pooja Shrivastava
                  </p>
                  <p className="text-[10px] text-[#9E9E9E] font-openSans ">
                    February 27, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="rounded-[10px] bg-[#EEEEEE] flex lg:flex-row flex-col lg:pb-0 pb-5 h-full">
              <div className="lg:min-w-6/12 flex-1">
                <img
                  src={interviews_img_6}
                  alt=""
                  className="w-full h-full rounded-[10px]"
                />
              </div>
              <div className="pt-4 px-4 w-6/12 flex-1">
                <span className="text-[8px] text-[#9E9E9E] font-openSans font-semibold">
                  FEATURES
                </span>
                <div className="min-h-[78px]">
                  <h2 className="font-bold text-sm mt-[14px] wow fadeInDown">
                    Post office{" "}
                  </h2>
                </div>
                <div className="mt-auto py-4">
                  <p className="text-[10px] font-openSans ">
                    Pooja Shrivastava
                  </p>
                  <p className="text-[10px] text-[#9E9E9E] font-openSans ">
                    February 27, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="rounded-[10px] bg-[#EEEEEE] flex lg:flex-row flex-col lg:pb-0 pb-5 h-full">
              <div className="lg:min-w-6/12 flex-1">
                <img
                  src={interviews_img_7}
                  alt=""
                  className="w-full h-full rounded-[10px]"
                />
              </div>
              <div className="pt-4 px-4 w-6/12 flex-1">
                <span className="text-[8px] text-[#9E9E9E] font-openSans font-semibold">
                  FEATURES
                </span>
                <div className="min-h-[78px]">
                  <h2 className="font-bold text-sm mt-[14px] wow fadeInDown">
                    Post office launches Post office launches probe to review
                  </h2>
                </div>
                <div className="mt-auto py-4">
                  <p className="text-[10px] font-openSans ">
                    Pooja Shrivastava
                  </p>
                  <p className="text-[10px] text-[#9E9E9E] font-openSans ">
                    February 27, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

