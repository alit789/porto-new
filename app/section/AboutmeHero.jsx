import React from "react";

export default function AboutmeHero() {
  return (
    <div className="inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:60px_60px]">
      <div className="bg-[radial-gradient(circle,_rgba(255,255,255,0.1),_rgba(255,255,255,1))]">
        <div className="min-h-screen flex place-items-center justify-center ">
          <div className="lg:w-[70%] w-full text-center">
            {/* <div className="flex gap-2">
            <div className="badge badge-neutral px-5 py-4">UIX Designer</div>
            <div className="badge badge-neutral px-5 py-4">Web Designer</div>
            </div> */}
            <h1 className=" text-5xl lg:text-7xl mt-6 font-semibold">
              Hello I'm <span className=" text-blue-600">Alit Wiradhanta</span>
            </h1>
            <p className="text-xl mt-2">
              A Website and UIX Designer based in Denpasar , Bali
            </p>
            <p className=" text-gray-500 mt-2">
              I transform ideas into memorable experiences and intuitive
              interfaces, crafting visual stories that engage and inspire.
              Combining creativity with user-centered design, I create digital
              experiences that are both visually compelling and functionally
              effective. My goal is to bring ideas to life, delivering designs
              that leave a lasting impression.
            </p>
            <div className="flex gap-2 mt-6 justify-center">
              <button className=" text-white bg-gray-800 border border-black hover:text-white px-8 py-3 transition-all duration-300 hover:bg-blue-600 hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_0_0_black] active:translate-x-0 active:translate-y-0 active:shadow-none">
                My LinkedIn
              </button>
              <button className=" flex items-center justify-center gap-2 text-white bg-gray-800 border border-black hover:text-white px-8 py-3 transition-all duration-300 hover:bg-teal-600 hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_0_0_black] active:translate-x-0 active:translate-y-0 active:shadow-none">
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
