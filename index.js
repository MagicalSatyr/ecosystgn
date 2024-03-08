// 获取以太坊网络版本信息
async function getNetworkVersion(web3) {
  return web3.eth.net.getVersion();
}

// 判断指定地址是否是合法的以太坊地址
function isValidEthereumAddress(address) {
  return Web3.utils.isAddress(address);
}

// 获取指定地址的以太坊区块链交易记录
async function getBlockchainTransactions(web3, address) {
  const transactions = await web3.eth.getTransactionByAddress(address);
  return transactions;
}
