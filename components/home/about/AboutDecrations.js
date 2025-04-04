import Image from "next/image";
import React from "react";

const AboutDecrations = ({ children }) => {
  return (
    <section className="mt-60">
      <div className="w-full h-40 relative">
        <Image
          src="/about/partition.svg"
          alt=""
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="rotate-180 -translate-x-3"
        />
      </div>

      <section className="bg-black text-white relative">
        {children}

        <div className="relative mt-5">
          <Image
            src="/about/about-hero.png"
            alt=""
            width={1380}
            height={620}
            className="mx-auto pb-32"
          />
        </div>

        <Image
          src="/about/box-left.png"
          alt=""
          width={78}
          height={78}
          className="absolute top-1.5 left-44"
        />

        <Image
          src="/about/box-up.svg"
          alt=""
          width={85}
          height={95}
          className="absolute top-14 right-40"
        />

        <Image
          src="/about/disc.png"
          alt=""
          width={200}
          height={148}
          className="absolute top-[526px] right-28"
        />

        <Image
          src="/about/box-up.svg"
          alt=""
          width={85}
          height={95}
          className="absolute top-[612px] left-8 rotate-180"
        />
      </section>

      <div className="w-full h-40 relative">
        <Image
          src="/about/partition.svg"
          alt=""
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </section>
  );
};

export default AboutDecrations;
