"use client";

import Image from "next/image";
import CustomBtn from "./CustomBtn";

import "./custom.css";
import bannerImg from "@/assest/banner1.jpg";
import { Select, SelectItem } from "@nextui-org/react";
const Banner = () => {
  return (
    <div className="mb-80 md:mb-[480px]">
      <div className="w-full relative mx-auto pt-10 pb-32  bg-gradient-to-tr from-[#DCF1FF] to-[#EAF3FF]  ">
        <div className="max-w-6xl md:px-24 mx-auto pb-10">
          <h1 className="text-[40px] md:text-[80px] font-bold text-center text-[#012E41]">
            Discover the world, one adventure at a time
          </h1>
          <p className="text-center pt-6 w-full max-w-xl  text-lg  mx-auto ">
            Experience bespoke itineraries and unparalleled service.Explore the
            world without breaking the bank.
          </p>
        </div>

        {/* btn */}

        <div className="flex justify-center items-center gap-5 pb-10">
          <CustomBtn
            text="Contact Us"
            background="bg-[#012E41] "
            color="text-white"
          />
          <CustomBtn
            text="Get Quote"
            color="text-[#012E41]"
            border=" border border-[#012E41]"
          />
        </div>
      </div>
      <div className="h-full md:max-h-[220px]">
        <Image
          src={bannerImg}
          alt="banner"
          width={1280}
          height={220}
          className="absolute h-[380px] md:h-[520px] -bottom-20 md:top-[560px] left-1/2 transform -translate-x-1/2 mx-auto  "
        />
      </div>

      <div className=" backdrop-opacity-10 backdrop-invert bg-cyan-700/30  -bottom-[80px] md:-bottom-96  absolute  w-full max-w-[1080px] left-1/2 transform -translate-x-1/2  mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-self-center  gap-2 md:gap-5  p-6">
          <div>
            <p className="w-full text-white md:font-semibold ">Destination</p>
            <Select
              placeholder="Select Destination"
              className="w-full text-white md:font-semibold "
              size="sm"
            >
              <SelectItem key="Instambul">Instambul</SelectItem>
              <SelectItem key="Bangladesh">Bangladesh</SelectItem>
              <SelectItem key="India">India</SelectItem>
              <SelectItem key="Chaina">Chaina</SelectItem>
            </Select>
          </div>
          {/*  */}

          <div>
            <p className="w-full text-white md:font-semibold ">Duration</p>
            <Select
              placeholder="Select Duration"
              className="w-full text-white md:font-semibold "
              size="sm"
            >
              <SelectItem key="4 Days">4 Days</SelectItem>
              <SelectItem key="2 Days">2 Days</SelectItem>
              <SelectItem key="6 Days">6 Days</SelectItem>
              <SelectItem key="8 Days">8 Days</SelectItem>
            </Select>
          </div>

          {/*  */}

          <div>
            <p className="w-full text-white md:font-semibold ">Travel Type</p>
            <Select
              placeholder="Select Travel Type"
              className="w-full text-white md:font-semibold "
              size="sm"
            >
              <SelectItem key="Adventure">Adventure</SelectItem>
              <SelectItem key="Luxury">Luxury</SelectItem>
              <SelectItem key="Family">Family</SelectItem>
            </Select>
          </div>

          {/*  */}

          <div>
            <p className="w-full text-white md:font-semibold ">Travellers</p>
            <Select
              placeholder="Select Travellers"
              className="w-full text-white md:font-semibold  "
              size="sm"
            >
              <SelectItem key="01">01</SelectItem>
              <SelectItem key="02">02</SelectItem>
              <SelectItem key="03">03</SelectItem>
              <SelectItem key="04">04</SelectItem>
            </Select>
          </div>

          <div className="sm:col-span-2 lg:col-auto ">
            <CustomBtn
              text="Find Availablity"
              color="text-white"
              background="bg-orange-500"
              margin="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
