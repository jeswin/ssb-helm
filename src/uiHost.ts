import { app, BrowserWindow, Menu, Tray, MenuItem } from "electron";
import * as sailboat from "sailboat";
import * as path from "path";
import * as url from "url";

let mainWindow: Electron.BrowserWindow;

type BrowserWindowOptions = {};

let mustQuit = false;

export function createWindow(options: BrowserWindowOptions = {}) {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    show: false
  });

  mainWindow.setMenu(null);

  // and load the index.html of the app.
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "../index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.on("close", e => {
    mainWindow.hide();
    if (!mustQuit) {
      e.preventDefault();
    }
  });

  //We'll start minimized.
  mainWindow.hide();

  //mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

export async function quit() {
  mustQuit = true;
  app.quit();
}

export function navigateTo(url: string) {
  sailboat.navigateTo(url);
  mainWindow.show();
}
