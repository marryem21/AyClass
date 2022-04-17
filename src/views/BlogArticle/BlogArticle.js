import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import Main from 'layouts/Main';
import Container from 'components/Container';
// import useState from 'react';
import {
  Content,
  FooterNewsletter,
  SidebarArticles,
  SimilarStories,
} from './components';
import { Typography } from '@mui/material';

const BlogArticle = () => {
  // const [isTutor,setIsTutor]=useState(false);
  const isTutor=true;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Main colorInvert={false}>
      <Box>
        <Container>
          <Container display={'flex'} position={'relative'} zIndex={2}>
            <Avatar
              sx={{ width: 200, height: 200, marginRight: 2 }}
              src={'https://assets.maccarianagency.com/avatars/img3.jpg'}
            /> 
            <Box display={'column'} alignItems={'center'} >
              <Typography
                variant={'h5'}
                color={'secondary'}
              >
                Software Engineer
              </Typography>
              <Typography
                variant={'h6'}
                color={'secondary'}
              >
                Samir Hamdi
              </Typography>
              <Box>
                <Typography
                  variant={'h7'}
                  color={'secondary'}
                >
                  ISSAT Sousse 
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant={'h8'}
                  color={'secondary'}
                >
                  Why does this stick
                </Typography>
              </Box>
            </Box>     
            {isTutor && (<Box marginLeft={'600px'}> 
              <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
              <Box display={'flex'}>
                <Typography
                  variant={'h5'}
                  color={'secondary'}
                  align={'right'}
                  fontWeight={'Bold'}
                >
                    50Dt
                </Typography>
                <Typography
                  variant={'h87'}
                  color={'secondary'}
                  align={'right'}
                  fontWeight={'normal'}
                  paddingTop={'5px'}
                >
                    /Hour
                </Typography>
              </Box>
              <Button                  
                size={'large'} 
                variant={'contained'} 
                type={'submit'}
                sx={{marginTop:3}}  
              >
                    Book Now
              </Button>              
            </Box>)}
          </Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Content />
            </Grid>
            <Grid item xs={5} md={4}>
              {isMd ? (
                <Box marginBottom={4}>
                  <SidebarArticles />
                </Box>
              ) : null}
            </Grid>
          </Grid>
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <SimilarStories />
        </Container>
        <Container>
          <FooterNewsletter />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </Main>
  );
};

export default BlogArticle;
