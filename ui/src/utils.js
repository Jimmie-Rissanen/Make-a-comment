const PORT = 5000;
const BASEURL = `http://localhost:${PORT}/`;

const getComments = async () => {
  try {
    const response = await fetch(BASEURL);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
const addComment = async (id, name, content, parent = 0) => {
  try {
    const comment = { name: name, content: content, parent };
    await fetch(BASEURL + "create", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(comment),
    });
  } catch (error) {
    console.error(error);
  }
};

const updateComment = async (id, name, content) => {
  try {
    const comment = { id: id, name: name, content: content };
    await fetch(`${BASEURL}update/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(comment),
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteComment = async (id) => {
  try {
    await fetch(`${BASEURL}delete/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const getReplies = (commentId, state) => {
  try {
    return state
      .filter((rootComment) => {
        return rootComment.parent === commentId;
      })
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  } catch (error) {
    console.error(error);
  }
};

export { getComments, addComment, updateComment, deleteComment, getReplies };
