# 🔐 ChainVault

A decentralized Ethereum wallet vault built with **Solidity, React, and ethers.js**.

ChainVault allows users to connect their MetaMask wallet, deposit ETH into a smart contract, withdraw their deposited ETH, view their vault balance, and track on-chain transaction activity through a clean web interface.

## ✨ Features

* 🔗 Connect MetaMask wallet
* 👤 Detect account changes
* 💰 Deposit ETH into the vault
* 💸 Withdraw deposited ETH
* 📊 View vault balance
* 🔄 Automatically update balance after transactions
* 📜 View deposit and withdrawal activity
* ⚠️ Input and transaction validation
* ⏳ Transaction processing state
* ✅ Transaction success/failure feedback
* 📱 Responsive dark-themed UI

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* CSS
* Vite

### Blockchain

* Solidity
* Ethereum
* ethers.js

### Wallet

* MetaMask

## ⚙️ How It Works

```text
User
  ↓
MetaMask
  ↓
React Frontend
  ↓
ethers.js
  ↓
Wallet Smart Contract
  ↓
Ethereum Blockchain
```

### Deposit Flow

```text
User enters ETH amount
        ↓
MetaMask transaction
        ↓
Smart Contract
        ↓
ETH deposited into ChainVault
        ↓
Vault balance updated
```

### Withdraw Flow

```text
User enters withdrawal amount
        ↓
Smart Contract checks vault balance
        ↓
ETH sent back to user's wallet
        ↓
Vault balance updated
```

### Activity Flow

ChainVault reads `Deposit` and `Withdraw` events from the smart contract and displays the transaction activity in the frontend.

## 📁 Project Structure

```text
chainvault/
│
├── src/
│   ├── components/
│   │   ├── navbar.jsx
│   │   ├── deposit.jsx
│   │   ├── withdraw.jsx
│   │   ├── activity.jsx
│   │   └── TransactionOverlay.jsx
│   │
│   ├── contracts/
│   │   ├── Abi.js
│   │   └── contractconfig.js
│   │
│   ├── utils/
│   │   └── wallet.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── Chainvault.sol
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have:

* Node.js installed
* MetaMask installed
* A MetaMask wallet
* Access to the network where the ChainVault contract is deployed

### Installation

Clone the repository:

```bash
git clone https://github.com/mysticaura0955-del/chainvault.git
```

Navigate to the project:

```bash
cd chainvault
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local Vite URL shown in your terminal and connect your MetaMask wallet.

## 📜 Smart Contract

The ChainVault smart contract provides the core vault functionality.

### Main Functions

```solidity
depositor()
```

Allows users to deposit ETH into their ChainVault balance.

```solidity
withdrawal(uint amount)
```

Allows users to withdraw ETH from their vault balance.

```solidity
viewbalance()
```

Returns the connected user's ChainVault balance.

### Events

```solidity
Deposit
Withdraw
```

These events are used to track vault activity.

### Contract Address

```text
0x3E86be0A792e88DfD79976c7832e24eEcbB58B46
```

> Make sure MetaMask is connected to the same network where this contract is deployed.

## 🖼️ Screenshots

### Dashboard

*Add your ChainVault dashboard screenshot here.*

### Transaction Activity

*Add your transaction activity screenshot here.*

## 🔮 Future Improvements

* Network switching support
* Transaction hash / explorer links
* Improved error handling
* Gas estimation
* More advanced transaction filtering
* Additional wallet features

## 🎯 What I Learned

Building ChainVault helped me understand how a frontend communicates with a blockchain using **ethers.js**.

Key concepts practiced:

* Connecting MetaMask with `BrowserProvider`
* Working with Ethereum signers
* Creating and interacting with smart contracts
* Sending ETH transactions
* Reading contract state
* Formatting blockchain values with `formatEther`
* Parsing ETH values with `parseEther`
* Listening to wallet account changes
* Reading smart contract events
* Updating React state after blockchain transactions

## 👨‍💻 Author

**mysticaura0955-del**

Built as a hands-on Web3 project while learning **Solidity, ethers.js, and React**.
