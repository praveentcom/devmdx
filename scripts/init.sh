#!/bin/bash

# Parse command line arguments
SKIP_INTERACTIVE=false
if [[ "$1" == "--skip" ]]; then
  SKIP_INTERACTIVE=true
fi

# Check if gum is installed (only if not in skip mode)
if [[ "$SKIP_INTERACTIVE" == false ]] && ! command -v gum &> /dev/null
then
  echo "gum could not be found. Please install it to continue."
  echo "You can install it by following the instructions here: https://github.com/charmbracelet/gum"
  exit
fi

# Check if data directory exists and is not empty
if [ -d "data" ] && [ "$(ls -A data)" ]; then
  if [[ "$SKIP_INTERACTIVE" == false ]]; then
    gum style --foreground 192 "✘ The '/data' directory is not empty. Perhaps, you already have initialized it."
  else
    echo "✘ The '/data' directory is not empty. Perhaps, you already have initialized it."
  fi
  exit 1
fi

if [[ "$SKIP_INTERACTIVE" == false ]]; then
  gum style --foreground 255 "Let's setup DevCard for you. Fill up your profile details."
  echo
else
  echo "Setting up DevCard with default values..."
fi

# Create data directory if it doesn't exist
mkdir -p data/profile
mkdir -p data/articles/2025
mkdir -p data/community/2025

# Ask for user information or use defaults
if [[ "$SKIP_INTERACTIVE" == false ]]; then
  gum style --foreground 248 "Personal information"
  FIRST_NAME=$(gum input --placeholder "First Name")
  LAST_NAME=$(gum input --placeholder "Last Name")
  GENDER=$(gum input --placeholder "Gender")
  EMAIL=$(gum input --placeholder "Email (optional)")
  CURRENT_POSITION=$(gum input --placeholder "Current Position (optional)")
  DESCRIPTION=$(gum input --placeholder "Short Bio (optional)")
  
  # Clear the line and show completed version
  printf "\033[1A\033[K"
  gum style --foreground 248 "Personal information collected"
  echo
  
  gum style --foreground 248 "Social media links"
  LINKEDIN=$(gum input --placeholder "LinkedIn URL (optional)")
  X=$(gum input --placeholder "X URL (optional)")
  INSTAGRAM=$(gum input --placeholder "Instagram URL (optional)")
  YOUTUBE=$(gum input --placeholder "YouTube URL (optional)")
  GITHUB=$(gum input --placeholder "GitHub URL (optional)")
  STACKOVERFLOW=$(gum input --placeholder "StackOverflow URL (optional)")
  
  # Clear the line and show completed version
  printf "\033[1A\033[K"
  printf "\033[1A\033[K"
  gum style --foreground 248 "Social media links collected"
  echo
  echo
else
  # Use default values for CI/non-interactive mode
  FIRST_NAME="John"
  LAST_NAME="Doe"
  GENDER="Male"
  EMAIL="john.doe@example.com"
  CURRENT_POSITION="Full Stack Developer"
  DESCRIPTION="A passionate developer who loves building amazing things"
  LINKEDIN="https://linkedin.com/in/johndoe"
  X="https://x.com/johndoe"
  INSTAGRAM=""
  YOUTUBE=""
  GITHUB="https://github.com/johndoe"
  STACKOVERFLOW=""
  echo "Using default profile values for setup..."
fi

# Create data/profile/index.ts
if [[ "$SKIP_INTERACTIVE" == false ]]; then
  gum spin --spinner points --spinner.foreground 248 --title.foreground 248 --title "Creating profile data..." -- sleep 2
else
  echo "Creating profile data..."
fi
cat > data/profile/index.ts << EOL
import { EnumTechnology } from "@/lib/helpers/technology-mapper";
import { ProfileData } from "@/types/user-profile";
import WorkExperienceItem from "@/models/WorkExperienceItem";
import EducationItem from "@/models/EducationItem";
import ProjectItem from "@/models/ProjectItem";

export const profileData: ProfileData = {
  profile: {
    firstName: "${FIRST_NAME}",
    lastName: "${LAST_NAME}",
    gender: "${GENDER}",
    email: "${EMAIL}",
    currentPosition: "${CURRENT_POSITION}",
    footerSubtitle: "Life is beautiful, isn't it?",
    ogCoverImage: "https://placehold.co/1024x1024.png",
    imageUrl: "https://placehold.co/1024x1024.png",
    description: "${DESCRIPTION}",
    bulletPoints: [
      "5+ years of experience in full-stack development",
      "Expertise in React, Node.js, and cloud technologies",
      "Led teams of 5+ developers on complex projects",
      "Open source contributor with 10k+ GitHub stars",
    ],
    socialMedia: {
      linkedin: "${LINKEDIN}",
      x: "${X}",
      instagram: "${INSTAGRAM}",
      youtube: "${YOUTUBE}",
    },
    links: {
      github: "${GITHUB}",
      stackoverflow: "${STACKOVERFLOW}",
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
      date: new Date("2025-03-01"),
    }),
  ],
};

EOL

# Clear the line and show completed version
if [[ "$SKIP_INTERACTIVE" == false ]]; then
  printf "\033[1A\033[K"
  gum style --foreground 255 "✔︎ Profile data created"
  echo
else
  echo "✔︎ Profile data created"
fi

# Create some sample articles
if [[ "$SKIP_INTERACTIVE" == false ]]; then
  gum spin --spinner points --spinner.foreground 248 --title.foreground 248 --title "Creating sample articles..." -- sleep 2
else
  echo "Creating sample articles..."
fi
cat > data/articles/2025/hello-world.mdx << EOL
---
title: "Hello World"
description: "This is my first article."
date: "2025-01-01"
tags: ["Next.js", "TypeScript"]
published: true
---

## Hello World

This is my first article. I hope you like it!
EOL

cat > data/articles/2025/getting-started.mdx << EOL
---
title: "Getting Started with devcard"
description: "How to get started with devcard."
date: "2025-01-02"
tags: ["devcard", "tutorial"]
published: true
---

## Getting Started

Welcome to your new devcard! This is a sample article to help you get started.
EOL

# Clear the line and show completed version
if [[ "$SKIP_INTERACTIVE" == false ]]; then
  printf "\033[1A\033[K"
  gum style --foreground 255 "✔︎ Sample articles created"
  echo
else
  echo "✔︎ Sample articles created"
fi

# Create some sample community contributions
if [[ "$SKIP_INTERACTIVE" == false ]]; then
  gum spin --spinner points --spinner.foreground 248 --title.foreground 248 --title "Creating community contributions..." -- sleep 2
else
  echo "Creating community contributions..."
fi
cat > data/community/2025/react-best-practices.mdx << EOL
---
title: "React Best Practices"
description: "A workshop on React best practices."
date: "2025-03-15"
published: true
type: "workshop"
---

## React Best Practices

In this workshop, we will cover some of the best practices for developing React applications.
EOL

cat > data/community/2025/typescript-workshop.mdx << EOL
---
title: "TypeScript Workshop"
description: "A workshop on TypeScript."
date: "2025-04-22"
published: true
type: "workshop"
---

## TypeScript Workshop

Join us for a deep dive into TypeScript and learn how to write more robust and maintainable code.
EOL

# Clear the line and show completed version
if [[ "$SKIP_INTERACTIVE" == false ]]; then
  printf "\033[1A\033[K"
  gum style --foreground 255 "✔︎ Sample community contributions created"
  echo
else
  echo "✔︎ Sample community contributions created"
fi

# Create data/community/index.ts
if [[ "$SKIP_INTERACTIVE" == false ]]; then
  gum spin --spinner points --spinner.foreground 248 --title.foreground 248 --title "Creating community data..." -- sleep 2
else
  echo "Creating community data..."
fi
cat > data/community/index.ts << EOL
import { CommunityPageData } from "@/types/community";

export const communityData: CommunityPageData = {
  title: "For the love of contributing back to the community ❤️",
  description:
    "My talks, presentations, and contributions to the developer community. Sharing knowledge and learning from others.",
};

EOL

# Clear the line and show completed version
if [[ "$SKIP_INTERACTIVE" == false ]]; then
  printf "\033[1A\033[K"
  gum style --foreground 255 "✔︎ Sample community data created"
  echo
else
  echo "✔︎ Sample community data created"
fi

# Create data/profile/cover-letter.md
if [[ "$SKIP_INTERACTIVE" == false ]]; then
  gum spin --spinner points --spinner.foreground 248 --title.foreground 248 --title "Creating cover letter..." -- sleep 2
else
  echo "Creating cover letter..."
fi
cat > data/profile/cover-letter.md << EOL
Hello,

This is a sample cover letter. You can edit this file to create your own.

Thanks,
${FIRST_NAME} ${LAST_NAME}
EOL

# Clear the line and show completed version
if [[ "$SKIP_INTERACTIVE" == false ]]; then
  printf "\033[1A\033[K"
  gum style --foreground 255 "✔︎ Sample cover letter created"
  echo
  
  gum style --foreground 34 "➤ DevCard initialized successfully."
  gum style --foreground 248 "➤ Run 'npm run dev' to start the development server."
else
  echo "✔︎ Sample cover letter created"
  echo
  echo "➤ DevCard initialized successfully."
  echo "➤ Run 'npm run dev' to start the development server."
fi
