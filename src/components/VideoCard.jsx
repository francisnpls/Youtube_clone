import React from 'react'
import { Link } from 'react-router-dom';
import { logo } from '../utils/constant';

const VideoCard = ({ video }) => {

  if (video?.type !== 'video' && video?.type !== 'playlist') {
    return null; 
  }

  const formatViews = (views) => {
    views = parseInt(views);

    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'k';
    } else {
      return views.toLocaleString();
    }
  };

  const thumbnailUrl = video?.thumbnail[0]?.url
  const viewCounts = video?.viewCount
  const formattedViews = formatViews(viewCounts)

  return (
    <div className="mb-5 cursor-pointer">
      <Link to={`/video/${video?.videoId}`}>
        <div className="relative">
          <img src={thumbnailUrl} alt="Video Thumbnail" 
          className="w-full rounded-[10px]"
          />
          <p className="text-white font-bold px-[6px] text-[11px] rounded-[5px] bg-[#000000e7] absolute bottom-1 right-1">
            {video?.lengthText}
          </p>
        </div>
      </Link>
      <div className="mt-3 flex gap-3"> 
        <img src={video?.channelThumbnail ? video?.channelThumbnail[0]?.url : logo} alt="channelThumbnail" className="rounded-full w-[35px] h-[35px]"/>
        <div>
          <Link to={`/video/${video?.videoId}`}>
          <p className="font-bold text-[16px]">
            {video?.title.length > 65 ? `${video?.title.slice(0, 65)}...` : video?.title}
          </p>
          </Link>
          
          <Link to={`/channel/${video?.channelId}`}>
            <div className="flex gap-1 items-center">
              <p className="text-[#545454] text-[14px] font-medium">
                {video?.channelTitle}
              </p>
              <i className="fa-solid fa-circle-check text-[#a7a7a7] text-[12px]"></i>
            </div>
          </Link>
          
          <div className="flex gap-1 items-center">
            <span className="text-[#545454] text-[14px] font-medium">
              {formattedViews} views
            </span>
            <div className="w-[3px] h-[3px] rounded-full bg-[#939292]" />
            <span className="text-[#545454] text-[14px] font-medium">
              {video?.publishedText}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard