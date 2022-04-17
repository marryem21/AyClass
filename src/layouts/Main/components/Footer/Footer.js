import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import logoLight from '../../../../images/logomove.png';
import logoDark from '../../../../images/logo.png';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';


const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="AyClass"
            width={80}
          >
            <Box  
              component={'img'}
              src={
                mode === 'light'
                  ? logoLight
                  : logoDark
              }
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/docs/introduction"
                color="text.primary"
                variant={'subtitle2'}
              >
                Documentation
              </Link>
            </Box>
            
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
          fontWeight={'light'}  
        >
          &copy; AyClass. 2022, All rights reserved
        </Typography>
        <Divider />
        
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          We vowed to make education easier and accessible to everyone,everywhere 
          by providing affordable and personalized tutoring services.
        </Typography>
      </Grid>
    </Grid>
  
  );
};

export default Footer;
