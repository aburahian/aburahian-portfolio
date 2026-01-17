import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiRubyonrails,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiRedis,
  SiSupabase,
} from "react-icons/si";

export const skills = [
  { name: "React", icon: FaReact },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Firebase", icon: SiFirebase },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Python", icon: FaPython },
  { name: "Git", icon: FaGitAlt },
  { name: "Docker", icon: FaDocker },
  { name: "Figma", icon: FaFigma },
];

export const personalInfo = {
  name: "Abu Rahian",
  designation: "Software Engineer | Full Stack Developer",
  introduction:
    "I architect and build scalable, high-performance web applications with a focus on seamless user experiences and clean, maintainable code.",
  about:
    "Specializing in the MERN stack and modern frontend architectures, I transform complex requirements into robust digital solutions. My expertise spans full-cycle development—from database design to interactive UI implementation—ensuring performance, security, and scalability at every layer.",
  email: "aburaihan363@gmail.com",
  phone: "01957222516",
  whatsapp: "01304298318",
  socials: {
    github: "https://github.com/aburahian",
    linkedin: "www.linkedin.com/in/abu-rahian",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
  resumeUrl:
    "https://drive.google.com/file/d/1B7heEw8MNFwFegjuzTVP9JBkzjI7tE52/view?usp=sharing",
};


export const education = [
  {
    degree: "Diploma in Electronics Engineering",
    institution: "Satkhira Polytechnic Institute",
    duration: "2017 - 2022",
    description:
      "Foundation in circuit design, embedded systems, and logical problem-solving capable of translating hardware constraints into efficient software logic.",
  },
];

export const experience = [
  {
    role: "Frontend Developer (React)",
    company: "Personal Projects & Advanced Training",
    duration: "July 2025 - Present",
    description:
      "Developed and deployed multiple full-stack applications using React, Node.js, and MongoDB. Implemented secure authentication, real-time data synchronization, and responsive UI designs adhering to modern web standards.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express/NestJS",
      "Tailwind CSS",
      "Redux Toolkit",
      "TypeScript",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "SkillSwap Platform",
    image: "https://i.ibb.co/gFDQ1tTF/Screenshot-2025-12-06-144250.png",
    description:
      "A comprehensive skill-sharing marketplace connecting learners with experts. Features real-time booking, secure payment integration, and dynamic user dashboards.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
    liveLink: "https://skillswap-7nl.pages.dev/",
    repoLink: "https://github.com/aburahian/SkillSwap",
    challenges:
      "Architecting a secure multi-user role system (Admin, User, Instructor) and implementing real-time session management.",
    futurePlans:
      "Integration of WebRTC for in-app video calls and AI-driven course recommendations.",
  },

  {
    id: 2,
    title: "ARTIFY Gallery",
    image: "https://i.ibb.co/KPSKKtW/Screenshot-2025-12-06-145908.png",
    description:
      "A high-performance digital art exhibition platform with optimized asset delivery and interactive gallery layouts.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://cheerful-cat-006046.netlify.app/",
    repoLink: "https://github.com/aburahian/artify-clinte-site",
    challenges:
      "Implementing lazy-loading for heavy image assets to maintain high Core Web Vitals scores.",
    futurePlans:
      "Adding NFT minting capabilities and social engagement features.",
  },

  {
    id: 3,
    title: "Raw Thoughts Blog",
    image: "https://i.ibb.co/VcBkddbd/Screenshot-2025-12-06-144918.png",
    description:
      "A dynamic content publishing platform utilizing Server-Side Rendering (SSR) for superior SEO and performance.",
    techStack: ["Next.js", "GraphQL", "Apollo Client", "PostgreSQL"],
    liveLink: "https://raw-thoughts-client.vercel.app/",
    repoLink: "https://github.com/aburahian/raw-thoughts--client",
    challenges:
      "Optimizing data fetching strategies with GraphQL to reduce network overhead.",
    futurePlans:
      "Implementing a headless CMS backend and rich-text editing features.",
  },
];
