import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from '../Component/Loader';

export default function SearchPage() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('s');

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            setError(null);
           

            try {
                const urlEncodedData = new URLSearchParams();
                urlEncodedData.append('keyword', query);
                urlEncodedData.append('number_of_posts', 25)
                const token = 'YXBwbndlYnRlY2hub2xvZ2llc0BnbWFpbC5jb206OWVmOTJmMDM5Y2FjMDVhYWU2ZDYzMTBhYWNiYzljMGU=';
                const response = await fetch('http://192.168.29.24/asiantrader/wp-json/api/v1/search', {
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
                const data = await response.json();
                setResults(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [location.search]);

    return (
        <section className="pb-5 news mb-20 bg-blur">
           
            <div className="container mx-auto px-7">
                {loading === true ? (<><Loader /> <Skeleton height={200} count={5} ></Skeleton></>) : error ? (<h1 className="container mx-auto px-7" >{error.message}</h1>) :
                    <>
                        <div className="flex justify-between items-center px-5 border-b border-gray-600 pb-2 mb-5">
                            <div>
                                <h1 className="text-[#231E1E] text-2xl font-bold">{query}:Search Results</h1>
                            </div>
                            <div className="news-item">
                                
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-5">
                            <div className="lg:col-span-9 md:col-span-8 col-span-12">
                                <div className="grid grid-cols-12 gap-5 mb-10">
                                    {results?.data?.posts?.map((post, i) => (
                                        <div key={i} className="lg:col-span-4 sm:col-span-6 col-span-12">
                                            <div className="rounded-[10px] bg-[#EEEEEE] h-full">
                                                <div className="">
                                                    <Link to={`/${post.post_slug}`}> <img src={post.post_image} alt="" className="w-full rounded-[10px]  max-h-40 object-fill" style={{ height: "10rem" }} /></Link>
                                                </div>
                                                <div className="px-[23px] pt-[18px] pb-[23px]">
                                                    <Link to={`/cate/${post.cat.cate_slug}/${post.cat.cate_id}`}>
                                                        <span className="text-[10px] text-[#9E9E9E] font-openSans font-semibold uppercase">{post.cat.cate_title}</span></Link>
                                                    <Link to={`/${post.post_slug}`}> <h2 className="text-sm mt-[15px] mb-[10px] font-black wow fadeInDown">{post.post_title}</h2></Link>
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
                                    <div className="mt-6 mb-5 relative flex items-center">
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
                                    ))}
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


