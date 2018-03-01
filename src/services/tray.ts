import { Menu, Tray, MenuItem } from "electron";
import * as path from "path";
import { HelmConfig, NetworkConfig } from "../types";

type NetworkMenuItem = {
  label: string;
  submenu?: {
    label: string;
  }[];
};

function makeMenuItemForNetwork(
  network: NetworkConfig,
  config: HelmConfig
): NetworkMenuItem {
  return {
    label: network.name,
    submenu: [
      {
        label: !config.activeNetworks.includes(network.name) ? "Start" : "Stop"
      },
      {
        label: `Generate Invite`
      },
      {
        label: `Manage Plugins`
      },
      {
        label: `Manage Space`
      },
      {
        label: `Settings`
      }
    ]
  };
}

export function createTrayMenu(config: HelmConfig) {
  const tray = new Tray(path.join(__dirname, "../../icon.png"));

  const active =
    config.activeNetworks.length > 1
      ? `${config.activeNetworks.length} active`
      : config.activeNetworks.length === 1
        ? `${config.activeNetworks[0]} active`
        : "inactive";

  const networkItems: NetworkMenuItem[] = config.networks
    .map(n => makeMenuItemForNetwork(n, config))
    .concat({
      label: "Add Networks"
    });

  console.log(networkItems);

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
  menu.append(networkItems as any);
  menu.append(apps);
  menu.append(settings);
  tray.setToolTip("Helm for Secure ScuttleButt.");
  tray.setContextMenu(menu);
}

export function updateMenu() {}
