import Link from "next/link";
import React from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import Plantpots from "../app/Mainlisting/[mainlisting]/Plantpots"
import Ceramics from "../app/Mainlisting/Ceramics";
import Tables from "../app/Mainlisting/Tables";
import Chairs from "../app/Mainlisting/Chairs";
import Crockery from "..//app/Mainlisting/Crockery";
import Tableware from "..//app/Mainlisting/Tableware";
import Cutlery from "..//app/Mainlisting/Cutlery";



export default function Navbar() {
    return (
        <nav className="w-[1440px] border-b border-gray-200">
            {/* Top Navbar */}
            <div className="flex justify-between items-center p-4">
                {/* Left Icon */}
                <div>
                    <FiSearch size={16} className="text-[#22202E] cursor-pointer mt-[26px] ml-[28px]" />
                </div>
                {/* Center Title */}
                <div>
                    <h1 className="size-[24px] weight-[400] height-[29.52px] font-semibold text-[#22202E] p-[20px]">Avion</h1>
                </div>
                {/* Right Icons */}
                <div className="flex space-x-4">
                    <FiShoppingCart size={16} className="text-[#22202E] cursor-pointer" />
                    <FiUser size={16} className="text-[#22202E] cursor-pointer" />
                </div>
            </div>

            <div className="divider border-b border-color w-[1396px] flex justify-center ml-[28px]"></div>

            {/* Bottom Links */}
            <div className="flex justify-center items-center space-x-6 p-2 text-[#726E8D]">
                <ul>
                    <li><Link href={'mainlisting/Plantpots'}></Link></li>
                </ul>
                <a href="/Plantpots" className="hover:text-gray-900 transition duration-300">
                    Plant pots
                </a>
                <a href="/Ceramics" className="hover:text-gray-900 transition duration-300">
                    Ceramics
                </a>
                <a href="/Tables" className="hover:text-gray-900 transition duration-300">
                    Tables
                </a>
                <a href="/Chairs" className="hover:text-gray-900 transition duration-300">
                    Chairs
                </a>
                <a href="/Crockery" className="hover:text-gray-900 transition duration-300">
                    Crockery
                </a>
                <a href="/Tableware" className="hover:text-gray-900 transition duration-300">
                    Tableware
                </a>
                <a href="/Cutlery" className="hover:text-gray-900 transition duration-300">
                    Cutlery
                </a>
            </div>
        </nav>
    );
};
