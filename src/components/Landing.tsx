import { useState, useEffect } from 'react';
// import { useapproveProposal } from '../scripts/contract';
import { SAFE_ABI } from '../utils';
import { useWriteContract } from 'wagmi';
import { useSignMessage } from 'wagmi';

export const Landing = () => {
  const FUJI_SAFE = 0x252ebcf1c923b929ef0944c244255d11ab0caf8e;
  const BASE_SEPOLIA_SAFE = 0xcb89369c0d4f08caf70804cb86e6fc7a54e34cd7;
  const OPTIMISM_SEPOLIA_SAFE = 0xef13387eb29a15a060e96d3c871b121246e37d2f;
  const ARBITRUM_SEPOLIA_SAFE = 0x716a39c0447d4baeccea5fbac2f8250235c11210;
  const BINANCE_TESTNET_SAFE = 0x84eb197ec63d112681a3c89ea75bd86fc026d72b;
  const SEPOLIA_SAFE = '0x397867ea85fb9f95f41ea8086228ec2071fb864b';

  const [proposalId, setProposalId] = useState('');

  const { signMessage } = useSignMessage();
  const { writeContract } = useWriteContract();

  const handleChange = (e) => {
    setProposalId(e.target.value);
  };

  const handleSubmit = (input) => {
    console.log('button clicked');
    try {
      // signMessage({ message: proposalId });
      writeContract({
        abi: SAFE_ABI,
        address: SEPOLIA_SAFE,
        functionName: 'approveHash',
        args: [input],
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(proposalId);
  }, [proposalId]);

  return (
    <div className="pl-32 pt-10">
      <p className="text-xl"> Enter proposal hash to approve the proposal.</p>
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
            className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => {
              handleSubmit(proposalId);
            }}
          >
            Approve proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
