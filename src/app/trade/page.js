"use client";
import Image from "next/image";
import React, { useState } from "react";
// import gonzoToken from "../images/gonzoToken.png";
// import { gonzoTokenAddress, gonzoABI } from "../lib/constants";
// import { getContract, resolveMethod } from "thirdweb";
// import Navbar from "../componants/navbar";
// import { createThirdwebClient } from "thirdweb";
// import { fantomTestnet } from "thirdweb/chains";
// import { useReadContract } from "thirdweb/react";

// import {
//   ThirdwebSDK,
//   useAddress,
//   useContract,
//   useContractRead,
//   useContractWrite,
// } from "@thirdweb-dev/react";

// import client from "../lib/client";

// const client = createThirdwebClient({
//   clientId: "d75935c2db33dd391882dd2fb2474ceb",
// });
// const gonzo = getContract({
//   client,
//   address: gonzoTokenAddress,
//   chain: fantomTestnet,
// });

// const { contract } = getContract({
//   client,
//   gonzoTokenAddress,
//   chain: fantomTestnet,
//   abi: gonzoABI,
// });
export default function Trade() {
  // const { contract: GonzoToken } = useContract(gonzoTokenAddress, gonzoABI);
  // const [supply, setSupply] = useState(0);
  // const { supply2, supplyIsLoading } = useContractRead(
  //   GonzoToken,
  //   "totalSupply",
  //   []
  // );
  // useEffect(() => {
  //   async function fetchData() {
  //     //    console.log("contract: ", contract);
  //     //    const {data:supply, isloading: isSupplyLoading} = useReadContract ({ contract ,functionName: "totalSupply",args: []});
  //     //    const { supply, isLoading} =  useReadContract( {
  //     //         contract ,
  //     //         method: resolveMethod("totalSupply")
  //     //     });
  //     // if(!isSupplyLoading){
  //     console.log("supply :", supply2);
  //     // }else{
  //     //     console.log("supply :not supply");

  //     // }

  //     setSupply(supply2);
  //   }
  //   fetchData();
  // }, [supply2]);

  //   console.log(supply);
  return (
    <section>
      {/* <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-[720px] mx-auto">
          <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
            <a
              target="_blank"
              href="https://www.material-tailwind.com/docs/html/card"
              className="block w-full px-4 py-2 text-center text-slate-700 transition-all"
            >
              Buy Your own <b>Gonzo Token</b>.
            </a>
          </div>
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20 z-10 absolute">
              <h3 className="block text-3xl antialiased font-semibold leading-snug tracking-wider text-[#0079ac] font-custom2 hover:font-custom mb-14">
                YOUR AMOUNT
              </h3>
            </div>
            <Image
              src={gonzoToken}
              className="z-20 relative -mt-20 ml-32 mr-auto hover:scale-110"
              width={140}
              height={140}
              alt=""
            />
            <p className="text-center font-custom  text-[#0079ac]">
              <span>$Gonzo</span>
            </p>

            <div className="flex flex-col gap-4 p-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  type="number"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  $USDT
                </label>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-7xl text-white"> Buy Page</h1>
      </div>
    </section>
  );
}
