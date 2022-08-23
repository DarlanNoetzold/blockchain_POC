const blockchain = artifacts.require("blockchain");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("blockchain", function (/* accounts */) {
  it("should assert true", async function () {
    await blockchain.deployed();
    return assert.isTrue(true);
  });
});
