import AutoLaunch = require("auto-launch");

export function loadOnStartup() {
  const launcher = new AutoLaunch({ name: "Helm" });
  launcher.enable();
}

export function disableLoadOnStartup() {
  const launcher = new AutoLaunch({ name: "Helm" });
  launcher.disable();
}
