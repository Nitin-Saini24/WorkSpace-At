import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../HOC/ScrollToTop";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import SwiperCore from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";

export default function Footer() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

// console.log(data.data)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError("");
        const token = 'YXBwbndlYnRlY2hub2xvZ2llc0BnbWFpbC5jb206OWVmOTJmMDM5Y2FjMDVhYWU2ZDYzMTBhYWNiYzljMGU='; 
        const response = await fetch('http://192.168.29.24/asiantrader/wp-json/api/v1/footer', {
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
        setData(jsonData);
        setError("");
      } catch (error) {
        setError(error);
      }
      finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // <a href="#" onClick={ScrollToTop}>
  //   {item.menu_title}
  // </a>    
  return (
    <footer>
      <div className="container mx-auto lg:px-7">
        <div className="footer-bg pt-16 pb-20 lg:px-20 sm:px-16 ">
          <div className="flex md:flex-row flex-col md:justify-between md:items-end mb-12">
            <div className="self-center">
              <a href="https://asiantraderawards.co.uk/" target="_blank">
              <img className="lg:w-full md:w-[80%] w-[60%]" src={data?.data.asian_awards_logo} alt="" />
              </a>
            </div>
            <div className="lg:text-3xl md:text-2xl text-lg md:pt-0 pt-5 md:pl-0 pl-5 text-white font-light text-start md:text-right">
              {data?.data.asian_awards_title}
            </div>
          </div>
         
          <div className="swiper mySwiper award-section">
            <Swiper
              slidesPerView={4}
              // loop={true} 
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1120: { slidesPerView: 4 },
              }}
              className="mySwiper award-section"
            >
              {data?.data.asian_awards_lists?.map((award, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <div className="h-[144px]">
                      <img
                        src={award.asian_awards_image}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="bg-[#000A29] text-[#DFDFDF] text-xs px-6 text-center min-h-[65px] flex items-center justify-center">
                      <span className="font-light leading-5">
                        {award?.asian_awards_title}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      
      <div className="bg-[#141313] sm:px-20 px-8">
        <div className="flex justify-between flex-col md:flex-row pt-5 md:pt-0 gap-10 items-center">
          <div className="md:w-1/4  order-1 md:order-1">
            <div className="">
              <img src={data?.data?.footer_logo} alt="Logo_at" />
            </div>
          </div>
          <div className="md:w-1/4 order-3 md:order-2">
            
                <img src={data?.data?.footer_logo_2} className="mx-auto md:mx-0  max-w-full md:max-w-full" alt="Logo_at2" />
            
          </div>
          <div className="md:w-1/2 order-2 md:order-3">
            <div className="text-white lg:text-sm text-xs pl-5">
                <p className="wow fadeInDown text-white text-14 leading-6">
                  {data?.data?.footer_content}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EA1717] md:px-20 px-10">
          <div className="flex justify-between flex-col md:flex-row md:gap-10 gap-2  items-center">
            <div className="md:w-3/5 md:text-xs text-[.7rem] text-center gap-4 pt-3 md:pt-0 border-b md:pb-0 pb-2 md:border-none  text-white flex md:gap-5">
              {data?.data?.bottom_menu?.map((item, index) => (
                <React.Fragment key={index}>
                  {/* {console.log(item.menu_slug)} */}
                  {  item.menu_link ? (
                    <a href="#" onClick={ScrollToTop}>
                      {item.menu_title}
                    </a>           
                  ) : (
                      <Link to={`/${item.menu_slug}`} onClick={ScrollToTop}>
                        {item.menu_title}
                      </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          {/* <div className="w-3/5 text-xs text-white flex gap-5">
              <Link to={"/contact-us"} onClick={()=>ScrollToTop()}>Contact Us</Link>
              <Link to={"/aboutUs"} onClick={() => ScrollToTop()}>About Us</Link>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div> */}

          <div className="md:w-2/5">
              <div className="text-white text-sm text-right uppercase sm:py-4 py-1">
                <p className="uppercase">{data?.data?.copyright}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
