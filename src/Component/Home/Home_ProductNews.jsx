import  { useEffect, useState } from "react";
import AT_938 from "../../assets/img/AT-938.png";
import Asian_Trader_leaderboard from "../../assets/img/01-11-24-Asian-Trader-leaderboard-728x90-1.png";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Home_ProductNews = () => {
  const [productNews, setProductNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append('cate_id', 6);
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
        setProductNews(result);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="lg:pb-24 md:pb-8 pb-2 product" id="products">
      <div className="container mx-auto sm:px-7 px-4 relative">
        <div className="inner-box2 flex items-center md:pb-[50px] sm:pb-[25px] pb-[15px] sm:pl-[36px] pl-[50px] text-[20px]  text-red font-bold">
          <h2 className="uppercase text-nowrap text-[14px] sm:text-[20px] ">{productNews?.data?.category_name}</h2>
          <div className="border-y-2 h-[13px] lg:w-[75%] w-[65%] ml-auto"></div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-9 md:col-span-8 col-span-12">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              <div className="md:col-span-2  col-span-4 bg-[#E4E3E1] lg:p-5 p-[10px] rounded-md">
                <div className="grid md:grid-cols-2 grid-cols-1">
                  {loading && <Skeleton count={2} height={200} />}
                  {productNews?.data?.posts?.slice(0, 4).map((item, index) => (
                    
                    <div
                      key={index}

                      className={`block ${index % 2 === 0 ? "lg:pr-5 pr-[10px] md:border-r border-b border-greyb" : "lg:pl-5 pl-[10px] border-b border-greyb"}`}
                    >
                     
                      <div>
                        <div className="flex-1">
                          <Link to={`post/${item?.post_slug}`}>
                            <img
                              src={item.post_image}
                              alt=""
                              className="w-full lg:max-h-40 md:max-h-40 max-h-60 rounded-[10px] object-cover mt-5"
                              style={{ height: "20rem", width: "100%" }}
                            /></Link>
                        </div>
                        <div className="flex-1">
                          <Link to={`cate/${item?.cat?.cate_slug}/${item.cat.cate_id}`}>
                            <span className="text-red text-[8px] my-[10px] font-openSans font-semibold">
                              {item?.cat?.cate_title.toUpperCase()}
                            </span></Link>
                          <Link to={`post/${item?.post_slug}`} ><p className="font-bold md:pb-0 pb-5 text-[14px] wow fadeInDown">
                            {item?.post_title}
                          </p></Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="grid grid-cols-2">
                  <a
                    href="industry_news.html"
                    className="block lg:pr-5 pr-[10px] border-r border-b border-greyb"
                  >
                    <div>
                      <div className="flex-1">
                        <img
                          src={iStock_1346772207}
                          alt=""
                          className="w-full rounded-[10px] h-auto"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="text-red text-[8px] my-[10px] font-openSans font-semibold">
                          INDUSTRY NEWS
                        </span>
                        <p className="font-bold text-[14px] wow fadeInDown">
                          Chilled bliss at your fingertips
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="industry_news.html"
                    className="block lg:pl-5 pl-[10px] border-b border-greyb"
                  >
                    <div>
                      <div className="flex-1">
                        <img
                          src={Coke_Lemon}
                          alt=""
                          className="w-full rounded-[10px] h-auto"
                        />
                      </div>
                      <div className="flex-1 pb-5">
                        <span className="text-red text-[8px] my-[10px] font-openSans font-semibold">
                          INDUSTRY NEWS
                        </span>
                        <p className="font-bold md:pb-0 pb-5 text-[14px] wow fadeInDown">
                          Jeremy hunt set to introduce vape tax in budget:
                          report
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="industry_news.html"
                    className="block lg:pr-5 pr-[10px] border-r border-greyb"
                  >
                    <img
                      src={Budweiser_4pct}
                      alt=""
                      className="w-full rounded-[10px] pt-5"
                    />
                    <div>
                      <div className="flex-1"></div>
                      <div className="flex-1">
                        <span className="text-red text-[8px] my-[10px] font-openSans font-semibold">
                          INDUSTRY NEWS
                        </span>
                        <p className="font-bold md:pb-0 pb-5 text-[14px] wow fadeInDown">
                          Government introduces plans to exonerate post office
                          scandal victims
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="industry_news.html"
                    className="block lg:pl-5 pl-[10px]"
                  >
                    <img
                      src={Biona_Organic_Pastes_Range}
                      alt=""
                      className="w-full rounded-[10px] pt-5"
                    />
                    <div>
                      <div className="flex-1"></div>
                      <div className="flex-1">
                        <span className="text-red text-[8px] my-[10px] font-openSans font-semibold">
                          INDUSTRY NEWS
                        </span>
                        <p className="font-bold md:pb-0 pb-5 text-[14px] wow fadeInDown">
                          Grocery inflation drops to two-year low as Brits opt
                          for budget shopping: Kantar
                        </p>
                      </div>
                    </div>
                  </a>
                </div> */}
              </div>
              <div className="md:col-span-1  col-span-4 bg-[#E4E3E1] lg:p-5 p-[10px] rounded-md">
                {loading ? <Skeleton count={1} height={200} /> :(
                <div>
                  <Link to={`post/${productNews?.data?.posts[4].post_slug}`}>
                    <img
                      src={productNews?.data?.posts[4]?.post_image}
                      alt=""
                        className="w-full object-cover md:max-h-72 max-h-56 rounded-[10px]"
                      style={{ height: "20rem", width: "100%" }}
                    />
                  </Link>
                  <Link to={`cate/${productNews?.data?.posts[4]?.cat?.cate_slug}/${productNews?.data?.posts[4]?.cat?.cate_id}`}>
                    <span className="text-[8px] text-red font-openSans font-semibold mt-[20px] mb-[10px]">
                      {productNews?.data?.posts[4]?.cat?.cate_title.toUpperCase()}
                    </span></Link>
                  <Link to={`post/${productNews?.data?.posts[4].post_slug}`}>
                    <p className="text-[14px] font-bold wow fadeInDown">
                      {productNews?.data?.posts[4]?.post_title}
                    </p>
                  </Link>
                </div> )}
              </div>
              <div className="md:col-span-3 col-span-4 bg-[#E8E8E8] rounded-md px-5 py-3">
                <img
                  src={Asian_Trader_leaderboard}
                  alt=""
                  className="w-auto object-cover mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-4 md:block hidden col-span-12 bg-[#231E1E] p-5 rounded-[10px]">
            <h2 className="text-[20px] text-white font-black">CURRENT ISSUE</h2>
            <div className="h-[10px] border-y-2 border-grey mb-5 mt-[10px]"></div>
            <div className="lg:mt-14 mt-10 lg:mb-[50px] mb-8">
              <img src={AT_938} alt="" className="w-full object-cover h-auto" />
            </div>
            <button className="border-2 border-red text-white lg:py-3 py-2 text-sm rounded-md  mx-auto w-full font-black">
              Digital Archive
            </button>
            <button className="bg-red text-white lg:py-3 py-2 rounded-md mx-auto text-[14px] w-full mt-[20px] font-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_ProductNews;

