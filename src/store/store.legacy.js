import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";

export const store = createStore();
export const CounterProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
export default store;
