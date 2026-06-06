export const portfolio = {
  name: 'Pushkar Dixit',
  role: 'Associate Software Engineer',
  email: 'dixitpushkar28@gmail.com',
  location: 'Pune, India',
  resumeUrl: 'https://drive.google.com/file/d/18CEWO11jPEuUUGGXHIR3-KB02A1Ses3_/view?usp=sharing',
  navItems: [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Achievements', href: '/#achievements' },
    { label: 'Contact', href: '/#contact' },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mr-pushkar-dixit' },
    { label: 'GitHub', href: 'https://github.com/PushkarDixit0' },
    { label: 'Email', href: 'mailto:pushkardixit28@gmail.com' },
  ],
};

const currentExperienceStartDate = new Date(2025, 2, 1);

export function formatExperienceDuration(startDate, endDate = new Date()) {
  const start = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
  const end = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
  const totalMonths = Math.max(
    0,
    (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth()
  );
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (years) {
    parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  }

  if (months || !parts.length) {
    parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
  }

  return parts.join(' ');
}

export const currentExperienceDuration = formatExperienceDuration(currentExperienceStartDate);

export const stats = [
  { value: '6', label: 'Curated projects' },
  { value: '6', label: 'Internships' },
  { value: currentExperienceDuration, label: 'Full-time experience' },
  { value: 'MERN', label: 'Primary stack' },
];

export const skills = [
  { name: 'HTML5', icon: 'https://img.icons8.com/color/96/html-5--v1.png', group: 'Frontend' },
  { name: 'CSS3', icon: 'https://img.icons8.com/color/96/css3.png', group: 'Frontend' },
  { name: 'JavaScript', icon: 'https://img.icons8.com/color/96/javascript--v1.png', group: 'Frontend' },
  { name: 'ReactJS', icon: 'https://img.icons8.com/plasticine/100/react.png', group: 'Frontend' },
  { name: 'Bootstrap', icon: 'https://img.icons8.com/color/96/bootstrap.png', group: 'Frontend' },
  { name: 'NodeJS', icon: 'https://img.icons8.com/color/96/nodejs.png', group: 'Backend' },
  { name: 'ExpressJS', icon: 'https://img.icons8.com/fluency/96/node-js.png', group: 'Backend' },
  { name: 'MongoDB', icon: 'https://img.icons8.com/color/96/mongodb.png', group: 'Backend' },
  { name: 'MySQL', icon: 'https://img.icons8.com/color/96/mysql-logo.png', group: 'Backend' },
  { name: 'Python', icon: 'https://img.icons8.com/color/96/python--v1.png', group: 'Data' },
  { name: 'Java', icon: 'https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png', group: 'Languages' },
  { name: 'C++', icon: 'https://img.icons8.com/color/96/c-plus-plus-logo.png', group: 'Languages' },
  { name: 'PHP', icon: 'https://img.icons8.com/offices/96/php-logo.png', group: 'Backend' },
  { name: 'WordPress', icon: 'https://img.icons8.com/color/96/wordpress.png', group: 'CMS' },
  { name: 'GitHub', icon: 'https://img.icons8.com/color/96/github--v1.png', group: 'Tools' },
  { name: 'VS Code', icon: 'https://img.icons8.com/color/96/visual-studio-code-2019.png', group: 'Tools' },
  { name: 'Excel', icon: 'https://img.icons8.com/color/96/microsoft-excel-2019.png', group: 'Data' },
  { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF', group: 'Build Tool' },
  { name: 'TanStack Query', icon: 'https://avatars.githubusercontent.com/u/72518640?s=96&v=4', group: 'Data Fetching' },
  { name: 'Zod', icon: 'https://cdn.simpleicons.org/zod/3E67B1', group: 'Validation' },
  { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/96/tailwind_css.png', group: 'Styling' },
  { name: 'Mongoose', icon: 'https://cdn.simpleicons.org/mongoose/880000', group: 'ODM' },
  { name: 'Multer', icon: 'https://img.icons8.com/color/96/upload-to-cloud.png', group: 'File Uploads' },
  { name: 'Swagger UI', icon: 'https://cdn.simpleicons.org/swagger/85EA2D', group: 'API Docs' },
  { name: 'CSS Modules', icon: 'https://img.icons8.com/color/96/css3.png', group: 'Styling' },
  { name: 'Handlebars', icon: 'https://cdn.simpleicons.org/handlebarsdotjs/F0772B', group: 'Templating' },
  { name: 'Jupyter Notebook', icon: 'https://cdn.simpleicons.org/jupyter/F37626', group: 'Data' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', group: 'Data' },
  { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy/4DABCF', group: 'Data' },
  { name: 'Machine Learning', icon: 'https://img.icons8.com/color/96/artificial-intelligence.png', group: 'Data' },
  { name: 'Three.js', icon: 'https://skillicons.dev/icons?i=threejs&theme=light', group: '3D / Creative' },
  { name: 'WebGL', icon: 'https://cdn.simpleicons.org/webgl/990000', group: '3D / Creative' },
  { name: 'Svelte', icon: 'https://cdn.simpleicons.org/svelte/FF3E00', group: 'Frontend' },
  { name: 'SvelteKit', icon: 'https://cdn.simpleicons.org/svelte/FF3E00', group: 'Frontend' },
];

export const education = [
  {
    title: 'Bachelor of Engineering in Computer Science and Engineering',
    place: 'Sipna College of Engineering & Technology, Amravati',
    period: '2020 - 2024',
    image: '/assets/images/educat/college.jpg',
  },
  {
    title: 'HSC Science | Computer Science',
    place: 'Narsamma Hirayya Arts Commerce & Science College, Amravati',
    period: '2018 - 2020',
    image: '/assets/images/educat/js_college.jpg',
  },
  {
    title: 'SSC',
    place: 'Golden Kids English High School, Amravati',
    period: '2012 - 2018',
    image: '/assets/images/educat/school.jpg',
  },
];

export const experiences = [
  {
    company: 'HeapTrace Technology Pvt. Ltd',
    title: 'Associate Software Engineer',
    period: `March 2025 - Present (${currentExperienceDuration})`,
    employmentType: 'Full-time',
    location: 'Pune, Maharashtra, India',
    locationType: 'On-site',
    side: 'left',
  },
  { company: 'PHN Technology Pvt Ltd', title: 'Web Development Internship', period: 'March 2023 - May 2023', side: 'right' },
  { company: 'CodSoft Virtual Internship', title: 'Data Science Internship', period: 'October 2023 - November 2023', side: 'left' },
  { company: 'Immensphere Teachnook', title: 'Web Development Internship', period: 'February 2023 - March 2023', side: 'right' },
  { company: 'DEVTOWN', title: 'Full-stack Web Developer Internship', period: 'September 2022 - January 2023', side: 'right' },
  { company: 'DEVTOWN', title: 'Data Scientist Internship', period: 'September 2022 - December 2022', side: 'left' },
  { company: 'Immensphere | Verzeo', title: 'Web Development Internship', period: 'July 2022 - September 2022', side: 'left' },
];

export const projects = [
  {
    title: 'BlinkCMS Admin Frontend',
    description: 'A modern CMS dashboard for creating, editing, validating, and managing blog content with a rich text editor workflow.',
    technologies: ['React', 'Vite', 'TanStack Query', 'TipTap', 'React Hook Form', 'Zod', 'Tailwind CSS'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/PushkarDixit0/BlinkCMS_blog_cms',
    deployedUrl: 'https://blink-cms-blog-cms.vercel.app/',
    image: 'cms',
    featured: true,
  },  {
    title: 'EDUSA E-Learning Web App',
    description: 'An e-learning web app repository focused on education content delivery and learning-platform interface patterns.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    category: 'Web App',
    githubUrl: 'https://github.com/PushkarDixit0/EDUSA_e-lerning_web-app',
    deployedUrl: 'https://edusa-e-lerning-web-app.vercel.app/',
    image: 'learning',
    featured: true,
  }, 
  {
    title: 'BlackBox ThreeJS',
    description: 'A Three.js and Vite starter focused on camera control and render-loop patterns for real-time 3D experimentation.',
    technologies: ['Three.js', 'Vite', 'JavaScript', 'WebGL'],
    category: '3D / Creative',
    githubUrl: 'https://github.com/HT-PushkarDixit/BlackBoxThreeJS',
    deployedUrl: 'https://black-box-three-js.vercel.app/',
    image: 'blackbox',
    featured: true,
  },
  {
    title: 'BlinkCMS API Backend',
    description: 'Express and MongoDB backend for BlinkCMS with server routes, schema validation, uploads, and production-oriented API structure.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Multer', 'Swagger UI', 'Zod'],
    category: 'Backend',
    githubUrl: 'https://github.com/PushkarDixit0/BlinkCMS_blog_cms_backend',
    deployedUrl: 'https://blink-cms-blog-cms-backend.vercel.app/home',
    image: 'api',
    featured: true,
  },
  {
    title: 'Nakemake Private Journal',
    description: 'A privacy-focused journaling app with local journal linking, editor flows, media gallery support, and a clean React interface.',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS Modules', 'Local Storage'],
    category: 'Frontend',
    githubUrl: 'https://github.com/PushkarDixit0/NAKEMAKE_Keep_a_daily_journal-',
    deployedUrl: '',
    image: 'journal',
    featured: true,
  },
  {
    title: 'VirtualGym Minor Project',
    description: 'A fitness web application with signup/login flows, profile pages, diet plans, workout content, and MongoDB-backed server code.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Handlebars', 'HTML', 'CSS'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/PushkarDixit0/VirtualGym_MinorProject',
    deployedUrl: '',
    image: 'fitness',
    featured: true,
  },

  {
    title: 'CODSOFT Data Science Tasks',
    description: 'Applied machine learning notebooks covering Titanic survival, movie data, Iris classification, and car-related analysis tasks.',
    technologies: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Machine Learning'],
    category: 'Data Science',
    githubUrl: 'https://github.com/PushkarDixit0/CODSOFT',
    deployedUrl: '',
    image: 'data',
    featured: false,
  },

  {
    title: 'MenuRecipe',
    description: 'This project uses open-source APIs to automatically create a custom recipe book for your favorite culinary dishes.',
    technologies: ['Svelte','SvelteKit'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/HT-PushkarDixit/MenuRecipe',
    deployedUrl: 'https://menu-recipe-three.vercel.app/',
    image: 'learning',
    featured: false,
  },
    {
    title: 'Basic TODO Application',
    description: 'This basicsvelte TODO application dynamically saves, updates, and deletes your daily tasks directly within browser local storage.',
    technologies: ['Svelte'],
    category: 'Frontend',
    githubUrl: 'https://github.com/HT-PushkarDixit/todo',
    deployedUrl: 'https://todo-zeta-sooty.vercel.app/',
    image: 'learning',
    featured: false,
  },
];

export const achievements = [
  'Curated the portfolio around stronger completed repositories across React, backend APIs, full-stack apps, and data science.',
  'Completed multiple internships covering web development, full-stack engineering, and data science.',
  'Created applied notebooks for Titanic, movies, Iris, customer, and CNN/data-analysis tasks.',
];

export const testimonials = [
  {
    quote: 'Pushkar shows the mindset teams look for in a junior full-stack developer: curious, consistent, and willing to build.',
    name: 'Portfolio Review',
    role: 'Engineering feedback',
  },
];
