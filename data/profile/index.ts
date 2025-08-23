import { EnumTag } from "@/lib/helpers/tag-mapper";
import { ProfileData } from "@/types/user-profile";
import WorkExperienceItem from "@/models/WorkExperienceItem";
import EducationItem from "@/models/EducationItem";
import ProjectItem from "@/models/ProjectItem";

export const profileData: ProfileData = {
  profile: {
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    email: "john.doe@example.com",
    currentPosition: "Full Stack Developer",
    footerSubtitle: "Life is beautiful, isn't it?",
    ogCoverImage: "https://placehold.co/1024x1024.png",
    imageUrl: "https://placehold.co/1024x1024.png",
    description: "A passionate developer who loves building amazing things",
    bulletPoints: [
      "5+ years of experience in full-stack development",
      "Expertise in React, Node.js, and cloud technologies",
      "Led teams of 5+ developers on complex projects",
      "Open source contributor with 10k+ GitHub stars",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/johndoe",
      x: "https://x.com/johndoe",
      instagram: "",
      youtube: "",
    },
    links: {
      github: "https://github.com/johndoe",
      stackoverflow: "",
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
        EnumTag.NEXT_JS,
        EnumTag.NODE_JS,
        EnumTag.AWS,
        EnumTag.POSTGRESQL,
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
        EnumTag.REACT,
        EnumTag.EXPRESS,
        EnumTag.MONGODB,
        EnumTag.DOCKER,
      ],
      bulletPoints: [
        "Built the entire MVP from scratch using React and Node.js",
        "Integrated payment systems and third-party APIs",
        "Implemented real-time chat features using WebSocket",
        "Achieved 99.9% uptime through robust error handling",
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
  ],
  projects: [
    new ProjectItem({
      slug: "ecotracker-carbon-footprint-app",
      name: "EcoTracker - Carbon Footprint App",
      stack: [
        EnumTag.REACT_NATIVE,
        EnumTag.NODE_JS,
        EnumTag.MONGODB,
        EnumTag.AWS,
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
        EnumTag.NEXT_JS,
        EnumTag.TYPESCRIPT,
        EnumTag.POSTGRESQL,
        EnumTag.NODE_JS,
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
      date: new Date("2025-03-01"),
    }),
  ],
};

