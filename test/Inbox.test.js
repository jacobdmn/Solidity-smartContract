const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const { interface, bytecode } = require("./../compile");
const web3 = new Web3(ganache.provider());

let inbox, accounts;

beforeEach(async () => {
  try {
    accounts = await web3.eth.getAccounts();
  } catch (error) {
    console.error("Error:", error);
  }

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["First Deployment!"],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deployed the contract", () => {
    assert.ok(inbox.options.address);
  });
});
