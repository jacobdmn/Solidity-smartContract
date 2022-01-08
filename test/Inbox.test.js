const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async () => {
  try {
    accounts = await web3.eth.getAccounts();
  } catch (error) {
    console.error("Error:", error);
  }
});

describe("Inbox", () => {
  it("deployed the contract", () => {
    console.log(accounts);
  });
});
