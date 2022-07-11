import React from "react";
import Comment from "./Comment";
import Form from "./Form";

function Comments() {
  const db = [
    {
      id: 1,
      name: "Jimmie",
      content: "JabbaOOOOO",
      parent: 0,
      createdAt: "2022-07-09T20:22:16.385Z",
      updatedAt: "2022-07-09T20:22:16.385Z",
    },
    {
      id: 2,
      name: "Jimmie",
      content: "JabbaOOOOO",
      parent: 0,
      createdAt: "2022-07-09T20:29:09.498Z",
      updatedAt: "2022-07-09T20:29:09.498Z",
    },
    {
      id: 3,
      name: "Korven",
      content:
        "Lorén hicksum dollar sallat Lorén hicksum dollar sallat Lorén hicksum dollar sallat Lorén hicksum dollar sallat Lorén hicksum dollar sallat Lorén hicksum dollar sallat Lorén hicksum dollar sallatLorén hicksum dollar sallatLorén hicksum dollar sallatLorén hicksum dollar sallatLorén hicksum dollar sallatLorén hicksum dollar sallat",
      parent: 2,
      createdAt: "2022-07-09T20:31:32.538Z",
      updatedAt: "2022-07-09T20:31:32.538Z",
    },
    {
      id: 4,
      name: "Snickers",
      content: "MHM",
      parent: 1,
      createdAt: "2022-07-09T20:31:51.243Z",
      updatedAt: "2022-07-09T20:31:51.243Z",
    },
    {
      id: 5,
      name: "Tjenare",
      content: "Japp",
      parent: 0,
      createdAt: "2022-07-09T20:32:06.849Z",
      updatedAt: "2022-07-09T20:32:06.849Z",
    },
  ];
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
