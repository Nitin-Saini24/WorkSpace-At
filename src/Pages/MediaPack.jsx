
import React from 'react';
import './../App.css'; 


const MediaPack = () => {
    return (
        <section className="lg:pb-[46px] pb-8 product bg-blur">
            <div className="container mx-auto px-7 relative">
                <div className="pb-2 text-2xl text-[#231E1E] font-bold border-b border-[#d4d4d4] mb-5 px-3">
                    MEDIA PACK
                </div>
                <div className="gap-5 grid grid-cols-12">
                    <div className="lg:col-span-9 md:col-span-8 col-span-12">
                        <div className="pl-3 pr-12">
                            <p className="text-base text-[#231E1E] leading-[30px] mb-8 animate__animated animate__fadeInDown">
                                Asian Trader is the leading business magazine for convenience store owners. With a circulation of over 40,000, Asian Trader is the voice of Asian business in the sector and the title has forged an enviable reputation as the authoritative magazine for the independent sector.
                            </p>
                            <p className="text-base text-[#231E1E] leading-[30px] mb-8 animate__animated animate__fadeInDown">
                                Founded in 1985, the magazine was launched to not only support the burgeoning Asian retail sector but to also help manufacturers and suppliers communicate with Asian retailers who had come to dominate the sector. Today, the title retains its unique connection with the Asian community, which accounts for 75 per cent of the independent retail sector. It has a wide and loyal readership and is read widely by independent retailers, wholesalers and suppliers.
                            </p>
                        </div>
                        <div className="border border-[#707070] sm:p-5 p-2 md:text-2xl text-md text-sm text-[.8rem] flex justify-center items-center sm:gap-10 gap-5 rounded-xl ml-3 sm:mr-12 mr-6 font-bold">
                            CLICK HERE TO DOWNLOAD THE 2023 MEDIA PACK
                            <img className="w-auto sm:h-[26px] h-[15px]" src="img/download-icon.png" alt="Download Icon" />
                        </div>
                        <div className="mt-[66px] mr-12 text-base">
                            <div className="border-b border-[#d4d4d4] pb-2 mb-8 pl-3 font-bold">For more information contact:</div>
                            <div className="leading-8 animate__animated animate__fadeInDown pl-3">
                                Shefali Solanki<br />
                                Brand Champion<br />
                                shefali.solanki@amg.biz
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-12">
                        <div className="bg-[#231E1E] p-5 rounded-[10px]">
                            <h2 className="text-[20px] text-white font-black">CURRENT ISSUE</h2>
                            <div className="h-[10px] border-y-2 border-grey mb-5 mt-[10px]"></div>
                            <div className="lg:mt-[60px] mt-10 lg:mb-[52px] mb-8">
                                <img src="img/AT-938.png" alt="Current Issue" className="w-full h-auto" />
                            </div>
                            <button className="border-2 border-red text-white lg:py-3 py-2 text-sm rounded-md font-black mx-auto w-full ">
                                Digital Archive
                            </button>
                            <button className="bg-red text-white lg:py-3 py-2 rounded-md mx-auto text-[14px] w-full mt-[20px] font-black">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediaPack;

