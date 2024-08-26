import Image from "next/image";

import batuImg from "@/assest/batu.jpeg";
import kutaImg from "@/assest/kuta.jpeg";
import surabayaImg from "@/assest/surabaya.jpg";
import malangImg from "@/assest/malang.jpg";
import doeImg from "@/assest/doemg.jpg";
import nusaImg from "@/assest/nusa.jpg";
import bandungImg from "@/assest/bandung.jpg";
import wataImg from "@/assest/watatobi.jpg";

const TopDestination = () => {
  return (
    <div className="w-full max-w-7xl container mx-auto mt-20 rounded-2xl px-5 bg-[#F6F6F6]">
      <h1 className="text-center font-semibold text-orange-500 py-10 ">
        TOP DESTINATION
      </h1>

      <div className="w-full max-w-3xl mx-auto px-10">
        <h1 className=" text-3xl md:text-[48px] font-semibold text-center leading-relaxed mb-5 ">
          Search a best place in the world
        </h1>
        <p className="md:px-10 text-center ">
          Our dating website offers a range of features and benifits that make
          finding love online simple and enjoyable. With our advanced matching
          algorithm
        </p>
      </div>

      {/*  imag */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4 mt-10">
        <div className="p-8 border rounded-md text-[#012E41] hover:bg-white transition-colors delay-75">
          <div className="w-20 h-20">
            <Image
              src={batuImg}
              alt="batu"
              className="w-20 h-[82px] rounded-md"
            />
          </div>
          <p className="mt-5 font-bold text-xl">Batu East Java</p>
          <p>86 Destination</p>
        </div>
        <div className="p-8 hover:bg-white transition-colors delay-75 border rounded-md text-[#012E41]">
          <div className="w-20 h-20">
            <Image
              src={kutaImg}
              alt="kuta"
              className="w-20 h-[82px] rounded-md"
            />
          </div>
          <p className="mt-5 font-bold text-xl">Kuta </p>
          <p>86 Destination</p>
        </div>
        {/* 3 */}
        <div className="p-8 hover:bg-white transition-colors delay-75 border rounded-md text-[#012E41]">
          <div className="w-20 h-20">
            <Image
              src={surabayaImg}
              alt="surabaya"
              className="w-20 h-[82px] rounded-md"
            />
          </div>
          <p className="mt-5 font-bold text-xl">Surabay, East Java</p>
          <p>86 Destination</p>
        </div>
        {/* 4 */}
        <div className="p-8 hover:bg-white transition-colors delay-75 border rounded-md text-[#012E41]">
          <div className="w-20 h-20">
            <Image
              src={malangImg}
              alt="malang"
              className="w-20 h-[82px] rounded-md"
            />
          </div>
          <p className="mt-5 font-bold text-xl">Malang, East Java</p>
          <p>86 Destination</p>
        </div>
        {/* 5 */}
        <div className="p-8 hover:bg-white transition-colors delay-75 border rounded-md text-[#012E41]">
          <div className="w-20 h-20">
            <Image
              src={doeImg}
              alt="doe"
              className="w-20 h-[82px] rounded-md"
            />
          </div>
          <p className="mt-5 font-bold text-xl">Doemg, Central Java</p>
          <p>86 Destination</p>
        </div>
        {/* 6 */}
        <div className="p-8 hover:bg-white transition-colors delay-75 border rounded-md text-[#012E41]">
          <div className="w-20 h-20">
            <Image
              src={nusaImg}
              alt="nusa"
              className="w-20 h-[82px] rounded-md"
            />
          </div>
          <p className="mt-5 font-bold text-xl">Nusa Dua, Lombok</p>
          <p>86 Destination</p>
        </div>
        {/* 7 */}
        <div className="p-8 hover:bg-white transition-colors delay-75 border rounded-md text-[#012E41]">
          <div className="w-20 h-20">
            <Image
              src={bandungImg}
              alt="bandung"
              className="w-20 h-[82px] rounded-md"
            />
          </div>
          <p className="mt-5 font-bold text-xl">Bandung, West Java</p>
          <p>86 Destination</p>
        </div>
        {/* 8 */}
        <div className="p-8 hover:bg-white transition-colors delay-75 border rounded-md text-[#012E41]">
          <div className="w-20 h-20">
            <Image
              src={wataImg}
              alt="watatobi"
              className="w-20 h-[82px] rounded-md"
            />
          </div>
          <p className="mt-5 font-bold text-xl">Watatobi, Sumetra</p>
          <p>86 Destination</p>
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
