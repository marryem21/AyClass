import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import logoLight from '../../../../images/logomove.png';
import logoDark from '../../../../images/logo.png';
import Link from '@mui/material/Link';

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

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
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ?logoLight
              : logoDark
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <Link
            href={'#'}
            underline={'none'}
            color={'text.primary'}
            sx={{
              display: 'flex',
              p: 1,
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'alternate.main',
              },
            }}
          >
          Become tutor
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            href={'/book-tutor'}
            underline={'none'}
            color={'text.primary'}
            sx={{
              display: 'flex',
              p: 1,
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'alternate.main',
              },
            }}
          >
          Book tutor
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            href={'/about-us'}
            underline={'none'}
            color={'text.primary'}
            sx={{
              display: 'flex',
              p: 1,
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'alternate.main',
              },
            }}
          >
          About us
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            href={'/contact-us'}
            underline={'none'}
            color={'text.primary'}
            sx={{
              display: 'flex',
              p: 1,
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'alternate.main',
              },
            }}
          >
          Contact us
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            href={'/signup-cover'}
            underline={'none'}
            color={'text.primary'}
            sx={{
              display: 'flex',
              p: 1,
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'alternate.main',
              },
            }}
          >
          Signup
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            href={'/signin-cover'}
            underline={'none'}
            color={'text.primary'}
            sx={{
              display: 'flex',
              p: 1,
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'alternate.main',
              },
            }}
          >
          Signin
          </Link>
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
  colorInvert: PropTypes.bool,
};

export default Topbar;
