/* eslint-disable no-undef */
import { useState } from "react";
import at_logo_white from "../../assets/img/AT-logo-White.png";

import ploom_X_POTY_Web_Banner from "../../assets/img/Ploom-X_POTY-Web-Banner-728x90px-v3.png";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { Link } from "react-router-dom";

function MidHeader({data}) {
  const [modalOpen, setModelOpen] = useState(false);
  const [modalOpen2, setModelOpen2] = useState(false);

  // console.log(data.data)

  const handleClose = () => {
    setModelOpen(false);
    setModelOpen2(false);
  };
  return (
    <>
      <div className="container sm:px-7 mx-auto">
        <div className="flex justify-between sm:items-start items-center h-[90px] bg-red rounded-b-[10px]  sm:bg-white pt-2 sm:pt-0">
          <div className="w-[190px] mr-8 sm:bg-red rounded-br-lg rounded-bl-lg px-5 py-6">
            <Link to={"/"}>
              <img src={data?.header_logo} alt="AT-logo-White" />
            </Link>
          </div>
          <div className="flex sm:mt-2 md:mt-0 ">
            <div className="mr-[10px] hidden md:block ">
              <img
                src={ploom_X_POTY_Web_Banner}
                alt="Ploom-X_POTY"
                className="w-full h-auto"
              />
            </div>

            {/* log in button   */}
            <div className="pr-2 sm:block flex justify-center  sm:pr-0">
              {/* <a href="#" className="block"> */}
              <button
                onClick={() => setModelOpen(true)}
                href="#"
                className="sm:text-14 text-4 sm:px-16 px-4 sm:max-w-[160px]  max-w-[100px] lg:py-3 py-2 sm:bg-red bg-white text-red sm:text-white rounded-[10px] text-xs text-center block"
              >
                Login
              </button>
              {/* </a> */}

              {/* sign up button  */}
              {/* <a href="#" className="block mt-2"> */}
              <button
                href="#"
                onClick={() => setModelOpen2(true)}
                className="sm:text-14 sm:block hidden text-8 sm:px-16 px-8 sm:max-w-[160px] max-w-[100px] lg:py-3 py-2 bg-black text-white rounded-[10px] text-xs text-center whitespace-nowrap  mt-2"
              >
                Sign Up
              </button>
              <button type="submit" className="m-2 px-3 mx-5 search_btn inline-block border-white  rounded-xl  sm:hidden  text-white" aria-label="Search">
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
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
      <LoginModal modalOpen={modalOpen} handleClose={handleClose} />
      <SignupModal modalOpen2={modalOpen2} handleClose={handleClose} />
    </>
  );
}
export default MidHeader;


// return (
//   <>
//     <div className="container px-7 mx-auto">
//       <div className="flex justify-between items-center h-[90px] bg-red rounded-[10px] sm:rounded-none sm:bg-white pt-2 sm:pt-0">
//         <div className="w-[190px] mr-8 bg-red rounded-br-lg rounded-bl-lg px-5 py-6">
//           <Link to={"/"}>
//             <img src={data?.header_logo} alt="AT-logo-White" />
//           </Link>
//         </div>
//         <div className="flex  sm:mt-4 md:mt-2">
//           <div className="mr-[10px] hidden md:block ">
//             <img
//               src={ploom_X_POTY_Web_Banner}
//               alt="Ploom-X_POTY"
//               className="w-full h-auto"
//             />
//           </div>

//           {/* log in button   */}
//           <div className="pr-2 flex sm:block  sm:pr-0">
//             {/* <a href="#" className="block"> */}
//             <button
//               onClick={() => setModelOpen(true)}
//               href="#"
//               className="sm:text-14 text-4 sm:px-16 px-4  sm:max-w-[160px]  max-w-[100px] lg:py-3 py-2 sm:bg-red bg-white text-red sm:text-white rounded-[10px] text-xs text-center block"
//             >
//               Login
//             </button>
//             {/* </a> */}

//             {/* sign up button  */}
//             {/* <a href="#" className="block mt-2"> */}
//             <button
//               href="#"
//               onClick={() => setModelOpen2(true)}
//               className="sm:text-14 text-4 sm:px-16 px-4 hidden sm:block sm:max-w-[160px] max-w-[100px] lg:py-3 py-2 bg-black text-white rounded-[10px] text-xs text-center whitespace-nowrap  mt-2"
//             >
//               Sign Up
//             </button>
//             <button type="submit" className="m-2 mr-5 text-white" aria-label="Search">
//               <svg
//                 className="fill-current h-3 w-3"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 version="1.1"
//                 id="Capa_1"
//                 x="0px"
//                 y="0px"
//                 viewBox="0 0 56.966 56.966"
//                 style={{ enableBackground: "new 0 0 56.966 56.966" }}
//                 xmlSpace="preserve"
//                 width="512px"
//                 height="512px"
//               >
//                 <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
//               </svg>
//             </button>
//             {/* </a> */}
//           </div>
//         </div>
//       </div>
//     </div>
//     <LoginModal modalOpen={modalOpen} handleClose={handleClose} />
//     <SignupModal modalOpen2={modalOpen2} handleClose={handleClose} />
//   </>
// );