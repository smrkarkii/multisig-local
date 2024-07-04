import CosmosWalletWidget from './components/CosmosWalletWidget';
import { CosmosChains } from './constants/chains';

function App() {
  return (
    <>
      <div className="app">
        <h3 className="text-lg font-bold">IBC</h3>
        <div className="w-[400px]">
          <CosmosWalletWidget chain={CosmosChains.archway} />
        </div>
      </div>
    </>
  );
}

export default App;
