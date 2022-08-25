const blockchain = artifacts.require("blockchain");

module.exports = async function(_deployer) {
  await _deployer.deploy(blockchain);
};
