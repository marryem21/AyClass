import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import logoLight from '../../../../../../images/logomove.png';
import logoDark from '../../../../../..//images/logo.png';
import { Link } from 'react-router-dom';

const SidebarNav = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="AyClass"
          width={{ xs: 100, md: 120 }}
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
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <Link
            href={'/hire-us'}
          >
          Become tutor
          </Link>
        </Box>
        <Box>
          <Link
            href={'/book-tutor'}
          >
          Book tutor
          </Link>
        </Box>
        <Box>
          <Link
            href={'/about'}
          >
          About us
          </Link>
        </Box>
        <Box>
          <Link
            href={'/contact-page'}
          >
         Contact us
          </Link>
        </Box>
        <Box>
          <Link
            href={'/signup-cover'}
          >
          Signup
          </Link>
        </Box>
        <Box>
          <Link
            href={'/signin-cover'}
          >
          Signin
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;