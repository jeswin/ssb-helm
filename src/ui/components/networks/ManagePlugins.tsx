import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "redux-jetpack";
import { State, Plugins } from "../../store";
import { List, ListItem } from "material-ui";

function ManagePlugins({
  network,
  pluginList
}: {
  network: string;
  pluginList: Plugins;
}) {
  console.log(pluginList);
  
  return pluginList && pluginList.isLoading ? (
    <List>
      {Object.keys(pluginList.plugins).map(k => <ListItem primaryText={k} />)}
    </List>
  ) : (
    <div>alright then!</div>
  );
}

export default connect(ManagePlugins, (state: State) => ({
  plugins: state.plugins
}));
