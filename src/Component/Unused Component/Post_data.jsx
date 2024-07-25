import React, { useState } from 'react'

export default function Post_data() {
    const [data, setData] = useState(null);
    console.log(data)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://192.168.29.24/asiantrader/wp-json/api/v1/category-news', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cate_id: '6',
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.toString());
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};


