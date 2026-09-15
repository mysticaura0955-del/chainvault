import { connectwallet } from "../utils/wallet.js";
import { useState } from "react";
import { Contract } from "ethers";
import { formatEther } from "ethers";
import { getcontract } from "../utils/wallet.js";
import { viewbalance } from "../utils/wallet.js";
import { useEffect } from "react";

function Navbar({ setBalance }) {
  const [account, setaccount] = useState("");
  useEffect(() => {
    const handleAccountsChanged = async (accounts) => {
      setaccount(accounts[0]);
      const currentbalance = await viewbalance();
      const ethBalance = formatEther(currentbalance);
      setBalance(ethBalance);
    };

    window.ethereum?.on("accountsChanged", handleAccountsChanged);

    return () => {
      window.ethereum?.removeListener("accountsChanged", handleAccountsChanged);
    };
  }, []);

  async function handleConnect() {
    const walletadd = await connectwallet();
    setaccount(walletadd);
    const currentbalance = await viewbalance();
    const ethBalance = formatEther(currentbalance);
    setBalance(ethBalance);
  }
  return (
    <nav>
      <button onClick={handleConnect}>connect wallet</button>
      <p>{account ? `${account.slice(0, 6)}...${account.slice(-4)}` : ""}</p>
    </nav>
  );
}
export default Navbar;
