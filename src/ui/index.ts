import { loadUrl } from "../uiHost";

export function addNewNetwork() {
  loadUrl("/addNewNetwork", { width: 400, height: 600 });
}
