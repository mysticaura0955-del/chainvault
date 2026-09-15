//-----------------------------imports--------------------//

import { BrowserProvider, Contract, parseEther } from "ethers";
import { WalletAbi } from "../contracts/Abi";
import { Walletaddress } from "../contracts/contractconfig";

//----------------------------------------connecting wallet---------------------------------------//

async function connectwallet() {
  if (!window.ethereum) {
    throw new Error("Wallet not found");
  }
  const provider = new BrowserProvider(window.ethereum);
  const accounts = await provider.send("eth_requestAccounts", []);
  return accounts[0];
}

//---------------------------------------Authentication of contract ----------------------------//
async function getcontract() {
  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new Contract(Walletaddress, WalletAbi, signer);

  return contract;
}

//----------------------------------viewbalance------------------------------//
async function viewbalance() {
  const contract = await getcontract();
  const balance = await contract.viewbalance();
  return balance;
}

//--------------------------------------Deposit-------------------------------//

async function Deposit(amount) {
  const contract = await getcontract();
  const value = parseEther(amount);
  const deposit = await contract.depositor({ value: value });
  const confirmation = await deposit.wait();
  return confirmation;
}

//--------------------------withdrawal--------------------------//

async function withdrawing(amount) {
  const valuereceived = await getcontract();
  const value = parseEther(amount);
  const tx = await valuereceived.withdrawal(value);
  const confirmation = await tx.wait();
  return confirmation;
}

//----------------exports-----------------//
export { connectwallet };
export { getcontract };
export { viewbalance };
export { Deposit };
export { withdrawing };
