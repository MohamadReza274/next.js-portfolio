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
    field: 'Computer Science',
    school: 'Shahrak high school, Ghor, Afghanistan',
    period: '2006 — 2018',
    meta: '890 / 1100 Marks',
    status: 'Completed',
  },
  {
    id: 'ics',
    degree: 'Intermediate in Computer Science',
    field: 'Pre-Engineering / Computer Science',
    school: 'Govt. Islamia College, Civil Lines, Lahore',
    period: '2019 — 2021',
    meta: '791 / 1100 Marks',
    status: 'Completed',
  },
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
  {
    id: 'ibm-py',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM · Coursera',
  },
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
    id: 'grayphite',
    company: 'Grayphite — CMIT Internship Program 2025',
    role: 'Software Engineer Intern',
    period: 'Jan 2026 — Jun 2026',
    points: [
      'Worked as a Front-End Developer Intern focusing on modern web technologies and responsive UI development.',
      'Developed and maintained responsive web pages using HTML, CSS, JavaScript, Tailwind CSS, React.js, and Next.js.',
      'Built multiple mini-projects to strengthen core front-end development concepts.',
      'Worked on real-world applications including a React-based e-commerce platform and a Lenz Pricing & Product webpage.',
      'Built and deployed projects using GitHub, Vercel, and Netlify.',
      'Gained practical experience in component-based architecture and reusable UI development.',
      'Collaborated in an internship environment focused on clean code practices and version control using GitHub.',
    ],
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript'],
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
      'A React-based online jobs posting built these days — job listings, organization dashboard, and a fully responsive job UIs.',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript'],
    type: 'Full-Stack',
    repo: 'https://github.com/MohamadReza274/afghan-jobs.git',
    live: '',
    featured: true,
  },
  {
    id: 'lenz-pricing',
    index: '02',
    title: 'Lenz Pricing & Product Webpage',
    description:
      'A pricing and product showcase page focused on clean layout, clear hierarchy, and a conversion-friendly component structure.',
    tags: ['React.js', 'Tailwind CSS'],
    type: 'Front-End',
    repo: profile.github,
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