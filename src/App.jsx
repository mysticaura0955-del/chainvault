import Navbar from "./components/navbar";
import { useState } from "react";
import { Deposits } from "./components/deposit";
import { withdraw as Withdraw } from "./components/withdraw";
import "./App.css";
import { History } from "./components/activity.jsx";
import { TransactionOverlay } from "./components/TransactionOverlay";

function App() {
  const [balance, setbalance] = useState("");
  const [activityRefresh, setActivityRefresh] = useState(0);
  const [transactionstatus, settransactionstatus] = useState(null);

  return (
    <div className="app">
      <Navbar setBalance={setbalance} />

      <main className="dashboard">
        <section className="hero">
          <p className="eyebrow">DECENTRALIZED WALLET</p>

          <h1>
            Welcome to <span>ChainVault</span>
          </h1>

          <p className="hero-text">
            Securely deposit and manage your ETH directly through the
            blockchain.
          </p>
        </section>

        <section className="balance-card">
          <div className="balance-top">
            <p>VAULT BALANCE</p>
            <span>● LIVE</span>
          </div>

          <h2>{balance || "0.0"} ETH</h2>

          <p className="balance-subtitle">
            Your current ETH balance in ChainVault
          </p>
        </section>

        <section className="actions">
          <div className="action-card">
            <div className="card-heading">
              <div className="icon deposit-icon">↓</div>

              <div>
                <h3>Deposit ETH</h3>
                <p>Add ETH to your vault</p>
              </div>
            </div>

            <Deposits
              setBalance={setbalance}
              setactivityrefresh={setActivityRefresh}
              settransactionstatus={settransactionstatus}
            />
          </div>

          <TransactionOverlay
            transactionstatus={transactionstatus}
            settransactionstatus={settransactionstatus}
          />

          <Withdraw
            setbalance={setbalance}
            setactivityrefresh={setActivityRefresh}
            settransactionstatus={settransactionstatus}
          />
        </section>

        <section className="activity-card">
          <History activityRefresh={activityRefresh} />
        </section>
      </main>

      <footer>
        <p>ChainVault • Built on Ethereum</p>
      </footer>
    </div>
  );
}

export default App;
