import Image from "next/image";

import plane from "@/assest/plane.png";
import experienceImg1 from "@/assest/experience.jpg";
import experienceImg2 from "@/assest/camp.jpg";
import CustomBtn from "./CustomBtn";

const Experience = () => {
  return (
    <div className="w-full max-w-7xl mx-auto container  mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* grid div 1 */}

        <div className="px-10">
          <p className="text-md font-semibold text-orange-500 ">
            GET TO KNOW US
          </p>
          <h1 className="text-[48px] text-[#012E41] font-bold">
            Experience the World With Triptap
          </h1>
          <p className="mt-8 text-[#6F8893]">
            Triptopia was born out of a shared passion for exploration and a
            desire to create meaningful travel experiences. We believe travel is
            more than just visiting a place;
          </p>

          <div className="bg-[#DEF2F0] mt-14 mb-9">
            <p className="px-8 py-5 text-medium md:text-[22px] font-bold text-[#012E41]">
              The world is a book and those who do not travel read only one
              page.
            </p>
          </div>

          <div className="flex gap-5 mb-7">
            <Image src={plane} alt="plane" width={22} height={5} />
            <p className="text-[#012E41] text-xl font-semibold">
              To curate personalized itineraries
            </p>
          </div>
          <div className="flex gap-5">
            <Image src={plane} alt="plane" width={22} height={5} />
            <p className="text-[#012E41] text-xl font-semibold">
              We believe travel fosters understanding
            </p>
          </div>

          {/* button */}

          <CustomBtn
            text="Discover More"
            background="bg-orange-600"
            color="text-white"
            width="w-44"
            margin="mt-10"
          />
        </div>

        {/* grid div 2 */}

        <div className="relative">
          {/* main image */}

          <div className="">
            <Image
              src={experienceImg1}
              alt="experience"
              width={500}
              className="h-full rounded-md"
            />
          </div>

          <div className="absolute bottom-2 right-8">
            <Image
              src={experienceImg2}
              alt="ex2"
              width={410}
              className="rotate-[30deg] rounded-lg"
            />
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Experience;
