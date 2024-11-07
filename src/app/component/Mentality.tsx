import React from "react";
import Image from "next/image";
import { RiInstanceLine } from "react-icons/ri";
const Mentality = () => {
  return (
    <div>
      <hr />
      <div>
        <h1 className="text-6xl mt-6 text-white text-center"> Road Map</h1>
      </div>
      <section className="grid grid-cols-2 gap-2 p-5 items-center">
        {/* First Div */}
        <div className="text-white mx-auto px-6 flex flex-col justify-between ">
          <p className="mt-5 font-medium text-xl">
          Since it’s beginning in December 2022 our community has been growing on the basis of transparency, sustainability and decentralization. First we launched the Genios 3x2 and 3x5 gifting matrix system to help our members learn how solidarity capitalization works. Now we are ready to go on to our next phases: 
          </p>

          <div className="py-2">
            <Image
              src={`/bitcoin.png`}
              alt="bitcoin"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Second Div */}
        <div className="text-white grid grid-rows-3  ">
          <div className=" gap-2 flex flex-col p-4 py-10 ">
            <div className="flex  flex-row gap-2">
              <RiInstanceLine className="h-8 w-8  text-yellow-600" />{" "}
              <span className="text-xl">How we Started</span>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s,
              </p>
            </div>
          </div>
          <div className=" gap-2 flex flex-col p-4  py-8  ">
            <div className="flex  flex-row gap-2">
              <RiInstanceLine className="h-8 w-8 text-yellow-600" />{" "}
              <span className="text-xl">Our Mission</span>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s,
              </p>
            </div>
          </div>
          <div className=" gap-2 flex flex-col p-4  py-8  ">
            <div className="flex  flex-row gap-2">
              <RiInstanceLine className="h-8 w-8 text-yellow-600" />{" "}
              <span className="text-xl">Our Plans</span>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentality;
