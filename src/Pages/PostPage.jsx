import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import sonam_img from "../assets/img/Sonam-Jain.png"
import parse from 'html-react-parser';
import Loader from '../Component/Loader';


export default function PostPage() {
    const [postDetails, setPostDetails] = useState(null);
    const content = typeof postDetails?.data?.posts?.post_content === 'string' ? postDetails?.data?.posts?.post_content : '';
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // console.log(postDetails)
    const { post } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                if (!post) {
                    throw new Error(`The Page You are Looking for is not Found`);
                }
                const urlEncodedData = new URLSearchParams();
                urlEncodedData.append('post_slug', post);
                const token = 'YXBwbndlYnRlY2hub2xvZ2llc0BnbWFpbC5jb206OWVmOTJmMDM5Y2FjMDVhYWU2ZDYzMTBhYWNiYzljMGU=';
                const response = await fetch('http://192.168.29.24/asiantrader/wp-json/api/v1/article-detail', {
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
                setPostDetails(result);
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [post]);


  return (
      <section className="industry_news">
          <div className="container mx-auto px-7">
              {loading === true ? (<><Loader /> <Skeleton height={200} count={5} ></Skeleton></>) : error ? (<h1 className="container mx-auto px-7" >{error.message}</h1>) :<>
              <div className="lg:flex bg-[#DAD9D7] p-5 rounded-[10px]">
                  <div className="lg:w-1/2 relative lg:px-[12px]">
                          <Link to={`/cate/${postDetails?.data?.posts?.cat?.cate_slug}/${postDetails?.data?.posts?.cat?.cate_id}`}> <div className="inner-box2 text-[20px] text-red font-bold md:mt-[30px] mt-[15px] ml-10">{postDetails?.data?.posts?.cat?.cate_title}</div></Link>
                      <h1 className="md:text-[40px] sm:text-[30px] text-[20px] lg:max-w-[520px] lg:my-[62px] md:my-[42px] sm:-[32px] my-[20px] text-dblack font-black wow fadeInDown">
                          {postDetails?.data?.posts?.post_title}
                      </h1>
                      <div>
                          <div className="flex items-center sm:mb-7 mb-2">
                              <img src={sonam_img} alt="" className="pr-[10px] rounded-full" />
                              <span className="text-base text-[.8rem] text-dblack">{postDetails?.data?.posts?.post_author} | {postDetails?.data?.posts?.post_date}</span>
                          </div>
                      </div>
                  </div>
                  <div className="lg:w-1/2 sm:mt-10 mt-5 lg:mt-0">
                      <img src={postDetails?.data?.posts?.post_image} alt="" className="w-full lg:h-full rounded-[10px]" />
                  </div>
              </div>
              <div className="news-social flex justify-between items-center pt-4 pb-11 lg:pl-8 lg:pr-5">
                  <div className="flex items-center space-x-2">
                      <p className="text-xs text-black">Follow Us :</p>
                      <a href="#" className="w-[25px]"><img src="img/facebook.png" alt="" className="w-full rounded-full" /></a>
                      <a href="#" className="w-[25px]"><img src="img/twitter.png" alt="" className="w-full rounded-full" /></a>
                      <a href="#" className="w-[25px]"><img src="img/instagram.png" alt="" className="w-full rounded-full" /></a>
                      <a href="#" className="w-[25px]"><img src="img/whatsapp.png" alt="" className="w-full rounded-full" /></a>
                  </div>
                  <div>
                      <p className="text-xs text-black">Source : iStock image</p>
                  </div>
              </div>
              </>}
          </div>

          {/* Content start */}
          <div className="mb-7">
              <div className="container mx-auto px-7">
                  <div className="grid grid-cols-12 gap-5">
                      <div className="lg:col-span-9 md:col-span-8 col-span-12 md:border-r-2 border-greyb pr-8 md:text-[15px] text-[.8rem]">
                          {parse(content)}
                          {/* Swiper slider */}
                          <div className="bg-[#E4E3E1] p-5 rounded-lg ml-0">
                              <div className="swiper mySwiper2">
                                  <div className="swiper-wrapper">
                                      <div className="swiper-slide !bg-transparent">
                                          <div className="md:pr-5 pl-5 md:pl-0 border-r border-greyc">
                                              <div className="h-40 md:h-auto w-full overflow-hidden">
                                                  <img src="img/camp1.png" alt="" className="rounded-lg w-full object-cover md:w-auto md:h-40" />
                                              </div>
                                              <h5 className="md:text-[20px] text-[15px] text-red font-black my-3">Government on its way to restore normalcy in Manipur: Home Minister</h5>
                                              <p className="text-xs">Pooja Shrivastava | April 3, 2024</p>
                                          </div>
                                      </div>
                                      <div className="swiper-slide !bg-transparent">
                                          <div className="md:pr-5 pl-5 md:pl-0 border-r border-greyc">
                                              <div className="h-40 md:h-auto w-full overflow-hidden">
                                                  <img src="img/camp2.png" alt="" className="rounded-lg w-full object-cover md:w-auto md:h-40" />
                                              </div>
                                              <h5 className="md:text-[20px] text-[15px] text-red font-black my-3">Government on its way to restore normalcy in Manipur: Home Minister</h5>
                                              <p className="text-xs">Pooja Shrivastava | April 3, 2024</p>
                                          </div>
                                      </div>
                                      <div className="swiper-slide !bg-transparent">
                                          <div className="md:pr-5 pl-5 md:pl-0 border-r border-greyc">
                                              <div className="h-40 md:h-auto w-full overflow-hidden">
                                                  <img src="img/camp1.png" alt="" className="rounded-lg w-full object-cover md:w-auto md:h-40" />
                                              </div>
                                              <h5 className="md:text-[20px] text-[15px] text-red font-black my-3">Government on its way to restore normalcy in Manipur: Home Minister</h5>
                                              <p className="text-xs">Pooja Shrivastava | April 3, 2024</p>
                                          </div>
                                      </div>
                                      <div className="swiper-slide !bg-transparent">
                                          <div className="md:pr-5 pl-5 md:pl-0">
                                              <div className="h-40 md:h-auto w-full overflow-hidden">
                                                  <img src="img/camp2.png" alt="" className="rounded-lg w-full object-cover md:w-auto md:h-40" />
                                              </div>
                                              <h5 className="md:text-[20px] text-[15px] text-red font-black my-3">Government on its way to restore normalcy in Manipur: Home Minister</h5>
                                              <p className="text-xs">Pooja Shrivastava | April 3, 2024</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Sidebar */}
                      <div className="lg:col-span-3 md:col-span-4 col-span-12 lg:mt-[80px] mt-[35px]">
                          <div className="p-3 mb-[30px] border border-grey rounded-md">
                              <h5 className="text-[20px] text-red font-black mb-4">Related Posts</h5>
                              <div className="flex mb-5">
                                  <img src="img/ind-rel1.png" alt="" className="w-[92px] h-[92px] object-cover mr-3 rounded-md" />
                                  <div>
                                      <p className="text-[15px] leading-[22px] font-black mb-3">Jaspal Singal & Company</p>
                                      <p className="text-xs font-regular">Pooja Shrivastava | April 3, 2024</p>
                                  </div>
                              </div>
                              <div className="flex mb-5">
                                  <img src="img/ind-rel2.png" alt="" className="w-[92px] h-[92px] object-cover mr-3 rounded-md" />
                                  <div>
                                      <p className="text-[15px] leading-[22px] font-black mb-3">Jaspal Singal & Company</p>
                                      <p className="text-xs font-regular">Pooja Shrivastava | April 3, 2024</p>
                                  </div>
                              </div>
                              <div className="flex mb-5">
                                  <img src="img/ind-rel3.png" alt="" className="w-[92px] h-[92px] object-cover mr-3 rounded-md" />
                                  <div>
                                      <p className="text-[15px] leading-[22px] font-black mb-3">Jaspal Singal & Company</p>
                                      <p className="text-xs font-regular">Pooja Shrivastava | April 3, 2024</p>
                                  </div>
                              </div>
                              <div className="flex mb-5">
                                  <img src="img/ind-rel4.png" alt="" className="w-[92px] h-[92px] object-cover mr-3 rounded-md" />
                                  <div>
                                      <p className="text-[15px] leading-[22px] font-black mb-3">Jaspal Singal & Company</p>
                                      <p className="text-xs font-regular">Pooja Shrivastava | April 3, 2024</p>
                                  </div>
                              </div>
                              <div className="flex">
                                  <img src="img/ind-rel2.png" alt="" className="w-[92px] h-[92px] object-cover mr-3 rounded-md" />
                                  <div>
                                      <p className="text-[15px] leading-[22px] font-black mb-3">Jaspal Singal & Company</p>
                                      <p className="text-xs font-regular">Pooja Shrivastava | April 3, 2024</p>
                                  </div>
                              </div>
                          </div>

                          {/* Advertisement */}
                          <div className="p-2 bg-greyb border border-grey rounded-md">
                              <h5 className="text-[20px] text-red font-black mb-4">Advertisement</h5>
                              <div className="w-full overflow-hidden rounded-md">
                                  <img src="img/ad1.png" alt="" className="w-full object-cover" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}


//  <div className="mb-12 text-base text-dblack lg:pl-8">
//                               <p className="mb-7 text-base leading-[33px] font-regular wow fadeInDown">
//                                   Consumers across Scotland are losing millions of pounds to unfair pricing practices and short-weight measures, the Society of Chief Officers of Trading Standards in Scotland (SCOTSS) has claimed.
//                               </p>
//                               <p className="mb-7 text-base leading-[33px] font-regular wow fadeInDown">
//                                   As published on Journal of Trading Standards on March 25, Trading Standards teams from 18 local authorities in Scotland checked compliance with the Price Marking Order 2004 and the Consumer Protection from Unfair Trading Regulations 2008 among small to medium-sized convenience stores.
//                               </p>
//                               <p className="mb-7 text-base leading-[33px] font-regular wow fadeInDown">
//                                   A total of 417 retailers were visited at the end of 2023, and revealed ‘a continuing lack of understanding of pricing regulations among managers and owners, with non-compliances often not recognised as criminal offences’. SCOTSS said that the results showed no improvement since a similar investigation in 2022.
//                               </p>
//                               <p className="mb-7 text-base leading-[33px] font-regular wow fadeInDown">
//                                   Of the 20,579 products examined, 4,614 (22 per cent) lacked price indications, while in 34 per cent of cases unit prices were found to be incorrect. In 67 per cent of those cases, the products had no unit price at all. At the point of sale 5,997 products were checked, with 11.6 per cent being incorrectly charged — 79 per cent of these being to the detriment of the consumer.
//                               </p>
//                               <p className="mb-7 text-base leading-[33px] font-regular wow fadeInDown">
//                                   Officers involved in the project took action including issuing advisory letters and verbal warnings, and carrying out revisits in an effort to increase knowledge and compliance, stated Journal of Trading Standards.
//                               </p>
//                           </div>
//                           <div className="lg:pl-8">
//                               <div className="bg-[#E8E8E8] rounded-md px-5 py-3 mb-9">
//                                   <img src="img/01-11-24-Asian-Trader-leaderboard-728x90-1.png" alt="" className="w-auto mx-auto" />
//                               </div>
//                           </div>
//                           <div className="text-base text-dblack lg:pl-8 mb-[115px]">
//                               <p className="mb-7 text-base leading-[30px] font-regular wow fadeInDown">
//                                   Trading Standards Officers throughout the West of Scotland also collaborated on a project aimed at identifying short weight products, following a similar 2022 project which found that 71 out of 2,496 (3 per cent) packs checked were short weight.
//                               </p>
//                               <p className="mb-7 text-base leading-[30px] font-regular wow fadeInDown">
//                                   Weight checks were carried out on packaged goods at 146 retail outlets, with short weight products identified during 47 of these visits. A total of 1,479 different product lines were checked, with 70 (5 per cent) found to contain short weight packs. A total of 10,308 individual packs were checked within these product lines and 424 (4 per cent) of these were found to be short weight, with deficiencies as high as 40 per cent, leading to detriment of as much as £2 per pack.
//                               </p>
//                               <p className="mb-7 text-base leading-[30px] font-regular wow fadeInDown">
//                                   Alexandra Connell, Chair of SCOTSS, said, “Transparency in pricing is at the heart of fair trade in goods and is a core issue for Trading Standards teams across Scotland, making sure that consumers pay the correct price for their purchases and that businesses are diligent in presenting goods for sale accurately and legally. With a continuing cost of living crisis, it is important that the processes and systems that should be in place are working properly and that consumers pay the correct amount for their shopping. My advice to shoppers is always check prices carefully when in store and make sure you have been properly charged at the till.
//                               </p>
//                               <p className="mb-7 text-base leading-[30px] font-regular wow fadeInDown">
//                                   “Consumers should always get what they pay for, and fair measurement is a centuries old principle at the heart of fair trade in goods and at the heart of our profession, making sure that consumers get what they pay for and that businesses are weighing and measuring goods accurately. As with the pricing issues, and the key importance of weights and measures to the overall market, metrological systems must be working properly.”
//                               </p>
//                               <p className="mb-7 text-base leading-[30px] font-regular wow fadeInDown">
//                                   CTSI Chief Executive, John Herriman, said, “The vitally important work being carried out by Scottish Trading Standards in relation to pricing and metrological issues could not be more timely. With the cost of living crisis still having such a substantial impact on the decisions consumers make around spending, price transparency and trust in measurement is crucial to ensure that consumers know that they’re spending their money wisely.”
//                               </p>
//                               <p className="mb-7 text-base leading-[30px] font-regular wow fadeInDown">
//                                   Sam Ghibaldan, Chief Executive of Consumer Scotland, the statutory body for consumers in Scotland, said: “This is an important project on the pricing and weight of goods carried out by Scottish local authority Trading Standards.
//                               </p>
//                               <p className="text-base leading-[30px] font-regular wow fadeInDown">
//                                   “It is essential consumers have accurate information about the goods they are buying, particularly during a cost of living crisis when consumers are facing increased hardship.”
//                               </p>
//                           </div>