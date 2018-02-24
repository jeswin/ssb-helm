import * as path from "path";
import * as fse from "fs-extra";

const defaultConfig = {
  networks: [{ name: "master" }]
};


export function updateConfig() {

}

export function readConfig() {
  //See if the config directory exists.
  //If not, create it and add some defaults.
  const homeDir =
    process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
  
   const configFile = path.join(homeDir, ".ssb-helm", "config");

  function createConfigFile() {
    fse.writeFileSync("")
  }

  function readConfigFile() {

  }

  return fse.exists(configDir) ? readConfigFile() : (() => {

  })();
}
