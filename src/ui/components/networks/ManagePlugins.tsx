import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "redux-jetpack";
import { State, Plugins } from "../../store";
import { TextField, Toggle, RaisedButton } from "material-ui";
import { orange500, grey700 } from "material-ui/styles/colors";

const styles = {
  hintStyle: {
    color: orange500
  },
  toggle: {
    marginBottom: 16
  }
};

function ManagePlugins({
  network,
  plugins
}: {
  network: string;
  plugins: Plugins;
}) {
  return plugins && !plugins.isLoading ? (
    <div>
      <h1>Plugins on {network} network</h1>
      <h3>Currently loaded</h3>
      {Object.keys(plugins.plugins).map(k => (
        <Toggle
          labelPosition="right"
          label={k}
          defaultToggled={plugins.plugins[k]}
          style={styles.toggle}
        />
      ))}
      <h3 style={{ marginTop: "2em" }}>Add a new plugin</h3>
      <p>
        <TextField
          style={{ width: 200 }}
          hintText="Plugin name"
          hintStyle={styles.hintStyle}
        />&nbsp;
        <RaisedButton style={{ width: 100 }} primary={true}>
          Add
        </RaisedButton>
      </p>
      <p style={{ color: grey700 }}>
        WARNING: Do not add plugins that you don't trust.
      </p>
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

export default connect(ManagePlugins, (state: State) => ({
  plugins: state.plugins
}));
