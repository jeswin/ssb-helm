import { Menu, Tray, MenuItem } from "electron";
import * as path from "path";

export function createTrayMenu() {
  const tray = new Tray(path.join(__dirname, "../../icon.png"));

  const networks = new MenuItem({
    label: "Networks (master active)",
    submenu: [
      {
        label: "master (running, 2.1GB)",
        submenu: [
          {
            label: "Stop"
          },
          {
            label: "Generate Invite"
          },
          {
            label: "Manage Plugins"
          },
          {
            label: "Manage Space"
          },
          {
            label: "Settings"
          }

        ]
      },
      {
        label: "intranet (0.5GB)",
        submenu: [
          {
            label: "Start"
          },
          {
            label: "Manage Plugins"
          },
          {
            label: "Manage Space"
          },
          {
            label: "Settings"
          }

        ]
      },
      {
        label: "testnet (0.1GB)",
        submenu: [
          {
            label: "Start"
          },
          {
            label: "Manage Plugins"
          },
          {
            label: "Manage Space"
          },
          {
            label: "Settings"
          }

        ]
      },
      {
        label: "personal (5.5GB)",
        submenu: [
          {
            label: "Start"
          },
          {
            label: "Manage Plugins"
          },
          {
            label: "Manage Space"
          },
          {
            label: "Settings"
          }
        ]
      },
      {
        label: "Add Networks"
      }
    ]
  });

  const apps = new MenuItem({
    label: "Apps (12)",
    submenu: [
      {
        label: "master/Patchwork"
      },
      {
        label: "master/Patchbay"
      },
      {
        label: "intranet/Taskbutt"
      },
      {
        label: "Add Apps"
      }
    ]
  });

  const settings = new MenuItem({
    label: "Settings",
    submenu: [
      {
        label: "Network Stats"
      },
      {
        label: "Run on startup",
        type: "checkbox",
        checked: true
      }
    ]
  });

  const menu = new Menu();
  menu.append(networks);
  menu.append(apps);
  menu.append(settings);
  tray.setToolTip("Helm for Secure ScuttleButt.");
  tray.setContextMenu(menu);
}

export function updateMenu() {}
