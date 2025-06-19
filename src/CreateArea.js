import React, { useState } from "react";
import "./styles1.css";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const submitNote = (event) => {
    event.preventDefault();

    // ✅ Check if title or content is empty
    if (note.title.trim() === "" || note.content.trim() === "") {
      alert("Please enter both a title and content for the note.");
      return;
    }

    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div className="create-area">
      <form className="form">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="this is title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote} className="add-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
