import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, XT } from "../assets/svg";

export default function Footer() {
  return (
    <div
      id="footer"
      className="xl:px-20 lg:px-12 md:px-8 sm:px-4 px-2 py-20 min-h-[80px] bg-slate-800 flex items-center"
    >
      <div className=" *:max-w-[280px] *:w-full py-12 px-8 max-w-[2560px] w-full mx-auto flex flex-wrap gap-8 justify-between content-center">
        <div className="">
          <Link href={"/"} className="t-head la">
            METABRIX
          </Link>

          <p className="text mt-4">©2023 Metabrix LabsAll rights reserved.</p>
        </div>
        <div className=" flex flex-col gap-2">
          <h1 className="t-head la">Contact Us</h1>
          <p className=" text">info@metabrixlab.com</p>
          <p className=" text">www.metabrixlab.com</p>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className="t-head la">Social Media</h1>

          <div className=" flex flex-wrap gap-4">
            <Link href={"https://www.instagram.com/metabrix_labs/"}>
              <Instagram size={32} fill={"#fff"} />
            </Link>
            <Link href={"https://www.linkedin.com/company/82097463/admin/dashboard/"}>
             <Linkedin size={32} fill={"#fff"} />
            </Link>
            <Link href={"https://x.com/metabrixlabs/"}>
              <XT size={32} fill={"#fff"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
