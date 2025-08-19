import { EnumTechnology } from "@/lib/helpers/technology-mapper";
import { ProfileData } from "@/types/user-profile";
import WorkExperienceItem from "@/models/WorkExperienceItem";
import EducationItem from "@/models/EducationItem";
import ProjectItem from "@/models/ProjectItem";

export const profileData: ProfileData = {
  profile: {
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    currentPosition: "Senior Full Stack Developer",
    footerSubtitle: "Founder, Avgeek Passport, LLC.",
    ogCoverImage: "https://placehold.co/1024x1024.png",
    imageUrl: "https://placehold.co/1024x1024.png",
    description:
      "Passionate full-stack developer with 5+ years of experience building scalable web applications and mobile solutions. I love creating efficient, user-friendly applications that solve real-world problems.",
    bulletPoints: [
      "5+ years of experience in full-stack development",
      "Expertise in React, Node.js, and cloud technologies",
      "Led teams of 5+ developers on complex projects",
      "Open source contributor with 10k+ GitHub stars",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/johndoe",
      x: "https://x.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      youtube: "https://youtube.com/johndoe",
    },
    links: {
      github: "https://github.com/johndoe",
      stackoverflow: "https://stackoverflow.com/users/123456/johndoe",
    },
  },
  workExperience: [
    new WorkExperienceItem({
      slug: "tech-innovations-inc",
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      companyImagePath: "https://placehold.co/320x320.png",
      startDate: new Date(2022, 0),
      skills: [
        EnumTechnology.NEXT_JS,
        EnumTechnology.NODE_JS,
        EnumTechnology.AWS,
        EnumTechnology.POSTGRESQL,
      ],
      bulletPoints: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced application load time by 40% through optimization",
        "Mentored 3 junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
    }),
    new WorkExperienceItem({
      slug: "startupxyz",
      role: "Full Stack Developer",
      company: "StartupXYZ",
      companyImagePath: "https://placehold.co/320x320.png",
      startDate: new Date(2020, 2),
      endDate: new Date(2021, 11),
      skills: [
        EnumTechnology.REACT,
        EnumTechnology.EXPRESS,
        EnumTechnology.MONGODB,
        EnumTechnology.DOCKER,
      ],
      bulletPoints: [
        "Built the entire MVP from scratch using React and Node.js",
        "Integrated payment systems and third-party APIs",
        "Implemented real-time chat features using WebSocket",
        "Achieved 99.9% uptime through robust error handling",
      ],
    }),
    new WorkExperienceItem({
      slug: "digital-agency-co",
      role: "Frontend Developer",
      company: "Digital Agency Co.",
      companyImagePath: "https://placehold.co/320x320.png",
      startDate: new Date(2019, 5),
      endDate: new Date(2020, 1),
      skills: [
        EnumTechnology.REACT,
        EnumTechnology.TAILWIND,
        EnumTechnology.JEST,
      ],
      bulletPoints: [
        "Developed responsive websites for 20+ clients",
        "Improved website performance scores by 35% on average",
        "Collaborated with designers to implement pixel-perfect UI",
        "Implemented accessibility standards (WCAG 2.1)",
      ],
    }),
  ],
  education: [
    new EducationItem({
      slug: "stanford-university",
      degree: "Master of Science in Computer Science",
      college: "Stanford University",
      collegeImagePath: "https://placehold.co/320x320.png",
      startDate: new Date(2017, 8),
      endDate: new Date(2019, 4),
      bulletPoints: [
        "Specialized in Artificial Intelligence and Machine Learning",
        "Maintained 3.8/4.0 GPA",
        "Teaching Assistant for Data Structures course",
        "Published research paper on distributed systems",
      ],
    }),
    new EducationItem({
      slug: "university-of-california-berkeley",
      degree: "Bachelor of Science in Software Engineering",
      college: "University of California, Berkeley",
      collegeImagePath: "https://placehold.co/320x320.png",
      startDate: new Date(2013, 8),
      endDate: new Date(2017, 4),
      bulletPoints: [
        "Graduated Summa Cum Laude (3.9/4.0 GPA)",
        "President of Computer Science Student Association",
        "Won 1st place in university hackathon 2016",
        "Completed internships at Google and Microsoft",
      ],
    }),
  ],
  projects: [
    new ProjectItem({
      slug: "ecotracker-carbon-footprint-app",
      name: "EcoTracker - Carbon Footprint App",
      stack: [
        EnumTechnology.REACT_NATIVE,
        EnumTechnology.NODE_JS,
        EnumTechnology.MONGODB,
        EnumTechnology.AWS,
      ],
      description:
        "A mobile application that helps users track and reduce their carbon footprint through daily habit tracking and personalized recommendations.",
      bulletPoints: [
        "10,000+ downloads on App Store and Google Play",
        "Integrated with 5+ environmental data APIs",
        "Real-time carbon footprint calculations",
        "Social features for community challenges",
      ],
      url: "https://github.com/johndoe/ecotracker",
      imagePath: "https://placehold.co/640x640.png",
      coAuthors: ["Jane Smith", "Mike Johnson"],
      featured: true,
      date: new Date("2023-11-01"),
    }),
    new ProjectItem({
      slug: "taskmaster-pro-project-management-tool",
      name: "TaskMaster Pro - Project Management Tool",
      stack: [
        EnumTechnology.NEXT_JS,
        EnumTechnology.TYPESCRIPT,
        EnumTechnology.POSTGRESQL,
        EnumTechnology.NODE_JS,
      ],
      description:
        "A comprehensive project management platform with real-time collaboration, time tracking, and advanced analytics for teams.",
      bulletPoints: [
        "Used by 50+ companies and 500+ users",
        "Real-time collaboration with WebSocket",
        "Advanced reporting and analytics dashboard",
        "Integration with Slack, GitHub, and Jira",
      ],
      url: "https://taskmaster-pro.com",
      imagePath: "https://placehold.co/640x640.png",
      featured: true,
      date: new Date("2024-03-01"),
    }),
    new ProjectItem({
      slug: "devtools-dashboard",
      name: "DevTools Dashboard",
      stack: [
        EnumTechnology.VUE,
        EnumTechnology.EXPRESS,
        EnumTechnology.REDIS,
        EnumTechnology.DOCKER,
      ],
      description:
        "An open-source developer dashboard that aggregates metrics from multiple development tools and services into a unified interface.",
      bulletPoints: [
        "2,000+ GitHub stars and 200+ forks",
        "Supports 15+ popular development tools",
        "Customizable widget system",
        "Docker containerized for easy deployment",
      ],
      url: "https://github.com/johndoe/devtools-dashboard",
      imagePath: "https://placehold.co/640x640.png",
      coAuthors: ["Sarah Wilson"],
      featured: false,
      date: new Date("2022-07-01"),
    }),
  ],
};
