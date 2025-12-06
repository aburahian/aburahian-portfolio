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
} from "react-icons/si";

export const personalInfo = {
  name: "Abu Rahian",
  designation: "Full Stack Developer",
  introduction:
    "I am a passionate developer with a knack for building beautiful and functional web applications. My journey started with a curiosity about how the internet works, and it has evolved into a career where I solve complex problems with code.",
  about:
    "I specialize in building scalable web applications using modern technologies. I enjoy working on both the frontend and backend, ensuring a seamless user experience. When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new cooking recipes.",
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
    "https://drive.google.com/file/d/1vnl-vlLHIjP9uGH0Z0W7JmaRhiDkNhqU/view",
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, level: 90 },
      { name: "HTML5", icon: FaHtml5, level: 95 },
      { name: "CSS3", icon: FaCss3Alt, level: 90 },
      { name: "JavaScript", icon: FaJs, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 80 },
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, level: 80 },
      { name: "Python", icon: FaPython, level: 75 },
      { name: "Django", icon: SiDjango, level: 70 },
      { name: "Ruby on Rails", icon: SiRubyonrails, level: 65 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, level: 80 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 75 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, level: 90 },
      { name: "Docker", icon: FaDocker, level: 70 },
      { name: "AWS", icon: FaAws, level: 60 },
      { name: "Figma", icon: FaFigma, level: 75 },
    ],
  },
];

export const education = [
  {
    degree: "Diploma Engineering In Electronics",
    institution: "Satkhira Polytechnic Institute",
    duration: "2017 - 2022",
    description:
      "Specialized in Electronics and Communication Engineering with hands-on experience in circuit design and embedded systems.",
  },
];

export const experience = [
  {
    role: "Junior Web Developer (Self-taught)",
    company: "Personal Projects & Programming Hero Course",
    duration: "July 2025 - Running",
    description:
      "Completed a comprehensive 6-month course in web development, focusing on front-end and back-end development. Built several personal projects, including a portfolio website, e-commerce mock-up, and a blog platform, applying modern web technologies.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "SkillSwap App",
    image: "https://i.ibb.co/gFDQ1tTF/Screenshot-2025-12-06-144250.png",
    description:
      "SkillSwap is a web application that allows users to discover, book, and offer skill-based learning sessions. It connects learners with skilled providers across various categories, making learning accessible and convenient.",
    techStack: ["React", "Firebase", "Express", "Node.js", "MongoDB"],
    liveLink: "https://skillswap-7nl.pages.dev/",
    repoLink: "https://github.com/aburahian/SkillSwap",
    challenges:
      "Implementing secure payment gateway integration and real-time inventory updates.",
    futurePlans:
      "Adding AI-based product recommendations and dark mode support.",
  },

  {
    id: 2,
    title: "ARTIFY – A Creative Artwork Showcase Platform",
    image: "https://i.ibb.co/KPSKKtW/Screenshot-2025-12-06-145908.png",
    description:
      "A creative platform for artists to showcase their artwork, explore galleries, and discover inspiration from other creators.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    liveLink: "https://cheerful-cat-006046.netlify.app/",
    repoLink: "https://github.com/aburahian/artify-clinte-site",
    challenges:
      "Optimizing image loading for large artworks and creating a smooth, responsive gallery experience across devices.",
    futurePlans:
      "Adding user profiles, search & filter functionality, and social sharing features for artwork.",
  },

  {
    id: 3,
    title: "Raw Thoughts",
    image: "https://i.ibb.co/VcBkddbd/Screenshot-2025-12-06-144918.png",
    description:
      "A Next.js blog platform where I share thoughts, tutorials, and updates with SSR and dynamic content fetching.",
    techStack: ["Next.js", "React Hooks", "Apollo", "Express"],
    liveLink: "https://raw-thoughts-client.vercel.app/",
    repoLink: "https://github.com/aburahian/raw-thoughts--client",
    challenges:
      "Implementing server-side rendering, GraphQL data fetching, and dynamic routing for posts.",
    futurePlans:
      "Adding commenting, search functionality, and authentication for users.",
  },

  // ---- Extra 3 Projects You Asked For ----
];
