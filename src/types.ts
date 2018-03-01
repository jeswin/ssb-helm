export interface NetworkConfig {
  name: string
}
export interface HelmConfig {
  networks: NetworkConfig[];
  activeNetworks: string[];
}

