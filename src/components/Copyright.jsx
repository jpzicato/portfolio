import { Typography } from '@mui/material';

export default function Copyright() {
  return (
    <Typography
      variant='body2'
      align='center'
      sx={{
        bgcolor: '#000',
        color: '#fff',
        p: 2,
      }}
    >
      {'© 2024 - '}
      Desarrollado por Juan Pablo Zicato.
    </Typography>
  );
}
