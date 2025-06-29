import {
  EmojiEvents as AwardIcon,
  MilitaryTech as BadgeIcon,
  Assignment as QuizIcon, 
} from '@mui/icons-material';

const getAchievementsData = (theme) => ([
  {
    title: '1st place in Idea Pitch',
    description: 'IDE bootcamp 2025 winner',
    icon: <AwardIcon fontSize="large" />,
    color: theme.palette.mode === 'dark' ? '#52a9ff' : '#3a86ff',
  },
  {
    title: ' NCC A-Certificate ',
    description: 'NCC A-Certificate holder.',
    icon: <BadgeIcon fontSize="large" />,
    color: theme.palette.mode === 'dark' ? '#ff9e40' : '#fb5607',
  },
  {
    title: 'VVM state level',
    description: 'Largest Science Talent Search Examination.',
    icon: <QuizIcon fontSize="large" />,
    color: theme.palette.mode === 'dark' ? '#60d394' : '#38b000',
  },
]);

export default getAchievementsData;
