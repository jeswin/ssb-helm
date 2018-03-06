import { loadUrl } from "../uiHost";

const networks = {
  add() {
    loadUrl("/networks.add", { width: 400, height: 600 });
  }
};

export { networks };
