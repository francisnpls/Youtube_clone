import React from 'react';
import { useState, useEffect } from 'react';
import { FetchFromAPI } from '../utils/FetchFromAPI';
import { useParams } from 'react-router-dom';
import { sideBar } from '../utils/constant';
import ChannelVideos from './ChannelVideos';


const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    FetchFromAPI(`channel?id=${id}`)
      .then((data) => {
        setChannelDetail(data.meta)
      })
    
    FetchFromAPI(`channel?id=${id}`)
      .then((data) => {
        setVideos(data.data)
        console.log(data)
      })
  }, [id])
  
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
        
        <div className="sticky px-[70px] w-full h-[91vh] overflow-auto">
          <img src={channelDetail?.image?.banner[0]?.url} alt="banner" 
          className="rounded-[10px] w-full"
          />
          <div className="flex gap-7 items-center mt-5">
            <img src={channelDetail?.thumbnail[2]?.url} alt="thumbnail" 
            className="w-[150px] h-[150px] rounded-full" 
            />
            <div>
              <div className="flex gap-2 items-center">
                <h1 className="text-[35px] font-bold">
                  {channelDetail?.title}
                </h1>
                <i className="fa-solid fa-circle-check text-[#969595] text-[12px]"></i>
              </div>
              <p className="text-[14px] text-[#5a5959]">
                {channelDetail?.subscriberCount} subscribers
              </p>
              <p className="text-[14px] text-[#5a5959] mt-2">
                {channelDetail?.description}
              </p>
              <button className="w-[100px] h-[30px] bg-black hover:bg-[#000000dd] text-white rounded-[30px] text-[14px] font-bold text-center mt-3">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-5">
            <span className="text-[25px] font-bold"> Videos </span> 
            <ChannelVideos videos = {videos} />
          </div>
        </div>

      </section>
  )
}

export default ChannelDetail