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
    myprofile
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
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
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
  
 ];