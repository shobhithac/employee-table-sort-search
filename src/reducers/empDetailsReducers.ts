import { AnyAction } from "redux";

const initialData = {
  employees: [],
};

const empDetailsReducers = (
  state = initialData,
  action: { type: string; payload: AnyAction }
) => {
  switch (action.type) {
    case "ADD_EMPLOYEES":
      return {
        ...state,
        employees: action.payload,
      };

    default:
      return state;
  }
};

export default empDetailsReducers;
