import React, { useEffect, useState } from 'react'
// import constFile from '../Middleware/ConstFile';
import { Link, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import MustReadSideBar from './MustReadSideBar';
import Loader from '../Component/Loader';

export default function CategoryPage() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {sectionType,sectionId} = useParams();

    useEffect(() => {
            const fetchData = async () => {
            
            setLoading(true);
            setError(null);

            try {
                if (!sectionId) {
                    throw new Error(`The Page You are Looking for is not Found`);
                }
                const urlEncodedData = new URLSearchParams();
                urlEncodedData.append('cate_id', sectionId);
                urlEncodedData.append('number_of_posts', 25)
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
                setNews(result);
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [sectionId]);

    return (
        <section className="pb-5 news mb-20 bg-blur">
            <div className="container mx-auto sm:px-7 px-3">
                {loading === true ? (<><Loader /> <Skeleton height={200} count={5} ></Skeleton></>) : error ? (<h1 className="container mx-auto px-7" >{error.message}</h1>) :
            
                <>
                <div className="flex justify-between items-center gap-5 md:px-4 px-2 border-b border-gray-600 pb-2 mb-5">
                    <div>
                        <h1 className="text-[#231E1E] lg:text-2xl md:text-lg text-sm text-nowrap font-bold">{news?.data?.category_name?.toUpperCase()}</h1>
                    </div>
                            <div className="news-item  text-nowrap overflow-x-auto overflow-y-hidden">
                        <ul className="flex text-[#231E1E]   list-none ">
                            {['crime', 'features', 'industry-news', 'interviews', 'reports'].map((item) => (
                                <li key={item} className="ml-2">
                                    <Link to={`/news/${item}`} className="lg:px-6 sm:px-3 px-1 py-1 text-[10px] rounded-md border border-white hover:border hover:border-red font-bold">{item.toUpperCase()}</Link>
                                </li>
                            ))}
                            {/* <li>
                <Link to={"/news/crime"} className="border hover:border border-white  hover:border-red lg:px-6 px-3 py-1 rounded-md font-bold">CRIME</Link>
              </li>
              <li className="ml-2">
                <a href="#" className="lg:px-6 px-3 py-1 rounded-md border border-white hover:border hover:border-red font-bold">FEATURES</a>
              </li>
              <li>
                <Link to={"/news/industry-news"} className="lg:px-6 px-3 py-1 rounded-md border border-white hover:border hover:border-red font-bold">INDUSTRY NEWS</Link>
              </li>
              <li>
                <a href="index.html#inter" className="lg:px-6 px-3 py-1 rounded-md border border-white hover:border hover:border-red font-bold">INTERVIEWS</a>
              </li>
              <li>
                <a href="index.html#rep" className="lg:px-6 px-3 py-1 rounded-md border border-white hover:border hover:border-red font-bold">REPORTS</a>
              </li> */}
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-5">
                    <div className="lg:col-span-9 md:col-span-8 col-span-12">
                        <div className="grid grid-cols-12 gap-5 mb-10">
                            {news?.data?.posts?.map((post, i) => (
                                <div key={i} className="lg:col-span-4 sm:col-span-6 col-span-12">
                                    <div className="rounded-[10px] bg-[#EEEEEE] h-full">
                                        <div className="">
                                            <Link to={`/${post.post_slug}`}>  <img src={post.post_image} alt="" className="w-full rounded-[10px]  sm:max-h-40 max-h-64 object-fill" style={{ height: "" }} /></Link>
                                        </div>
                                        <div className="px-[23px] pt-[18px] pb-[23px]">
                                            <Link to={`/cate/${post.cat.cate_slug}/${post.cat.cate_id}`}>
                                                <span className="text-[10px] text-[#9E9E9E] font-openSans font-semibold uppercase">{post.cat.cate_title}</span></Link>
                                            <Link to={`/${post.post_slug}`} ><h2 className="text-sm mt-[15px] mb-[10px] font-black wow fadeInDown">{post.post_title}</h2></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <div className="px-2 py-1 border border-[#9E9E9E] text-[10px] text-[#9E9E9E]">01</div>
                                <div className="px-2 py-1 border border-[#9E9E9E] text-[10px] text-[#9E9E9E]">02</div>
                                <div className="px-2 py-1 border border-[#9E9E9E] text-[10px] text-[#9E9E9E]">03</div>
                                <div className="px-1 py-1 text-[10px] text-[#9E9E9E]">....</div>
                                <div className="px-1 py-1 border border-[#9E9E9E] text-[10px] text-[#9E9E9E]">608</div>
                                <div className="px-2 py-1 border border-[#9E9E9E] text-[10px] text-[#9E9E9E]">&gt;</div>
                            </div>
                            <div>
                                <p className="text-[#9E9E9E] text-[10px]">Page 1 of 608</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-12">
                        <div className="mb-[105px]">
                            <img src="img/Image 9.png" alt="" />
                        </div>
                        <div className="mb-[101px]">
                            <MustReadSideBar/>
                            {/* <div className="mt-6 mb-5 relative flex items-center">
                                <h4 className="text-red text-sm uppercase pl-8 pr-4 flex-shrink-0 inner-box font-bold">MUST READ</h4>
                                <div className="border-y border-dark-gray p-1 w-full"></div>
                            </div>

                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="grid grid-cols-12 gap-5 border-b border-greyb pb-5 mb-5">
                                    <div className="col-span-4">
                                        <img src={`img/must-read-${i}.png`} alt="" className="w-full lg:h-full object-cover rounded-[10px]" />
                                    </div>
                                    <div className="col-span-8">
                                        <span className="text-[8px] text-red block font-openSans font-semibold uppercase">FEATURE</span>
                                        <p className="font-bold text-xs wow fadeInDown">Post office launches probe to review role of ‘untouchable’ investigators</p>
                                    </div>
                                </div>
                            ))} */}
                        </div>

                        <div className="col-span-3 bg-[#231E1E] p-5 rounded-[10px]">
                            <h2 className="text-[20px] text-white font-black uppercase">CURRENT ISSUE</h2>
                            <div className="h-[10px] border-y-2 border-grey mb-5 mt-[10px]"></div>
                            <img src="img/AT-938.png" alt="" className="mt-[60px] mb-[52px]" />
                            <button className="border-2 border-red text-white py-3 text-sm rounded-md font-black mx-auto w-full">Digital Archive</button>
                            <button className="bg-red text-white py-3 rounded-md mx-auto text-[14px] w-full mt-[28px]">Subscribe</button>
                        </div>
                    </div>
                </div>
                
                    </>}
            </div>
        </section>
    );
}
