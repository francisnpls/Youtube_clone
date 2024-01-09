import React from 'react';
import { ChannelVideosCard } from './';

const ChannelVideos = ({ videos }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {videos.map((data, index) => (
        <div key={index}>
          {data.videoId && <ChannelVideosCard video = {data} />}
        </div>
      ))}
    </div>
  )
}

export default ChannelVideos