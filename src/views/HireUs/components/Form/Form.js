/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

const validationSchema = yup.object({
  university: yup
    .string()
    .required('Your university is required'),
  institution: yup
    .string()
    .required('Your institution is required'),
  major: yup
    .string()
    .required('Your major is required.'),
  degree: yup
    .string()
    .required('Your degree is required.'),
  level: yup
    .string()
    .required('Your level is required.'),
  
  subject: yup
    .string()
    .required('Your subject is required.'),
  competences: yup
    .string()
    .trim()
    .max(1000, 'The message cannot contain more than 500 characters'),
});

const Form = () => {
  const initialValues = {

    university: '',
    institution: '',
    major: '',
    degree: '',
    level: '',
    subject: '',
    competences: '',
  };

  // const onSubmit = (values) => {
  //   return values;
  // };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    // onSubmit,
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box
          component={Grid}
          marginBottom={{ xs: 10, sm: 0 }}
          container
          spacing={4}
        >
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Please specify the university related to the subject you are willing to teach
            </Typography>
            <TextField
              select
              label="University"
              variant="outlined"
              name={'University'}
              fullWidth
              value={formik.values.University}
              onChange={formik.handleChange}
              error={formik.touched.University && Boolean(formik.errors.University)}
              helperText={formik.touched.University && formik.errors.University}
            >
              {[
                'University of Sousse',
                'University of Manar',
                'University of Tunis',
                'University of Monastir',
                'University of Gabes',
                'University of Sfax',
              ].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Please choose your institution
            </Typography>
            <TextField
              select
              label="institution"
              variant="outlined"
              name={'institution'}
              fullWidth
              value={formik.values.institution}
              onChange={formik.handleChange}
              error={formik.touched.institution && Boolean(formik.errors.institution)}
              helperText={formik.touched.institution && formik.errors.institution}
            >
              {[
                'ISSAT Sousse',
                'ISET Sousse',
                'FSEG Sousse',
                'Fac de droits',
                'IHEC',
                'ESSTHs',
              ].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Please choose your Major
            </Typography>
            <TextField
              select
              label="Major"
              variant="outlined"
              name={'Major'}
              fullWidth
              value={formik.values.Major}
              onChange={formik.handleChange}
              error={formik.touched.Major && Boolean(formik.errors.Major)}
              helperText={formik.touched.Major && formik.errors.Major}
            >
              {[
                'Computer science',
                'MPI',
                'EEA',
                'Meactronics',
                'Mecanics',
                'Genie civile',
              ].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Please choose your degree
            </Typography>
            <TextField
              select
              label="Degree"
              variant="outlined"
              name={'degree'}
              fullWidth
              value={formik.values.degree}
              onChange={formik.handleChange}
              error={formik.touched.degree && Boolean(formik.errors.degree)}
              helperText={formik.touched.degree && formik.errors.degree}
            >
              {[
                'Engineering',
                'Prepa',
                'Masters',
                'PHD',
                'License',
              ].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Please choose your Level
            </Typography>
            <TextField
              select
              label="Level"
              variant="outlined"
              name={'Level'}
              fullWidth
              value={formik.values.Level}
              onChange={formik.handleChange}
              error={formik.touched.Level && Boolean(formik.errors.Level)}
              helperText={formik.touched.Level && formik.errors.Level}
            >
              {[
                '1st',
                '2nd',
                '3rd',
                '4th',
                '5th',
              ].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Please choose a subject you are willing to teach
            </Typography>
            <TextField
              select
              label="Subject"
              variant="outlined"
              name={'subject'}
              fullWidth
              value={formik.values.subject}
              onChange={formik.handleChange}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
            >
              {[
                'Math ingenieur',
                'Electrostatique',
                'Electrocinetique',
                'Electromagnetique',
                'C',
                'C++',
                'JAVA',
                'Conception',
                'SQL',
                'IHM'
              ].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Tell us about your competences 
            </Typography>
            <TextField
              label="Enter your competences"
              variant="outlined"
              name={'competences'}
              fullWidth
              multiline
              rows={4}
              value={formik.values.competences}
              onChange={formik.handleChange}
              error={formik.touched.competences && Boolean(formik.errors.competences)}
              helperText={formik.touched.competences && formik.errors.competences}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Button size={'large'} variant={'contained'} type={'submit'}>
              Submit
            </Button>
            <Typography
              variant={'subtitle2'}
              color={'textSecondary'}
              sx={{ marginTop: 2 }}
              align={'center'}
            >
              Enjoy your tutor journey
            </Typography>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
