import React from "react";
import Link from "next/link";

const NavLinks = ({ navLinks }) => {
  return (
    <ul className="bg-white border border-[#E03DC1] flex rounded-lg overflow-hidden h-14">
      {navLinks.map((link) => (
        <li
          key={link.name}
          className="py-3.5 px-7 hover:bg-background whitespace-nowrap text-lg  leading-[150%] font-bold"
        >
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
