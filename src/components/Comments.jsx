import React from 'react';
import { CommentCard } from './';

const Comments = ({ comments }) => {
  return (
    <div className="mt-2 grid grid-row-1 gap-5">
      {comments.map((item, index) => (
        <div key={index}>
          {item.commentId && <CommentCard comment = {item} />}
        </div>
      ))}
    </div>
  )
}

export default Comments