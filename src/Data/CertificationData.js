
import {
  Security as CertificateIcon,
  Language as EducationIcon,
  Cloud as EngineeringIcon,
} from '@mui/icons-material';

export const certificationData = [
  {
    id: 1,
    title: 'Cloud Computing Foundations',
    issuer: 'Google',
    date: '2024',
    description:
      'IT infrastructure, cloud engineering, and cloud-native application development.',
    icon: <EngineeringIcon fontSize="large" />,
    color: '#3a86ff', // Light mode fallback
  },
  {
    id: 2,
    title: 'Networking Basics',
    issuer: 'Cisco',
    date: '2024',
    description:
      'Network types, Protocol Standards, Wireless Access, Application layer Services, Network Media',
    icon: <EducationIcon fontSize="large" />,
    color: '#fb5607',
  },
  {
    id: 3,
    title: 'CyberSecurity Essentials',
    issuer: 'Cisco',
    date: '2023',
    description:
      'Certification covering cybersecurity fundamentals, best practices, and threat mitigation strategies.',
    icon: <CertificateIcon fontSize="large" />,
    color: '#38b000',
  },
  
];
