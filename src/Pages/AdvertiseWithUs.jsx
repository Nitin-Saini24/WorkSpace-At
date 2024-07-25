import React, { useState } from 'react';

import printAds from '../assets/img/printer.png'
import digitalAds from '../assets/img/leptop.png'

const AdvertiseWithUs = () => {
    const [Ads, setAds] = useState(true);

    const handleShow1 = () => {
        setAds(true);
    };
    const handleShow2 = () => {
        setAds(false);
    };


    return (
        <section className="pb-16 bg-blur">
            <div className="container mx-auto px-7">
                <div className="px-3 border-b border-greyb pb-2 mb-10">
                    <div>
                        <h1 className="text-dblack md:text-2xl text-xl font-bold">ADVERTISE WITH US</h1>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-5">
                    <div className="lg:col-span-9 md:col-span-8  col-span-12">
                        <div className="flex mx-3 mb-5 justify-between">
                            <div className="flex items-center">
                                <img src={printAds} alt="" />
                                <h2 className={`${Ads ? " text-red  hover:text-red sm:text-2xl text-lg  sm:ml-4 ml-2 text-nowrap font-bold" :"text-dblack  hover:text-red sm:text-2xl text-lg sm:ml-4 ml-2 text-nowrap font-bold"}`} onClick={handleShow1}>Print Ads</h2>
                            </div>
                            <div className="flex  items-center sm:mr-5">
                                <img src={digitalAds} alt="" />
                                <h2 className={`${!Ads ? " text-red  hover:text-red sm:text-2xl text-lg sm:ml-4 ml-2 text-nowrap font-bold" : "text-dblack  hover:text-red sm:text-2xl text-lg sm:ml-4 ml-2  text-nowrap font-bold"}`} onClick={handleShow2}>Digital Ads</h2>
                            </div>
                        </div>
                        {Ads ? <PrintAds /> : <DigitalAds />}
                      
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-12">
                        <div className="bg-dblack p-5 rounded-[10px]">
                            <h2 className="text-[20px] text-white font-black">CURRENT ISSUE</h2>
                            <div className="h-[10px] border-y-2 border-grey mb-5 mt-[10px]"></div>
                            <img src="img/AT-938.png" alt="" className="mt-[60px] mb-[52px]" />
                            <button
                                className="border-2 border-red text-white py-3 text-sm rounded-md font-black mx-auto w-full">
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
};


function PrintAds() {
    return (
        <div>
            <div className="pl-3 pr-12">
                <p className="text-dblack text-base leading-[30px] mb-5 wow fadeInDown">
                    Asian Trader is the leading business magazine for convenience store owners. With a
                    circulation of over 40,000, Asian
                    Trader is the voice of Asian business in the sector and the title has forged an enviable
                    reputation as the authoritative
                    magazine for the independent sector.
                </p>
                <p className="text-dblack text-base leading-[30px] mb-5 wow fadeInDown">
                    Founded in 1985, the magazine was launched to not only
                    support the burgeoning Asian
                    retail sector but to also help manufacturers and suppliers communicate with Asian retailers
                    who had come to dominate the
                    sector. Today, the title retains its unique connection with the Asian community, which
                    accounts for 75 per cent of the
                    independent retail sector. It has a wide and loyal readership and is read widely by
                    independent retailers, wholesalers
                    and suppliers.
                </p>
                <p className="text-dblack text-base leading-[30px] mb-5 wow fadeInDown">
                    From hard-hitting industry news, new product launches to best practice
                    features, market surveys and
                    interviews with award-winning retailers, Asian Trader offers comprehensive coverage of the
                    sector to help retailers
                    better manage their business. The magazine also carries news of legislation, crime and
                    developments in the retail
                    industry. Uniquely among grocery B2B titles, the magazine also prints pages in Gujarati and
                    Urdu.
                </p>
                <p className="text-dblack text-base leading-[30px] mb-5 wow fadeInDown">
                    Many of the UK’s
                    leading grocery suppliers such as Mondelez, Nestle, Mars, Coca-Cola and PepsiCo not only
                    advertise in the magazine but
                    consider Asian Trader a source of the latest information about the industry.
                </p>
                <p className="text-dblack text-base leading-[30px] mb-16 wow fadeInDown">
                    Asian Trader
                    also hosts the annual Asian
                    Trader Awards which recognises and celebrates the best and most innovative independent
                    retailers in the country.
                </p>
            </div>
            <div>
                <div className="px-3 border-b border-gray-600 pb-3 mb-12">
                    <div>
                        <h2 className="text-dblack text-2xl font-bold">PRODUCTION REQUIREMENTS</h2>
                    </div>
                </div>
                <div className="leading-[24px] mb-10 font-regular px-3">
                    <h3 className="text-dblack text-base mb-4 font-black">Classified:</h3>
                    <p className="wow fadeInDown">Classified advertisements available in 1cm depths and column
                        widths of:</p>
                    <p className="wow fadeInDown">1 column – 42mm wide</p>
                    <p className="wow fadeInDown">2 columns – 90mm wide</p>
                    <p className="wow fadeInDown">4 columns – 185mm wide</p>
                </div>
                <div className="leading-[24px] mb-10 px-3">
                    <h3 className="text-dblack text-base mb-[15px] font-black">Printing Method</h3>
                    <p className="wow fadeInDown">Web Offset</p>
                </div>
                <div className="leading-[24px] mb-10 px-3">
                    <h3 className="text-dblack text-base mb-[15px] font-black">Binding Method</h3>
                    <p className="wow fadeInDown">Saddled Stitched</p>
                    <p className="wow fadeInDown">(knocks to head)</p>
                </div>
                <div className="leading-[30px] mb-10 px-3 text-base">
                    <h3 className="text-dblack text-base mb-4 font-black">Material Accepted:</h3>
                    <p className="mb-5 wow fadeInDown">PDF (preferred format) High-resolution Acrobat PDFs.
                        Resolution: 300 dpi.
                        All colours CMYK. All fonts MUST BE embedded.</p>
                    <p className="mb-5 wow fadeInDown"> EPS, JPEG or TIFF <br />
                        Photoshop (etc) ﬁles as eps, jpeg or tiff. Resolution: 300 dpi. All colours CMYK.<br />
                        •Illustrator EPS files<br />
                        Preferably to version CC, Fonts embedded or converted to outlines.
                        Resolution: 300 dpi.
                        All
                        colours
                        CMYK.</p>
                </div>

                <div className="mb-12 pr-6 text-nowrap overflow-auto">
                    <table className="font-Merriweather">
                        <thead>
                            <tr>
                                <th>Adv name</th>
                                <th>Bleed size</th>
                                <th>Trimmed size <br /> (width x height)</th>
                                <th>Type area <br /> (width x height)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Front Cover (trimmed to left of page)</td>
                                <td>163×233 mm</td>
                                <td>163×233 mm</td>
                                <td>163×233 mm</td>
                            </tr>
                            <tr>
                                <td>Half Page Spread</td>
                                <td>426×150 mm</td>
                                <td>426×150 mm</td>
                                <td>426×150 mm</td>
                            </tr>
                            <tr>
                                <td>Strip Upright</td>
                                <td>57×303 mm</td>
                                <td>57×303 mm</td>
                                <td>57×303 mm</td>
                            </tr>
                            <tr>
                                <td>Island Trading</td>
                                <td>57×303 mm</td>
                                <td>57×303 mm</td>
                                <td>57×303 mm</td>
                            </tr>
                            <tr>
                                <td>Half Page Vertical</td>
                                <td>106×303 mm</td>
                                <td>106×303 mm</td>
                                <td>106×303 mm</td>
                            </tr>
                            <tr>
                                <td>Third Page Vertical</td>
                                <td>73×303 mm</td>
                                <td>73×303 mm</td>
                                <td>73×303 mm</td>
                            </tr>
                            <tr>
                                <td>Double Page Spread</td>
                                <td>426×303 mm</td>
                                <td>426×303 mm</td>
                                <td>426×303 mm</td>
                            </tr>
                            <tr>
                                <td>Quarter Page Standard</td>
                                <td>4106×149 mm</td>
                                <td>4106×149 mm</td>
                                <td>4106×149 mm</td>
                            </tr>
                            <tr>
                                <td>Third Page Strip</td>
                                <td>216×102 mm</td>
                                <td>216×102 mm</td>
                                <td>216×102 mm</td>
                            </tr>
                            <tr>
                                <td>Half Page Horizontal</td>
                                <td>216×150 mm</td>
                                <td>216×150 mm</td>
                                <td>216×150 mm</td>
                            </tr>
                            <tr>
                                <td>Quarter Page Strip</td>
                                <td>216×78 mm</td>
                                <td>216×78 mm</td>
                                <td>216×78 mm</td>
                            </tr>
                            <tr>
                                <td>Sixth Page Strip</td>
                                <td>216×52 mm</td>
                                <td>216×52 mm</td>
                                <td>216×52 mm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='lg:col-span-3 col-span-12'>
                <div className="px-3  border-b border-greyb pb-3 mb-7">
                    <div>
                        <h2 className="text-dblack text-base font-bold">For more information contact:</h2>
                    </div>
                </div>
                <div className="text-dblack text-base leading-[30px] px-3">
                    <p className="wow fadeInDown">Shefali Solanki</p>
                    <p className="wow fadeInDown">Brand Champion</p>
                    <p className="wow fadeInDown">shefali.solanki@amg.biz</p>
                </div>
            </div>
        </div>
    );
}

function DigitalAds() {
    return (
        <div className="grid grid-cols-12 gap-5">
            <div className=" col-span-12">
                <div className="mb-12 pr-6  text-nowrap overflow-auto">
                    <table className="font-Merriweather">
                        <tbody >
                            <tr>
                                <td><strong>Type</strong></td>
                                <td><strong>Dimensions [w x h]</strong></td>
                                <td><strong>GIF/JPEG (File Size)</strong></td>
                                <td><strong>HTML5 Max file size</strong></td>
                                <td><strong>3rd Party Tag</strong></td>
                                <td><strong>DPI</strong></td>
                                <td><strong>Link to Spec</strong></td>
                            </tr>
                            <tr>
                                <td>Skin</td>
                                <td>1910×1000</td>
                                <td>150kb</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>Welcome Popup</td>
                                <td>640×500</td>
                                <td>150kb</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>Leaderboard</td>
                                <td>728×90</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>Mobile Leaderboard</td>
                                <td>320×50</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>Under Nav Sticky Banner (Desktop)</td>
                                <td>1200×78</td>
                                <td>150kb</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>Under Nav Sticky Banner (Mobile)</td>
                                <td>310×50</td>
                                <td>150kb</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>MPU</td>
                                <td>300×250</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>DMPU</td>
                                <td>300×600</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>DMPU</td>
                                <td>300×600</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>Billboard (Desktop)</td>
                                <td>970×250</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>Billboard (Mobile)</td>
                                <td>350×50</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>Parallax (Desktop)</td>
                                <td>970×250</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>Parallax (Mobile)</td>
                                <td>350×50</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td colSpan="7"><strong>Both to be Supplied</strong></td>
                            </tr>
                            <tr bgcolor="#f1f1f2">
                                <td>Leaderboard</td>
                                <td>728×90</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr bgcolor="#f1f1f2">
                                <td>Mobile Leaderboard</td>
                                <td>320×50</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td colSpan="7">&nbsp;</td>
                            </tr>
                            <tr bgcolor="#f1f1f2">
                                <td>Under Nav Sticky Banner (Desktop)</td>
                                <td>1200×78</td>
                                <td>150kb</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr bgcolor="#f1f1f2">
                                <td>Under Nav Sticky Banner (Mobile)</td>
                                <td>310×50</td>
                                <td>150kb</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td colSpan="7">&nbsp;</td>
                            </tr>
                            <tr bgcolor="#f1f1f2">
                                <td>MPU (Desktop)</td>
                                <td>300×250</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr bgcolor="#f1f1f2">
                                <td>DMPU (Mobile)</td>
                                <td>300×600</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td colSpan="7">&nbsp;</td>
                            </tr>
                            <tr bgcolor="#f1f1f2">
                                <td>Billboard (Desktop)</td>
                                <td>970×250</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr bgcolor="#f1f1f2">
                                <td>Billboard (Mobile)</td>
                                <td>350×50</td>
                                <td>150kb</td>
                                <td>200kb</td>
                                <td>HTTPS</td>
                                <td>72</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className=' col-span-9'>
                <div className="px-3 border-b border-greyb pb-3 mb-7">
                    <div>
                        <h2 className="text-dblack text-base font-bold">For more information contact:</h2>
                    </div>
                </div>
                <div className="text-dblack text-base leading-[30px] px-3">
                    <p className="wow fadeInDown">Shefali Solanki</p>
                    <p className="wow fadeInDown">Brand Champion</p>
                    <p className="wow fadeInDown">shefali.solanki@amg.biz</p>
                </div>
            </div>
        </div>
    );
}

export default AdvertiseWithUs;
