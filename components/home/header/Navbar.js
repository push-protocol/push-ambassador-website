import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavLinks from "./NavLinks";

const navLinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/",
    name: "Ambassador HQ",
  },
  {
    href: "/",
    name: "Team",
  },
  {
    href: "/",
    name: "DAO",
  },
  {
    href: "/",
    name: "Insights",
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <Image
        src="/push-chain-logo.svg"
        alt="Push Chain Logo"
        width={166}
        height={54}
      />

      <div className="space-x-5 flex">
        <NavLinks navLinks={navLinks} />

        <Link
          href="/"
          className="bg-[#E03DC1] text-xl px-7 py-3.5 rounded-lg text-white"
        >
          Join Us?
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
