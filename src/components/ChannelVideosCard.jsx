import React from 'react';
import { Link } from 'react-router-dom';

const ChannelVideosCard = ({ video }) => {
  return (
    <div className="mb-6">
      <Link to={`/video/${video?.videoId}`}>
        <div className="relative">
          <img src={video?.thumbnail[3]?.url} alt="thumbnail" 
          className="w-full rounded-[10px]"
          />
          <p className="absolute bottom-1 right-1 text-[12px] text-white font-bold bg-[#000000cb] px-2 rounded-[4px]">
            {video?.lengthText}
          </p>
        </div>
        <p className="text-[14px] font-bold leading-[18px] mt-3">
        {video?.title.length > 50 ? `${video?.title.slice(0, 50)}...` : video?.title}
      </p>
      </Link>
      <div className="flex gap-1 items-center mt-1">
        <p className="text-[12px] text-[#555555]">
          {parseInt(video?.viewCount).toLocaleString()} views
        </p>
        <div className="w-[3px] h-[3px] rounded-full bg-[#555555]" />
        <p className="text-[12px] text-[#555555]">
          {video?.publishedText}
        </p>
      </div>
    </div>
  )
}

export default ChannelVideosCard