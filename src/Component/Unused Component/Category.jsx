import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Category() {
    const { category } = useParams(); // Get the category from the route
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchNews = async () => {
    //         setLoading(true);
    //         try {
    //             const response = await fetch(`/api/news?category=${category}`); // Replace with your API endpoint
    //             const data = await response.json();
    //             setNewsData(data);
    //         } catch (error) {
    //             console.error('Error fetching news:', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchNews();
    // }, [category]);

    if (loading) return <div>Loading...</div>;

    return (
        <section className="pb-5 news mb-20 bg-blur">
            <div className="container mx-auto px-7">
                <div className="flex justify-between items-center px-5 border-b border-gray-600 pb-2 mb-5">
                    <h1 className="text-[#231E1E] text-2xl font-bold">NEWS</h1>
                    <div className="news-item">
                        <ul className="flex text-[#231E1E] text-xs list-none">
                            {['crime', 'features', 'industry-news', 'interviews', 'reports'].map((item) => (
                                <li key={item} className="ml-2">
                                    <Link to={`/news/${item}`} className="lg:px-6 px-3 py-1 rounded-md border border-white hover:border hover:border-red font-bold">{item.toUpperCase()}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-5">
                    <div className="lg:col-span-9 col-span-8">
                        <div className="grid grid-cols-12 gap-5 mb-10">
                            {newsData.map((news, index) => (
                                <div key={news.id} className="lg:col-span-4 col-span-6">
                                    <div className="rounded-[10px] bg-[#EEEEEE] h-full">
                                        <img src={news.imageUrl} alt={news.title} className="w-full rounded-[10px]" />
                                        <div className="px-[23px] pt-[18px] pb-[23px]">
                                            <span className="text-[10px] text-[#9E9E9E] font-openSans font-semibold uppercase">{news.category}</span>
                                            <h2 className="text-sm mt-[15px] mb-[10px] font-black wow fadeInDown">{news.title}</h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Placeholder */}
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-[#9E9E9E] text-[10px]">Page 1 of {Math.ceil(newsData.length / 10)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 col-span-4">
                        {/* Sidebar and Must Read Section */}
                        {/* You can customize this section with API data as well */}
                    </div>
                </div>
            </div>
        </section>
    );
};


// Largest Contentful Paint element 5, 920 ms
// Enable text compression Potential savings of 2, 890 KiB
// Avoid large layout shifts 4 layout shifts found
// Minify JavaScript Potential savings of 1, 845 KiB
// Reduce unused JavaScript Potential savings of 1, 147 KiB
// Eliminate render - blocking resources Potential savings of 80 ms
// Serve images in next - gen formats Potential savings of 5, 303 KiB
// Use HTTP / 2 44 requests not served via HTTP / 2
// Properly size images Potential savings of 4, 274 KiB
// Remove duplicate modules in JavaScript bundles Potential savings of 45 KiB
// Page prevented back / forward cache restoration 1 failure reason
// Image elements do not have explicit width and height
// Minify CSS Potential savings of 3 KiB
// Serve static assets with an efficient cache policy 39 resources found
// Ensure text remains visible during webfont load
// Defer offscreen images Potential savings of 1, 405 KiB
// Efficiently encode images Potential savings of 637 KiB
// Avoid enormous network payloads Total size was 11, 201 KiB
// Avoid an excessive DOM size 1,098 elements
   