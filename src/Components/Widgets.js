import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../Redux/Actions";

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemoveWidget = () => {
    dispatch(removeWidget(categoryId, widget.id));
  };

  return (
    <div className="widget">
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <button onClick={handleRemoveWidget}>Remove Widget</button>
    </div>
  );
};

export default Widget;
