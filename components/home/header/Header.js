import React from "react";
import Image from "next/image";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="py-14 px-20 space-y-40">
      <Navbar />

      <div className="relative mx-auto">
        <Image
          src="/home/hero-image.png"
          alt=""
          height={444}
          width={880}
          className="mx-auto"
        />
      </div>
    </header>
  );
};

export default Header;
