import React from 'react';
import { Link } from 'react-router-dom';

const RelatedVideosCard = ({ relatedVideo }) => {

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

  const viewCounts = relatedVideo?.viewCount
  const formattedViews = formatViews(viewCounts)

  const handleLinkClick = () => {
    window.location.href = `/video/${relatedVideo?.videoId}`;
  };

  return (
    <div className="flex gap-2">
      <div className='w-[300px]'>
        <Link to={`/video/${relatedVideo?.videoId}`} onClick={handleLinkClick}>
          <div className="relative"> 
            <img src={relatedVideo?.thumbnail[0]?.url} alt="video"
            className="w-[180px] rounded-[10px]"
            />
            <p className="text-white font-bold px-[6px] text-[11px] rounded-[5px] bg-[#000000e7] absolute bottom-1 right-1">
              {relatedVideo?.lengthText}
            </p>
          </div>
        </Link>
      </div>
      
      <div className="w-full">
        <Link to={`/video/${relatedVideo?.videoId}`} onClick={handleLinkClick}>
          <p className="text-[14px] font-bold">
            {relatedVideo?.title.length > 60 ? `${relatedVideo?.title.slice(0, 60)}...` : relatedVideo?.title}
          </p>
        </Link>

        <Link to={`/channel/${relatedVideo?.channelId}`}>
          <div className="flex gap-1 items-center mt-1">
            <h1 className="text-[12px] text-[#5d5d5d]">
              {relatedVideo?.channelTitle}
            </h1>
            <i className="fa-solid fa-circle-check text-[#a7a7a7] text-[12px]"></i>
          </div>
        </Link>

        <div className="flex gap-1 items-center">
          <p className="text-[#545454] text-[11px]">
            {formattedViews} views
          </p>
          <div className="w-[3px] h-[3px] rounded-full bg-[#939292]" />
          <p className="text-[#545454] text-[11px]">
            {relatedVideo?.publishedTimeText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default RelatedVideosCard