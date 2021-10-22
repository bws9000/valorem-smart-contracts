// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const VContract = artifacts.require("VContract");

module.exports = function (deployer) {
  deployer.deploy(VContract, "Valorem", "VNFT", "https://admin.advalorem.io/api/Nft/tokens");
};