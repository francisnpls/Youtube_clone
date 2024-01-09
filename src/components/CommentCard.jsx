import React from 'react';
import { like, dislike } from '../assets';

const CommentCard = ({ comment }) => {
  return (
    <div className="flex gap-3">
      <div className="">
        <img src={comment?.authorProfileImageUrl[0]?.url} alt="authorProfile" 
        className="rounded-full w-[40px] h-[40px]"
        />
      </div>
      <div className="w-[90%]">
        <h2 className="text-[12px] font-bold">
          {comment?.authorDisplayName} <span className="text-[#5d5d5d] font-normal"> 
            {comment?.publishedTimeText} 
          </span>
        </h2>
        <p className="text-[13px] mt-1">
          {comment?.textDisplay}
        </p>
        <div className="flex gap-1 mt-1 items-center">
          <img src={like} alt="like" className="w-[25px] h-[20px]"/>
          <span className="text-[#5d5d5d] font-normal text-[12px]">
            {comment?.likesCount}
          </span>
          <img src={dislike} alt="dislike" className="w-[25px] h-[21px]"/>
        </div>
      </div>
    </div>
  )
}

export default CommentCard