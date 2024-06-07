"use client"
import { useEffect, useState } from 'react';

function FetchSupabaseCP() {
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies'); // API 엔드포인트
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: 30 }}>"use client"</h1>
      <button
        className='border'
        onClick={() => setVisible(!visible)}
      >visible</button>
      {data ? (
        visible && (<pre>{JSON.stringify(data, null, 2)}</pre>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FetchSupabaseCP;
