import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import Form from "./Form";

function Comments() {
  const db = [];
  const rootComments = db.filter((rootComment) => rootComment.parent === 0);

  const getReplies = (commentId) => {
    return db
      .filter((rootComment) => {
        return rootComment.parent === commentId;
      })
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };

  return (
    <div className="container">
      <h1>Make a comment!</h1>
      <div className="comment-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            name={rootComment.name}
            content={rootComment.content}
            replies={getReplies(rootComment.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Comments;
