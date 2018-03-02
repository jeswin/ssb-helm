export interface SBotConfig {
  type: string;
  name: string;
  host: string;
  port: string;
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
