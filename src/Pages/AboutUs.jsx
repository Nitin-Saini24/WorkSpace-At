import React from 'react';
// import './AboutUs.css'; // Import your custom CSS file if needed

const AboutUs = () => {
    return (
        <section className="pb-[50px] product bg-blur">
            <div className="container mx-auto px-7 relative">
                <div className="pb-2 text-2xl text-[#231E1E] font-bold border-b border-[#d4d4d4] mb-5 lg:pl-4">
                    ABOUT US
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="lg:col-span-9 md:col-span-8 col-span-12">
                        <div className="mb-10">
                            <img src="img/Group 215.png" alt="Group 215" className="w-full rounded-[10px]" />
                        </div>
                        <div className="lg:pl-4 lg:pr-10 pr-6">
                            <p className="text-base text-[#231E1E] leading-[35px] mb-8 wow fadeInDown">
                                Asian Trader is the leading business magazine for convenience store owners. With a
                                circulation of over 40,000, Asian Trader is the voice of Asian business in the sector and
                                the title has forged an enviable reputation as the authoritative magazine for the
                                independent sector.
                            </p>
                            <p className="text-base text-[#231E1E] leading-[35px] mb-8 wow fadeInDown">
                                Founded in 1985, the magazine was launched to not only support the burgeoning Asian retail
                                sector but to also help manufacturers and suppliers communicate with Asian retailers who
                                had come to dominate the sector. Today, the title retains its unique connection with the
                                Asian community, which accounts for 75 per cent of the independent retail sector. It has a
                                wide and loyal readership and is read widely by independent retailers, wholesalers and
                                suppliers.
                            </p>
                            <p className="text-base text-[#231E1E] leading-[35px] mb-8 wow fadeInDown">
                                From hard-hitting industry news, new product launches to best practice features, market
                                surveys and interviews with award-winning retailers, Asian Trader offers comprehensive
                                coverage of the sector to help retailers better manage their business. The magazine also
                                carries news of legislation, crime and developments in the retail industry. Uniquely among
                                grocery B2B titles, the magazine also prints pages in Gujarati and Urdu.
                            </p>
                            <p className="text-base text-[#231E1E] leading-[35px] mb-8 wow fadeInDown">
                                Many of the UK’s leading grocery suppliers such as Mondelez, Nestle, Mars, Coca-Cola and
                                PepsiCo not only advertise in the magazine but consider Asian Trader a source of the latest
                                information about the industry.
                            </p>
                            <p className="text-base text-[#231E1E] leading-[35px] mb-8 wow fadeInDown">
                                Asian Trader also hosts the annual Asian Trader Awards which recognises and celebrates the
                                best and most innovative independent retailers in the country.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-12">
                        <div className="mb-[51px] bg-[#231E1E] p-5 rounded-[10px]">
                            <h2 className="text-[20px] text-white font-black">CURRENT ISSUE</h2>
                            <div className="h-[10px] border-y-2 border-grey mb-5 mt-[10px]"></div>
                            <div className="lg:mt-[60px] mt-10 lg:mb-[52px] mb-8">
                                <img src="img/AT-938.png" alt="AT-938" className="w-full h-auto" />
                            </div>
                            <button
                                className="border-2 border-red text-white lg:py-3 py-2 text-sm rounded-md font-black mx-auto w-full">
                                Digital Archive
                            </button>
                            <button
                                className="bg-red text-white lg:py-3 py-2 rounded-md mx-auto text-[14px] w-full mt-[20px] font-black">
                                Subscribe
                            </button>
                        </div>
                        <div className="">
                            <div className="bg-[#5A5A5A] text-white shadow-md px-5 py-6 max-w-md">
                                <h1 className="text-[20px] font-black mb-4">NEWSLETTER</h1>
                                <div className="h-[10px] border-y border-[#acacac] mt-5 mb-14"></div>
                                <form action="#">
                                    <div className="mb-5">
                                        <input type="text" id="name"
                                            className="shadow-sm w-full px-3 py-2 border border-white bg-[#5A5A5A] text-white focus:outline-none text-[10px] font-openSans"
                                            placeholder="Name" required />
                                    </div>
                                    <div className="mb-5">
                                        <input type="email" id="email"
                                            className="shadow-sm w-full px-3 py-2 bg-[#5A5A5A] text-white border border-gray-300 focus:outline-none text-[10px] font-openSans"
                                            placeholder="Email" required />
                                    </div>
                                    <div className="">
                                        <input type="text" id="Retailer"
                                            className="shadow-sm w-full px-3 py-2 bg-[#5A5A5A] text-white border border-gray-300 focus:outline-none text-[10px] font-openSans"
                                            placeholder="Retailer" required />
                                    </div>
                                    <div className="flex items-center justify-between mt-[62px] mb-5">
                                        <div className="flex items-center">
                                            <input type="checkbox" id="remember" className="h-2 w-2 rounded border-gray-300" />
                                            <label htmlFor="remember"
                                                className="ml-2 block text-[8px] text-white dark:text-gray-300 font-openSans">
                                                Subscribing I accept the privacy rules of this site
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-black text-white bg-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:red-500">
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
