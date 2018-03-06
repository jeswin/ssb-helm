import { ipcRenderer } from "electron";
import * as React from "react";
import * as ReactDOM from "react-dom";
import AddNewNetwork from "./components/networks/AddNewNetwork";
import { Router, navigateTo } from "sailboat";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import AppBar from "material-ui/AppBar";

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
    index: <div>Home</div>,
    networks() {
      return {
        add: <AddNewNetwork />
      };
    }
  });

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("container")
);
navigateTo("/");
