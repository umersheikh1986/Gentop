"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { WalletConnect } from "@web3-react/walletconnect";
("@web3-react/walletconnect");
import { ethers } from "ethers";

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web3Model Demo",
      infuraId: "https://rpc.testnet.fantom.network",
    },
  },
  walletconnect: {
    package: WalletConnect,
    options: {
      rpc: {
        4002: "https://rpc.testnet.fantom.network", // Chain ID for Fantom Testnet
      },
      network: "fantom testnet", // Optional
      qrcode: true, // Enable QR code for mobile wallets
    },
  },
};

// let theme = {
//   background: "#202020", // Modal background color
//   main: "#ffffff", // Main text color
//   secondary: "#a0a0a0", // Secondary text color
//   border: "1px solid #ffffff", // Border style for modal
//   hover: "#f0f0f0", // Hover state color
// };

export default function Trade() {
  // const [web3Provider, setWeb3Provider] = useState(null);

  async function connectWallet() {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
        // theme,
      });

      const web3modalInstance = await web3Modal.connect();
      const web3modalProvider = new ethers.providers.Web3Provider(
        web3modalInstance
      );
      console.log(web3modalProvider);
      // if (web3modalProvider) {
      //   setWeb3Provider(web3modalProvider);
      // }
    } catch (error) {
      console.log(error);
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
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/> */}
            <Link href="/">
              <Image
                src="/logo1.png"
                width={10000}
                height={10000}
                alt="Picture of the author"
                className="h-16 w-16"
              />
            </Link>
            <span className="self-center text-2xl font-semibold text-white">
              Gentop
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              href="/trade"
              className="text-white bg-[#14000b] border border-white hover:bg-transparent focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-8 py-2 text-center "
            >
              <button className="" onClick={connectWallet}>
                connect wallet
              </button>
              {/* {web3Provider == null ? (
                <button className="" onClick={connectWallet}>

                </button>
              ) : (
                <div>
                  <p>Connected</p>
                </div>
              )} */}
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
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
            <div className="text-white">
              {/* {web3Provider == null ? ( */}

              {/* ) : (
                <div>
                  <p>Connected</p>
                </div>
              )} */}
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
            <div className="relative flex flex-col text-gray-700 bg-[#14000b] shadow-md w-96 rounded-xl bg-clip-border">
              <div className="max-w-md mx-auto bg-[#14000b] p-6 rounded-lg shadow-lg">
                {/* <!-- Input for USDT --> */}

                <label for="usdt" class="block text-sm font-medium text-white">
                  Enter USDT
                </label>
                <input
                  type="number"
                  id="usdt"
                  className="mt-2 block  px-2 py-2 border text-[#14000b] w-96 border-gray-300 rounded-md focus:outline-none focus:ring-[#14000b] focus:border-[#14000b]"
                  placeholder="Enter amount in USDT"
                />

                {/* <!-- Dropdown for stacking options --> */}
                <label
                  for="stacking"
                  class="mt-4 block text-sm font-medium text-white"
                >
                  Select Stacking Option
                </label>
                <select
                  id="stacking"
                  className="mt-2 block w-full px-3 py-2 border text-[#14000b] font-bold border-white rounded-md focus:outline-none focus:ring-[#14000b] focus:border-[#14000b]"
                >
                  <option value="bronze">Bronze - 120 days</option>
                  <option value="silver">Silver - 90 days</option>
                  <option value="gold">Gold - 45 days</option>
                </select>

                {/* <!-- Approve Button --> */}
                <button className="mt-6 w-full bg-white text-[#14000b] font-bold py-2 px-4 rounded-md hover:bg-[#14000b]focus:outline-none focus:ring-2 focus:ring-[#14000b] focus:ring-offset-2">
                  Approve
                </button>

                {/* <!-- Buy Button --> */}
                <button className="mt-4 w-full  bg-white text-[#14000b] font-bold py-3 px-4 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-7xl text-white"> Buy Page</h1>
      </div> */}
      </section>
    </div>
  );
}
