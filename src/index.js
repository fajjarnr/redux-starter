import store from "./store";

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "bug1",
  },
});

store.dispatch({
  type: "removeBug",
  payload: {
    id: 1,
  },
});

console.log(store.getState());
