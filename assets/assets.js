import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import myprofile from './myprofile.jpg'
import news from './news.png'
import parmacy1 from './parmacy1.png'
import ecommercec from './ecommercec.png'
import pos from './pos.png'
import cofeeshop from './cofeeshop.png'
import resturant from './resturant.png'
import imagesearch from './imagesearch.png'
import weather from './weather.png'
import todo from './todo.png'
import movie from './movie.png'
import tourism from './tourism.png'
import itrodctiondevops from './itrodctiondevops.png'
import fullstack from './fullstack.png'
import python from './python.png'
import frontend from './frontend.png'
import webdesign from './webdesign.png'
import webfundamental from './webfundamental.png'
import GSjavascript from './GSjavascript.png'
import devops from './devops.png'
import appoinmenst from './appoinments.png'
import quickai from './quickai.png'
import blogapp from './blogapp.png'
import portfolio from './portfolio.png'
import rnmovie from './rnmovie.jpg'
import reactjs from './reactjs.png'
import serverside from './serverside.png'
import tailwind from './tailwind.jpg'
import postman from './postman.png'
import php from './php.png'
import nodejs from './nodejs.png'
import reacticon from './reactjsicon.png'
import nodeicon from './nodeicon.png'
import laravelticon from './laravelicon.png'
import mysqlticon from './mysqlicon.png'
import expressicon from './expressicon.png'
import posgreeicon from './posgreeicon.png'



export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  myprofile,
  reacticon,
  nodeicon,
  laravelticon,
  mysqlticon,
  expressicon,
  posgreeicon,
};

export const workData = [
  {
    title: 'Frontend project',
    description: 'Web Design',
    bgImage: '/work-1.png',
  },
  {
    title: 'Geo based app',
    description: 'Mobile App',
    bgImage: '/work-2.png',
  },
  {
    title: 'Photography site',
    description: 'Web Design',
    bgImage: '/work-3.png',
  },
  {
    title: 'UI/UX designing',
    description: 'UI/UX Design',
    bgImage: '/work-4.png',
  },
]

export const serviceData = [
  { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
  { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
  { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
  { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
  { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
  { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
  { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
  assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git,
];

export const projects = [
  {
    id: 9,
    title: "AI News Voice Assistant",
    date: "Jun 2024 - Nov 2024",
    description:
      "AI News Voice Assistant is a voice-controlled news platform that provides real-time, personalized news updates. Built with React.js.",
    image:
      news,
    tags: [
      "React Js",
      "Alan AI",
      "VsCode",
      "NewsAPI",
    ],
    category: "fullstack",
    github: "https://github.com/Nirosh-Edirisinghe/Ai-News-Application.git",
    webapp: "#",
  },
  {
    id: 0,
    title: "Pharmacy Management and Billing System",
    date: "jun 2023 - Nov 2023",
    description:
      "This System is a software solution designed to streamline pharmacy operations by managing inventory, processing sales, and generating bills efficiently.",
    image:
      parmacy1,
    tags: ["Java", "MySQL", "NetBeans"],
    category: "fullStack",
    github: "https://github.com/Nirosh-Edirisinghe/pharmacy-management-system.git",
    webapp: "#",
  },
  {
    id: 10,
    title: "Clothing Web Store",
    date: "Jan 2025",
    description:
      "E-commerce Website featuring a Home page with product highlights and a Product Collection page with filtering, sorting, and search for an optimized shopping experience",
    image:
      ecommercec,
    tags: ["React.js", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/Nirosh-Edirisinghe/Ecommerse-site.git",
    webapp: "#",
  },
  {
    id: 1,
    title: "Restaurant Point of Sale (POS) System",
    date: "Jun 2022 - Nov 2022",
    description:
      "Restaurant (POS) System is designed to streamline restaurant operations by managing orders, processing payments, tracking inventory and improving customer.",
    image:
      pos,
    tags: [
      "C#",
      "Visual Studio 2012",
    ],
    category: "fullStack",
    github: "#",
    webapp: "#",
  },
  {
    id: 2,
    title: " Coffee Shop Web",
    date: "Dec 2024",
    description:
      "A fully responsive coffee shop website featuring six sections Hero, About, Menu, Testimonials, Gallery, and Contact, along with a navigation menu and footer.",
    image:
      cofeeshop,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    github: "https://github.com/Nirosh-Edirisinghe/cofee_shop_website.git",
    webapp: "#",
  },
  {
    id: 3,
    title: "Restaurant Web",
    date: "Dec 2024 ",
    description:
      "restaurant website offers a seamless and visually appealing experience with sections for Home, About, Menu, Awards, and Contact",
    image:
      resturant,
    tags: ["React Js", "Modern UI & UX"],
    category: "frontend",
    github: "https://github.com/Nirosh-Edirisinghe/Resturant-Web.git",
    webapp: "#",
  },

  {
    id: 4,
    title: "Image Search App",
    date: "2023",
    description:
      "image search web app allows users to search for images, view relevant details, and easily download the images. It is fully responsive, ensuring a seamless experience on both desktop and mobile devices.",
    image:
      imagesearch,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "mini",
    github: "https://github.com/Nirosh-Edirisinghe/Js_Image_Search_App.git",
    webapp: "#",
  },
  {
    id: 5,
    title: "Weather App",
    date: "2023",
    description:
      "weather app allows users to search for a location and view real-time weather details. It provides essential information such as temperature, humidity, and weather conditions.",
    image:
      weather,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "mini",
    github: "https://github.com/Nirosh-Edirisinghe/Js_weather_app.git",
    webapp: "#",
  },
  {
    id: 6,
    title: "To-Do List App",
    date: "2023",
    description:
      "To-do list app helps users manage tasks by adding, editing, and removing items from their to-do list. It offers a simple and intuitive interface, making task management easy.",
    image:
      todo,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "mini",
    github: "https://github.com/Nirosh-Edirisinghe/Todo-LIst.git",
    webapp: "#",
  },

  {
    id: 11,
    title: "Movie Explorer App",
    date: "2025",
    description:
      "Developed a responsive Movie Explorer web app using TMDb API that allows users to log in, search, and explore movies with detailed info like overview, genre, and trailer.",
    image:
      movie,
    tags: ["Vite", "React", " Material-UI", "Axios", "TMDb API"],
    category: "frontend",
    github: "https://github.com/Nirosh-Edirisinghe/movie-explore-app.git",
    webapp: "#",
  },

  {
    id: 12,
    title: "Tourism_Web",
    date: "2025",
    description:
      "Traventorat is a simple and elegant tourism website. It provides users with a clean interface to explore travel options, learn about services, and easily get in touch for inquiries.",
    image:
      tourism,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    github: "https://github.com/Nirosh-Edirisinghe/Tourism_Web.git",
    webapp: "#",
  },
  {
    id: 13,
    title: "Doctor Appointment Booking System (MERN Stack)",
    date: "Sep 2025 - Oct 2025",
    description:
      "A full-stack Doctor Appointment Booking System built using the MERN Stack.It features 3-level authentication for patients, doctors, and admins, allowing secure booking, profile management, and appointment control.",
    image:
      appoinmenst,
    tags: [
      "MERN Stack",
      "Jwt authentication",
      "TailwindCss",
      "RestAPIs",
    ],
    category: "fullstack",
    github: "https://github.com/Nirosh-Edirisinghe/Doctor-Appointment-Booking.git",
    webapp: "#",
  }, {
    id: 14,
    title: "Quick AI – AI SaaS Application",
    date: "Jul 2025 - Aug 2025",
    description:
      "This is a full-stack AI SaaS application built with the PERN stack that integrates subscription billing and AI-powered tools. It’s designed for scalability, performance, and modern SaaS workflows.",
    image:
      quickai,
    tags: [
      "PERN stack",
      "Gemini API",
      "TailwindCss",
      "Clipdrop API",
      "Cloudinary",
    ],
    category: "fullstack",
    github: "https://github.com/Nirosh-Edirisinghe/Quick-Ai.git",
    webapp: "#",
  }, {
    id: 15,
    title: "Blog App",
    date: "Jul 2025",
    description:
      "A full-stack Blog Application built with Next.js, Tailwind CSS, MongoDB, and React Icons. This project allows users to add, delete, and view blog posts, along with an email subscription feature.",
    image:
      blogapp,
    tags: [
      "Next.js",
      "MongoDB",
      "TailwindCss",
    ],
    category: "fullstack",
    github: "https://github.com/Nirosh-Edirisinghe/next-blog-app.git",
    webapp: "#",
  }, {
    id: 16,
    title: "Portfolio Web",
    date: "Mar 2025",
    description:
      "A dynamic and responsive portfolio website to showcase my skills, projects, and achievements. Built for a smooth user experience with clean design and interactive sections like About, Skills, Projects, Achievements, and Contact.",
    image:
      portfolio,
    tags: [
      "React Js",
      "Vite",
      "Styled Components",
    ],
    category: "frontend",
    github: "https://github.com/Nirosh-Edirisinghe/portfolio.git",
    webapp: "#",
  }, {
    id: 17,
    title: "Movie Explorer Mobile App (React Native)",
    date: "Oct 2025",
    description:
      "A modern Expo React Native app to explore trending and latest movies using TMDb API, Appwrite backend, and Tailwind CSS for sleek, responsive UI.",
    image:
      rnmovie,
    tags: [
      "React Native",
      "Typescript",
      "TailwindCss",
      "Expo-cli",
    ],
    category: "mobile",
    github: "https://github.com/Nirosh-Edirisinghe/React_native_movie_app.git",
    webapp: "#"
  }

];

export const achivements = [
  {
    id: 1,
    title: "Itrodction to DevOps Tool",
    date: "Simplilearn - Mar 2025",
    image: itrodctiondevops,
    tags: [
      "Git & GitHub",
      "Docker",
      "Kubernetes",
      "Jenkins",
    ],
    github: "#",

  },
  {
    id: 2,
    title: "HTML,CSS,Java,JavaScript Programming",
    date: "Udemy - Dec 2024",
    image: fullstack,
    tags: [
      "OOP ",
      "CSS ",
      "HTML5 ",
      "JavaScript ",
      "Java ",
    ],
    github: "#",

  }, {
    id: 3,
    title: "Python for Biginner",
    date: "University of Moratuwa - Jav 2025",
    image: python,
    tags: [
      "Python",
    ],
    github: "#",

  }, {
    id: 4,
    title: "Introduction to FrontEnd Development",
    date: "Simplilearn - Feb 2025",
    image: frontend,
    tags: [
      "CSS ",
      "HTML5 ",
      "JavaScript ",
      "Angular Js",
    ],
    github: "#",

  }, {
    id: 5,
    title: "Web Dedign for Biginner",
    date: "University of Moratuwa - jan 2025",
    image: webdesign,
    tags: [
      "Web Programming & Cloud Commputing",
      "CSS ",
      "HTML5 ",
      "JavaScript",
    ],
    github: "#",

  }, {
    id: 6,
    title: "Foundation of Web Development",
    date: "Udemy - Mar 2025",
    image: webfundamental,
    tags: [
      "CSS ",
      "Bootstrap ",
      "JavaScript",
      "React Js",
    ],
    github: "#",

  }, {
    id: 7,
    title: "JavaScrpt Fundamentals",
    date: "GreatStack - Jav 2025",
    image: GSjavascript,
    tags: [
      "JavaScript",
    ],
    github: "#",

  },
  {
    id: 8,
    title: "Fundamentals of DevOps",
    date: "KodeKloud - Feb 2025",
    image: devops,
    tags: [
      "Git & GitHub",
    ],
    github: "#",

  },
  {
    id: 9,
    title: "Postman API Fundamentals Student Expert",
    date: "Postman - Jun 2025",
    image: postman,
    tags: [
      "GET, POST, PATCH, and DELETE requests",
      "Query parameters"
    ],
    github: "#",
  },
  {
    id: 10,
    title: "React Js From Beginner to Expert ",
    date: "Udemy - Jul 2025",
    image: reactjs,
    tags: [
      "Fundamentals",
      "Routing",
      "API Integration",
    ],
    github: "#",
  },
  {
    id: 11,
    title: "Server-side Web Programming ",
    date: "University of Moratuwa - Sep 2025",
    image: serverside,
    tags: [
      "Node Js",
      "Express Js",
      "REST APIs",
      "web server security"
    ],
    github: "#",
  },
  {
    id: 12,
    title: "Introduction to PHP",
    date: "Simplilearn - Sep 2025",
    image: php,
    tags: [
      "OOP in PHP",
      "Form validation",
      "CRUD operation",
    ],
    github: "#",
  },
  {
    id: 13,
    title: "TailwindCss",
    date: "Udemy - Oct 2025",
    image: tailwind,
    tags: [
      "Tailwind CSS",
    ],
    github: "#",
  },
  {
    id: 14,
    title: "Node Js",
    date: "Simplilearn - Oct 2025",
    image: nodejs,
    tags: [
      "Node JS Architecture",
      "NPM",
      "JWT Authentication",
      "MongoDB",
    ],
    github: "#",
  },

]