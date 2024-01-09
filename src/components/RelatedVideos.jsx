import React from 'react';
import { RelatedVideosCard } from './';

const RelatedVideos = ({ relatedVideos }) => {
  return (
    <div className="grid grid-row-1 gap-3">
      {relatedVideos.map((data, index) => (
        <div key={index}>
          {data.videoId && <RelatedVideosCard relatedVideo = {data} />}
        </div>
      ))}
    </div>
  )
}

export default RelatedVideos