export const SAFE_ABI = [
  'function getTransactionHash(address to, uint256 value, bytes memory data, uint8 operation, uint256 safeTxGas, uint256 baseGas, uint256 gasPrice, address gasToken, address payable refundReceiver, uint256 _nonce) public view returns (bytes32)',
  'function nonce() view returns (uint256)',
  'function addOwnerWithThreshold(address owner, uint256 _threshold) public override',
  'function removeOwner(address prevOwner, address owner, uint256 _threshold) public override',
  'function getOwners() public view override returns (address[] memory)',
  'function approveHash(bytes32 hash) public',
  'function executeTransaction(address to, uint256 value, bytes calldata data, uint8 operation, uint256 safeTxGas, uint256 baseGas, uint256 gasPrice, address gasToken, address payable refundReceiver, bytes memory signatures, string memory remark) public returns (bool success)',
  'function changeThreshold(uint256 _threshold) public override',
  'function swapOwner(address prevOwner, address oldOwner, address newOwner) public override',
  'function getOwners() public view override returns (address[] memory)',
  'function getThreshold() public view override returns (uint256)',
  'function setup(address[] calldata _owners,uint256 _threshold,address to,bytes calldata data,address fallbackHandler,address paymentToken,uint256 payment,address payable paymentReceiver) public',
];
