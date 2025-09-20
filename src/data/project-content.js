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
import commerceSports from "../assets/projects/commerce-sports.png";
import commerceSports1 from "../assets/projects/commerce-sports1.png";
import commerceSports2 from "../assets/projects/commerce-sports2.png";
import commerceSports3 from "../assets/projects/commerce-sports3.png";
import commerceSports4 from "../assets/projects/commerce-sports4.png";
import commerceSports5 from "../assets/projects/commerce-sports5.png";
import commerceSports6 from "../assets/projects/commerce-sports6.png";
import commerceSports7 from "../assets/projects/commerce-sports7.png";
import commerceSports8 from "../assets/projects/commerce-sports8.png";

const projects = [
{
    title: "E-Commerce Sports Shoes Shop (Frontend Design)",
    description:
        "A modern frontend web application for browsing and purchasing sports shoes. Built with React.js and Tailwind CSS, it features a clean product catalog, interactive filtering, and a responsive shopping cart experience.",
    technologies: ["React.js", "Tailwind CSS", "Vite"],
    features: [
        "Product Catalog with Images and Details",
        "Modern Navigation Bar with Hover Dropdowns",
        "SEO Best Practices (Meta Tags & Semantic HTML)"
    ],
    github: "#",
    demo: "#",
    images: [commerceSports, commerceSports1, commerceSports2, commerceSports3, commerceSports4, commerceSports5, commerceSports6, commerceSports7, commerceSports8],
    },
  {
    title: "CPSU-NSTP Record Management System",
    description:
      "A collaborative task management application with real-time updates. Users can create projects, assign tasks, and track progress with an intuitive dashboard.",
    technologies: ["Laravel", "Php", "Vue.js", "Tailwind CSS", "MySQL", "Vite"],
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
];

export default projects;