import { useState } from "react";

function Form({ handleSubmit, parent, id }) {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(id, name, content, parent);
    setContent("");
    setName("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="form-control"
      ></input>
      <textarea
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your comment..."
        className="form-control"
      ></textarea>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
