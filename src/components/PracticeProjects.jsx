import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProjectDetailarray } from "../data/practiceProjectsData";
import { FaXmark } from "react-icons/fa6";
import ReactMarkdown from "react-markdown"; // ✅ Import ReactMarkdown
import Carousel from "../reactBits/Carousel";

const PracticeProjects = () => {
  const [showProjectId, setShowProjectId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setShowProjectId("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const openProject = (id) => {
    setShowProjectId(id);
    setIsOpen(true);
  };

  const closeProject = () => {
    setIsOpen(false);
    setShowProjectId("");
  };

  const activeProject = ProjectDetailarray.find((p) => p.id === showProjectId);

  return (
    <div className="w-full py-[30px] pt-[8rem] px-[10px]">
      <div className="max-w-[1100px] relative mx-auto px-[10px]">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10 text-center uppercase">
          Practice & Learning Projects
        </h2>

        <div className="space-y-12">
          {ProjectDetailarray.map((project) => (
            <div
              key={project.id}
              className="flex flex-col lg:flex-row border-2 border-[#0092ca] bg-[#191C24] text-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="lg:w-1/2">
                <img src={project.image} alt="" />
              </div>

              <div className="lg:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start flex-col  mb-3">
                    {project.status && (
                      <span className="bg-[#0092ca] text-white text-xs font-semibold mb-3 px-3 py-1 rounded-full">
                        {project.status}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-gray-300">
                    {project.shortDescription.length > 400
                      ? project.shortDescription.slice(0, 400) + "..."
                      : project.shortDescription}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => openProject(project.id)}
                    className="bg-[#0092ca]  text-white px-5 py-2 rounded-lg transition duration-200"
                  >
                    Read Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeProject}
            aria-hidden="true"
          />
        )}

        {/* Modal */}
        {isOpen && (
          <>
            <button
              onClick={closeProject}
              className="fixed top-[7rem] right-[calc(12.5%_-_2rem)] bg-[#0092ca] p-3 rounded-full cursor-pointer flex items-center justify-center shadow-lg z-[60]"
              aria-label="Close project details"
            >
              <FaXmark className="text-white text-lg" />
            </button>

            <div
              className="fixed top-[8rem] left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[85%] lg:w-[75%] max-h-[70vh] overflow-y-auto overflow-x-hidden bg-[#191D26] rounded-xl p-6 shadow-2xl"
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-white prose prose-lg max-w-none space-y-6">
                <h3 className="text-3xl font-bold">{activeProject?.title}</h3>

                {activeProject?.status && (
                  <div className="inline-block bg-[#0092ca] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {activeProject.status}
                  </div>
                )}

                {activeProject?.shortDescription && (
                  <ReactMarkdown>
                    {activeProject.shortDescription}
                  </ReactMarkdown>
                )}

                <ul className="flex gap-7  flex-row list-disc">
                  <p>Tech Stack:</p>
                  {activeProject.techStack.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>

                {activeProject?.fullDescription && (
                  <ReactMarkdown>{activeProject.fullDescription}</ReactMarkdown>
                )}

                {activeProject?.images && activeProject.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeProject.images.slice(0, 4).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${activeProject.title} screenshot ${idx + 1}`}
                        className="w-full h-40 object-cover rounded-md"
                      />
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {activeProject?.live && (
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#0092ca] text-white px-4 py-2 rounded-lg"
                    >
                      Live Preview
                    </a>
                  )}
                  {activeProject?.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PracticeProjects;
