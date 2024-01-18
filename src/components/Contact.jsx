import { Link, ListItem, ListItemText } from '@mui/material';

export default function Contact({ id, href, text, Icon }) {
  return (
    <ListItem key={id}>
      <Link
        href={href}
        target='_blank'
        color='inherit'
        sx={{
          display: 'flex',
        }}
      >
        <Icon
          sx={{
            transition: 'color 0.3s ease',
            ':hover': {
              color: '#666',
            },
          }}
        />
      </Link>
      <ListItemText
        primary={text}
        sx={{
          marginLeft: '10px',
        }}
      />
    </ListItem>
  );
}
