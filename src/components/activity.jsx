import { useEffect, useState } from "react";
import { getcontract } from "../utils/wallet";
import { BrowserProvider, formatEther } from "ethers";

function History({ activityRefresh }) {
  const [activity, setHistory] = useState([]);

  useEffect(() => {
    async function historyfetch() {
      const provider = new BrowserProvider(window.ethereum);
      const blocknum = await provider.getBlockNumber();
      const fromblock = blocknum - 10000;
      const toblock = blocknum;

      const contract = await getcontract();

      const deposithistory = contract.filters.Deposit();
      const withdrawalhistory = contract.filters.Withdraw();
      const withdrawalresult = await contract.queryFilter(
        withdrawalhistory,
        fromblock,
        toblock,
      );

      const depositresult = await contract.queryFilter(
        deposithistory,
        fromblock,
        toblock,
      );

      setHistory([...depositresult, ...withdrawalresult]);
    }

    historyfetch();
  }, [activityRefresh]);

  return (
    <div>
      <h3>Activity</h3>

      {activity.map((event) => (
        <p key={event.transactionHash}>
          <span
            className={
              event.fragment.name === "Deposit"
                ? "activity-deposit"
                : "activity-withdraw"
            }
          >
            {event.fragment.name === "Deposit" ? "Deposited" : "Withdrawn"}
          </span>
          {" = "}
          {formatEther(event.args[0])} ETH
        </p>
      ))}
    </div>
  );
}

export { History };
