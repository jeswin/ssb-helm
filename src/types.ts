/*
  This is the structure of the .ssb/config file
  Incomplete for now.
*/
export interface SSBConfigJson {
  plugins?: {
    [key: string]: boolean
  },
  caps?: {
    shs?: string;
    sign?: string;
  }
}

export interface SBotConfig {
  type: string;
  name: string;
  host: string;
  port: string;
  plugins?: {
    [key: string]: boolean
  },
  keys?: {
    id: string;
    public: string;
  };
  caps?: {
    shs?: string;
    sign?: string;
  };
}

export interface RemoteSBotConfig extends SBotConfig {
  type: "remote";
}

export interface LocalSBotConfig extends SBotConfig {
  type: "local";
  name: string;
  dir?: string;
}

export type NetworkConfig = RemoteSBotConfig | LocalSBotConfig;

export interface HelmConfig {
  networks: NetworkConfig[];
  activeNetworks: string[];
  rememberActiveNetworks: boolean;
}
