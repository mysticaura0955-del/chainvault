import { useState } from "react";
import { Deposit, viewbalance } from "../utils/wallet.js";
import { formatEther } from "ethers";

function Deposits({ setBalance, setactivityrefresh, settransactionstatus }) {
  const [amount, setamount] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  async function handleDeposit() {
    if (!amount) {
      seterror("please enter the amount");
      return;
    }

    if (Number.isNaN(Number(amount))) {
      seterror("please enter a valid amount");
      return;
    }

    if (Number(amount) <= 0) {
      seterror("please enter a valid amount");
      return;
    }

    setloading(true);
    settransactionstatus("processing");

    try {
      await Deposit(amount);

      const newBalance = await viewbalance();
      const ethBalance = formatEther(newBalance);

      settransactionstatus("success");
      setamount("");
      setactivityrefresh((prev) => prev + 1);
      setBalance(ethBalance);
    } catch (error) {
      settransactionstatus("fail");
      setamount("");
    } finally {
      setloading(false);
    }
  }

  return (
    <>
      <input
        placeholder="Enter the amount"
        onChange={(e) => {
          setamount(e.target.value);
          seterror("");
        }}
        value={amount}
      />

      {error && <p className="input-error"> {error}</p>}

      <button onClick={handleDeposit}>
        {loading === true ? (
          <>
            <span className="loader"></span>
            Processing...
          </>
        ) : (
          "Deposit"
        )}
      </button>
    </>
  );
}

export { Deposits };
