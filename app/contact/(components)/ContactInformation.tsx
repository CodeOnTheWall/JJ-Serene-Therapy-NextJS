"use client";

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function ContactInformation() {
  return (
    <div className="flex flex-col space-y-5 text-center text-[13px] md:text-[16px]">
      <div className="flex flex-col items-center  ">
        <PhoneIcon className="text-[#7209b7] h-7 w-7 animate-pulse" />
        <p>7802972575</p>
      </div>

      <div className="flex flex-col items-center  ">
        <EnvelopeIcon className="text-[#7209b7] h-7 w-7 animate-pulse" />
        <p>jjserenetherapy@hotmail.com</p>
      </div>

      <div
        className="flex flex-col items-center  cursor-pointer"
        onClick={() =>
          window.open(
            "https://www.google.com/maps/place/9536+144+Ave+NW,+Edmonton,+AB+T5E+2H9,+Canada/@53.6071288,-113.4918556,17z/data=!4m6!3m5!1s0x53a02498cb66ae91:0x351ad375039149c4!8m2!3d53.6071256!4d-113.4892807!16s%2Fg%2F11c5f2wjs1?entry=ttu",
            "_blank"
          )
        }
      >
        <MapPinIcon className="text-[#7209b7] h-7 w-7 animate-pulse" />
        <div>
          <p>9536 144 Ave NW, Edmonton, AB T5E 2H9</p>
          {/* <p>haga clic aquí para abrir en Google Maps!</p> */}
          <button className="bg-[#7209b7] py-1 px-2 rounded-lg text-white font-bold">
            Click here to view on Google Maps!
          </button>
        </div>
      </div>
    </div>
  );
}
