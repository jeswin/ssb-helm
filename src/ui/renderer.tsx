import { ipcRenderer } from "electron";
import * as React from "react";
import * as ReactDOM from "react-dom";
import AddNewNetwork from "./components/networks/AddNewNetwork";
import { Router, navigateTo } from "sailboat";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import ManagePlugins from "./components/networks/ManagePlugins";
import { Provider } from "react-redux";
import store from "./store";

ipcRenderer.on("loadUrl", (e: any, data: any) => {
  console.log(data);
  navigateTo(data.url);
});

/*
  By default load nothing.
  This is going to be hidden anyway.
*/
const App = () =>
  Router({
    index: <div>Nothing to see here.</div>,
    networks: async (network: string) => ({
      add: <AddNewNetwork />,
      plugins: {
        manage() {
          return <ManagePlugins network={network} />;
        }
      }
    })
  });

ReactDOM.render(
  <Provider store={store.reduxStore}>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("container")
);

// This will be invisible, window is hidden.
// There's nothing to see at '/'.
navigateTo("/");
