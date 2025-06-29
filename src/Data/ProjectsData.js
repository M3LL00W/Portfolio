// src/data/projectsData.js

import {
  GitHub as GitHubIcon,
  Language as DemoIcon,
  MedicalServices as GDIcon,
  Web as WebIcon,
  Storage as DBIcon,
} from '@mui/icons-material';

const projectsData = [
  {
    id: 1,
    title: 'Online Doctor Apppointment Booking System',
    shortDescription: 'GetDoctor is a full-stack web application built using MERN stack',
    fullDescription: 'GetDoctor allows users to book doctor appointments online, manage health records, and access available specialists by category and availability. It features secure user authentication, real-time booking status, and an admin dashboard for doctor and patient management.',
    image: '/Portfolio/images/get-doctor.jpg',
    techStack: ['React', 'Express.js', 'Nodejs', 'MongoDB','JWT', 'Bcrypt', 'Axios'],
    category: 'Web Development',
    icon: <GDIcon />,
    links: {
      github: 'https://github.com/M3LL00W/GET-DOCTOR',
      demo: null,
    },
  },
  // {
  //   id: 2,
  //   title: 'Academic Analyser – Full-Stack Performance Tracker',
  //   shortDescription: 'Role-based academic monitoring system with dynamic dashboards.',
  //   fullDescription: 'Built a role-based academic monitoring system featuring dynamic dashboards, authentication, and CRUD APIs for educators and students to track academic progress and analytics securely.',
  //   image: '/Portfolio/images/academic-analyser.jpg',
  //   techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'MySQL', 'JWT', 'Bcrypt', 'ChartJS', 'REST APIs'],
  //   category: 'Web Development',
  //   icon: <WebIcon />,
  //   links: {
  //     github: ',
  //     demo: null,
  //   },
  // },
  // {
  //   id: 3,
  //   title: 'QuickPly – Job Application Platform',
  //   shortDescription: 'Full-stack recruitment platform with job listings and resume handling.',
  //   fullDescription: 'Built a full-stack recruitment system using JSP, PostgreSQL, and JDBC, featuring user authentication, CRUD operations for profiles and job listings, and resume handling via dynamic JSP-driven interfaces.',
  //   image: '/Portfolio/images/quickply.jpg',
  //   techStack: ['JSP', 'PostgreSQL', 'JDBC', 'HTML/CSS'],
  //   category: 'Web Development',
  //   icon: <DBIcon />,
  //   links: {
  //     github: '',
  //     demo: null,
  //   },
  // },
];

export default projectsData;
