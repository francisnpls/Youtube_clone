import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import { FetchFromAPI } from '../utils/FetchFromAPI';
import {DemoPicture} from '../utils/constant';
import { Comments, RelatedVideos } from './';

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null)
  const [channelDetail, setChannelDetail] = useState(null)
  const [commentDetail, setCommentDetail] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([])
  const [comments, setComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    FetchFromAPI(`video?id=${id}`)
      .then((data) => {
        setVideoDetail(data)
        console.log(data)

        FetchFromAPI(`channel?id=${data?.channelId}`)
          .then((data) => {
            setChannelDetail(data.meta)

          })
      })
    
    FetchFromAPI(`comments?id=${id}`)
      .then((data) => {
        setCommentDetail(data)

      })
    
    FetchFromAPI(`comments?id=${id}`)
      .then((data) => {
        setComments(data.data)

      })

    FetchFromAPI(`related?id=${id}`)
      .then((data) => {
        setRelatedVideos(data.data)
        console.log(data)
      })
  }, [id])

  const calculateTimeDifference = (publishDate) => {
    const now = new Date();
    const published = new Date(publishDate);
    const diffInMilliseconds = now - published;

    const years = Math.floor(diffInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    if (years > 0) {
      return `${years} ${years === 1 ? 'year ago' : 'years ago'}`;
    }

    const months = Math.floor(diffInMilliseconds / (30 * 24 * 60 * 60 * 1000));
    if (months > 0) {
      return `${months} ${months === 1 ? 'month ago' : 'months ago'}`;
    }

    return 'Just published recently';
  };


  return (
    <section className="px-[25px] pr-[30px] py-[20px] flex gap-5">
      <div className="flex-[3]">
        <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${id}`} 
          className="!w-full !h-[70vh] !rounded-[10px] overflow-hidden" 
          controls 
        />
        <p className="my-[10px] font-bold text-[20px]">
          {videoDetail?.title}
        </p>
        <div className="flex">
          <div className="flex gap-3 items-center"> 
            <img src={DemoPicture} alt="profile" className="rounded-full h-[42px] w-[42px]"/>
            <div>
              <Link to={`/channel/${videoDetail?.channelId}`}> 
                <div className="flex gap-2 items-center">
                  <h2 className="text-[15px] font-bold">
                    {videoDetail?.channelTitle.length > 20 ? `${videoDetail?.channelTitle.slice(0, 20)}...` : videoDetail?.channelTitle}
                  </h2>
                  <i className="fa-solid fa-circle-check text-[#a7a7a7] text-[10px]"></i>
                </div>
              </Link>              
              <p className="text-[12px] text-[#5d5d5d]"> {channelDetail?.subscriberCount} subscriber </p>
            </div>
            <button className="w-[100px] h-[80%] bg-black hover:bg-[#000000dd] text-white rounded-[30px] ml-3 text-[12px] font-bold text-center">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-[10px] p-[10px] bg-[#f1f1f1] rounded-[10px]">
          <p className="font-bold text-[14px]">
            {parseInt(videoDetail?.viewCount).toLocaleString()} views {calculateTimeDifference(videoDetail?.publishDate)}
          </p>
          <p className="text-[14px]">
            {videoDetail?.description}
          </p>
        </div>
        <div className="mt-3">
          <h2 className="text-[18px] font-bold">
            {commentDetail?.commentsCount} Comments
          </h2>
          <Comments comments = {comments} />
        </div> 
      </div> 

      <div className="flex-[1]">
        <RelatedVideos relatedVideos = {relatedVideos} />
      </div>
    </section>
  )
}

export default VideoDetail