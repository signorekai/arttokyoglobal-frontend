/*
 * Ethereum
 */
export const ethereumTestnet = {
  chainId: '0x5',
  chainName: 'goerli',
  name: 'Goerli',
  blockExplorer: {
    name: 'Etherscan (Goerli)',
    generateContractUrl: (contractAddress) => `https://goerli.etherscan.io/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress) => `https://goerli.etherscan.io/tx/${transactionAddress}`,
  },
}

export const ethereumMainnet = {
  chainId: '0x1',
  chainName: 'homestead',
  name: 'Mainnet',
  blockExplorer: {
    name: 'Etherscan',
    generateContractUrl: (contractAddress) => `https://etherscan.io/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress) => `https://etherscan.io/tx/${transactionAddress}`,
  },
}