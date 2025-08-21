import React, { useEffect, useRef } from "react";
import Border from "./Borders";
import ExtendLine from "./ExtendLine";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

const About = () => {
  const fadeRef1 = useRef(null);
  const fadeRef2 = useRef(null);

  useFadeInOnScroll(fadeRef1);
  useFadeInOnScroll(fadeRef2);

  const skills = [
    {
      category: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Vue.js",
        "React.js",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      category: "Backend",
      items: [
        "Laravel",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "PostgreSQL",
        "MySQL",
      ],
    },
    {
      category: "Tools & Others",
      items: ["Git & GitHub", "VS Code", "Vite", "npm"],
    },
  ];



  return (
    <div
      id="about"
      className=""
    >
      <div className="">
        <div className="bg-white">
          {/* Heading */}
          <div className="flex flex-col justify-center items-start md:gap-5 sm:gap-3 gap-2 sm:mb-5 mb-3 sm:px-8 px-4">
            <div className="relative flex items-center justify-center bg-background">
              {/* <Border /> */}
              <ExtendLine />
              <div className="flex-1 flex sm:gap-2 gap-1 items-center justify-center bg-gray-100 sm:px-2 sm:py-1 px-1.5 py-0.5 rounded-full border border-line">
                <div className="lg:w-2.5 lg:h-2.5 w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-primary font-semibold lg:text-sm sm:text-xs text-[11px]">About</p>
              </div>
            </div>
            <div className="relative md:py-5 py-3">
              <ExtendLine />
              <h2 className="lg:text-5xl md:text-4xl text-3xl font-medium text-primary">
                Quick Introduction
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="relative flex sm:flex-row flex-col gap-1 bg-tertiary p-1">
            {/* <ExtendLine /> */}

            {/* My Story & Skills */}
            <div ref={fadeRef1} className="flex-1 flex md:flex-row flex-col gap-2 fade-up will-change-transform will-change-opacity">
              <div className="flex-1 h-auto bg-white outline outline-gray-950/5 rounded-sm md:p-8 p-4">
                <div className="md:mb-6 mb-3 flex gap-4 items-center">
                  <i className="bx bx-bookmark-minus md:text-6xl text-2xl"></i>
                  <h3 className="lg:text-2xl sm:text-xl text-base font-medium text-primary text-nowrap">
                    My Story
                  </h3>
                </div>
                <div className="space-y-4 lg:text-base sm:text-sm text-[11px] text-justify text-secondary leading-relaxed font-light">
                  <p>
                    I'm a recent Information Technology graduate with a passion
                    for web development and creating user-friendly digital
                    experiences. During my studies, I discovered my interest in
                    backend development and found great satisfaction in building
                    dynamic web applications using Laravel.
                  </p>
                  <p>
                    Through academic projects and self-directed learning, I've
                    built a solid foundation in modern web technologies. I'm
                    particularly drawn to Laravel and enjoy the problem-solving
                    challenges that come with backend development.
                  </p>
                  <p>
                    I'm eager to start my career as a junior web developer,
                    where I can contribute fresh perspectives while learning
                    from experienced professionals in a collaborative
                    environment.
                  </p>
                </div>
              </div>

              {/* <div className="flex-1 bg-white border border-line rounded-2xl md:p-8 p-4">
                <div className="md:mb-6 mb-3 flex gap-4 items-center">
                  <i className="bx bx-bookmark-minus md:text-6xl text-2xl"></i>
                  <h3 className="lg:text-2xl sm:text-xl text-base font-medium text-primary text-nowrap">
                    Technical Skills
                  </h3>
                </div>
                <div className="space-y-6 lg:text-lg sm:text-sm text-[11px]">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h4 className=" font-medium text-primary mb-3">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-tertiary text-primary px-3 py-1 rounded-full sm:text-sm text-[11px] border border-secondary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

            {/* What I Bring & Education */}
            <div ref={fadeRef2} className="flex-1 flex flex-col gap-1 fade-up will-change-transform will-change-opacity">
              <div className="flex-1 bg-white border border-line rounded-sm md:p-8 p-4">
                <div className="md:mb-6 mb-3 flex gap-4 items-center">
                  <i className="bx bx-bookmark-minus md:text-6xl text-2xl"></i>
                  <h3 className="lg:text-2xl sm:text-xl text-base font-medium text-primary text-nowrap">
                    What I Bring
                  </h3>
                </div>
                <ul className="space-y-2 text-secondary font-light lg:text-base sm:text-sm text-[11px]">
                  <li>• Strong problem-solving and analytical thinking</li>
                  <li>• Eagerness to learn and adapt to new technologies</li>
                  <li>
                    • Fresh perspective and enthusiasm for modern web practices
                  </li>
                  <li>• Strong communication and teamwork skills</li>
                  <li>• Attention to detail and clean code practices</li>
                </ul>
              </div>

              <div className="flex-1 bg-white border border-line rounded-sm md:p-8 p-4">
                <div className="md:mb-6 mb-3 flex gap-4 items-center">
                  <i className="bx bx-bookmark-minus md:text-6xl text-2xl"></i>
                  <h3 className="lg:text-2xl sm:text-xl text-base font-medium text-primary text-nowrap">
                    Education
                  </h3>
                </div>
                <div className="flex items-center lg:text-base sm:text-sm text-[11px]">
                  <div>
                    <h5 className="font-medium text-primary">
                      Bachelor of Science in Information Technology
                    </h5>
                    <p className="text-secondary mt-1">
                      Central Philipines State University • 2021-2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
