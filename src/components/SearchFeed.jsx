import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchFromAPI } from '../utils/FetchFromAPI';
import { sideBar } from '../utils/constant';
import { SearchFeedCard } from './';

const SearchFeed = () => {

  const [videos, setvideos] = useState([])
  const { searchText } = useParams()

  useEffect(() => {
    FetchFromAPI(`search?query=${searchText}`)
      .then((data) => {
        setvideos(data.data)
        console.log(data)
      })
  }, [searchText])
  

  return (
    <section className='flex h-[91vh]'>
      <div className="sticky left-0 w-[70px] h-[88vh]">
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
        
      <div className="px-[50px] w-full py-[10px] h-[91vh] overflow-auto">
        <div className="flex flex-col gap-4">
          {videos.map((data, index) => (
            <div key={index}> 
              {data.videoId && <SearchFeedCard video = {data} />}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default SearchFeed