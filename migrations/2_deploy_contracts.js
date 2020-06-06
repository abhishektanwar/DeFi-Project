const Dai = artifacts.require("./Dai.sol");

module.exports = function(deployer) {
  deployer.deploy(Dai);
};
