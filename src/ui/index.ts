import { loadUrl } from "../uiHost";
import * as pluginActions from "./actions/plugins";

const networks = {
  async add() {
    loadUrl("/networks.add", { width: 440, height: 600 });
  },
  async managePlugins(network: string) {
    loadUrl(`/networks(${network}).plugins.manage`, { width: 440, height: 600 });
  },
  async configuration(network: string) {
    loadUrl(`/networks(${network}).configuration`, { width: 440, height: 600 });    
  }
};

export { networks };
