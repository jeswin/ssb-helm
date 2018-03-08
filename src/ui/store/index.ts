import * as jetpack from "redux-jetpack";

/* Plugins */
export type Plugins = {
  network: string;
  isLoading: boolean;
  plugins: {
    [key: string]: boolean;
  };
};

/* Storage */
export type Space = {
  network: string;
  dirs: {
    [key: string]: DirSpace;
  };
  total: number;
};

export type DirSpace = {
  size: number;
  files: number;
};

export type State = {
  plugins?: Plugins;
};

const initialState: State = {};

const store = jetpack.createStore(initialState);

export default store;
