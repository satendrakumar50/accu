import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../Redux/Actions";

const WidgetForm = ({ categoryId }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    if (name && text) {
      dispatch(addWidget(categoryId, { name, text }));
      setName("");
      setText("");
    }
  };

  return (
    <div className="widget-form">
      <input
        type="text"
        placeholder="Widget Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddWidget}>Add Widget</button>
    </div>
  );
};

export default WidgetForm;
