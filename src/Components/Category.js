import React from "react";
import Widget from "./Widgets";
import WidgetForm from "./WidgetForm";

const Category = ({ category }) => {
  return (
    <div className="category">
      <h3>{category.name}</h3>
      {category.widgets.map((widget) => (
        <Widget key={widget.id} widget={widget} categoryId={category.id} />
      ))}
      <WidgetForm categoryId={category.id} />
    </div>
  );
};

export default Category;
