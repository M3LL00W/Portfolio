
import {
  Security as CertificateIcon,
  Language as EducationIcon,
  Cloud as EngineeringIcon,
  AutoAwesome as AIIcon,
} from '@mui/icons-material';

export const certificationData = [
  {
  id: 1,
  title: 'Microsoft Azure AI Fundamentals',
  issuer: 'Microsoft',
  date: '2025',
  description:
    'Core AI concepts, Machine Learning, Computer Vision, Natural Language Processing, Conversational AI on Azure.',
  icon: <EngineeringIcon fontSize="large" />,
  color: '#0078D4', // Azure brand blue
},

  {
    id: 2,
    title: 'Cloud Computing Foundations',
    issuer: 'Google',
    date: '2024',
    description:
      'Cloud models, core services, virtual networking, cloud security, application deployment.',
    icon: <EngineeringIcon fontSize="large" />,
    color: '#fe130bff', // Light mode fallback
  },
  {
    id: 3,
    title: 'Networking Basics',
    issuer: 'Cisco',
    date: '2024',
    description:
      'Network types, Protocol Standards, Wireless Access, Application layer Services, Network Media',
    icon: <EducationIcon fontSize="large" />,
    color: '#fb5607',
  },
  {
    id: 4,
    title: 'CyberSecurity Essentials',
    issuer: 'Cisco',
    date: '2023',
    description:
      'Threats & Vulnerabilities, Cryptography, Network Security, Access Control, Incident Response.',
    icon: <CertificateIcon fontSize="large" />,
    color: '#38b000',
  },
  {
    id: 5,
    title: 'Generative AI Fundamentals',
    issuer: 'Google',
    date: '2023',
    description:
      'Large Language Models, Prompt Design, Model Types, Transformer Architecture, Responsible AI.',
    icon: <AIIcon fontSize="large" />,
    color: '#8338ec',
  },
  


  
];
