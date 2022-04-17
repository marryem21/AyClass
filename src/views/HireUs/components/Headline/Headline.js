import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >
        Become Tutor
      </Typography>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          You think you can make a great tutor?
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" align={'center'} color={'textSecondary'}>
         In AyClass we believe that everyone has a skill to share. Start here...
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
