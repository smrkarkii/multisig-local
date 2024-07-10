import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Landing } from '../components/Landing';

//import abi

const EVMManagerPage = () => {
  return (
    <div className="evm-manager-page">
      <div>
        <ConnectButton />
        <Landing />
      </div>
    </div>
  );
};

export default EVMManagerPage;
