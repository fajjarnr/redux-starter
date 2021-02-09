import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed");
});

store.dispatch(projectAdded({ name: "project 1" }));
store.dispatch(actions.bugAdded({ description: "bug1" }));
store.dispatch(actions.bugAdded({ description: "bug2" }));
store.dispatch(actions.bugAdded({ description: "bug3" }));
store.dispatch(actions.bugResolved({ id: 1 }));
store.dispatch(actions.bugRemoved({ id: 1 }));

console.log(store.getState());
