import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useLocation } from 'react-router-dom';




function TopHeader({data}) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  // console.log(inputValue)

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return; // Avoid searching if the input is empty

    setInputValue("")
    navigate(`/s/?s=${encodeURIComponent(inputValue)}`);
  };

  return (

    <div className="top_header">
      {/* <p>Current URL: {location.pathname}</p> */}
      <div className="top-header mb-[10px] md:block hidden">
        <div className="container px-7 mx-auto">
          <div className="flex justify-between items-center lg:px-10 px-5 bg-[#E8E8E8] h-[46px] rounded-br-lg rounded-bl-lg">
            <div className="overflow-auto mr-4 pb-2 mt-2">
              <ul className="flex lg:space-x-4 space-x-2 whitespace-nowrap">
                {data?.top_menu?.map((menu, index) => (
                  <React.Fragment key={index}>
                    {/* {console.log(menu.menu_target == `Yes`)} */}
                    {menu.menu_target ==="Yes" ? (
                      <li key={index}>
                        <a href={menu.menu_link} target={menu.menu_target === 'Yes' ? '_blank' : '_self'}>
                          {menu.menu_title}
                        </a>
                  </li>                
                    ) : (
                        <li key={index}>
                          <Link to={`/${menu.menu_slug}`} className="mlink">
                            {menu.menu_title}
                          </Link>
                        </li>
                    )}
                  </React.Fragment>
                ))}
                {/* {data.data.top_menu.map((menu, index) => (
                  <li key={index}>
                    <Link to={`/${menu.menu_slug}`} className="mlink">
                      {menu.menu_title}
                    </Link>
                  </li>
                ))} */}
                 {/* <li>
                  <Link to={"/advertise"} className="mlink">
                    Advertise With Us
                  </Link>
                </li>
                <li>
                  <Link to={"/subscribe"}>Subscribe</Link>
                </li>
                <li>
                  <Link to={"/magazine"}>Digital Archive</Link>
                </li>
                <li>
                  <Link to={"/mediaPack"}>Media Pack</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact Us</Link>
                </li>  */}
              </ul>
            </div>
            <div className="lg:w-[522px] ">
              <form method="post" onSubmit={handleSearch}>
              <div className="flex w-full my-3 rounded-[40px] border border-[#231E1E]">
                
                <input
                  className=" w-full border-none bg-transparent px-4 py-1 text-[10px] outline-none focus:outline-none  mr-10 hdr-srch"
                  type="search"
                  name="search"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Search..."
                  autoComplete="off"
                />
                <button type="submit" className="m-2 mr-5 text-black" aria-label="Search">
                  <svg
                    className="fill-current h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style={{ enableBackground: "new 0 0 56.966 56.966" }}
                    xmlSpace="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
