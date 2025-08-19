export enum EnumTopic {
  // Programming Languages
  JAVASCRIPT = "javascript",
  TYPESCRIPT = "typescript",
  PYTHON = "python",
  JAVA = "java",

  // Frontend Frameworks & Libraries
  REACT = "react",
  NEXTJS = "nextjs",
  VUE = "vue",
  ANGULAR = "angular",

  // General Development Topics
  WEB_DEVELOPMENT = "web-development",
  BACKEND = "backend",
  API = "api",
  REST = "rest",
  DEVELOPMENT = "development",
  BEST_PRACTICES = "best-practices",
  ARCHITECTURE = "architecture",
  SCALABILITY = "scalability",
  PERFORMANCE = "performance",
  OPTIMIZATION = "optimization",

  // Methodologies & Practices
  DESIGN_PATTERNS = "design-patterns",
  TESTING = "testing",
  DEVOPS = "devops",
  SECURITY = "security",

  // Databases
  DATABASE = "database",
  SQL = "sql",
  NOSQL = "nosql",

  // Mobile Development
  MOBILE = "mobile",
  IOS = "ios",
  ANDROID = "android",

  // Cloud & Infrastructure
  CLOUD = "cloud",
  AWS = "aws",
  AZURE = "azure",

  // Tools & Technologies
  GIT = "git",
  DOCKER = "docker",
  KUBERNETES = "kubernetes",
}

// Topic mapping data - more maintainable than a huge switch statement
const TOPIC_DATA: Record<EnumTopic, { iconPath: string; label: string }> = {
  // Programming Languages
  [EnumTopic.JAVASCRIPT]: {
    iconPath: "/images/tech-icons/JavaScript.png",
    label: "JavaScript",
  },
  [EnumTopic.TYPESCRIPT]: {
    iconPath: "/images/tech-icons/TypeScript.png",
    label: "TypeScript",
  },
  [EnumTopic.PYTHON]: {
    iconPath: "/images/tech-icons/Python.png",
    label: "Python",
  },
  [EnumTopic.JAVA]: { iconPath: "/images/tech-icons/Java.png", label: "Java" },

  // Frontend Frameworks & Libraries
  [EnumTopic.REACT]: {
    iconPath: "/images/tech-icons/React.png",
    label: "React",
  },
  [EnumTopic.NEXTJS]: {
    iconPath: "/images/tech-icons/Next.js.png",
    label: "Next.js",
  },
  [EnumTopic.VUE]: { iconPath: "/images/tech-icons/Vue.js.png", label: "Vue" },
  [EnumTopic.ANGULAR]: {
    iconPath: "/images/tech-icons/Angular.png",
    label: "Angular",
  },

  // General Development Topics (using generic tech icons where appropriate)
  [EnumTopic.WEB_DEVELOPMENT]: {
    iconPath: "/images/tech-icons/HTML5.png",
    label: "Web development",
  },
  [EnumTopic.BACKEND]: {
    iconPath: "/images/tech-icons/Node.js.png",
    label: "Backend",
  },
  [EnumTopic.API]: { iconPath: "/images/tech-icons/JSON.png", label: "API" },
  [EnumTopic.REST]: { iconPath: "/images/tech-icons/JSON.png", label: "REST" },
  [EnumTopic.DEVELOPMENT]: {
    iconPath: "/images/tech-icons/VS-Code.png",
    label: "Development",
  },
  [EnumTopic.BEST_PRACTICES]: {
    iconPath: "/images/tech-icons/ESLint.png",
    label: "Best practices",
  },
  [EnumTopic.ARCHITECTURE]: {
    iconPath: "/images/tech-icons/UML.png",
    label: "Architecture",
  },
  [EnumTopic.SCALABILITY]: {
    iconPath: "/images/tech-icons/Kubernetes.png",
    label: "Scalability",
  },
  [EnumTopic.PERFORMANCE]: {
    iconPath: "/images/tech-icons/Chrome.png",
    label: "Performance",
  },
  [EnumTopic.OPTIMIZATION]: {
    iconPath: "/images/tech-icons/Chrome.png",
    label: "Optimization",
  },

  // Methodologies & Practices
  [EnumTopic.DESIGN_PATTERNS]: {
    iconPath: "/images/tech-icons/UML.png",
    label: "Design patterns",
  },
  [EnumTopic.TESTING]: {
    iconPath: "/images/tech-icons/Jest.png",
    label: "Testing",
  },
  [EnumTopic.DEVOPS]: {
    iconPath: "/images/tech-icons/Docker.png",
    label: "DevOps",
  },
  [EnumTopic.SECURITY]: {
    iconPath: "/images/tech-icons/HashiCorp-Vault.png",
    label: "Security",
  },

  // Databases
  [EnumTopic.DATABASE]: {
    iconPath: "/images/tech-icons/PostgreSQL.png",
    label: "Database",
  },
  [EnumTopic.SQL]: {
    iconPath: "/images/tech-icons/PostgreSQL.png",
    label: "SQL",
  },
  [EnumTopic.NOSQL]: {
    iconPath: "/images/tech-icons/MongoDB.png",
    label: "NoSQL",
  },

  // Mobile Development
  [EnumTopic.MOBILE]: {
    iconPath: "/images/tech-icons/Flutter.png",
    label: "Mobile",
  },
  [EnumTopic.IOS]: { iconPath: "/images/tech-icons/Swift.png", label: "iOS" },
  [EnumTopic.ANDROID]: {
    iconPath: "/images/tech-icons/Android.png",
    label: "Android",
  },

  // Cloud & Infrastructure
  [EnumTopic.CLOUD]: { iconPath: "/images/tech-icons/AWS.png", label: "Cloud" },
  [EnumTopic.AWS]: { iconPath: "/images/tech-icons/AWS.png", label: "AWS" },
  [EnumTopic.AZURE]: {
    iconPath: "/images/tech-icons/Azure.png",
    label: "Azure",
  },

  // Tools & Technologies
  [EnumTopic.GIT]: { iconPath: "/images/tech-icons/Git.png", label: "Git" },
  [EnumTopic.DOCKER]: {
    iconPath: "/images/tech-icons/Docker.png",
    label: "Docker",
  },
  [EnumTopic.KUBERNETES]: {
    iconPath: "/images/tech-icons/Kubernetes.png",
    label: "Kubernetes",
  },
};

export interface TopicDetails {
  iconPath: string;
  label: string;
}

export class TopicMapper {
  getDetails(topic: EnumTopic): TopicDetails | null {
    return TOPIC_DATA[topic] || null;
  }

  getAllTopics(): EnumTopic[] {
    return Object.values(EnumTopic);
  }

  getTopicByValue(value: string): EnumTopic | null {
    const topic = Object.values(EnumTopic).find((t) => t === value);
    return topic || null;
  }

  isValidTopic(value: string): value is EnumTopic {
    return Object.values(EnumTopic).includes(value as EnumTopic);
  }
}
