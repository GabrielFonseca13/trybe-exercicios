import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";
import { legacy_createStore as createStore } from "redux";

const reducer = (state = INITIAL_STATE, action) => {
  return state;
}

const store = createStore(reducer, composeWithDevTools());
