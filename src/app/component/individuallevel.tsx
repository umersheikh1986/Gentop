import React from "react";
import Image from "next/image";
function IndividualLevel() {
  return (
    <div className="mx-auto">
      <hr />
      <section className="grid grid-cols-3 p-10  rounded-[40px] mx-10">
        <div className="pb-10 grid col-span-1 p-3 border-l-white border-l-2  border-t-white border-t-2 border-b-white border-b-2  rounded-l-[40px] ">
          <Image src="/c1.png" alt="arrowil" width={300} height={300} />
        </div>
        <div className="pb-5 grid col-span-2 p-3 border-r-white border-r-2 border-t-white border-t-2 border-b-white border-b-2 rounded-r-[40px]">
          <h1 className="p-2  text-white text-5xl">Join our Community Today</h1>
          <p className=" text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            rerum molestiae veritatis vel nam velit, iste pariatur illo dicta,
            fuga non magnam illum officiis asperiores. Veritatis vero quam nam
            nostrum
          </p>
        </div>
      </section>
    </div>
  );
}

export default IndividualLevel;
