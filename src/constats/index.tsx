import { BsPersonWorkspace } from "react-icons/bs"
import { CiFolderOn, CiHome } from "react-icons/ci"
import { GrContactInfo } from "react-icons/gr"
import { SiAboutdotme } from "react-icons/si"

export const EXPERIENCE = [
    {
        title: 'Le Wagon\'s FULL-STACK certification',
        year: '2022',
        description: '9 week intensive coding bootcamp where I learned to build web applications from scratch. I learned to use Ruby on Rails, JavaScript, HTML, CSS and SQL. I also learned to work with APIs, deploy applications and work in a team environment. This was my first approach to coding and I loved it.'
    },
    {
        title: 'HARVARDX\'S CS50 certification',
        year: '2023',
        description: "I took this course to strengthen my foundation in computer science, covering algorithms, data structures, cryptography, and more. Starting with C, I later worked with Python and JavaScript for the final project, gaining insight into language similarities. Post-certification, I also pursued Mobile Development with React Native."
    },
    {
        title: 'Jr DEVELOPER at METRICAS',
        year: '2024',
        description: "My first work experience in the industry. As a Jr Developer, I collaborated with a talented team using AWS, Python, and React Native. My key responsibility was developing Python-based Lambda functions, which powered the front-end data displays. This role taught me how to thrive in a professional environment."
    },
    {
        title: 'Solo DEVELOPER for Startup',
        year: '2024',
        description: "I built a mobile app for a growing cleaning company, optimizing team and client management. Using React Native and Firebase, I developed a modern, efficient solution while learning the importance of communication and aligning with client needs."
    }
]

export const Aboutme = {
    title: 'ABOUT ME',
    first_paragraph: 'Im a passionate developer who enjoys creating digital solutions for real life problems. Im driven by challenges and find great satisfaction in creating solutions that have a meaningful impact. When im not coding, I balance my time with physical activities like hitting the gym, running and surfing (whenever I can), which help me stay focused.',
    second_paragraph: 'In my development work I enjoy working with python for the backend and react with typescript for the front end, although  I\'m eager to learn and open to work with any technology. Currently im taking a course on Data Science as I believe in lifelong learning.',
    third_paragraph: 'I am stationed in Mexico City but open to work remotely anywhere in the world.'
}

export const CONTACT = {
    title: 'CONTACT',
    email: 'navafe.ga@gmail.com',
    github: 'github.com/xivaa',
    location: 'Mexico City, Mexico'
}

export const NAV_TABS = [
    {
        title: 'HOME',
        link: '/#home',
        icon: <CiHome />
    },
    {
        title: 'ABOUT',
        link: '/#about',
        icon: <SiAboutdotme />,
    },
    {
        title: 'EXPERIENCE',
        link: '/#experience',
        icon: <BsPersonWorkspace />,
    },
    {
        title: 'PROJECTS',
        link: '/#projects',
        icon: <CiFolderOn />,
    },
    {
        title: 'CONTACT',
        link: '/#contact',
        icon: <GrContactInfo />,
    },
]
export const PROJECTS = [
    {
        index: 0,
        title: 'Habit Tracker',
        description: 'Built with Ruby on Rails, the app allows the user to set goals and then create habits that will get them closer to their goals. This was my first coding project.',
        first_image: '',
        second_image: '',
        third_image: '',
    },
    {
        index: 1, 
        title: 'Operation System',
        description: 'Built with React Native and using firebase for the database, the app was an innovative change for the compan. Allowed the owner, team and clients to have a better communication and organization as it provided all the information anyone needed depending on their role.',
        first_image: '',
        second_image: '',
        third_image: '',
    },
    {
        index: 2,
        title: 'This Portfolio',
        description: 'Built with Vite, React, Tailwind CSS, and Three.js. This is a display of my skills and the technologies I enjoy using as I believe they are the future of web development.',
        first_image: '',
        second_image: '',
        third_image: '',
    },
]