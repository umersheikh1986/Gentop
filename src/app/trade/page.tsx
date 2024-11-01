"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { WalletConnect } from "@web3-react/walletconnect";
("@web3-react/walletconnect");
const usdtABI = [
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "_decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "burn",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "mint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
const stakingABI = [
  {
    inputs: [{ internalType: "address", name: "admin_", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "approver", type: "address" }],
    name: "ERC20BlackListedApprover",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "receiver", type: "address" }],
    name: "ERC20BlackListedReceiver",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "ERC20BlackListedSender",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "spender", type: "address" }],
    name: "ERC20BlackListedSpender",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "allowance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "uint256", name: "balance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "approver", type: "address" }],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "receiver", type: "address" }],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "spender", type: "address" }],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const preSaleABI = [
  {
    inputs: [
      { internalType: "contract IERC20", name: "__USDT", type: "address" },
      { internalType: "contract IERC20", name: "__GentTop", type: "address" },
      { internalType: "address", name: "_staking", type: "address" },
      { internalType: "address", name: "_owner", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BronzePercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_usdtAmount", type: "uint256" },
      { internalType: "address", name: "_buyer", type: "address" },
      { internalType: "uint256", name: "_runner", type: "uint256" },
    ],
    name: "Buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "GoldPercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SilverPercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "User",
    outputs: [
      { internalType: "address", name: "userAdd", type: "address" },
      { internalType: "uint256", name: "joinTime", type: "uint256" },
      { internalType: "uint256", name: "joiningAmount", type: "uint256" },
      { internalType: "uint256", name: "percenTage", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "__user", type: "address" }],
    name: "UserPurcahases",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_userAdd", type: "address" },
      { internalType: "uint256", name: "_num", type: "uint256" },
    ],
    name: "getUserData",
    outputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_percentage", type: "uint256" },
      {
        internalType: "uint256",
        name: "_whichTypeOfPercentage",
        type: "uint256",
      },
    ],
    name: "setPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "staking",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userPurcahases",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const usdtAddress = "0xB3e6AE901b927F76C6E8b24a0c5B2a6511f5067F"; // Replace with Contract 1 address
const gentopAddress = "0xa5F286f59869E6090Ee1Fa36b9B628FFF9e98F2e"; // Replace with Contract 2 address
const stakingContractAddress = "0x416B3FC8805a7A3D3F4e77B78561261DC4F0770C"; // Replace with Contract 3 address
const preSaleContractAddress = "0x438E9efB39fC6903226809272e155baCdAB34EfF"; // Replace with Contract 4 address

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web3Model Demo",
      infuraId: "https://rpc.testnet.fantom.network",
    },
  },
};

export default function Trade() {
  const [selectedOption, setSelectedOption] = useState("1");
  const [web3Provider, setWeb3Provider] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const [usdtBalance, setUsdtBalance] = useState(null);
  const [usdtAmount, setUsdtAmount] = useState(null);

  const [transactionHash, setTransactionHash] = useState(null);
  const [contract1, setContract1] = useState(null);
  const [contract2, setContract2] = useState(null);
  const [contract3, setContract3] = useState(null);
  const [contract4, setContract4] = useState(null);

  function getSelectedRunner() {
    const runner = parseInt(selectedOption, 10);

    if (runner < 1 || runner > 3) {
      throw new Error("Invalid runner selection");
    }
    return runner;
  }

  const formatAddress = (address) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  async function connectWallet() {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const web3modalInstance = await web3Modal.connect();
      const web3modalProvider = new ethers.providers.Web3Provider(
        web3modalInstance
      );
      console.log(web3modalProvider);

      if (web3modalProvider) {
        const signer = web3modalProvider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        setWeb3Provider(web3modalProvider);
        const usdtContract = new ethers.Contract(usdtAddress, usdtABI, signer);
        const balance = await usdtContract.balanceOf(address);
        console.log(balance);
        const decimals = 18;
        setUsdtBalance(ethers.utils.formatUnits(balance, decimals));
        await fetchUsdtBalance();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchUsdtBalance(signer, address) {
    try {
      const usdtContract = new ethers.Contract(usdtAddress, usdtABI, signer);
      const balance = await usdtContract.balanceOf(address);
      console.log(balance);
      const decimals = 18;
      setUsdtBalance(ethers.utils.formatUnits(balance, 6));
    } catch (error) {
      console.error("Error fetching USDT balance:", error);
    }
  }

  useEffect(() => {
    if (walletAddress && web3Provider) {
      const signer = web3Provider.getSigner();

      const balanceInterval = setInterval(() => {
        fetchUsdtBalance(signer, walletAddress);
      }, 100000); // Fetch balance every 10 seconds

      return () => clearInterval(balanceInterval);
    }
  }, [walletAddress, web3Provider]);
  function convertTo18Decimals(usdtValue) {
    const decimals = 18;
    return ethers.utils.parseUnits(usdtValue, decimals);
  }

  async function approveUSDT() {
    if (!web3Provider || !walletAddress) {
      console.log("No provider or wallet connected");
      return;
    }

    try {
      const signer = web3Provider.getSigner();
      const usdtContract = new ethers.Contract(usdtAddress, usdtABI, signer);

      const amountToApprove = convertTo18Decimals(usdtAmount);

      const tx = await usdtContract.approve(
        preSaleContractAddress,
        amountToApprove
      );
      console.log("Approval transaction hash:", tx.hash);
      setTransactionHash(tx.hash); // Store transaction hash

      // Wait for transaction to be confirmed
      await tx.wait();
      toast.success("USDT successfully approved!");
    } catch (error) {
      console.log("Error approving USDT:", error);
      toast.error("Error approving USDT. Please try again.");
    }
  }

  async function buyTokens() {
    if (!web3Provider || !walletAddress) {
      console.log("No provider or wallet connected");
      return;
    }

    try {
      const signer = web3Provider.getSigner();
      const preSaleContract = new ethers.Contract(
        preSaleContractAddress,
        preSaleABI,
        signer
      );

      // Define the values you want to send
      const amountToBuy = convertTo18Decimals(usdtAmount); // Adjust to the correct amount of USDT
      const buyerAddress = walletAddress;
      const runner = selectedOption; // You can replace this with the actual value if needed
      console.log(runner);
      // // Estimate gas limit for the Buy transaction

      // Call the Buy function
      const tx = await preSaleContract.Buy(amountToBuy, walletAddress, runner, {
        gasLimit: 10000000,
      });
      console.log(amountToBuy, buyerAddress, runner);

      console.log("Transaction: ", tx);
      // setTransactionHash(tx.hash);

      toast.success("Tokens purchased successfully!");
    } catch (error) {
      console.log("Error purchasing tokens:", error);
      toast.error("Error during token purchase. Please try again.");
    }
  }

  return (
    <div>
      <nav className=" bg-[#14000b] font-san fixed w-full z-20 top-0 start-0 border-b ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Link href="/">
              <Image
                src="/logo1.png"
                width={10000}
                height={10000}
                alt="Logo"
                className="h-16 w-16"
              />
            </Link>
            <span className="self-center text-2xl font-semibold text-white">
              Gentop
            </span>
          </a>
          {/* <ToastContainer position="top-right" autoClose={50000} /> */}

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              href="/trade"
              className="text-white bg-[#14000b] border border-white hover:bg-transparent focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-8 py-2 text-center "
            >
              {web3Provider == null ? (
                <button className="" onClick={connectWallet}>
                  connect Wallet{" "}
                </button>
              ) : (
                <div>
                  {/* <p>Connected</p> */}
                  {walletAddress ? formatAddress(walletAddress) : ""}
                </div>
              )}
            </Link>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 text-white text-xl rounded-lg bg-[#14000b] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="/" className="block py-3 px-3 " aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="block py-3 px-3 ">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="block py-3 px-3   ">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="block py-3 px-3    ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <div className="flex justify-center items-center min-h-screen">
          <div className="max-w-[720px] mx-auto">
            {/* <h1 className="text-white"> Web3Modal connection</h1> */}
            <div className="text-white">
              {" "}
              {web3Provider == null ? (
                <button className="" onClick={connectWallet}>
                  connect Wallet{" "}
                </button>
              ) : (
                <div>
                  {/* <p>Connected</p> */}
                  <p>Address : {walletAddress}</p>
                </div>
              )}
            </div>
            <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
              <a
                target="_blank"
                href="https://www.material-tailwind.com/docs/html/card"
                className="block w-full px-4 py-2 text-center text-white transition-all"
              >
                Buy Your Own <b>Gentop Token</b>.
              </a>
            </div>
            <h1 className="text-white ml-5">
              {usdtBalance !== null && <p>USDT Balance: {usdtBalance} USDT</p>}
            </h1>
            <div className="relative flex flex-col text-gray-700 bg-[#14000b] shadow-md w-96 rounded-xl bg-clip-border">
              <div className="max-w-md mx-auto bg-[#14000b] p-6 rounded-lg shadow-lg">
                <label
                  htmlFor="usdt"
                  className="block text-sm font-medium text-white"
                >
                  Enter USDT
                </label>
                <input
                  type="number"
                  onChange={(e) => setUsdtAmount(e.target.value)}
                  className="mt-2 block  px-2 py-2 border text-[#14000b] w-96 border-gray-300 rounded-md focus:outline-none focus:ring-[#14000b] focus:border-[#14000b]"
                  placeholder="Enter amount in USDT"
                />

                <label
                  htmlFor="stacking"
                  className="mt-4 block text-sm font-medium text-white"
                >
                  Select Stacking Option
                </label>
                <select
                  id="stacking"
                  value={selectedOption}
                  className="mt-2 block w-full px-3 py-2 border text-center  text-[#14000b] font-bold border-white rounded-md focus:outline-none focus:ring-[#14000b] focus:border-[#14000b]"
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  Bronze <option value="1">Bronze</option>
                  Silver <option value="2">Silver</option>
                  Gold <option value="3">Gold</option>
                </select>

                <button
                  onClick={approveUSDT}
                  className="mt-6 w-full bg-white text-[#14000b] font-bold py-2 px-4 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Approve
                </button>

                <button
                  onClick={buyTokens}
                  className="mt-4 w-full bg-white text-[#14000b] font-bold py-3 px-4 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Buy
                </button>
                <div>
                  {selectedOption === "1" && (
                    <p className="text-white">120 Days Stacking</p>
                  )}
                  {selectedOption === "2" && (
                    <p className="text-white">90 Days Stacking</p>
                  )}
                  {selectedOption === "3" && (
                    <p className="text-white">45 Days Stacking</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
