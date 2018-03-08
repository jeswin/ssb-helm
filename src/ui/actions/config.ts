import store from "../store";
import * as config from "../../services/config";

export async function loadPlugins(network: string) {
  store.updateState(
    "plugins",
    state => ({
      network,
      isLoading: true,
      plugins: {}
    }),
    "PLUGINS_LIST_LOADING"
  );
  const networkConfig = await config.readNetworkConfig(network);
  store.updateState(
    "plugins",
    state => ({
      ...state,
      network,
      isLoading: false,
      plugins: networkConfig.plugins
    }),
    "PLUGINS_LIST_LOADED"
  );
}
