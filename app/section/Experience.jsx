import React, { useState } from "react";

export default function Experience() {
  const [selectedTab, setSelectedTab] = useState("Organization");
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const experiences = [
    {
      id: 1,
      time: "Jan 2023 – Present",
      title: "Member of Public Relation Division",
      category: "Organization",
      organization:
        "HIMAIF (Himpunan Mahasiswa Informatika) UNUD | Bali, Indonesia",
      description: [
        "Create an organizational website that is used to accommodate the aspirations of students majoring in Informatics",
        "Edit several designs for social media purposes",
        "Participated in 7 events as graphic designer",
      ],
      images: [
        "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/08145112/Thatedchao.jpg",
        "https://www.insightlancer.com/wp-content/uploads/2024/03/personal-portfolio-website-figma-design.png",
      ],
    },
    {
      id: 2,
      time: "Aug 2023 – Dec 2023",
      title: "Backend Web Developer Student",
      category: "Certification",
      organization:
        "PT Hacktivate Teknologi Indonesia | Jakarta Selatan, Indonesia",
      description: [
        "Actively involved in learning to program a website from the backend side",
      ],
      images: [
        "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/08145112/Thatedchao.jpg",
      ],
    },
    {
      id: 3,
      time: "Feb 2024 – Jun 2024",
      title: "Data Science And Artificial Intelligence Student",
      category: "Certification",
      organization:
        "Achmad Zaky Foundation (StartUp Campus) | Jakarta Selatan, Indonesia",
      description: [
        "Actively involved in learning data processing and looking for insight from the processed data",
      ],
      images: [
        "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/08145112/Thatedchao.jpg",
      ],
    },
    {
      id: 4,
      time: "Sep 2023 – Sep 2023",
      title: "Design Coordinator Studi Banding Informatika 2023",
      category: "Graphic Design",
      organization:
        "HIMAIF (Himpunan Mahasiswa Informatika) UNUD | Bali, Indonesia",
      description: [
        "Responsible for design, documentation and conducting live broadcasts at the 2023 informatics comparative study committee",
      ],
      images: [
        "https://media.licdn.com/dms/image/v2/D562DAQFQKm2YXSi6SA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1697988097568?e=1730480400&v=beta&t=BlPC8858ejFYPo8n_FCiOj-HlHb08pJU4OLDj3b3jrs",
      ],
    },
  ];

  const filteredExperiences = experiences.filter(
    (experience) => experience.category === selectedTab
  );

  return (
    <div className="px-4 md:px-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
      </div>
      <div className="py-6">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Dropdown for smaller screens */}
          <div className="md:hidden mb-4">
            <select
              value={selectedTab}
              onChange={(e) => setSelectedTab(e.target.value)}
              className="w-full p-2 border border-gray-400 bg-white text-gray-700"
            >
              {[
                "Organization",
                "Certification",
                "Graphic Design",
                "Web Design",
                "UI/UX Design",
                "Awards",
              ].map((tab) => (
                <option key={tab} value={tab}>
                  {tab}
                </option>
              ))}
            </select>
          </div>
          {/* Side Tab */}
          <div className="md:col-span-3 hidden md:block mb-4 md:mb-0 p-4 border border-gray-400 md:h-full">
            <div className="flex flex-wrap md:flex-col gap-2 md:gap-3">
              {[
                "Organization",
                "Certification",
                "Graphic Design",
                "Web Design",
                "UI/UX Design",
                "Awards",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`w-full text-center md:text-start bg-white border px-4 py-2 md:py-3 transition-all duration-300 ${
                    selectedTab === tab
                      ? "bg-blue-600 border-black text-white"
                      : "hover:bg-blue-600 hover:border-black border-gray-400 hover:text-white"
                  } hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_0_0_black] active:translate-x-0 active:translate-y-0 active:shadow-none`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          {/* End Side Tab */}

          {/* Tab Content */}
          <div className="md:col-span-9 p-4 border-gray-400 border-r-[1px] border-t-[1px] border-b-[1px] border-s-[1px] lg:border-s-0 flex flex-col gap-4">
            {filteredExperiences.length > 0 ? (
              filteredExperiences.map((experience) => (
                <div
                  key={experience.id}
                  className="border border-gray-400 w-full p-4"
                >
                  <h3 className="text-lg md:text-xl font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-gray-500">{experience.time}</p>
                  <p className="mt-1 text-sm font-medium">
                    {experience.organization}
                  </p>
                  {/* Description List */}
                  <ul className="mt-2 text-sm list-disc list-inside">
                    {experience.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                  {/* Display Images */}
                  <div className="flex flex-wrap mt-4">
                    {experience.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${experience.title} ${index + 1}`}
                        className="w-44 h-auto m-[6px] cursor-pointer border shadow-sm md:w-64"
                        onClick={() => openModal(img)}
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center">
                <div className="text-center">
                  <img
                    className="w-48 md:w-96"
                    src="https://cdni.iconscout.com/illustration/premium/thumb/404-illustration-download-in-svg-png-gif-file-formats--error-not-found-page-result-webpage-pack-user-interface-illustrations-5974976.png?f=webp"
                    alt="No experiences available"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Image (if applicable) */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Experience Preview"
              className="max-w-full h-auto cursor-pointer"
              onClick={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}
