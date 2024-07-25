import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Assuming you use React Router for navigation

const DynamicSection = () => {
    const { section } = useParams(); // Assuming your URL has /:section for dynamic section selection
    const [sectionData, setSectionData] = useState([]);

    // Simulated data fetching based on section (replace with actual API calls if needed)
    useEffect(() => {
        const fetchData = async () => {
            // Replace with actual API call logic
            // Example: const response = await fetch(`/api/${section}`);
            // const data = await response.json();
            // setSectionData(data);

            // Simulated data for demonstration
            let data = [];
            switch (section) {
                case 'news':
                    data = Array.from({ length: 10 }, (_, i) => ({
                        id: i + 1,
                        title: `News Title ${i + 1}`,
                        imageUrl: `img/news-img-${i + 1}.png`,
                        category: 'News',
                    }));
                    break;
                case 'products':
                    data = Array.from({ length: 10 }, (_, i) => ({
                        id: i + 1,
                        title: `Product ${i + 1}`,
                        imageUrl: `img/product-img-${i + 1}.png`,
                        category: 'Products',
                    }));
                    break;
                case 'videos':
                    data = Array.from({ length: 10 }, (_, i) => ({
                        id: i + 1,
                        title: `Video Title ${i + 1}`,
                        imageUrl: `img/video-img-${i + 1}.png`,
                        category: 'Videos',
                    }));
                    break;
                case 'magazine':
                    data = Array.from({ length: 10 }, (_, i) => ({
                        id: i + 1,
                        title: `Magazine Article ${i + 1}`,
                        imageUrl: `img/magazine-img-${i + 1}.png`,
                        category: 'Magazine',
                    }));
                    break;
                default:
                    break;
            }
            setSectionData(data);
        };

        fetchData();
    }, [section]);

    return (
        <section className="pb-5 news mb-20 bg-blur">
            <div className="container mx-auto px-7">
                {/* menu start-inner */}
                <div className="flex justify-between items-center px-5 border-b border-gray-600 pb-2 mb-5">
                    <div>
                        <h1 className="text-[#231E1E] text-2xl font-bold">{section.toUpperCase()}</h1>
                    </div>
                    <div className="news-item">
                        <ul className="flex text-[#231E1E] text-xs list-none">
                            {['news', 'products', 'videos', 'magazine'].map((item) => (
                                <li key={item} className="ml-2">
                                    <Link to={`/${item}`} className={`lg:px-6 px-3 py-1 rounded-md border border-white hover:border hover:border-red font-bold ${item === section ? 'text-red' : ''}`}>{item.toUpperCase()}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-5">
                    <div className="lg:col-span-9 col-span-8">
                        <div className="grid grid-cols-12 gap-5 mb-10">
                            {sectionData.map((item) => (
                                <div key={item.id} className="lg:col-span-4 col-span-6">
                                    <div className="rounded-[10px] bg-[#EEEEEE] h-full">
                                        <div className="">
                                            <img src={item.imageUrl} alt="" className="w-full rounded-[10px]" />
                                        </div>
                                        <div className="px-[23px] pt-[18px] pb-[23px]">
                                            <span className="text-[10px] text-[#9E9E9E] font-openSans font-semibold uppercase">{item.category}</span>
                                            <h2 className="text-sm mt-[15px] mb-[10px] font-black wow fadeInDown">{item.title}</h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DynamicSection;
