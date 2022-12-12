import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const CounterProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
export default store;
