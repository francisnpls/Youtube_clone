import React from 'react';
import { Link } from 'react-router-dom';
import { DemoPicture } from '../utils/constant';

const ChannelCard = ({ channelDetail }) => {

  if (channelDetail?.type !== 'channel') {
    return null; 
  }

  return (
    <div className='flex justify-center items-center h-full flex-col'>
      <img src={channelDetail?.thumbnail[0]?.url || DemoPicture } alt="thumbnail" 
      className="w-[170px] h-[170px] rounded-full mb-4"
      />
      <div className="flex gap-2 items-center">
        <h3 className="text-[16px] font-bold">
        {channelDetail?.channelTitle}
        </h3>
        <i className="fa-solid fa-circle-check text-[#a7a7a7] text-[12px]"></i>
      </div>
      <span className="text-[#545454] text-[14px] font-medium">
        {channelDetail?.subscriberCount}
      </span>
    </div>
  )
}

export default ChannelCard