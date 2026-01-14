import React, { useState, useEffect } from 'react' // 1. Fixed imports
import axios from 'axios'

const App = () => {
  const [usrdata, setuserData] = useState([]);

  // 2. Define the function separately
  const getdata = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30');
      setuserData(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // 3. useEffect must be outside getdata
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className='p-4 bg-zinc-900 text-white min-h-screen overflow-auto'>
      <div className='flex flex-wrap gap-4 justify-center'> 
        {usrdata.length > 0 ? (
          usrdata.map((elem, idx) => (
            <div key={elem.id || idx} className="p-2 bg-zinc-800 rounded-2xl">
              <a href={elem.download_url} target="_blank" rel="noreferrer">
                <div className='h-40 w-44 overflow-hidden'>
                  <img 
                    className='w-full h-full rounded-xl object-cover hover:scale-110 transition-transform' 
                    src={elem.download_url} 
                    alt={elem.author} 
                  />
                </div>
                <h4 className='font-bold text-sm mt-2 text-center'>{elem.author}</h4>
              </a>
            </div>
          ))
        ) : (
          <p className="text-xl">Loading images...</p>
        )}
      </div>
    </div>
  )
}

export default App;