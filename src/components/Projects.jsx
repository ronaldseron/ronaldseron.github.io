import React, { useRef } from "react";
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
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";


const Projects = () => {
  const fadeRef1 = useRef(null);

  useFadeInOnScroll(fadeRef1);

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
      id="projects"
      className=" max-w-standard mx-auto lg:px-12 md:px-8 sm:px-4 px-3 border-x border-line bg-transparent"
    >
      <div className="flex items-start gap-16 py-24 bg-white border-x border-line">
        <div className="flex-1">
          <div className=" flex flex-col justify-center items-center gap-5">
            <div className="relative flex items-center justify-center">
              {/* <Border /> */}
              <ExtendLine />
              <div className="flex-1 flex gap-2 items-center justify-center bg-tertiary px-2 py-1 rounded-full border border-line z-10">
                <div className=" w-2.5 h-2.5 bg-primary rounded-full"></div>
                <p className=" text-primary font-semibold lg:text-sm sm:text-xs text-[11px]">Projects</p>
              </div>
            </div>

            <div className=" relative md:py-5 py-3">
              <ExtendLine />

              <h2 className="lg:text-5xl md:text-4xl text-3xl font-medium text-primary">
                Latest Works
              </h2>
            </div>
          </div>

          <div ref={fadeRef1} className="flex lg:flex-row flex-col gap-4 fade-up sm:p-10 p-4">
            {projects.map((project, index) => (
              <div key={index} className=" rounded-lg flex-1">
                <div className="w-full grid shadow bg-tertiary-shade rounded-2xl grid-cols-1 sm:grid-cols-2 md:gap-2 md:p-2 sm:gap-4 sm:p-4 gap-2 p-2">
                  {project.images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      className="rounded-lg shadow w-full h-auto object-cover"
                      src={image}
                      alt=""
                    />
                  ))}
                </div>
                <div className="py-2">
                  <h3 className="text-base sm:text-start text-center font-semibold text-primary mb-4">
                    {project.title}
                  </h3>
                  {/* <p className="text-secondary text-sm mb-6 leading-relaxed">{project.description}</p> */}

                  {/* <div className="mb-6">
                    <h4 className="text-sm font-medium text-primary mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-primary text-white px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-primary mb-3">
                      Key Features
                    </h4>
                    <ul className="text-sm text-secondary space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex-1 bg-primary text-white text-center py-2 rounded-full text-sm hover:bg-button transition-colors duration-300"
                    >
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 border border-primary text-primary text-center py-2 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
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
