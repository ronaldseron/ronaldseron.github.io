import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import sapt from "../assets/projects/sapt.png";
import choose from "../assets/projects/choose.png";
import record from "../assets/projects/record.png";
import saptDash from "../assets/projects/sapt-dash.png";
import evalDash from "../assets/projects/eval-dash.png";
import evalReport from "../assets/projects/eval-report.png";
import evalTraining from "../assets/projects/eval-training.png";
import evalUser from "../assets/projects/eval-user.png";
import nstpDash from "../assets/projects/nstp-dash.png";
import nstpLts from "../assets/projects/nstp-lts.png";
import nstpRotc from "../assets/projects/nstp-rotc.png";
import nstpStudents from "../assets/projects/nstp-students.png";
import ExtendLine from "./ExtendLine";
import { scrollAnimations } from "../hooks/useFadeInOnScroll";
import ProjectModal from "./ProjectModal";


const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  const handleView = (projects) => {
    console.log('Well');
    setSelectedProject(projects);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "CPSU-NSTP Record Management System",
      description:
        "A collaborative task management application with real-time updates. Users can create projects, assign tasks, and track progress with an intuitive dashboard.",
      technologies: [
        "Laravel",
        "Php",
        "Vue.js",
        "Tailwind CSS",
        "MySQL",
        "Vite",
      ],
      features: [
        "User Authentication and Registration",
        "Program Selection (ROTC, LTS, CWTS)",
        "Online Enrollment Processing",
        "Admin and Coordinator Management Panel",
        "Real-time Status Tracking and Notifications",
      ],
      github: "#",
      demo: "#",
      // images: [nstpDash],
      images: [nstpDash, nstpStudents, nstpLts, nstpRotc],
    },
    {
      title: "Student Academic Performance Tracker",
      description:
        "A responsive e-commerce platform built with React.js and Node.js. Features include product catalog, shopping cart, user authentication, and payment integration.",
      technologies: ["Laravel", "Php", "Tailwind CSS", "MySQL", "Vite"],
      features: [
        "Role-based Access(Teacher, Student)",
        "Real-time Grade Encoding",
        "Conditional Evaluation for At-risk Students",
        "SMS Notifications for Grades (Midterm, Final)",
        "Formula-Based Computation Support",
      ],
      github: "#",
      demo: "#",
      // images: [sapt],
      images: [sapt, saptDash, choose, record],
    },
    {
      title: "Web-based CSF and Evaluation System",
      description:
        "A modern weather application that provides current conditions and forecasts. Features location-based weather data and interactive charts for weather trends.",
      technologies: ["Laravel", "Php", "Tailwind CSS", "MySQL", "Vite"],
      features: [
        "User Authentication (Admin and Respondent Access)",
        "Real-time Feedback Collection and Storage",
        "Automated Report Generation with Ratings",
        "Response Analytics and Summary Dashboard",
      ],
      github: "#",
      demo: "#",
      // images: [evalDash],
      images: [evalDash, evalReport, evalTraining, evalUser],
    },
    // {
    //   title: "Portfolio Website",
    //   description: "A responsive portfolio website showcasing my projects and skills. Built with modern web technologies and optimized for performance and accessibility.",
    //   technologies: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
    //   features: ["Responsive Design", "Smooth Animations", "SEO Optimized", "Fast Loading", "Accessibility"],
    //   github: "#",
    //   demo: "#",
    //   image: "💼"
    // }
  ];

  return (
    <div
      className=" "
    >
      <div className=" ">
        <div id="projects" className=" relative">

          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={handleClose} />
          )}
          {/* Header */}
            <div className="flex flex-col justify-center items-start sm:px-8 px-4 bg-white">
                <div className=" relative flex items-center gap-2 bg-tertiary md:px-3 md:py-1.5 px-2 py-1 rounded-full border border-line ">
                    <ExtendLine />
                    <div className=" w-2 h-2 bg-primary rounded-full"></div>
                    <p className=" text-primary font-medium lg:text-sm text-xs">
                        MY PROJECTS
                    </p>
                </div>
                <div className="relative md:py-5 py-3">
                    <div className="absolute top-0 bottom-0 right-0 w-screen border-b border-line"></div>
                    <div className="absolute top-0 bottom-0 left-0 w-screen border-b border-line"></div>

                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-medium text-primary">
                    Latest Works
                    </h2>
                </div>
            </div>

            <div className="">
              <div className="flex flex-col">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className={`flex-1`}
                    {...scrollAnimations.card(index)}
                  >
                    <div
                    className={` flex md:gap-1 max-md:flex-col overflow-hidden
                    ${index % 2 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      {/* Project Image */}
                      <div className={`relative w-full bg-tertiary p-1 ${index % 2 ? 'border-l border-line ' : 'border-r border-line'}`}>
                        <div className="grid place-content-center h-full md:p-2 p-1 overflow-hidden bg-white rounded-lg border border-line">
                          {project.images.slice(0, 1).map((image, imageIndex) => (
                            <img
                              key={imageIndex}
                              className="lg:w-120 w-100 h-full object-cover rounded-md shadow"
                              src={image}
                              alt={project.title}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className=" flex items-center max-md:justify-center lg:p-8 md:p-6 p-2 lg:w-200 md:w-130">
                        <div className="bg-tertiary p-1 rounded-lg border border-line">
                          <div className=" flex flex-col justify-between bg-white rounded-md border border-line lg:p-8 md:p-6 p-2 text-ellipsis">
                            {/* Title */}
                            <h3 className="lg:text-2xl md:text-xl font-bold text-primary leading-tight mb-4">
                              {project.title}
                            </h3>

                            {/* Description */}
                            {/* <p className="text-secondary text-sm mb-4 leading-relaxed flex-grow">
                              {project.description}
                            </p> */}

                            {/* Technologies */}
                            <div className="mb-4">
                              <h4 className="lg:text-lg text-md font-semibold text-primary mb-2">Technologies:</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-tertiary text-primary lg:text-sm text-xs rounded-full font-medium"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Key Features */}
                            <div className="lg:mb-6 mb-2">
                              <h4 className="lg:text-lg text-md font-semibold text-primary mb-2">Key Features:</h4>
                              <ul className="text-secondary lg:text-sm text-xs space-y-1">
                                {project.features.slice(0, 3).map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Action Buttons */}
                            {/* <div className="flex gap-3 mt-auto"> */}
                              <button
                                className=" bg-primary text-white border-2 border-primary py-1.5 px-4 rounded md:text-sm text-xs font-medium cursor-pointer hover:bg-white hover:text-primary transition-colors duration-200 md:mt-6 mt-4"
                                onClick={() => handleView(project)}
                              >
                                View
                              </button>
                              {/* <a
                                href={project.demo}
                                className="flex-1 border border-primary text-primary text-center py-2 px-4 rounded text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200"
                              >
                                Live Demo
                              </a> */}
                            {/* </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full md:h-24 h-12 bg-white">
                      <ExtendLine />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          {/* <div className="mt-12 text-center">
            <p className="text-secondary md:text-base sm:text-sm text-xs mb-6 px-4">
              Want to see more of my work? Check out my GitHub for additional
              projects and contributions.
            </p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 sm:text-base text-sm rounded-full hover:bg-button transition-colors duration-300 inline-block"
            >
              Visit My GitHub
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
