import {
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Project({
  id,
  title,
  technologies,
  description,
  githubLink,
}) {
  return (
    <Grid key={id} item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to right, #333, #444)',
          color: '#fff',
          borderRadius: '10px',
        }}
      >
        <CardContent
          sx={{
            flexGrow: 1,
          }}
        >
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            sx={{
              marginBottom: '20px',
              paddingTop: '15px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant='h6'
            component='h2'
            sx={{
              marginBottom: '20px',
              fontWeight: 'bold',
              color: '#ccc',
              textAlign: 'center',
            }}
          >
            {technologies}
          </Typography>
          <Typography
            sx={{
              color: '#fff',
              textAlign: 'center',
            }}
          >
            {description}
          </Typography>
          <Button
            size='small'
            sx={{
              paddingTop: '20px',
              width: '100%',
            }}
          >
            <Link
              href={githubLink}
              target='_blank'
              color='inherit'
              sx={{
                color: '#fff',
              }}
            >
              <GitHubIcon
                sx={{
                  transition: 'color 0.3s ease',
                  ':hover': {
                    color: '#000',
                  },
                }}
              />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
