/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import { Link, useParams } from "react-router-dom";
import {useState,useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import SwiperNavButtons from "./SwiperNavButtons";
import Customise_Nav from "../Unused Component/Customise_Nav";
// import { useSwiper } from 'swiper/react';

// SwiperCore.use([Navigation,Pagination]);


function BottomHeader({data}) {
  // const sectionType=useParams();
  const [activeTab, setActiveTab] = useState('link1');
  const [isOpen, setIsOpen] = useState(null); 
  const toggleDropdown = (index) => {
    if (isOpen === index) {
      setIsOpen(null); 
    } else {
      setIsOpen(index);
    }
  };
 
  const swiperRefs = useRef([]);

  const initSwiper = (swiper, index) => {
    swiperRefs.current[index] = swiper;
  };

  const handlePrev = (index) => {
     swiperRefs.current[index]?.slidePrev();
  };

  const handleNext = (index) => {
    swiperRefs.current[index]?.slideNext();
  };

  
const openCity = (e, cityName) => {
   setActiveTab(cityName);
  };

  return (
    <>
      <div className="bottom_header sm:pb-5 pb-3 lg:pt-3">
        <nav className="container sm:px-7  mx-auto manupart">
          <div className="flex justify-between relative items-center bg-[#231E1E] sm:rounded-lg rounded-b pr-5 sm:h-[60px] h-[50px]">
            <div className="overflow-x-auto overflow-y-hidden sm:mr-4 mr-2 sm:ml-0 ml-3 chrome-scroll">
              <ul className="flex text-white lg:text-sm text-xs sm:pb-2 pb-1 mt-1 sm:pl-0 pl-2  sm:mt-2">
                <li>
                  <Link
                    to={"/"}
                    className="block sm:py-5 sm:px-3 py-4 px-2 hover:bg-black rounded-l-lg"
                  >
                    Home
                  </Link>
                </li>
                <li className="dropdown actv">
                  <Link to={"/cate/news/11"} className="block sm:py-5 sm:px-3 py-4 px-2 hover:bg-black">
                    News
                  </Link>
                  <div className="mega_menu">
                    <div className="flex justify-start">
                      <div className="w-full p-8 bg-[#eeeeee] rounded-b-lg">
                        <section className="mx-auto">
                          <div className="tab">
                            <a
                              href="#" 
                              className={`tablinks ${activeTab === 'link1' ? 'active' : ''}`}
                              onMouseOver={(e) => openCity(e, 'link1')}
                            >
                              Crime
                            </a>
                            <a
                              href="#" 
                              className={`tablinks ${activeTab === 'link2' ? 'active' : ''}`}
                              onMouseOver={(e) => openCity(e, 'link2')}
                            >
                              Features
                            </a>
                            <a
                              href="#" 
                              className={`tablinks ${activeTab === 'link3' ? 'active' : ''}`}
                              onMouseOver={(e) => openCity(e, 'link3')}
                            >
                              Industry News
                            </a>
                            <a
                              href="#" 
                              className={`tablinks ${activeTab === 'link4' ? 'active' : ''}`}
                              onMouseOver={(e) => openCity(e, 'link4')}
                            >
                              Fresh Produce
                            </a>
                            <a
                              href="#" 
                              className={`tablinks ${activeTab === 'link5' ? 'active' : ''}`}
                              onMouseOver={(e) => openCity(e, 'link5')}
                            >
                              Legislation
                            </a>
                            <a
                              href="#" 
                              className={`tablinks ${activeTab === 'link6' ? 'active' : ''}`}
                              onMouseOver={(e) => openCity(e, 'link6')}
                            >
                              Newspaper & Magazines
                            </a>
                          </div>
                          <div id="link1" key={1} className="tabcontent" style={{ display: activeTab === 'link1' ? 'block' : 'none' }}>
                            <div className="md:col-span-8 col-span-6 ">
                              <div >
                                <Swiper
                                  className="swiper mySwiper"
                                  // modules={[Navigation, Pagination]}     
                                  navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next', }}                      
                                  onSwiper={(swiper) => initSwiper(swiper, 0)} // Assign ref for first swiper
                                  spaceBetween={20}
                                  slidesPerView={4}
                                 
                                >
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="industry_news.html">
                                          <img
                                            src="img/GettyImages-1916938424.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                       
                                        className="font-semibold text-sm block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="block trans font-semibold text-sm"
                                          >
                                            Government introduces plans to
                                            exonerate post office scandal
                                            victims
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="industry_news.html">
                                          <img
                                            src="img/iStock-1406590620-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                       
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans block font-semibold text-sm"
                                          >
                                            Chilled bliss at your fingertips
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-938165838-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                       
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Jeremy hunt set to introduce vape
                                            tax in budget: report
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-1428386188-696x467.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Grocery inflation drops to two-year
                                            low as Brits opt for​ budget
                                            shopping: Kantar
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/GettyImages-1916938424.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>

                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Government introduces plans to
                                            exonerate post office scandal
                                            victims
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-1406590620-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>

                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Chilled bliss at your fingertips
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="  rounded-b-xl">
                                      <a href="#">
                                        <img
                                          src="img/iStock-938165838-696x464.png"
                                          alt=""
                                        />
                                      </a>
                                      <div className="p-5 text-black">
                                        <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                          INDUSTRY NEWS
                                        </h3>
                                        <a
                                          href="#"
                                          className="font-semibold text-sm"
                                        >
                                          Jeremy hunt set to introduce vape tax
                                          in budget: report
                                        </a>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl">
                                      <a href="#">
                                        <img
                                          src="img/iStock-1428386188-696x467.png"
                                          alt=""
                                        />
                                      </a>
                                      <div className="p-5 text-black">
                                        <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                          INDUSTRY NEWS
                                        </h3>
                                        <a
                                          href="#"
                                          className="font-semibold text-sm"
                                        >
                                          Grocery inflation drops to two-year
                                          low as Brits opt for​ budget shopping:
                                          Kantar
                                        </a>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                
                                <div className="flex justify-end mt-6">
                                  <div onClick={() => handlePrev(0)} className="swiper-button-prev bg-white rounded-lg"></div>
                                  <div onClick={() => handleNext(0)} className="swiper-button-next bg-white rounded-lg">
                                    Next
                                  </div>
                           </div>
                                </Swiper>                              
        
                              </div>
                            </div>
                          </div>

                          <div id="link2" key={2} className="tabcontent" style={{ display: activeTab === 'link2' ? 'block' : 'none' }}>
                            <div className="md:col-span-8 col-span-6 ">
                              <div>
                                {/* <Swiper
                                  className="swiper mySwiper"
                                  // modules={[Navigation, Pagination]}
                                  onSwiper={(swiper) => initSwiper(swiper, 1)} // Assign ref for second swiper
                                  spaceBetween={20}
                                  slidesPerView={4}
                                >
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="industry_news.html">
                                          <img
                                            src="img/GettyImages-1916938424.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="font-semibold text-sm block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="block trans font-semibold text-sm"
                                          >
                                            Government introduces plans to
                                            exonerate post office scandal
                                            victims
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="industry_news.html">
                                          <img
                                            src="img/iStock-1406590620-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans block font-semibold text-sm"
                                          >
                                            Chilled bliss at your fingertips
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-938165838-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Jeremy hunt set to introduce vape
                                            tax in budget: report
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-1428386188-696x467.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Grocery inflation drops to two-year
                                            low as Brits opt for​ budget
                                            shopping: Kantar
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/GettyImages-1916938424.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>

                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Government introduces plans to
                                            exonerate post office scandal
                                            victims
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-1406590620-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>

                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Chilled bliss at your fingertips
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="  rounded-b-xl">
                                      <a href="#">
                                        <img
                                          src="img/iStock-938165838-696x464.png"
                                          alt=""
                                        />
                                      </a>
                                      <div className="p-5 text-black">
                                        <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                          INDUSTRY NEWS
                                        </h3>
                                        <a
                                          href="#"
                                          className="font-semibold text-sm"
                                        >
                                          Jeremy hunt set to introduce vape tax
                                          in budget: report
                                        </a>
                                      </div>
                                    </div>
                                    </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl">
                                      <a href="#">
                                        <img
                                          src="img/iStock-1428386188-696x467.png"
                                          alt=""
                                        />
                                      </a>
                                      <div className="p-5 text-black">
                                        <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                          INDUSTRY NEWS
                                        </h3>
                                        <a
                                          href="#"
                                          className="font-semibold text-sm"
                                        >
                                          Grocery inflation drops to two-year
                                          low as Brits opt for​ budget shopping:
                                          Kantar
                                        </a>
                                      </div>
                                    </div>
                                    </SwiperSlide>
                                </Swiper> */}
                                <div className="flex justify-end mt-6">
                                  <div onClick={() => handlePrev(1)} className="swiper-button-prev bg-white rounded-lg"></div>
                                  <div onClick={() => handleNext(1)} className="swiper-button-next bg-white rounded-lg">
                                    Next
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div id="link3" key={3} className="tabcontent" style={{ display: activeTab === 'link3' ? 'block' : 'none' }}>
                            <div className="md:col-span-8 col-span-6 ">
                              <div>
                                {/* <Swiper className="swiper mySwiper"
                                  // modules={[Navigation, Pagination]}
                                  onSwiper={(swiper) => initSwiper(swiper, 2)} // Assign ref for first swiper
                                  spaceBetween={20}
                                  slidesPerView={4}>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="industry_news.html">
                                          <img
                                            src="img/GettyImages-1916938424.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="font-semibold text-sm block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="block trans font-semibold text-sm"
                                          >
                                            Government introduces plans to
                                            exonerate post office scandal
                                            victims
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="industry_news.html">
                                          <img
                                            src="img/iStock-1406590620-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans block font-semibold text-sm"
                                          >
                                            Chilled bliss at your fingertips
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-938165838-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Jeremy hunt set to introduce vape
                                            tax in budget: report
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-1428386188-696x467.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Grocery inflation drops to two-year
                                            low as Brits opt for​ budget
                                            shopping: Kantar
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/GettyImages-1916938424.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>

                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Government introduces plans to
                                            exonerate post office scandal
                                            victims
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-1406590620-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>

                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Chilled bliss at your fingertips
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="  rounded-b-xl">
                                      <a href="#">
                                        <img
                                          src="img/iStock-938165838-696x464.png"
                                          alt=""
                                        />
                                      </a>
                                      <div className="p-5 text-black">
                                        <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                          INDUSTRY NEWS
                                        </h3>
                                        <a
                                          href="#"
                                          className="font-semibold text-sm"
                                        >
                                          Jeremy hunt set to introduce vape tax
                                          in budget: report
                                        </a>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl">
                                      <a href="#">
                                        <img
                                          src="img/iStock-1428386188-696x467.png"
                                          alt=""
                                        />
                                      </a>
                                      <div className="p-5 text-black">
                                        <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                          INDUSTRY NEWS
                                        </h3>
                                        <a
                                          href="#"
                                          className="font-semibold text-sm"
                                        >
                                          Grocery inflation drops to two-year
                                          low as Brits opt for​ budget shopping:
                                          Kantar
                                        </a>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  </Swiper> */}
                                <div className="flex justify-end mt-6">
                                  <div onClick={() => handlePrev(2)} className="swiper-button-prev bg-white rounded-lg"></div>
                                  <div onClick={() => handleNext(2)} className="swiper-button-next bg-white rounded-lg">
                                    Next
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div id="link4" key={4} className="tabcontent" style={{ display: activeTab === 'link4' ? 'block' : 'none' }}>
                            <div className="md:col-span-8 col-span-6 ">
                              <div>
                                {/* <Swiper className="swiper mySwiper"
                                  // modules={[Navigation, Pagination]}
                                  onSwiper={(swiper) => initSwiper(swiper, 3)} // Assign ref for first swiper
                                  spaceBetween={20}
                                  slidesPerView={4}>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="industry_news.html">
                                          <img
                                            src="img/GettyImages-1916938424.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="font-semibold text-sm block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="block trans font-semibold text-sm"
                                          >
                                            Government introduces plans to
                                            exonerate post office scandal
                                            victims
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="industry_news.html">
                                          <img
                                            src="img/iStock-1406590620-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans block font-semibold text-sm"
                                          >
                                            Chilled bliss at your fingertips
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-938165838-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Jeremy hunt set to introduce vape
                                            tax in budget: report
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-1428386188-696x467.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Grocery inflation drops to two-year
                                            low as Brits opt for​ budget
                                            shopping: Kantar
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/GettyImages-1916938424.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>

                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Government introduces plans to
                                            exonerate post office scandal
                                            victims
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-1406590620-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>

                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Chilled bliss at your fingertips
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="  rounded-b-xl">
                                      <a href="#">
                                        <img
                                          src="img/iStock-938165838-696x464.png"
                                          alt=""
                                        />
                                      </a>
                                      <div className="p-5 text-black">
                                        <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                          INDUSTRY NEWS
                                        </h3>
                                        <a
                                          href="#"
                                          className="font-semibold text-sm"
                                        >
                                          Jeremy hunt set to introduce vape tax
                                          in budget: report
                                        </a>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl">
                                      <a href="#">
                                        <img
                                          src="img/iStock-1428386188-696x467.png"
                                          alt=""
                                        />
                                      </a>
                                      <div className="p-5 text-black">
                                        <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                          INDUSTRY NEWS
                                        </h3>
                                        <a
                                          href="#"
                                          className="font-semibold text-sm"
                                        >
                                          Grocery inflation drops to two-year
                                          low as Brits opt for​ budget shopping:
                                          Kantar
                                        </a>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                </Swiper> */}
                                <div className="flex justify-end mt-6">
                                  <div onClick={() => handlePrev(3)} className="swiper-button-prev bg-white rounded-lg"></div>
                                  <div onClick={() => handleNext(3)} className="swiper-button-next bg-white rounded-lg">
                                    Next
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div id="link5" key={5} className="tabcontent" style={{ display: activeTab === 'link5' ? 'block' : 'none' }}>
                            <div className="md:col-span-8 col-span-6 ">
                              <div>
                                {/* <Swiper className="swiper mySwiper"
                                  // modules={[Navigation, Pagination]}
                                  onSwiper={(swiper) => initSwiper(swiper, 4)} // Assign ref for first swiper
                                  spaceBetween={20}
                                  slidesPerView={4}>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="industry_news.html">
                                          <img
                                            src="img/GettyImages-1916938424.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="font-semibold text-sm block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="block trans font-semibold text-sm"
                                          >
                                            Government introduces plans to
                                            exonerate post office scandal
                                            victims
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="industry_news.html">
                                          <img
                                            src="img/iStock-1406590620-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans block font-semibold text-sm"
                                          >
                                            Chilled bliss at your fingertips
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-938165838-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Jeremy hunt set to introduce vape
                                            tax in budget: report
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-1428386188-696x467.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Grocery inflation drops to two-year
                                            low as Brits opt for​ budget
                                            shopping: Kantar
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/GettyImages-1916938424.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>

                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Government introduces plans to
                                            exonerate post office scandal
                                            victims
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-1406590620-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>

                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Chilled bliss at your fingertips
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="  rounded-b-xl">
                                      <a href="#">
                                        <img
                                          src="img/iStock-938165838-696x464.png"
                                          alt=""
                                        />
                                      </a>
                                      <div className="p-5 text-black">
                                        <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                          INDUSTRY NEWS
                                        </h3>
                                        <a
                                          href="#"
                                          className="font-semibold text-sm"
                                        >
                                          Jeremy hunt set to introduce vape tax
                                          in budget: report
                                        </a>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl">
                                      <a href="#">
                                        <img
                                          src="img/iStock-1428386188-696x467.png"
                                          alt=""
                                        />
                                      </a>
                                      <div className="p-5 text-black">
                                        <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                          INDUSTRY NEWS
                                        </h3>
                                        <a
                                          href="#"
                                          className="font-semibold text-sm"
                                        >
                                          Grocery inflation drops to two-year
                                          low as Brits opt for​ budget shopping:
                                          Kantar
                                        </a>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                </Swiper> */}
                                <div className="flex justify-end mt-6">
                                  <div onClick={() => handlePrev(4)} className="swiper-button-prev bg-white rounded-lg"></div>
                                  <div onClick={() => handleNext(4)} className="swiper-button-next bg-white rounded-lg">
                                    Next
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div id="link6" key={6} className="tabcontent" style={{ display: activeTab === 'link6' ? 'block' : 'none' }}>
                            <div className="md:col-span-8 col-span-6 ">
                              <div>
                                {/* <Swiper className="swiper mySwiper"
                                  navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next', }}
                                  // modules={[Navigation, Pagination]}
                                  onSwiper={(swiper) => initSwiper(swiper, 5)} // Assign ref for first swiper
                                  spaceBetween={20}
                                  slidesPerView={4}>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="industry_news.html">
                                          <img
                                            src="img/GettyImages-1916938424.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="font-semibold text-sm block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="block trans font-semibold text-sm"
                                          >
                                            Government introduces plans to
                                            exonerate post office scandal
                                            victims
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="industry_news.html">
                                          <img
                                            src="img/iStock-1406590620-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans block font-semibold text-sm"
                                          >
                                            Chilled bliss at your fingertips
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-938165838-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Jeremy hunt set to introduce vape
                                            tax in budget: report
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-1428386188-696x467.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Grocery inflation drops to two-year
                                            low as Brits opt for​ budget
                                            shopping: Kantar
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/GettyImages-1916938424.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>

                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Government introduces plans to
                                            exonerate post office scandal
                                            victims
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl tabcontent-h">
                                      <div className="tabcontent1">
                                        <a href="#">
                                          <img
                                            src="img/iStock-1406590620-696x464.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>

                                      <div
                                        className="block"
                                      >
                                        <div className="p-5 text-black tabcontent2">
                                          <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                            INDUSTRY NEWS
                                          </h3>
                                          <a
                                            href="#"
                                            className="trans font-semibold text-sm block"
                                          >
                                            Chilled bliss at your fingertips
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="  rounded-b-xl">
                                      <a href="#">
                                        <img
                                          src="img/iStock-938165838-696x464.png"
                                          alt=""
                                        />
                                      </a>
                                      <div className="p-5 text-black">
                                        <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                          INDUSTRY NEWS
                                        </h3>
                                        <a
                                          href="#"
                                          className="font-semibold text-sm"
                                        >
                                          Jeremy hunt set to introduce vape tax
                                          in budget: report
                                        </a>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <div className="rounded-b-xl">
                                      <a href="#">
                                        <img
                                          src="img/iStock-1428386188-696x467.png"
                                          alt=""
                                        />
                                      </a>
                                      <div className="p-5 text-black">
                                        <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
                                          INDUSTRY NEWS
                                        </h3>
                                        <a
                                          href="#"
                                          className="font-semibold text-sm"
                                        >
                                          Grocery inflation drops to two-year
                                          low as Brits opt for​ budget shopping:
                                          Kantar
                                        </a>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                </Swiper> */}
                                <div className="flex justify-end mt-6">
                                  <div onClick={() => handlePrev(5)} className={`swiper-button-prev bg-white rounded-lg`}></div>
                                  <div onClick={() => handleNext(5)} className={`swiper-button-next bg-white rounded-lg `}>
                                    Next
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    to={"/cate/product-news/6"}
                    className="block sm:py-5 sm:px-3 py-4 px-2 hover:bg-black"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/cate/me-and-my/919"}
                    className="block sm:py-5 sm:px-3 py-4 px-2 hover:bg-black whitespace-nowrap"
                  >
                    Me & My
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/cate/videos/"}
                    className="block sm:py-5 sm:px-3 py-4 px-2 hover:bg-black"
                  >
                    Videos
                  </Link>
                </li>
                <li onMouseEnter={() => toggleDropdown(1)} onMouseLeave={() => toggleDropdown(1)}>
                  <a href="#" className="block sm:py-5 sm:px-3 py-4 px-2 hover:bg-black">Events</a>
                  <div className={`${isOpen === 1 ? "absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44" : "hidden"}`}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                      <li><a href="http://www.asiantraderconference.co.uk/" target={"_blank"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-red uppercase">Asian traders Conference</a></li>
                      <li><a href="https://asiantraderawards.co.uk/" className="block px-4 py-2 hover:bg-gray-100 hover:text-red dark:hover:bg-gray-600 dark:hover:text-white uppercase">asian traders Awards</a></li>   
                    </ul>
                  </div>
                </li>

                {/* Second dropdown */}
                <li onMouseEnter={() => toggleDropdown(2)} onMouseLeave={() => toggleDropdown(2)}>
                  <a href="#" className="block sm:py-5 sm:px-3 py-4 px-2 hover:bg-black">Magazine</a>
                  <div className={`${isOpen === 2 ? "absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44" : "hidden"}`}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Asian Traders Magazine</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">about us</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">digital-edition</a></li>
                    </ul>
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">contact-us</a>
                    </div>
                  </div>
                </li>

                {/* Third dropdown */}
                <li onMouseEnter={() => toggleDropdown(3)} onMouseLeave={() => toggleDropdown(3)}>
                  <a href="#" className="block sm:py-5 sm:px-3 py-4 px-2 hover:bg-black">More</a>
                  <div className={`${isOpen === 3 ? "absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44" : "hidden"}`}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Asian Traders</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">other items</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a></li>
                    </ul>
                    {/* <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </div> */}
                  </div>
                </li>
                {/* <li onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}>
                  <a 
                    className="block py-5 px-3  hover:bg-black"
                  >
                    Events
                  </a>
                  <div id="dropdownNavbar" className={`${isOpen ? "absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44" : "hidden"}`}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Awards</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">New</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </div>
                  </div>
                </li>
                <li onMouseEnter={toggleDropdown2}
                  onMouseLeave={toggleDropdown2}>
                  <a
                    className="block py-5 px-3  hover:bg-black"
                  >
                    Magzine
                  </a>
                  <div id="dropdownNavbar" className={`${isOpen2 ? "absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44" : "hidden"}`}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Asian Traders Magazine</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </div>
                  </div>
                </li>
                <li onMouseEnter={toggleDropdown3}
                  onMouseLeave={toggleDropdown3}>
                  <a
                    className="block py-5 px-3  hover:bg-black"
                  >
                    More
                  </a>
                  <div id="dropdownNavbar" className={`${isOpen3 ? "absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44" : "hidden"}`}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Asian Traders</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>

            <div className=" items-center lg:space-x-5 space-x-1 sm:flex hidden">

              {data?.other_websites?.map((item, index) => (
                <a key={index} href={item.other_website_link} target={item.link_target === 'Yes' ? '_blank' : '_self'} rel="noopener noreferrer">
                  <img src={item.other_webiste_logo} alt={`Logo ${index}`} className="w-full h-full" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
     {/* <Customise_Nav/> */}
    </>
  );
}
export default BottomHeader;


// function BottomHeader() {
//   const [activeTab, setActiveTab] = useState('');
//   console.log(activeTab)
//   const [element, setElement] = useState('')
//   // console.log(customdropdown[element[0]],element)
//   const swiperRef = useRef();

//   const openCity = (e, cityName) => {
//     setActiveTab(cityName);
//   };

//   return (
//     <>
//       <div className="bottom_header pb-5 lg:pt-3">
//         <nav className="container px-7 mx-auto manupart">
//           <div className="flex justify-between relative items-center bg-[#231E1E] rounded-lg pr-5 h-[60px]">
//             <div className="overflow-x-auto overflow-y-hidden mr-4">
//               <ul className="flex text-white lg:text-sm text-xs pb-2 mt-2">
//                 {Object.keys(customdropdown).map(tab => <li>
//                   <Link to={tab === "home" ? "/" : `/${tab}`} className={"block py-5 px-3 hover:bg-black"}>{tab.toUpperCase()}</Link>
//                   {tab !== "home" ?
//                     <div className="mega_menu">
//                       <div className="flex justify-start">
//                         <div className="w-full p-8 bg-[#eeeeee] rounded-b-lg">
//                           <section className="mx-auto">
//                             <div className="tab">
//                               {
//                                 Object.keys(customdropdown[tab]).map((el, i) => <a
//                                   href="#"
//                                   className={`tablinks ${activeTab === `${el}` ? 'active' : ''}`}
//                                   onMouseOver={(e) => {
//                                     openCity(e, `${el}`)
//                                     setElement([tab, el])
//                                   }}
//                                 >
//                                   {el}
//                                 </a>)
//                               }
//                             </div>

                           

//                             <div id="link2" key={2} className="tabcontent" style={{ display: 'block' }}>
//                               <div className="md:col-span-8 col-span-6 ">
//                                 <div>
//                                   <Swiper
//                                     className="swiper mySwiper"
//                                     modules={[Navigation]}
//                                     navigation
//                                     spaceBetween={20}
//                                     slidesPerView={4}
//                                   >{
//                                       element.length && customdropdown[element[0]][element[1]].list.map(el => <SwiperSlide>
//                                         <Link to={`/${el.link}`}>
//                                           <div className="rounded-b-xl tabcontent-h">
//                                             <div className="tabcontent1">
//                                               <a href="industry_news.html">
//                                                 <img
//                                                   src="img/GettyImages-1916938424.png"
//                                                   alt=""
//                                                 />
//                                               </a>
//                                             </div>
//                                             <a
//                                               href="industry_news.html"
//                                               className="font-semibold text-sm block"
//                                             >
//                                               <div className="p-5 text-black tabcontent2">
//                                                 <h3 className="text-[#9E9E9E] text-xs mb-2 os-sm-bold">
//                                                   {el.title}
//                                                 </h3>
//                                                 <span
//                                                   href="#"
//                                                   className="block trans font-semibold text-sm"
//                                                 >
//                                                   {el.subtitle}
//                                                 </span>
//                                               </div>
//                                             </a>
//                                           </div>
//                                         </Link>
//                                       </SwiperSlide>)}
//                                   </Swiper>
//                                   <div className="flex justify-end mt-6">
//                                     <div className="swiper-button-prev bg-white rounded-lg"></div>
//                                     <div className="swiper-button-next bg-white rounded-lg">
//                                       Next
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </section>
//                         </div>
//                       </div>
//                     </div> : null}
//                 </li>)

//                 }
//                 {/* <li>
//                   <Link
//                     to={"/"}
//                     className="block py-5 px-3 hover:bg-black rounded-l-lg"
//                   >
//                     Home
//                   </Link>
//                 </li> */}

//               </ul>
//             </div>

//             <div className="flex items-center lg:space-x-5 space-x-1">
//               <div>
//                 <img src={logo_3} alt="" className="w-full h-full" />
//               </div>
//               <div>
//                 <img src={logo_4} alt="" className="w-full h-full" />
//               </div>
//               <div>
//                 <img src={lvape_clr} alt="" className="w-full h-full " />
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }
// export default BottomHeader;
