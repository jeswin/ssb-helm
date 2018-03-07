import { loadUrl } from "../uiHost";
import * as pluginActions from "./actions/plugins";

const networks = {
  async add() {
    loadUrl("/networks.add", { width: 400, height: 600 });
  },
  async managePlugins(network: string) {
    pluginActions.loadPlugins(network);
    loadUrl(`/networks(${network}).plugins.manage`, { width: 600, height: 600 });
  }
};

export { networks };
