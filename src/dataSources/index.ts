import { assets } from "chain-registry";
import { ChainRegistryClient } from '@chain-registry/client';

const chainNames: string[] = ["osmosis", "juno", "stargaze"];

export const ChainRegistryClientDataSource = async (chainName: string): Promise<unknown> => {
  const client = new ChainRegistryClient({ chainNames });
  await client.fetchUrls();
  return client.getChainAssetList(chainName);
};

export const ChainRegistryDataSource = async (chainName: string): Promise<unknown> => {
  const assetList = await assets.find(({ chain_name }) => chain_name === chainName);
  return assetList;
};

export const providers: Record<string, (chainName: string) => Promise<unknown>> = {
  "chain-registry": ChainRegistryDataSource,
  "@chain-registry/client": ChainRegistryClientDataSource,
};