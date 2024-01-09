  import React from 'react';
  import { useState, useEffect } from 'react';
  import { sideBar } from '../utils/constant';
  import { TopBar } from './';
  import Videos from './Videos';
  import { FetchFromAPI } from '../utils/FetchFromAPI';


  const Feed = () => {
    const [selectedText, setSelectedText] = useState('All')
    const [videos, setVideos] = useState([])

    useEffect(() => {
      FetchFromAPI(`search?query=${selectedText}`)
        .then((data) => {
          setVideos(data.data)
          console.log(data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [selectedText])
    

    return (
      <section className='flex h-[91vh]'>
        <div className="sticky left-0 w-[70px] h-[90vh]">
        {sideBar.map((bar) => (
          <div key={bar.name} className="py-[15px] hover:bg-[#e4e4e4] cursor-pointer">
            <div className="flex justify-center items-center"> 
              <img src={bar.icon} alt="icon" className="w-[25px] object-contain" />
            </div>
            <p className="text-[10px] text-center">
              {bar.name}
            </p>
          </div>
        ))}
        </div>
        <div>
          <TopBar
            selectedText = {selectedText}
            setSelectedText = {setSelectedText}
          />
          <Videos videos = {videos} />
        </div>

      </section>
    )
  }

  export default Feed