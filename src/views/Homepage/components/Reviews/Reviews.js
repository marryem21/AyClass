import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const mock = [
  {
    feedback:
      'AyClass is bringing us a new prespective of Education that we have not seen before. Adaptable, accessible, and the student always comes first.',
    name: 'Imene the Expert',
    title: 'Education expert',
    avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  {
    feedback:
      'Mr. Hamed is one of my favorite tutors. I have always struggled with revision, but thanks to his strategy and his methods I keep getting better.',
    name: 'Ahmed the Student',
    title: 'Student',
    avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
  },
  {
    feedback:
      'My experience with Ayclass is unique and extraordinary. I hope everyone would give it a go.',
    name: 'Rayan the Entrepreneur',
    title: 'Self-taught entrepreneur',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
  },
];

const Reviews = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Box display={'flex'} justifyContent={'center'}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Box key={item} color={theme.palette.secondary.main}>
              <svg
                width={18}
                height={18}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </Box>
          ))}
        </Box>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Rated 5 out of 5 stars by our users!
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Students from across the globe have had fantastic experiences using
          AyClass.
          <br />
          Here’s what they have to say.
        </Typography>
        <Box marginTop={2} display={'flex'} justifyContent={'center'}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
          >
            View all
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
              component={Card}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'left'}
              boxShadow={0}
              variant={'outlined'}
              borderRadius={2}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                }}
              >
                <Box marginBottom={1}>
                  <Box
                    component={Avatar}
                    width={80}
                    height={80}
                    marginBottom={2}
                    bgcolor={alpha(theme.palette.primary.main, 0.1)}
                    color={theme.palette.primary.main}
                    variant={'rounded'}
                    borderRadius={2}
                  >
                    <Box
                      component={'svg'}
                      width={48}
                      height={48}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      color={theme.palette.primary.main}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </Box>
                  </Box>
                </Box>
                <Typography align={'left'} color="text.secondary">
                  {item.feedback}
                </Typography>
              </CardContent>
              <Box flexGrow={1} />
              <CardActions sx={{ paddingBottom: 2 }}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemAvatar>
                    <Avatar src={item.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={item.name}
                    secondary={item.title}
                  />
                </ListItem>
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
