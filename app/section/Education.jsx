import React from "react";

export default function Education() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold">Education</h1>
      </div>
      <div className="py-6">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Bachelor of Informatics (July 2021- Present)
            </time>
            <h3 className="text-lg font-semibold mt-1">
              Udayana University l Bali, Indonesia
            </h3>
            <p className="mb-4 mt-2 text-justify text-[15px] font-normal text-gray-500 dark:text-gray-400">
              Pursuing a Bachelor of Informatics at Udayana University, Bali,
              Indonesia, I have developed a strong foundation in computer
              science, programming, and data analysis. With a current GPA of
              3.89/4.00, my studies have equipped me with both the technical
              skills and problem-solving abilities needed to tackle complex
              challenges in software development and digital design. Through
              coursework and practical projects, I have gained expertise in
              areas such as algorithms, web development, and user experience
              design, preparing me for a successful career in the tech industry.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              High School Mathematics and Science (July 2018 - July 2021)
            </time>
            <h3 className="text-lg font-semibold mt-1">
              SMAN 2 Denpasar l Bali, Indonesia
            </h3>
            <p className="mb-4 mt-2 text-justify text-[15px] font-normal text-gray-500 dark:text-gray-400">
              During my time at SMAN 2 Denpasar, Bali, I focused on Mathematics
              and Science, building a solid understanding of analytical and
              problem-solving skills. From July 2018 to July 2021, I developed a
              strong foundation in subjects like physics, chemistry, and
              advanced mathematics, which cultivated my passion for technology
              and logical thinking. This background has played a key role in
              shaping my approach to learning and problem-solving as I pursue my
              further studies in Informatics
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
