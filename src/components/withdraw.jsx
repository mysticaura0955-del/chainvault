import { useState } from "react";
import { withdrawing } from "../utils/wallet";
import { viewbalance } from "../utils/wallet";
import { formatEther, Transaction } from "ethers";
import { parseEther } from "ethers";

function withdraw({ setbalance, setactivityrefresh, settransactionstatus }) {
  const [defwithrawal, actwithdrawal] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  async function withdrawer() {
    const currentbalance = await viewbalance();
    const withdrawamount = parseEther(defwithrawal);

    if (!defwithrawal) {
      seterror("please enter a valid amount");
      return;
    }
    if (Number(defwithrawal) <= 0) {
      seterror("please enter a valid amount");
      return;
    }
    if (Number.isNaN(Number(defwithrawal))) {
      seterror("please enter a valid amount");
      return;
    }
    if (currentbalance < withdrawamount) {
      seterror("insufficient balance");
      return;
    }

    try {
      setloading(true);
      settransactionstatus("processing");
      const confirmwithdrawal = await withdrawing(defwithrawal);
      const newbalance = await viewbalance();
      const ethbalance = formatEther(newbalance);
      setbalance(ethbalance);
      actwithdrawal("");
      setactivityrefresh((prev) => prev + 1);
      settransactionstatus("success");
    } catch (error) {
      settransactionstatus("fail");
      actwithdrawal("");
    } finally {
      setloading(false);
    }
  }

  return (
    <div className="action-card">
      <div className="card-heading">
        <div className="icon withdraw-icon">↑</div>

        <div>
          <h3>Withdraw ETH</h3>
          <p>Remove ETH from your vault</p>
        </div>
      </div>

      <input
        type="text"
        placeholder="Enter amount"
        onChange={(e) => {
          actwithdrawal(e.target.value);
          seterror("");
        }}
        value={defwithrawal}
      />
      {error && <p className="input-error">{error}</p>}

      <button onClick={withdrawer}>
        {loading === true ? (
          <>
            <span className="loader"></span> Processing...
          </>
        ) : (
          "Withdraw"
        )}
      </button>
    </div>
  );
}

export { withdraw };
