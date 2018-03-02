import * as path from "path";
import { NetworkConfig } from "../types";
import * as env from "./env";

const ssbClient = require("ssb-client");
const ssbKeys = require("ssb-keys");

export async function generateInvite(networkConfig: NetworkConfig) {
  return () => {
    ssbClient(
      {
        host: networkConfig.host || "localhost",
        key: networkConfig.keys.id, 
        caps: networkConfig.caps,
      },
      (err: any, sbot: any, config: any) => {
        
      }
    );
  };
}
