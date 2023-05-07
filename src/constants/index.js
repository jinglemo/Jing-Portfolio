import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  todomagotchi,
  frey,
  happyhour,
  iconlogo,
  threejs,
  grace,
  githubhero,
  linkedinhero,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },

  
];

const services = [
  {
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Student",
    company_name: "Grace Hopper Academy",
    icon: grace,
    iconBg: "#383E56",
    date: "Novemeber 2022 - April 2023",
    points: [
      "Immersive training in full-stack web development, utilizing software development best practices and technologies such as PostgreSQL, Express.js, React, Redux, and Node.js. It is a full-time program designed to equip participants with the skills necessary to become proficient in web development.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-stack Web Developer",
    company_name: "Freelancer",
    icon: iconlogo,
    iconBg: "#E6DEDD",
    date: "April 2023 - Current ",
    points: [
      "Develop custom web applications tailored to clients' needs, including frontend design, backend development, and API integration using various web development frameworks and technologies.",
      "Improve website performance by optimizing code, implementing caching strategies, and reducing page load times, and providing ongoing support and maintenance for efficient website operation.",
      "Develop responsive and mobile-friendly websites that provide a seamless user experience across all screen sizes and devices, utilizing responsive design principles to automatically adjust to different screen sizes and resolutions.",
      "Provide ongoing support and maintenance, including regular updates, bug fixes, and security patches, and offer technical support and troubleshooting to ensure websites and web applications are secure, up-to-date, and running smoothly, building long-term relationships with clients based on exceptional service and value.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const navIcons = [
  {
    name: "githubhero",
    icon: githubhero,
    link: "https://github.com/jinglemo",
  },
  {
    name: "linkedinhero",
    icon: linkedinhero
  },
]

const projects = [
  {
    name: "TodoMagotchi",
    description:
      "ToDoMagotchi is a To-Do app that encourages productivity by adding experience points to a virtual pet that grows and transforms when tasks are completed.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgresSQL",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: todomagotchi,
    source_code_link:
      "https://github.com/Capstone-Project-Team-ToDomagotchi/todomagotchi",
  },
  {
    name: "Frey Smiles",
    description:
      "An online website where patients can easily schedule and manage their appointments with the office and purchase dental products securely using stripe.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: frey,
    source_code_link: "https://github.com/f-smiles/f-smiles",
  },
  {
    name: "Happy Hour",
    description:
      "An alcohol e-commerce site where users can login a secure online platform that enables registered users to purchase alcoholic beverages and track their order history.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "postgresSQL",
        color: "pink-text-gradient",
      },
    ],
    image: happyhour,
    source_code_link:
      "https://github.com/GraceShopper-Jing-Malinda-Mandy-Wanyi/Grace-Shopper",
    web_link: "https://graceshopper-jing-malinda-mandy-wanyi.onrender.com/",
  },
];

export { navIcons, services, technologies, experiences, testimonials, projects };
