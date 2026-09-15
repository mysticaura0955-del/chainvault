import { useEffect } from "react";

function TransactionOverlay({ transactionstatus, settransactionstatus }) {
  useEffect(() => {
    if (transactionstatus === "success" || transactionstatus === "fail") {
      const timer = setTimeout(() => {
        settransactionstatus(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [transactionstatus]);

  if (transactionstatus === null) {
    return null;
  }
  return (
    <div className="transaction-overlay">
      {transactionstatus === "processing" && (
        <div className="processing-content">
          <span className="loader"></span>
          <p>Processing transaction...</p>
        </div>
      )}

      {transactionstatus === "success" && (
        <div className="success-content">
          <div className="success-icon">✓</div>
          <p>Transaction Successful</p>
        </div>
      )}

      {transactionstatus === "fail" && (
        <div className="fail-content">
          <div className="fail-icon">✕</div>
          <p>Transaction Failed</p>
        </div>
      )}
    </div>
  );
}

export { TransactionOverlay };
