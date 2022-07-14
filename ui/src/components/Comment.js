import { useState } from "react";
import { deleteComment, updateComment, addComment } from "../utils";
import Form from "./Form";

function Comment({ comment, name, content, replies }) {
  const [reply, setReply] = useState(false);
  const [update, setUpdate] = useState(false);
  const handleReplyToggle = () => {
    setReply(!reply);
  };
  const handleUpdateToggle = () => {
    setUpdate(!update);
  };

  return (
    <div key={comment.id} className="comment">
      <h3>{name}</h3>

      <div className="content">
        <div>
          <img
            src="https://picsum.photos/80"
            className="profile-picture"
            alt={`profile ${comment.id}`}
          ></img>
        </div>
        {update ? (
          <Form id={comment.id} handleSubmit={updateComment} />
        ) : (
          content
        )}
      </div>
      <div className="buttons">
        <button
          type="button"
          className={update ? "btn btn-dark" : "btn btn-success"}
          onClick={handleUpdateToggle}
        >
          {update ? "Close" : "Update"}
        </button>
        <button
          type="button"
          className={reply ? "btn btn-dark" : "btn btn-warning"}
          onClick={handleReplyToggle}
        >
          {reply ? "Close" : "Reply"}
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteComment(comment.id)}
        >
          Delete
        </button>
      </div>
      {reply && <Form handleSubmit={addComment} parent={comment.id} />}
      {replies.length > 0 && (
        <div className="replies">
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              name={reply.name}
              content={reply.content}
              replies={[]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
