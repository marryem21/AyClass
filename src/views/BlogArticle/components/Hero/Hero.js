// import React, { useEffect } from 'react';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// //import Typography from '@mui/material/Typography';
// // import ListItemText from '@mui/material/ListItemText';
// // import Avatar from '@mui/material/Avatar';

// import Container from 'components/Container';

// const Hero = () => {
//   useEffect(() => {
//     const jarallaxInit = async () => {
//       const jarallaxElems = document.querySelectorAll('.jarallax');
//       if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
//         return;
//       }

//       const { jarallax } = await import('jarallax');
//       jarallax(jarallaxElems, { speed: 0.2 });
//     };

//     jarallaxInit();
//   });

//   return (
//     <Box
//       className={'jarallax'}
//       data-jarallax
//       data-speed="0.2"
//       position={'relative'}
//       minHeight={{ xs: 400, sm: 500, md: 2 }}//changed the md-- it was 600
//       display={'flex'}
//       marginTop={-13}
//       paddingTop={13}
//       alignItems={'center'}
//       id="agency__portfolio-item--js-scroll"
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           // top: 0,
//           // left: 0,
//           // right: 0,
//           // bottom: 0,
//           // width: 1,
//           // height: 1,
//           background: alpha('#F2F2F2', 0.6),
//           //zIndex: 1,
//         }}
//       />
//       <Container position={'relative'} zIndex={2}>
//         {/* <Box>
//           <Box display={'column'} alignItems={'center'}>
//             <Avatar
//               sx={{ width: 200, height: 200, marginRight: 2 }}
//               src={'https://assets.maccarianagency.com/avatars/img3.jpg'}
//             />
//             <ListItemText
//               sx={{ margin: 0 }}
//               primary={'Software engineer'}
//               secondary={''}
//               primaryTypographyProps={{
//                 variant: 'h6',
//                 sx: { color: 'common.white' },
//               }}
//               secondaryTypographyProps={{
//                 sx: { color: alpha('#000', 0.8) },
//               }}
//             />
//             <ListItemText
//               sx={{ margin: 0 }}
//               primary={'Jhon Anderson'}
//               secondary={'May 19, 2021'}
//               primaryTypographyProps={{
//                 variant: 'h6',
//                 sx: { color: 'common.white' },
//               }}
//               secondaryTypographyProps={{
//                 sx: { color: alpha('#000', 0.8) },
//               }}
//             />
//           </Box>
//         </Box> */}
//       </Container>
//     </Box>
//   );
// };

// export default Hero;
