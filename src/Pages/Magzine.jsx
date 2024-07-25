import React from 'react';
import img1 from '../assets/img/magazine-img-1.png';
import img2 from '../assets/img/magazine-img-2.png';
import img3 from '../assets/img/magazine-img-3.png';
import img4 from '../assets/img/magazine-img-4.png';
import img5 from '../assets/img/magazine-img-5.png';
import img6 from '../assets/img/magazine-img-6.png';

const MagazineArchive = () => {
  const magazines2024 = [
    { src: img1, issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: img2, issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: img3, issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: img4, issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: img5, issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: img6, issue: 'Issue 941', date: '5th – 18th April 2024' }
  ];

  const magazines2023 = [
    { src: 'img/magazine-img-7.png', issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: 'img/magazine-img-8.png', issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: 'img/magazine-img-9.png', issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: 'img/magazine-img-10.png', issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: 'img/magazine-img-11.png', issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: 'img/magazine-img-12.png', issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: 'img/magazine-img-13.png', issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: 'img/magazine-img-14.png', issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: 'img/magazine-img-15.png', issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: 'img/magazine-img-16.png', issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: 'img/magazine-img-17.png', issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: 'img/magazine-img-18.png', issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: 'img/magazine-img-19.png', issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: 'img/magazine-img-20.png', issue: 'Issue 941', date: '5th – 18th April 2024' },
    { src: 'img/magazine-img-21.png', issue: 'Issue 941', date: '5th – 18th April 2024' }
  ];

  

  return (
    <>
      <section className="mb-24 bg-blur">
        <div className="container mx-auto px-7">
          <div className="px-3 border-b border-greyb pb-2 mb-5">
            <h1 className="text-dblack text-2xl font-bold">MAGAZINE ARCHIVE - 2024</h1>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 px-5">
            {magazines2024.map((magazine, index) => (
            <div key={index} className="lg:mb-0 mb-5">
              <div className="bg-[#E8E8E8] p-[15px] mb-[15px] rounded-md">
                <img src={magazine.src} alt="" className="w-full rounded-[10px]" />
                <a href="#"
                  className="text-dblack block mt-5 text-xs font-bold xl:px-10 px-5 text-center py-3 border border-black rounded-md">
                  Read Magazine
                </a>
              </div>
              <div className="text-xs text-dblack leading-5 pl-5">
                <p className="text-dblack text-xs font-black">{magazine.issue}</p>
                <p className="font-regular">{magazine.date}</p>
              </div>
            </div>
  ))}
          </div>
        </div>
      </section>

      <section className="mb-[123px]">
        <div className="container mx-auto px-7">
          <div className="px-3 border-b border-greyb pb-2 mb-5">
            <h1 className="text-dblack text-2xl font-bold">MAGAZINE ARCHIVE - 2023</h1>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 px-5">
            {magazines2023.map((magazine, index) => (
              <div key={index} className="lg:mb-0 mb-5">
                <div className="bg-[#E8E8E8] p-[15px] mb-[15px] rounded-md">
                  <img src={magazine.src} alt="" className="w-full rounded-[10px]" />
                  <a href="#"
                    className="text-dblack block mt-5 text-xs font-bold xl:px-10 px-5 text-center py-3 border border-black rounded-md">
                    Read Magazine
                  </a>
                </div>
                <div className="text-xs text-dblack leading-5 pl-5">
                  <p className="text-dblack text-xs font-black">{magazine.issue}</p>
                  <p className="font-regular">{magazine.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MagazineArchive;

