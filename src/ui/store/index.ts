import * as jetpack from "redux-jetpack";

const initialState = {
  networks: [
    { type: "ssb", count: 1000 },
    { type: "ipfs", count: 100 },
    { type: "dat", count: 10 }
  ],
  user: {
    name: "jeswin"
  }
};

const store = jetpack.createStore(initialState);

export default store;