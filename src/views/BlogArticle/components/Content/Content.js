/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Hub from '../../components/Hub/Hub'; 

const Content = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography
          variant={'h4'}
          color={'secondary'}
          align={'left'}
          fontWeight={'semiBold'}
          marginBottom={'10px'}
        >
          What can I offer?
        </Typography> 
        <Typography variant={'subtitle1'}>
          -Java Script
        </Typography>
        <Typography variant={'subtitle1'}>
          -React Native
        </Typography>
        <Typography variant={'subtitle1'}>
          -Spring Boot
        </Typography>
        <Typography variant={'subtitle1'}>
          -DevOps
        </Typography>
        <Typography
          variant={'h4'}
          color={'secondary'}
          align={'left'}
          fontWeight={'semiBold'}
          marginBottom={'10px'}
        >
          Academic History
        </Typography> 
        <Typography variant={'subtitle1'}>
          License in Computer Science from ISSAT Sousse 2017/2018
        </Typography>
        <Typography variant={'subtitle1'}>
          Diploma in Software engineering from ISSAT Sousse 2020/2021
        </Typography>
        <Box width={1} height={1} marginY={4}>
          <LazyLoadImage
            height={'100%'}
            width={'100%'}
            src={'https://assets.maccarianagency.com/avatars/img3.jpg'}
            alt="Remote working"
            effect="blur"
            style={{
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              objectFit: 'cover',
              borderRadius: 8,
              width: '100%',
              height: '100%',
              maxHeight: 400,
            }}
          />
        </Box>
        <Typography
          variant={'h4'}
          color={'secondary'}
          align={'center'}
          fontWeight={'normal'}
        >
          “So many teams struggle to make their onboarding experience anywhere
          near as good as their core product, so the results of this is poor
          retention”
        </Typography>
        <Box marginY={4}>
          <Typography variant={'h5'} gutterBottom>
            What they said about me
          </Typography>
          <Typography>
            "It has been a pleaure taking lessons with Samir he is an excellent teacher and he is one of the best tutors on this platform m veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. he is an excellent teacher and he is one of the best tutors on this platform m veniam, quis dd" 
            -Hadil Abdelaoui-
          </Typography>
        </Box>
      </Box>
      <Box  paddingX={{ xs: 0, sm: 4, md: 20 }} paddingBottom={4}
      >
        <Hub />
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }} paddingBottom={4}>
        <Box>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Box>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }} paddingY={4}>
        <Typography color={'text.secondary'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
      </Box>
      <Box paddingY={4}>
        <Divider />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
      >
        <Box display={'flex'} alignItems={'center'}
        >
          <Avatar
            sx={{ width: 50, height: 50, marginRight: 2 }}
            src={'https://assets.maccarianagency.com/avatars/img3.jpg'}
          />
          <Box>
            <Typography fontWeight={600}>Samir Hamdi</Typography>
            <Typography color={'text.secondary'}>May 19, 2021</Typography>
          </Box>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Typography color={'text.secondary'}>Share:</Typography>
          <Box marginLeft={0.5}>
            <IconButton aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
