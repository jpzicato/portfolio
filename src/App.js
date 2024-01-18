import * as React from 'react';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Intro from './components/Intro';
import Copyright from './components/Copyright';
import Project from './components/Project';
import Contact from './components/Contact';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { projects, contacts } from './data';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Intro />
      <Box
        sx={{
          bgcolor: '#000',
          color: '#fff',
          pb: 6,
        }}
      >
        <Container maxWidth='xl'>
          <Typography
            variant='h5'
            paragraph
            sx={{
              fontSize: '30px',
              fontWeight: 'bold',
              marginBottom: '50px',
            }}
          >
            Mis proyectos
          </Typography>
          <Grid container spacing={4}>
            {projects.map(project => (
              <Project {...project} />
            ))}
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          bgcolor: '#000',
          color: '#fff',
          paddingTop: '20px',
          pb: 3,
        }}
      >
        <Container maxWidth='xl'>
          <Typography
            variant='h5'
            paragraph
            sx={{
              fontSize: '30px',
              fontWeight: 'bold',
              marginBottom: '25px',
            }}
          >
            Encuéntrame en
          </Typography>
          <List>
            {contacts.map(contact => (
              <Contact {...contact} />
            ))}
          </List>
        </Container>
      </Box>
      <Copyright />
    </ThemeProvider>
  );
}
