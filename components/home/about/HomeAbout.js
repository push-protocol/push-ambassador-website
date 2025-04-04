import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import AboutDecrations from "./AboutDecrations";

const HomeAbout = () => {
  return (
    <AboutDecrations>
      <div className="space-y-60">
        <div className="pt-32">
          <h1 className="text-6xl text-center font-green-brooks">
            <span className="text-[#E03DC1] text-9xl leading-[150%]">
              About
            </span>{" "}
            Push Ambassador India
          </h1>

          <p className="max-w-5xl mx-auto text-center">
            Push Ambassador India is a community-driven initiative designed to
            spread awareness and adoption of Push Protocol in India. Ambassadors
            play a crucial role in educating engaging and expanding the Push
            ecosystem through content creation, events, developer outreach, and
            social media activities
          </p>
        </div>

        <div>
          <h1 className="text-6xl text-center font-green-brooks">
            <span className="text-[#E03DC1] text-9xl leading-[150%]">
              What is
            </span>{" "}
            Push Chain?
          </h1>

          <p className="max-w-5xl mx-auto text-center">
            Push Ambassador India is a community-driven initiative designed to
            spread awareness and adoption of Push Protocol in India. Ambassadors
            play a crucial role in educating engaging and expanding the Push
            ecosystem through content creation, events, developer outreach, and
            social media activities
          </p>

          <Link
            href="/"
            className="text-xl flex gap-1.5 rounded-full py-4 px-12 border border-white w-fit items-center mx-auto mt-14"
          >
            Explore Push Chain <ArrowUpRight size={24} />
          </Link>
        </div>
      </div>
    </AboutDecrations>
  );
};

export default HomeAbout;
