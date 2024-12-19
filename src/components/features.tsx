import Link from "next/link";
import { FaShippingFast } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { BsCashStack } from "react-icons/bs";
import { RiRecycleFill } from "react-icons/ri";

export default function Features() {
  return (
    <main className="bg-white p-8 w-[1440px] h-[355px]">
      <section className="text-center mb-10">
        <h2 className=" text-24 font-light text-[#2A254B]">
          What makes our brand different
        </h2>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-start">
        {/* Feature 1 */}
        <div className="flex flex-col items-start ml-[40px]">
          <FaShippingFast className="size[24px] text-[#2A254B] mb-4 justify-start" />
          <h4 className="text-20px font-normal ">Next day as standard</h4>
          <p className="text-[#2A254B] text-sm font-medium text-16px mt-2 justify-start">
            Order before 3pm and get your order<br />the next day as standard
          </p>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col items-start">
          <GiCheckMark className="size[24px] text-[#2A254B] mb-4 justify-start" />
          <h4 className="text-20px font-normal">Made by true artisans</h4>
          <p className="text-[#2A254B] text-sm font-medium text-16px mt-2 justify-start">
            Handmade crafted goods made with<br />real passion and craftsmanship
          </p>
        </div>
        {/* Feature 3 */}
        <div className="flex flex-col items-start">
          <BsCashStack className="size[24px] text-[#2A254B] mb-4 justify-start" />
          <h4 className="text-20px font-normal">Unbeatable prices</h4>
          <p className="text-[#2A254B] text-sm font-medium text-16px mt-2 justify-start">
            For our materials and quality you<br />won’t find better prices anywhere
          </p>
        </div>
        {/* Feature 4 */}
        <div className="flex flex-col items-start">
          <RiRecycleFill className="size[24px] text-[#2A254B] mb-4 justify-start" />
          <h4 className="text-20px font-normal">Recycled packaging</h4>
          <p className="text-[#2A254B] text-sm font-medium text-16px mt-2 items-start">
            We use 100% recycled packaging to<br />ensure our footprint is manageable
          </p>
        </div>
      </div>
    </main>
  );
}
