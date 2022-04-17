import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';

const mock = [
  {
    image: 'https://media.istockphoto.com/photos/web-design-desktop-picture-id1305999733?b=1&k=20&m=1305999733&s=170667a&w=0&h=3DeafNR4TJ7eSqHvBFkVRwNbnBrZxpj6RlaqbeiIAfs=',
    description: 'Learn how to design your portals to look trendy and modern!',
    title: 'Web Design Basics',
    author: {
      name: 'Jhenna Riahi',
      avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
    },
    date: '04 Jan',
  },
  {
    image: 'https://www.pngitem.com/pimgs/m/346-3460443_machine-learning-course-near-me-machine-learning-logo.png',
    description: 'Start your ML journey with renowned expert Ahmed Laarbi.',
    title: 'Fundemantals of Machine Learning',
    author: {
      name: 'Ahmed Laarbi',
      avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    },
    date: '12 March',
  },
  {
    image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwdGhpbmtpbmd8ZW58MHx8MHx8&w=1000&q=80',
    description:
      'Change up your strategy & how you tackle projects.',
    title: 'Design thinking',
    author: {
      name: 'Lina Moumni',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
    },
  },
  {
    image: 'https://media.istockphoto.com/photos/online-education-concept-picture-id636332456?k=20&m=636332456&s=612x612&w=0&h=ckwh8_U-ET3QSyJUAaceejX6WGdljVy-E87PWO-Sok8=',
    description: 'We start from scratch as we go deeper into the world of Algebra with the one and only Rami Amar',
    title: 'Your guide to Algebra I',
    author: {
      name: 'Rami Amar',
      avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    },
    date: '02 Feb',
  },
  {
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHVibGljJTIwc3BlYWtpbmd8ZW58MHx8MHx8&w=1000&q=80',
    description:
      'Want to learn how to present yourself in public? This is the course for you!',
    title: 'The ABCs of Public Speaking',
    author: {
      name: 'Jihene Mouad',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '05 Mar',
  },
];

const PopularCourses = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            Popular courses
          </Typography>
          <Typography color={'text.secondary'}>
            Here are the hottest courses on AyClass recently!
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          >
            View all
          </Box>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={i === 0 ? 12 : 6} md={i < 2 ? 6 : 4} key={i}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={4}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >
                <CardMedia
                  image={item.image}
                  title={item.title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                  }}
                >
                  <Box
                    component={'svg'}
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      color: theme.palette.background.paper,
                      transform: 'scale(2)',
                      height: 'auto',
                      width: 1,
                      transformOrigin: 'top center',
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                      fill="currentColor"
                    />
                  </Box>
                </CardMedia>
                <Box component={CardContent} position={'relative'}>
                  <Typography variant={'h6'} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display={'flex'} flexDirection={'column'}>
                  <Box marginBottom={2}>
                    <Divider />
                  </Box>
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Box display={'flex'} alignItems={'center'}>
                      <Avatar
                        src={item.author.avatar}
                        sx={{ marginRight: 1 }}
                      />
                      <Typography color={'text.secondary'}>
                        {item.author.name}
                      </Typography>
                    </Box>
                    <Typography color={'text.secondary'}>
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item container justifyContent={'center'} xs={12}>
          <Pagination count={10} size={'large'} color="primary" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PopularCourses;
