import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { getComments, addComment, deleteComment, getReplies } from "../utils";
import Form from "./Form";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const rootComments = comments
    .filter((rootComment) => rootComment.parent === 0)
    .sort((a, b) => a.id - b.id);

  useEffect(() => {
    getComments().then((data) => setComments(data));
  }, [comments]);

  return (
    <div className="container">
      <h1>Make a comment!</h1>
      <div className="comment-container">
        <Form handleSubmit={addComment} />
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            name={rootComment.name}
            content={rootComment.content}
            replies={getReplies(rootComment.id, comments)}
            onDelete={deleteComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
