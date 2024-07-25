import { useEffect, useState, Suspense, lazy } from "react";
const BottomHeader = lazy(() => import("./BottomHeader"));
const MidHeader = lazy(() => import("./MidHeader"));
const TopHeader = lazy(() => import("./TopHeader"));

function Header() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError("");
        const token = 'YXBwbndlYnRlY2hub2xvZ2llc0BnbWFpbC5jb206OWVmOTJmMDM5Y2FjMDVhYWU2ZDYzMTBhYWNiYzljMGU='; 
        const response = await fetch('http://192.168.29.24/asiantrader/wp-json/api/v1/header', {
          headers: {
            Authorization: `Basic ${token}`,
            'Content-Type': 'application/json'
          },
        });

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const jsonData = await response.json();
        if (data.code === 401 ) throw new Error("Data not found");
        setData(jsonData.data);
        setError("");
      } catch (error) {
        setError(error);
      }
      finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); 

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error.message}</div>;
  // }




  return (
    <Suspense fallback={<div>Loading headers...</div>}>
      <header>
        <TopHeader data={data} />
        <div className="bg-[#231E1E]  sm:bg-transparent">
        <MidHeader data={data} />
        </div>
        <BottomHeader data={data} />
      </header>
    </Suspense>
  );
}

export default Header;
