const TokenFactory = artifacts.require("TokenFactory");
const Token = artifacts.require('Token')

contract('TokenFactory', async (accounts) => {
    let account_one = accounts[0];

    let NullAddr = "0x0000000000000000000000000000000000000000"
    let Supply = 10000 * 10 ** 18;
    let Name = "TestCoin";
    let Label = "TST";

    it("Should Create Simple Token", async () => {
        let instance = await TokenFactory.deployed();
        let tokenTx = await instance.createToken(Name, Label, 18, Supply, {from: account_one})
        assert.ok(tokenTx.logs.length == 1, "Too many Events");
        const log = tokenTx.logs[0];

        assert.ok(log.event == "TokenCreated");

        assert.ok(log.args._owner == account_one, "Incorrect owner addr");


    });
});


