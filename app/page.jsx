"use client";

import React from "react";
import Education from "./section/Education";
import Experience from "./section/Experience";
import AboutmeHero from "./section/AboutmeHero";

export default function page() {
  return (
    <div className="px-5">
      <AboutmeHero />
      <div className="flex place-content-center mt-20">
        <div className="lg:w-[70%]">
          <Education />
          <Experience />
        </div>
      </div>
    </div>
  );
}
