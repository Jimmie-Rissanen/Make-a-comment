import React from "react";

function Comment({ comment, name, content, replies }) {
  return (
    <div key={comment.id} className="comment">
      <h3>{name}</h3>

      <div className="content">
        <div>
          <img src="https://picsum.photos/80" className="profile-picture"></img>
        </div>
        {content}
      </div>
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
