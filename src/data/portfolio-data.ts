// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site —
// you shouldn't need to touch the component files for text changes.
// ---------------------------------------------------------------------------
import Profile from "@/assets/profile.png"
import Hero from "@/assets/hero.png"

export const profile = {
  name: 'Mohamad Reza',
  firstName: 'Mohamad Reza',
  lastName: 'Tabish',
  role: 'Front-End Developer / Software Engineer',
  tagline:
    'I Build Responsive, Scalable, and User-Centric Web Applications with Clean, Maintainable Code.',
  location: 'Ghor, Afghanistan',
  email: 'reza.mohamadi.98115@gmail.com',
  phone: '+93780097590',
  linkedin: 'https://www.linkedin.com/in/mohamadreza-mohamadi-468b41285',
  github: 'https://github.com/MohamadReza274',
  resumeUrl: '/',
  avatar: Profile,
  creation: Hero,
  available: true,
}

export const socials = [
  { label: 'GitHub', href: profile.github, icon: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const stack = [
  'React.js',
  'Next.js',
  'TypeScript',
  'TailwindCSS',
  'HTML5',
  'CSS3',
  'Tanstack',
  'REST APIs',
  'Git',
  'GitHub',
  'Vercel',
]

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm a results-driven Software Engineer with hands-on experience in front-end development and modern JavaScript tooling.",
    "I care about writing clean, maintainable code and enjoy the process of turning a rough idea into a polished, working interface — then figuring out how to make it a little faster or a little clearer. Currently looking for a Front-End role where I can keep building real products and keep growing as an engineer.",
  ],
  details: [
    { label: 'Name', value: 'Mohamad Reza Tabish' },
    { label: 'Role', value: 'Software Engineer' },
    { label: 'Based in', value: 'Ghor, Afghanistan' },
    { label: 'Phone', value: '+93780097590' },
    { label: 'Email', value: 'reza.mohamadi.98115@gmail.com' },
    { label: 'Focus', value: 'Front-End' },
  ],
}

export const education = [
  {
    id: 'matric',
    degree: 'High School Diploma',
    field: 'General',
    school: 'Shahrak high school, Ghor, Afghanistan',
    period: '2006 — 2018',
    meta: '890 / 1100 Marks',
    status: 'Completed',
  },
  // {
  //   id: 'ics',
  //   degree: 'Intermediate in Computer Science',
  //   field: 'Pre-Engineering / Computer Science',
  //   school: 'Govt. Islamia College, Civil Lines, Lahore',
  //   period: '2019 — 2021',
  //   meta: '791 / 1100 Marks',
  //   status: 'Completed',
  // },
  {
    id: 'bs-it',
    degree: 'Marticulation',
    field: 'Software Engineering',
    school: 'University of the Herat',
    period: '2019 — 2023',
    meta: 'GPA 3.04 / 4.0',
    status: 'Completed',
  },
]

export const certifications = [
  {
    id: 'freelance-p',
    title: 'Three Months Freelance Program',
    issuer: 'Acted Organization',
  },
  // {
  //   id: 'ibm-py',
  //   title: 'TypeScript, AI & Development',
  //   issuer: 'Programming With Mosh · Mosh Hamedani',
  // },
]

export const skills = {
  frontend: ['HTML', 'CSS', 'TypeScript', 'Tailwind CSS', 'React.js', 'Next.js','Tanstack'],
  tools: ['Git', 'GitHub', 'Vercel', 'Netlify', 'VS Code'],
  soft: [
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Adaptability',
    'Time Management',
    'Continuous Learning',
  ],
}

export const experience = [
  {
    id: 'afg-job',
    company: 'Afghan Jobs Platform',
    role: 'Full Stack Developer',
    period: 'Jan 2026 — Now',
    points: [
      'Built a full-stack job platform for Afghanistan that connects job seekers, employers, NGOs, and government organizations in one system.',
      'Developed core features including user authentication, job posting, application management, profile creation, CV upload, and multilingual support for English, Dari, and Pashto.',
      'Implemented responsive interfaces with React, TanStack Start, Tailwind CSS, and Shadcn UI while following modern component-based architecture.',
      'Worked with Better Auth, Prisma, PostgreSQL, TanStack Query, and Zod to build secure, scalable, and validated application flows.',
      'Designed role-based access patterns and protected routes to support employer, seeker, and admin responsibilities across the platform.',
      'Used GitHub, Vercel, and modern development workflows to build, review, and iterate on the application as a real-world full-stack project.',
      'Focused on clean code structure, maintainability, and user experience while improving the platform’s search, filtering, and recruitment workflows.',
    ],
    tags: ['React.js', 'TanStack Start', 'Tailwind CSS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Better Auth'],
  },
]

//  swap `repo` / `live` with your real links, and drop a screenshot into
// /public for each project (see the `image` field) once you have one.
export const projects = [
  {
    id: 'jobs-app',
    index: '01',
    title: 'Jobs Announcement Platform',
    description:
      'A full-stack Afghan jobs platform that connects job seekers with employers, NGOs, and organizations through searchable listings, profile management, CV uploads, and online applications.',
    tags: ['React.js', 'TanStack Start', 'Tailwind CSS', 'TypeScript', 'Prisma'],
    type: 'Full-Stack',
    repo: 'https://github.com/MohamadReza274/afghan-jobs.git',
    live: '',
    featured: true,
  },
  {
    id: 'game-hub',
    index: '02',
    title: 'GameHub',
    description:
      'GameHub is a video game discovery web app designed to help users find new and interesting games to play. It supports searching by platform, genre, and other filters to improve game discovery and browsing.',
    tags: ['React.js', 'Tailwind CSS', 'API Integration'],
    type: 'Front-End',
    repo: 'https://github.com/MohamadReza274/game-hub-react.git',
    live: '',
    featured: false,
  },
  {
    id: 'more',
    index: '03',
    title: 'More on GitHub',
    description:
      'Mini-projects built while sharpening core front-end fundamentals — components, layouts, and small JavaScript utilities.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React.js', 'Next.js', 'GitHub'],
    type: 'Self-Learning',
    repo: profile.github,
    live: '',
    featured: false,
  },
]

export const contact = {
  heading: "Let's Build Something.",
  sub: "Have a Role, a Project, or just want to say Hi? My Inbox is Open.",
}