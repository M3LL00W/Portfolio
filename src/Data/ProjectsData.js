// src/data/projectsData.js

import {
  GitHub as GitHubIcon,
  Language as DemoIcon,
  MedicalServices as GDIcon,
  Note as NoteIcon,
  Code as OOPIcon,
  Psychology as MLIcon
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
      demo: 'https://get-doctor.vercel.app',
    },
  },
  {
    id: 3,
    title: 'Customer Churn Prediction',
    shortDescription: 'User churn in Telecom Inductry using ML, achieving 85% accuracy ',
    fullDescription: 'Designed and implemented a machine learning model to predict customer churn using call records, internet usage, and billing data.fAchieved 85% prediction accuracy, helping the telecom provider proactively reduce churn through personalized retention campaigns.',
    image: '/Portfolio/images/churn.jpg',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib','Django','Jupyter Noptebook'],
    category: 'Machine Learning',
    icon: <MLIcon />,
    links: {
      github: 'https://github.com/M3LL00W/Customer-Churn-Prediction',
      demo: null,
    },
  },
  {
    id: 2,
    title: 'Library Management System',
    shortDescription: 'A CLI-based system developed in C++ using OOP, STL, and File I/O.',
    fullDescription: 'Designed and implemented a role-based Library Management System in C++ using Object-Oriented Programming principles, STL data structures, and file I/O for persistent storage. Enabled librarians and members to securely manage books, track borrowing and returns, and maintain comprehensive records with efficient data handling and modular design.',
    image: '/Portfolio/images/library-management.png',
    techStack: ["C++", "STL", "OOP", "File I/O"],
    category: 'Object-Oriented Programming',
    icon: <OOPIcon />,
    links: {
      github: 'https://github.com/M3LL00W/LibrarySystem-OOP-CPP',
      demo: null,
    },
  },
  {
    id: 4,
    title: 'LUMO - Note Application',
    shortDescription: 'A full-stack MERN note-taking app with authentication and CRUD features.',
    fullDescription: 'Built a full-stack note-taking application using the MERN stack (MongoDB, Express, React, Node.js). The app supports user authentication (signup/login), secure CRUD operations for notes, and provides a clean, responsive UI for managing personal notes efficiently. Deployed with modern hosting solutions.',
    image: '/Portfolio/images/lumo-noteapp.jpg',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'TailwindCSS','Redis'],
    category: 'Full Stack Development',
    icon: <NoteIcon />,
    links: {
      github: 'https://github.com/M3LL00W/LUMO',
      demo: 'https://lumo-7mtn.onrender.com',
    },
  },
];

export default projectsData;
