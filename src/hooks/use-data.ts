"use client";

import { useTranslations } from "next-intl";
import Profile from "@/assets/profile.png";
import Hero from "@/assets/hero.png";

const email = "reza.mohamadi.98115@gmail.com";
const github = "https://github.com/MohamadReza274";
const linkedIn = "https://www.linkedin.com/in/mohamadreza-mohamadi-468b41285";

const useData = () => {
  const profile = useTranslations("profile");
  const nav = useTranslations("nav");
  const about = useTranslations("about");
  const education = useTranslations("education");
  const certifications = useTranslations("certifications");
  const exp = useTranslations("experience");
  const prj = useTranslations("projects");
  const contact = useTranslations("contact");
  return {
    profile: {
      name: profile("name"),
      firstName: profile("firstName"),
      lastName: profile("lastName"),
      role: profile("role"),
      tagline: profile("tagline"),
      location: profile("location"),
      email,
      phone: "+93780097590",
      linkedin: linkedIn,
      github,
      resumeUrl: "/",
      avatar: Profile,
      creation: Hero,
      available: true,
    },
    socials: [
      { label: "GitHub", href: github, icon: "github" },
      { label: "LinkedIn", href: linkedIn, icon: "linkedin" },
      { label: "Email", href: `mailto:${email}`, icon: "mail" },
    ],
    navLinks: [
      { label: nav("home"), href: "#home" },
      { label: nav("about"), href: "#about" },
      { label: nav("education"), href: "#education" },
      { label: nav("skills"), href: "#skills" },
      { label: nav("experience"), href: "#experience" },
      { label: nav("projects"), href: "#projects" },
      { label: nav("contact"), href: "#contact" },
    ],
    about: {
      heading: about("heading"),
      paragraphs: [about("paragraphs.1"), about("paragraphs.2")],
      details: [
        { label: about("details.name"), value: about("values.name") },
        { label: about("details.role"), value: about("values.role") },
        { label: about("details.basedIn"), value: about("values.basedIn") },
        { label: about("details.phone"), value: about("values.phone") },
        {
          label: about("details.email"),
          value: about("values.email"),
        },
        { label: about("details.focus"), value: about("values.focus") },
      ],
    },
    education: [
      {
        id: "matric",
        degree: education("items.matric.degree"),
        field: education("items.matric.field"),
        school: education("items.matric.school"),
        period: education("items.matric.period"),
        meta: education("items.matric.meta"),
        status: education("items.matric.status"),
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
        id: "bsIt",
        degree: education("items.bsIt.degree"),
        field: education("items.bsIt.field"),
        school: education("items.bsIt.school"),
        period: education("items.bsIt.period"),
        meta: education("items.bsIt.meta"),
        status: education("items.bsIt.status"),
      },
    ],
    certifications: [
      {
        id: "freelanceP",
        title: certifications("items.freelanceP.title"),
        issuer: certifications("items.freelanceP.issuer"),
      },
      // {
      //   id: 'ibm-py',
      //   title: 'TypeScript, AI & Development',
      //   issuer: 'Programming With Mosh · Mosh Hamedani',
      // },
    ],
    experience: [
      {
        id: "afg-job",
        company: exp("items.afgJob.company"),
        role: exp("items.afgJob.role"),
        period: exp("items.afgJob.period"),
        points: [
          exp("items.afgJob.points.0"),
          exp("items.afgJob.points.1"),
          exp("items.afgJob.points.2"),
          exp("items.afgJob.points.3"),
          exp("items.afgJob.points.4"),
          exp("items.afgJob.points.5"),
          exp("items.afgJob.points.6"),
        ],
        tags: [
          "React.js",
          "TanStack Start",
          "Tailwind CSS",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Better Auth",
        ],
      },
    ],
    skills: {
      frontend: [
        "HTML",
        "CSS",
        "TypeScript",
        "Tailwind CSS",
        "React.js",
        "Next.js",
        "Tanstack",
      ],
      tools: ["Git", "GitHub", "Vercel", "Netlify", "VS Code"],
      soft: [
        "Problem Solving",
        "Communication",
        "Team Collaboration",
        "Adaptability",
        "Time Management",
        "Continuous Learning",
      ],
    },
    projects: [
      {
        id: "jobs-app",
        index: "01",
        title: prj("items.jobsApp.title"),
        description: prj("items.jobsApp.description"),
        tags: [
          "React.js",
          "TanStack Start",
          "Tailwind CSS",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
        ],
        type: prj("items.jobsApp.type"),
        repo: "https://github.com/MohamadReza274/afghan-jobs.git",
        live: "",
        featured: true,
      },
      {
        id: "game-hub",
        index: "02",
        title: prj("items.gameHub.title"),
        description: prj("items.gameHub.description"),
        tags: ["React.js", "Tailwind CSS", "API Integration"],
        type: prj("items.gameHub.type"),
        repo: "https://github.com/MohamadReza274/game-hub-react.git",
        live: "",
        featured: false,
      },
      {
        id: "more",
        index: "03",
        title: prj("items.more.title"),
        description: prj("items.more.description"),
        tags: [
          "HTML",
          "CSS",
          "JavaScript",
          "Tailwind CSS",
          "React.js",
          "Next.js",
          "Tanstack",
          "GitHub",
        ],
        type: prj("items.more.type"),
        repo: github,
        live: "",
        featured: false,
      },
    ],
    contact: {
      title: contact("title"),
      heading: contact("heading"),
      sub: contact("sub"),
    },
    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "HTML5",
      "CSS3",
      "Tanstack",
      "REST APIs",
      "Git",
      "GitHub",
      "Vercel",
    ],
  };
};

export default useData;
