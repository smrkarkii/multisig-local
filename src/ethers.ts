import { getPublicClient } from '@wagmi/core';
import { providers } from 'ethers';
import { type HttpTransport } from 'viem';
import { config } from './config';

export function publicClientToProvider(publicClient) {
  const { chain, transport } = publicClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  if (transport.type === 'fallback') {
    return new providers.FallbackProvider(
      (transport.transports as ReturnType<HttpTransport>[]).map(
        ({ value }) => new providers.JsonRpcProvider(value?.url, network),
      ),
    );
  }
  return new providers.JsonRpcProvider(transport.url, network);
}

export function getEthersProvider({ chainId }: { chainId?: number } = {}) {
  const publicClient = getPublicClient({
    ...config,
    chainId,
  });

  return publicClientToProvider(publicClient);
}
