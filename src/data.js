import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';

export const projects = [
  {
    id: 1,
    title: 'Inventory flow',
    description:
      'Aplicación de seguimiento de inventario basada en microservicios desarrollada con el framework Express.js. Cada microservicio se enfoca en una funcionalidad específica.',
    technologies:
      'Docker | Docker Compose | Express.js | JWT | Sequelize | Mongoose | Redis | Babel | Joi | Winston',
    githubLink: 'https://github.com/jpzicato/inventory-flow'
  },
  {
    id: 2,
    title: 'Task manager',
    description:
      'Aplicación GraphQL desarrollada con Apollo Server y el framework Express.js. Permite a los usuarios organizar proyectos y tareas para mantener un control claro de las responsabilidades diarias.',
    technologies:
      'Docker | GraphQL | Apollo Server | Express.js | JWT | Mongoose | Joi | Winston',
    githubLink: 'https://github.com/jpzicato/task-manager'
  }
];

export const contacts = [
  {
    id: 1,
    href: 'mailto:jpzicato2013@gmail.com',
    text: 'jpzicato2013@gmail.com',
    Icon: EmailIcon
  },
  {
    id: 2,
    href: 'https://github.com/jpzicato',
    text: '/jpzicato',
    Icon: GitHubIcon
  },
  {
    id: 3,
    href: 'https://linkedin.com/in/juan-pablo-zicato',
    text: '/in/juan-pablo-zicato',
    Icon: LinkedInIcon
  },
  {
    id: 5,
    href: 'tel:+5492614702191',
    text: '+54 9 261 470-2191',
    Icon: PhoneIcon
  }
];
