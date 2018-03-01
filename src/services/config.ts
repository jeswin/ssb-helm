import * as path from "path";
import * as fse from "fs-extra";
import { HelmConfig } from "../types";

const defaultConfig: HelmConfig = {
  networks: [{ name: "main" }],
  activeNetworks: ["main"]
};

export function updateConfig() {}

export function readConfig() {
  //See if the config directory exists.
  //If not, create it and add some defaults.
  const homeDir =
    process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;

  const configFile = path.join(homeDir, ".ssb-helm", "config");

  function createConfigFile() {
    fse.ensureDirSync(path.join(homeDir, ".ssb-helm"));
    fse.writeFileSync(configFile, JSON.stringify(defaultConfig));
  }

  function readConfigFile() {
    const config = JSON.parse(fse.readFileSync(configFile).toString());
    return { ...defaultConfig, config };
  }

  return fse.existsSync(configFile) ? readConfigFile() : defaultConfig;
}
