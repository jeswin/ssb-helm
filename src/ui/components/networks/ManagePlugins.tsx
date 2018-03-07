import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "redux-jetpack";
import { State, Plugins } from "../../store";

function ManagePlugins(props: { plugins: Plugins }) {
  return props.plugins && props.plugins.isLoading ? (
    <div>Nothing to see here yet.</div>
  ) : (
    <div>alright then!</div>
  );
}

export default connect(ManagePlugins, (state: State) => ({
  plugins: state.plugins
}));
