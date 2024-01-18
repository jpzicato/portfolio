import { Toolbar, Box, Container, Typography } from '@mui/material';

export default function Intro() {
  return (
    <Box
      sx={{
        bgcolor: '#000',
        color: '#fff',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar
          sx={{
            borderTop: '3px solid #fff',
            borderBottom: '3px solid #fff',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '50px',
            padding: '20px',
          }}
        >
          <Typography
            variant='h2'
            align='center'
            sx={{
              fontWeight: 'bold',
              fontSize: '90px',
            }}
          >
            {'Juan Pablo Zicato'.toUpperCase()}
          </Typography>
          <Typography
            variant='h3'
            align='center'
            gutterBottom
            sx={{
              fontSize: '50px',
            }}
          >
            Desarrollador backend Node.js
          </Typography>
        </Toolbar>
        <Typography variant='h5' paragraph color='#ccc'>
          Hola, soy Juan Pablo, un entusiasta por el desarrollo backend enfocado
          en Node.js.
        </Typography>
        <Typography variant='h5' paragraph color='#ccc'>
          Me mantengo en un estado de aprendizaje continuo, buscando conocer
          tecnologías y mejorar mis habilidades de desarrollo de software.
        </Typography>
        <Typography variant='h5' paragraph color='#ccc'>
          Estoy emocionado por la oportunidad de colaborar en nuevos proyectos
          desafiantes y seguir creciendo como profesional. Si estás buscando un
          desarrollador backend apasionado y comprometido, me encantaría ser
          parte de tu equipo!
        </Typography>
      </Container>
    </Box>
  );
}
