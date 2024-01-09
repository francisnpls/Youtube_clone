import React from 'react';
import { Link } from 'react-router-dom';

const SearchFeedCard = ({ video }) => {

  if (video?.type !== 'video') {
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

  const viewCounts = video?.viewCount
  const formattedViews = formatViews(viewCounts)

  return (
    <div className="flex gap-4 mb-2">
      <Link to={`/video/${video?.videoId}`}>
        <div className="relative !w-[360px]"> 
          <img src={video?.thumbnail[0]?.url} alt="thumbnail"
          className="w-full h-full object-contain rounded-[10px]"
          />
          <p className="text-white font-bold px-[6px] text-[11px] rounded-[5px] bg-[#000000e7] absolute bottom-1 right-1">
            {video?.lengthText}
          </p>
        </div>
      </Link>

      <div>
        <Link to={`/video/${video?.videoId}`}>
          <p className="font-bold text-[18px]">
            {video?.title}
          </p>
        </Link>
        <div className="flex gap-1 items-center mt-1">
          <span className="text-[#545454] text-[13px] font-medium">
            {formattedViews} views
          </span>
          <div className="w-[3px] h-[3px] rounded-full bg-[#939292]" />
          <span className="text-[#545454] text-[13px] font-medium">
            {video?.publishedText}
          </span>
        </div>
        <Link to={`/channel/${video?.channelId}`}>
          <div className="flex gap-1 items-center mt-2">
            <img src={video?.channelThumbnail[0]?.url} alt="thumbnailChannel" 
            className="rounded-full w-[25px] h-[25px]"
            />
            <p className="text-[#545454] text-[13px]">
              {video?.channelTitle}
            </p>
            <i className="fa-solid fa-circle-check text-[#bfbebe] text-[10px] ml-1"></i>
          </div>
        </Link>
        
        <p className="text-[#545454] text-[13px] mt-2">
          {video?.description.length > 100 ? `${video?.description.slice(0, 100)}...` : video?.description}
        </p>
      </div>
    </div>
  )
}

export default SearchFeedCard