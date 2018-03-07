import * as jetpack from "redux-jetpack";

/* Plugins */
export type Plugins = {
  network: string;
  isLoading: boolean;
  plugins: string[];
};

export type PluginsLoading = {
  isLoading: boolean;
};

export type State = {
  plugins?: Plugins;
};

const initialState: State = {};

const store = jetpack.createStore(initialState);

export default store;
