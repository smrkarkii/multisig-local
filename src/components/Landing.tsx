import React, { useState, useEffect } from 'react';
import { useEthersSigner } from '../EtherJs/ethers';
import { ethers } from 'ethers';
import { abi } from '../abi/SAFE_ABI';
// import { getEthersSigner } from '../EtherJs/ethers';
import { config } from '../config';
import { getChains, getChainId, getConnections, getConnectorClient } from '@wagmi/core';
import { avalancheFuji } from 'viem/chains';

const Landing = () => {
  const [proposalId, setProposalId] = useState('');
  const signer = useEthersSigner();
  const chainId = getChainId(config); // account, chainid, metamask

  // console.log(chainslist[0].chainId);

  const BASE_SEPOLIA_SAFE = '0xcb89369c0d4f08caf70804cb86e6fc7a54e34cd7';
  const OPTIMISM_SEPOLIA_SAFE = ' 0xef13387eb29a15a060e96d3c871b121246e37d2f';
  const ARBITRUM_SEPOLIA_SAFE = '0x716a39c0447d4baeccea5fbac2f8250235c11210';
  const BINANCE_TESTNET_SAFE = '0x84eb197ec63d112681a3c89ea75bd86fc026d72b';
  const SEPOLIA_SAFE = '0x397867ea85fb9f95f41ea8086228ec2071fb864b';
  const FUJI_SAFE = '0x252ebcf1c923b929ef0944c244255d11ab0caf8e';
  const AVALANCHE = '';
  const ARBITRUM = '';
  const OPTIMISM = '';
  const BASE = '';

  const contractList = {
    '84532': BASE_SEPOLIA_SAFE,
    '11155111': SEPOLIA_SAFE,
    '43113': FUJI_SAFE,
    '43114': AVALANCHE,
    '421614': ARBITRUM_SEPOLIA_SAFE,
    '11155420': OPTIMISM_SEPOLIA_SAFE,
    '42161': ARBITRUM,
    '10': OPTIMISM,
    '8453': BASE,
  };

  const handleChange = (e) => {
    setProposalId(e.target.value);
  };

  const handleSubmit = async () => {
    if (!signer) {
      console.error('Signer is undefined. Check initialization.');
      return;
    }

    console.log('Signer:', signer);

    try {
      let contract = new ethers.Contract(contractList[chainId], abi, signer);
      // const bytes32proposal = ethers.utils.formatBytes32String(proposalId);
      console.log(contract);
      const bytes32proposal = proposalId;
      // console.log(bytes32proposal, 'changed to bytes32');
      const tx = await contract.approveHash(bytes32proposal);
      // const tx = await contract.approvedHashes();

      // Wait for the transaction to be mined
      await tx.wait();
      console.log('Transaction confirmed:', tx.hash);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    console.log('Proposal ID:', proposalId);
  }, [proposalId]);

  useEffect(() => {
    console.log('Current chain ID:', chainId);
    let address = contractList[chainId];
    console.log('Contract address:', address);
  }, [chainId]);

  return (
    <div className="pl-32 pt-10">
      <p className="text-xl">Enter proposal hash to approve the proposal.</p>
      <div className="flex flex-row pt-7">
        <div>
          <input
            type="text"
            id="hash"
            name="hash"
            className="pl-3 border border-gray-400 h-10 w-96"
            value={proposalId}
            onChange={handleChange}
          />
        </div>
        <div className="pl-3">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleSubmit}
          >
            Approve proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
