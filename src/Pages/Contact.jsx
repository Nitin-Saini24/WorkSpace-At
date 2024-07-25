import React from 'react';

const ContactUs = () => {
    return (
        <section className="mb-8 bg-blur">
            <div className="container mx-auto px-7">
                <div className="px-3 border-b border-greyb pb-2 mb-5">
                    <div>
                        <h1 className="text-dblack text-2xl font-bold">CONTACT US</h1>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-5">
                    <div className="lg:col-span-9 md:col-span-8 col-span-12">
                        <div className="flex flex-col sm:flex-row mb-[51px]">
                            <div className="lg:mx-3 ml-3">
                                <div className=" sm:mb-[43px] mb-[20px] leading-7 text-base">
                                    <h4 className="font-semibold">MANAGING EDITOR</h4>
                                    <p className="wow fadeInDown">Kalpesh R Solanki</p>
                                    <p className="wow fadeInDown">Tel: 020 7654 7728</p>
                                    <p className="wow fadeInDown">Email:kalpesh@amg.biz</p>
                                </div>
                                <div className="leading-7 text-base">
                                    <h4 className="font-semibold">DESIGN & LAYOUT</h4>
                                    <p className="wow fadeInDown">Kamlesh Patel</p>
                                    <p className="wow fadeInDown">Tel:020 7654 7759</p>
                                    <p className="wow fadeInDown">Email:kamlesh@gg2.net</p>
                                </div>
                            </div>
                            <div className="sm:ml-5 ml-2 mt-4 sm:mt-0">
                                <div className="sm:mb-[43px] mb-[20px] leading-7 text-base">
                                    <h4 className="font-semibold uppercase">EXECUTIVE EDITOR</h4>
                                    <p className="wow fadeInDown">Shailesh R Solanki</p>
                                    <p className="wow fadeInDown">Tel:020 7654 7779</p>
                                    <p className="wow fadeInDown">Email:shailesh@amg.biz</p>
                                </div>
                                <div className="leading-7 text-base">
                                    <h4 className="font-semibold uppercase">EVENT MANAGER</h4>
                                    <p className="wow fadeInDown">Tanuja Parekh</p>
                                    <p className="wow fadeInDown">Tel: 020 7654 7740</p>
                                    <p className="wow fadeInDown">Email:tanuja.parekh@amg.biz</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9934.881861721526!2d-0.101706!3d51.499997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876053bfdbac9ff%3A0x5e9c739b32bad8aa!2sAsian%20Media%20Group!5e0!3m2!1sen!2sin!4v1713863101745!5m2!1sen!2sin"
                                className="w-[100%] h-[420px] iwidth" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-12">
                        <div className="bg-[#231E1E] p-5 rounded-[10px]">
                            <h2 className="text-[20px] text-white font-black">CURRENT ISSUE</h2>
                            <div className="h-[10px] border-y-2 border-grey mb-5 mt-[10px]"></div>
                            <img src="img/AT-938.png" alt="" className="mt-[60px] mb-[52px]" />
                            <button className="border-2 border-red text-white py-3 text-sm rounded-md font-black mx-auto w-full">
                                Digital Archive
                            </button>
                            <button className="bg-red text-white py-3 rounded-md mx-auto text-[14px] w-full mt-[28px]">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
