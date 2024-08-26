import { ADD_WIDGET, REMOVE_WIDGET } from "./Actions";

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [{ id: 1, name: "Widget 1", text: "" }],
    },
    {
      id: 2,
      name: "Another Dashboard",
      widgets: [
        { id: 2, name: "Widget 2", text: "" },
      ],
    },
  ],
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [
                  ...category.widgets,
                  { ...action.payload.widget, id: Date.now() },
                ],
              }
            : category
        ),
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== action.payload.widgetId
                ),
              }
            : category
        ),
      };
    default:
      return state;
  }
};
