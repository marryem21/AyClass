import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import logoLight from '../../../../images/logomove.png';
import logoDark from '../../../../images/logo.png';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
      
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="AyClass"
        width={{ xs: 200, md: 150 }}
        sx={{zoom:'140%'}}
      >
        <Box 
          
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? logoLight
              : logoDark
          }
          height={1}
          width={1}
         
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'Become tutor'}
            id={'become-tutor'}
            items={landingPages}
            colorInvert={colorInvert}
            href={'#'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Book tutor'}
            id={'subjects'}
            items={companyPages}
            colorInvert={colorInvert}
            navlinkto={'/blog-reach-view'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'About us'}
            id={'account-pages'}
            items={accountPages}
            colorInvert={colorInvert}
            href={'#'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Signup'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
            href={'/signup-cover'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Signin'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
            href={'/signin-cover'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Contact us'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
            href={'#'}
          />
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
