import * as path from "path";
import * as fse from "fs-extra";
import * as env from "./env";
import { HelmConfig, LocalSBotConfig, SSBConfigJson } from "../types";
import exception from "../exception";
import { getValueOrDefault } from "../utils/type-utils";

const ssbKeys = require("ssb-keys");

export function updateConfig() {}

function isLocalHost(host: string) {
  return host && ["localhost", "127.0.0.1", "0.0.0.0"].includes(host);
}

export async function readConfig(): Promise<HelmConfig> {
  const homeDir = env.getHomeDirectory();
  const configFile = path.join(homeDir, ".ssb-helm", "config");

  /*
    _config might be missing values, and needs defaults.
    We're gonna do typeof checks and assign missing values.
    It's assigned a type merely to avoid typos.
  */
  const configFromFile: HelmConfig = fse.existsSync(configFile)
    ? JSON.parse(fse.readFileSync(configFile).toString())
    : {};

  return {
    networks:
      typeof configFromFile.networks !== "undefined"
        ? await Promise.all(
            configFromFile.networks.map(
              async n =>
                n.type === "remote"
                  ? n
                  : await (async () => {
                      const ssbDir = n.name === "main" ? ".ssb" : `.${n.name}`;
                      const ssbNetworkConfig = await readNetworkConfig(n.name);

                      const localNetwork: LocalSBotConfig = {
                        type: "local",
                        name: n.name,
                        host: "localhost",
                        port: "8008",
                        plugins: ssbNetworkConfig.plugins,
                        caps: ssbNetworkConfig.caps
                          ? {
                              shs: ssbNetworkConfig.caps.shs,
                              sign: ssbNetworkConfig.caps.sign
                            }
                          : undefined,
                        keys: isLocalHost(n.host)
                          ? n.keys
                          : (() => {
                              const secretPath = path.join(
                                homeDir,
                                ssbDir,
                                "secret"
                              );
                              const keys = ssbKeys.loadSync(secretPath);
                              return { id: keys.id, public: keys.public };
                            })()
                      };

                      return localNetwork;
                    })()
            )
          )
        : [{ type: "local", name: "main", host: "localhost", port: "8008" }],
    activeNetworks: getValueOrDefault(configFromFile.activeNetworks, ["main"]),
    rememberActiveNetworks: getValueOrDefault(
      configFromFile.rememberActiveNetworks,
      true
    )
  };
}

export async function readNetworkConfig(
  network: string
): Promise<SSBConfigJson> {
  const homeDir = env.getHomeDirectory();
  const ssbDir = network === "main" ? ".ssb" : `.${network}`;

  const ssbNetworkConfigPath = path.join(homeDir, ssbDir, "config");

  const config = JSON.parse(
    (await fse.readFile(ssbNetworkConfigPath)).toString()
  ) as SSBConfigJson;

  console.log(ssbNetworkConfigPath, config);

  return config;
}
