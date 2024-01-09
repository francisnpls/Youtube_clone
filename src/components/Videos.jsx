import React from 'react';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos }) => {
  return (
    <div className="grid grid-cols-3 p-[10px] pr-[30px] gap-4 overflow-auto h-[82vh]">
      {videos.map((data, index) => (
        <div key={index}>
          {data.type && <VideoCard video = {data} />}
          {data.type && <ChannelCard channelDetail = {data} />}
        </div>
      ))}
    </div>
  )
}

export default Videos