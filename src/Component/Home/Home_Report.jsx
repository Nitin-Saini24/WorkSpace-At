import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AT_938 from "../../assets/img/AT-938.png";
import Skeleton from "react-loading-skeleton";


export default function Home_Report() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(reports)



  useEffect(() => {

    const fetchData = async () => {
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append('cate_id', 83);
      urlEncodedData.append('number_of_posts', 12)
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
        setReports(result);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // setReports(reportsData);
    // setFeatures(featuresData); // Using local data for this example
  }, []);
  return (
    <section className="lg:pb-24 pb-8" id="rep">
      <div className="container mx-auto sm:px-7 px-4 relative">
        <div className="inner-box2 flex items-center md:pb-[50px] sm:pb-[25px] pb-[15px] sm:pl-[36px] pl-[50px] text-[20px] text-red font-bold">
          <h2 className="uppercase text-[14px] sm:text-[20px]">{reports?.data?.category_name}</h2>
          <div className="border-y-2 h-[13px] lg:w-[75%] w-[65%] ml-auto"></div>
        </div>

        <div className="grid grid-cols-12 gap-5">

          <div className="lg:col-span-9 md:col-span-8 col-span-12 ">
            {loading === true ? (<> <Skeleton height={200} count={5} ></Skeleton></>) : error ? (<h3 className="container mx-auto px-7" >{error.message}</h3>) :(
            <div className="grid grid-cols-12 gap-5">
              {reports?.data?.posts?.slice(0, 6).map((report, index) => (
                <div key={index} className="lg:col-span-4 sm:col-span-6 col-span-12">
                  <div className="rounded-[10px] bg-[#EEEEEE] h-full">
                    <div className="">
                      <Link to={`/${report.post_slug}`}>
                        <img
                          src={report.post_image}
                          alt={report.post_slug}
                          className="w-full max-h-44 object-cover rounded-[10px]"
                          style={{ height: "11rem", width: "100%" }}
                        /></Link>
                    </div>
                    <div className="px-[23px] pt-[18px] pb-[23px]">
                      <Link to={`cate/${report.cat.cate_slug}/${report.cat.cate_id}`}>
                        <span className="text-[10px] text-[#9E9E9E] font-openSans font-semibold">
                          {report.cat.cate_title.toUpperCase()}
                        </span></Link>
                      <Link to={`/${report.post_slug}`}>
                        <h2 className="text-sm mt-[23px] mb-[18px] font-black wow fadeInDown">
                          {report.post_title}
                        </h2></Link>
                    </div>
                  </div>
                </div>
              ))}
              </div>)}
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-12">
            {reports?.data?.posts?.slice(6, 12).map((feature, index) => (
              <div key={index} className={`${index > 4 ? "grid grid-cols-12 gap-5  pb-[21px] mb-6" : "grid grid-cols-12 gap-5 border-b border-[#707070] pb-[21px] mb-6"}`}>
                <div className="col-span-4">
                  <Link to={`post/${feature.post_slug}`} >
                    <img
                      src={feature.post_image}
                      alt={""}
                      className="w-full lg:h-full object-cover rounded-[10px]"
                      style={{ height: "5rem", width: "100%" }} /></Link>
                </div>

                <div className="col-span-8">
                  <Link to={`cate/${feature.cat.cate_slug}/${feature.cat.cate_id}`}>
                    <span className="text-[8px] text-red block font-openSans font-semibold">
                      {feature.cat.cate_title.toUpperCase()}
                    </span></Link>
                  <Link to={`/${feature.post_slug}`} >
                    <p className="font-bold text-xs leading-4 wow fadeInDown">
                      {feature.post_title}
                    </p></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:hidden block  col-span-12 bg-[#231E1E] p-5 rounded-[10px]">
          <h2 className="text-[20px] text-white font-black">CURRENT ISSUE</h2>
          <div className="h-[10px] border-y-2 border-grey mb-5 mt-[10px]"></div>
          <div className="lg:mt-14 mt-10 lg:mb-[50px] mb-8">
            <img src={AT_938} alt="" className="w-full h-auto" />
          </div>
          <button className="border-2 border-red text-white lg:py-3 py-2 text-sm rounded-md  mx-auto w-full font-black">
            Digital Archive
          </button>
          <button className="bg-red text-white lg:py-3 py-2 rounded-md mx-auto text-[14px] w-full mt-[20px] font-black">
            Subscribe
          </button>
        </div>
        <div className="col-span-12 md:hidden block pt-5 ">
          <div>
            <div className="bg-[#5A5A5A] text-white shadow-md px-5 py-6 ">
              <h1 className="text-[20px] font-black mb-4">NEWSLETTER</h1>
              <div className="h-[10px] border-y border-[#acacac] mt-5 mb-14"></div>
              <form action="#">
                <div className="mb-5">
                  <input
                    type="text"
                    id="name1"
                    className="shadow-sm w-full px-3 py-2 border border-white bg-[#5A5A5A] text-white focus:outline-none text-[10px] font-openSans"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    id="email1"
                    className="shadow-sm w-full px-3 py-2 bg-[#5A5A5A] text-white border border-gray-300 focus:outline-none text-[10px] font-openSans"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="Retailer1"
                    className="shadow-sm w-full px-3 py-2 bg-[#5A5A5A] text-white border border-gray-300 focus:outline-none text-[10px] font-openSans"
                    placeholder="Retailer"
                    required
                  />
                </div>
                <div className="flex items-center justify-between mt-[62px] mb-5">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember1"
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
    </section>
  );
}
