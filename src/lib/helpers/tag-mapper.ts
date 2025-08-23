export enum EnumTag {
  // Programming Languages
  JAVASCRIPT = "javascript",
  TYPESCRIPT = "typescript",
  PYTHON = "python",
  JAVA = "java",
  CSHARP = "csharp",
  CPP = "cpp",
  C = "c",
  GO = "go",
  RUST = "rust",
  PHP = "php",
  RUBY = "ruby",
  SWIFT = "swift",
  KOTLIN = "kotlin",
  DART = "dart",
  SCALA = "scala",
  CLOJURE = "clojure",
  HASKELL = "haskell",
  LUA = "lua",
  R = "r",
  MATLAB = "matlab",
  PERL = "perl",
  OBJECTIVE_C = "objective-c",
  FSHARP = "fsharp",
  ELIXIR = "elixir",
  ERLANG = "erlang",
  JULIA = "julia",
  NIM = "nim",
  CRYSTAL = "crystal",
  ZIG = "zig",
  SOLIDITY = "solidity",

  // Frontend Frameworks & Libraries
  REACT = "react",
  VUE = "vue",
  ANGULAR = "angular",
  SVELTE = "svelte",
  EMBER = "ember",
  BACKBONE = "backbone",
  ALPINEJS = "alpinejs",
  SOLID = "solid",
  JQUERY = "jquery",

  // Meta Frameworks
  NEXT_JS = "nextjs",
  NUXT = "nuxt",
  GATSBY = "gatsby",
  ASTRO = "astro",
  REMIX = "remix",
  SVELTEKIT = "sveltekit",

  // CSS & Styling
  CSS3 = "css3",
  SASS = "sass",
  LESS = "less",
  STYLUS = "stylus",
  TAILWIND = "tailwind",
  BOOTSTRAP = "bootstrap",
  BULMA = "bulma",
  MATERIALIZE = "materialize",
  MATERIAL_UI = "material-ui",
  ANT_DESIGN = "ant-design",
  CHAKRA_UI = "chakra-ui",

  // Backend Frameworks
  NODE_JS = "nodejs",
  EXPRESS = "express",
  FASTIFY = "fastify",
  NEST_JS = "nestjs",
  DJANGO = "django",
  FLASK = "flask",
  FASTAPI = "fastapi",
  SPRING = "spring",
  LARAVEL = "laravel",
  SYMFONY = "symfony",
  RAILS = "rails",
  PHOENIX = "phoenix",
  ADONIS = "adonis",

  // Databases
  MONGODB = "mongodb",
  POSTGRESQL = "postgresql",
  MYSQL = "mysql",
  SQLITE = "sqlite",
  REDIS = "redis",
  ELASTICSEARCH = "elasticsearch",
  CASSANDRA = "cassandra",
  COUCHDB = "couchdb",
  FIREBASE = "firebase",
  SUPABASE = "supabase",
  PLANETSCALE = "planetscale",

  // Cloud & DevOps
  AWS = "aws",
  AZURE = "azure",
  GCP = "gcp",
  DOCKER = "docker",
  KUBERNETES = "kubernetes",
  TERRAFORM = "terraform",
  ANSIBLE = "ansible",
  JENKINS = "jenkins",
  GITHUB_ACTIONS = "github-actions",
  GITLAB = "gitlab",
  CIRCLECI = "circleci",
  TRAVIS_CI = "travis-ci",

  // Development Tools
  GIT = "git",
  GITHUB = "github",
  VSCODE = "vscode",
  WEBSTORM = "webstorm",
  INTELLIJ = "intellij",
  ANDROID = "android",
  XCODE = "xcode",
  VIM = "vim",
  EMACS = "emacs",

  // Testing
  JEST = "jest",
  CYPRESS = "cypress",
  SELENIUM = "selenium",
  PLAYWRIGHT = "playwright",
  JASMINE = "jasmine",
  MOCHA = "mocha",
  JUNIT = "junit",

  // Build Tools
  WEBPACK = "webpack",
  VITE = "vite",
  ROLLUP = "rollup",
  PARCEL = "parcel",
  GULP = "gulp",
  GRUNT = "grunt",

  // Mobile Development
  REACT_NATIVE = "react-native",
  FLUTTER = "flutter",
  IONIC = "ionic",
  XAMARIN = "xamarin",
  CORDOVA = "cordova",

  // Operating Systems
  LINUX = "linux",
  UBUNTU = "ubuntu",
  DEBIAN = "debian",
  CENTOS = "centos",
  FEDORA = "fedora",
  ARCH_LINUX = "arch-linux",
  MACOS = "macos",
  WINDOWS = "windows",

  // Other Technologies
  GRAPHQL = "graphql",
  REST_API = "rest-api",
  WEBSOCKET = "websocket",
  ELECTRON = "electron",
  TAURI = "tauri",
  WEBASSEMBLY = "webassembly",

  // Miscellaneous
  HTML5 = "html5",
  MARKDOWN = "markdown",
  JSON = "json",
  XML = "xml",
  YAML = "yaml",

  // Conceptual Topics
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
  DESIGN_PATTERNS = "design-patterns",
  TESTING = "testing", 
  DEVOPS = "devops", 
  SECURITY = "security",
  DATABASE = "database", 
  SQL = "sql", 
  NOSQL = "nosql", 
  MOBILE = "mobile", 
  IOS = "ios", 
  CLOUD = "cloud", 
}

const TAG_DATA: Record<EnumTag, { iconPath: string; label: string }> = {
  // Programming Languages
  [EnumTag.JAVASCRIPT]: {
    iconPath: "/images/tech-icons/JavaScript.png",
    label: "JavaScript",
  },
  [EnumTag.TYPESCRIPT]: {
    iconPath: "/images/tech-icons/TypeScript.png",
    label: "TypeScript",
  },
  [EnumTag.PYTHON]: {
    iconPath: "/images/tech-icons/Python.png",
    label: "Python",
  },
  [EnumTag.JAVA]: {
    iconPath: "/images/tech-icons/Java.png",
    label: "Java",
  },
  [EnumTag.CSHARP]: {
    iconPath: "/images/tech-icons/C#-(CSharp).png",
    label: "C#",
  },
  [EnumTag.CPP]: {
    iconPath: "/images/tech-icons/C++-(CPlusPlus).png",
    label: "C++",
  },
  [EnumTag.C]: { iconPath: "/images/tech-icons/C.png", label: "C" },
  [EnumTag.GO]: { iconPath: "/images/tech-icons/Go.png", label: "Go" },
  [EnumTag.RUST]: {
    iconPath: "/images/tech-icons/Rust.png",
    label: "Rust",
  },
  [EnumTag.PHP]: {
    iconPath: "/images/tech-icons/PHP.png",
    label: "PHP",
  },
  [EnumTag.RUBY]: {
    iconPath: "/images/tech-icons/Ruby.png",
    label: "Ruby",
  },
  [EnumTag.SWIFT]: {
    iconPath: "/images/tech-icons/Swift.png",
    label: "Swift",
  },
  [EnumTag.KOTLIN]: {
    iconPath: "/images/tech-icons/Kotlin.png",
    label: "Kotlin",
  },
  [EnumTag.DART]: {
    iconPath: "/images/tech-icons/Dart.png",
    label: "Dart",
  },
  [EnumTag.SCALA]: {
    iconPath: "/images/tech-icons/Scala.png",
    label: "Scala",
  },
  [EnumTag.CLOJURE]: {
    iconPath: "/images/tech-icons/Clojure.png",
    label: "Clojure",
  },
  [EnumTag.HASKELL]: {
    iconPath: "/images/tech-icons/Haskell.png",
    label: "Haskell",
  },
  [EnumTag.LUA]: {
    iconPath: "/images/tech-icons/Lua.png",
    label: "Lua",
  },
  [EnumTag.R]: { iconPath: "/images/tech-icons/R-.png", label: "R" },
  [EnumTag.MATLAB]: {
    iconPath: "/images/tech-icons/MATLAB.png",
    label: "MATLAB",
  },
  [EnumTag.PERL]: {
    iconPath: "/images/tech-icons/Perl.png",
    label: "Perl",
  },
  [EnumTag.OBJECTIVE_C]: {
    iconPath: "/images/tech-icons/Objective-C.png",
    label: "Objective-C",
  },
  [EnumTag.FSHARP]: {
    iconPath: "/images/tech-icons/FSharp-(F#).png",
    label: "F#",
  },
  [EnumTag.ELIXIR]: {
    iconPath: "/images/tech-icons/Elixir.png",
    label: "Elixir",
  },
  [EnumTag.ERLANG]: {
    iconPath: "/images/tech-icons/Erlang.png",
    label: "Erlang",
  },
  [EnumTag.JULIA]: {
    iconPath: "/images/tech-icons/Julia.png",
    label: "Julia",
  },
  [EnumTag.NIM]: {
    iconPath: "/images/tech-icons/Nim.png",
    label: "Nim",
  },
  [EnumTag.CRYSTAL]: {
    iconPath: "/images/tech-icons/Crystal.png",
    label: "Crystal",
  },
  [EnumTag.ZIG]: {
    iconPath: "/images/tech-icons/Zig.png",
    label: "Zig",
  },
  [EnumTag.SOLIDITY]: {
    iconPath: "/images/tech-icons/Solidity.png",
    label: "Solidity",
  },

  // Frontend Frameworks & Libraries
  [EnumTag.REACT]: {
    iconPath: "/images/tech-icons/React.png",
    label: "React",
  },
  [EnumTag.VUE]: {
    iconPath: "/images/tech-icons/Vue.js.png",
    label: "Vue.js",
  },
  [EnumTag.ANGULAR]: {
    iconPath: "/images/tech-icons/Angular.png",
    label: "Angular",
  },
  [EnumTag.SVELTE]: {
    iconPath: "/images/tech-icons/Svelte.png",
    label: "Svelte",
  },
  [EnumTag.EMBER]: {
    iconPath: "/images/tech-icons/Ember.js.png",
    label: "Ember.js",
  },
  [EnumTag.BACKBONE]: {
    iconPath: "/images/tech-icons/Backbone.js.png",
    label: "Backbone.js",
  },
  [EnumTag.ALPINEJS]: {
    iconPath: "/images/tech-icons/Alpine.js.png",
    label: "Alpine.js",
  },
  [EnumTag.SOLID]: {
    iconPath: "/images/tech-icons/Solid.js.png",
    label: "Solid.js",
  },
  [EnumTag.JQUERY]: {
    iconPath: "/images/tech-icons/jQuery.png",
    label: "jQuery",
  },

  // Meta Frameworks
  [EnumTag.NEXT_JS]: {
    iconPath: "/images/tech-icons/Next.js.png",
    label: "Next.js",
  },
  [EnumTag.NUXT]: {
    iconPath: "/images/tech-icons/Nuxt-JS.png",
    label: "Nuxt.js",
  },
  [EnumTag.GATSBY]: {
    iconPath: "/images/tech-icons/Gatsby.png",
    label: "Gatsby",
  },
  [EnumTag.ASTRO]: {
    iconPath: "/images/tech-icons/Astro.png",
    label: "Astro",
  },
  [EnumTag.REMIX]: {
    iconPath: "/images/tech-icons/Reach.png",
    label: "Remix",
  }, // Using Reach as closest match
  [EnumTag.SVELTEKIT]: {
    iconPath: "/images/tech-icons/Svelte.png",
    label: "SvelteKit",
  }, // Using Svelte icon

  // CSS & Styling
  [EnumTag.CSS3]: {
    iconPath: "/images/tech-icons/CSS3.png",
    label: "CSS3",
  },
  [EnumTag.SASS]: {
    iconPath: "/images/tech-icons/Sass.png",
    label: "Sass",
  },
  [EnumTag.LESS]: {
    iconPath: "/images/tech-icons/Less.js.png",
    label: "Less",
  },
  [EnumTag.STYLUS]: {
    iconPath: "/images/tech-icons/Stylus.png",
    label: "Stylus",
  },
  [EnumTag.TAILWIND]: {
    iconPath: "/images/tech-icons/Tailwind-CSS.png",
    label: "Tailwind CSS",
  },
  [EnumTag.BOOTSTRAP]: {
    iconPath: "/images/tech-icons/Bootstrap.png",
    label: "Bootstrap",
  },
  [EnumTag.BULMA]: {
    iconPath: "/images/tech-icons/Bulma.png",
    label: "Bulma",
  },
  [EnumTag.MATERIALIZE]: {
    iconPath: "/images/tech-icons/Materialize.png",
    label: "Materialize",
  },
  [EnumTag.MATERIAL_UI]: {
    iconPath: "/images/tech-icons/Material-UI.png",
    label: "Material-UI",
  },
  [EnumTag.ANT_DESIGN]: {
    iconPath: "/images/tech-icons/Ant-Design.png",
    label: "Ant Design",
  },
  [EnumTag.CHAKRA_UI]: {
    iconPath: "/images/tech-icons/React.png",
    label: "Chakra UI",
  }, // Using React as fallback

  // Backend Frameworks
  [EnumTag.NODE_JS]: {
    iconPath: "/images/tech-icons/Node.js.png",
    label: "Node.js",
  },
  [EnumTag.EXPRESS]: {
    iconPath: "/images/tech-icons/Express.png",
    label: "Express",
  },
  [EnumTag.FASTIFY]: {
    iconPath: "/images/tech-icons/Fastify.png",
    label: "Fastify",
  },
  [EnumTag.NEST_JS]: {
    iconPath: "/images/tech-icons/Nest.js.png",
    label: "Nest.js",
  },
  [EnumTag.DJANGO]: {
    iconPath: "/images/tech-icons/Django.png",
    label: "Django",
  },
  [EnumTag.FLASK]: {
    iconPath: "/images/tech-icons/Flask.png",
    label: "Flask",
  },
  [EnumTag.FASTAPI]: {
    iconPath: "/images/tech-icons/FastAPI.png",
    label: "FastAPI",
  },
  [EnumTag.SPRING]: {
    iconPath: "/images/tech-icons/Spring.png",
    label: "Spring",
  },
  [EnumTag.LARAVEL]: {
    iconPath: "/images/tech-icons/Laravel.png",
    label: "Laravel",
  },
  [EnumTag.SYMFONY]: {
    iconPath: "/images/tech-icons/Symfony.png",
    label: "Symfony",
  },
  [EnumTag.RAILS]: {
    iconPath: "/images/tech-icons/Ruby-on-Rails.png",
    label: "Ruby on Rails",
  },
  [EnumTag.PHOENIX]: {
    iconPath: "/images/tech-icons/Phoenix-Framework.png",
    label: "Phoenix",
  },
  [EnumTag.ADONIS]: {
    iconPath: "/images/tech-icons/AdonisJS.png",
    label: "AdonisJS",
  },

  // Databases
  [EnumTag.MONGODB]: {
    iconPath: "/images/tech-icons/MongoDB.png",
    label: "MongoDB",
  },
  [EnumTag.POSTGRESQL]: {
    iconPath: "/images/tech-icons/PostgresSQL.png",
    label: "PostgreSQL",
  },
  [EnumTag.MYSQL]: {
    iconPath: "/images/tech-icons/MySQL.png",
    label: "MySQL",
  },
  [EnumTag.SQLITE]: {
    iconPath: "/images/tech-icons/SQLite.png",
    label: "SQLite",
  },
  [EnumTag.REDIS]: {
    iconPath: "/images/tech-icons/Redis.png",
    label: "Redis",
  },
  [EnumTag.ELASTICSEARCH]: {
    iconPath: "/images/tech-icons/Elastic-Search.png",
    label: "Elasticsearch",
  },
  [EnumTag.CASSANDRA]: {
    iconPath: "/images/tech-icons/Apache-Cassandra.png",
    label: "Apache Cassandra",
  },
  [EnumTag.COUCHDB]: {
    iconPath: "/images/tech-icons/CouchDB.png",
    label: "CouchDB",
  },
  [EnumTag.FIREBASE]: {
    iconPath: "/images/tech-icons/Firebase.png",
    label: "Firebase",
  },
  [EnumTag.SUPABASE]: {
    iconPath: "/images/tech-icons/PostgresSQL.png",
    label: "Supabase",
  }, // Using PostgreSQL as fallback
  [EnumTag.PLANETSCALE]: {
    iconPath: "/images/tech-icons/MySQL.png",
    label: "PlanetScale",
  }, // Using MySQL as fallback

  // Cloud & DevOps
  [EnumTag.AWS]: {
    iconPath: "/images/tech-icons/AWS.png",
    label: "AWS",
  },
  [EnumTag.AZURE]: {
    iconPath: "/images/tech-icons/Azure.png",
    label: "Microsoft Azure",
  },
  [EnumTag.GCP]: {
    iconPath: "/images/tech-icons/Google-Cloud.png",
    label: "Google Cloud Platform",
  },
  [EnumTag.DOCKER]: {
    iconPath: "/images/tech-icons/Docker.png",
    label: "Docker",
  },
  [EnumTag.KUBERNETES]: {
    iconPath: "/images/tech-icons/Kubernetes.png",
    label: "Kubernetes",
  },
  [EnumTag.TERRAFORM]: {
    iconPath: "/images/tech-icons/HashiCorp-Terraform.png",
    label: "Terraform",
  },
  [EnumTag.ANSIBLE]: {
    iconPath: "/images/tech-icons/Ansible.png",
    label: "Ansible",
  },
  [EnumTag.JENKINS]: {
    iconPath: "/images/tech-icons/Jenkins.png",
    label: "Jenkins",
  },
  [EnumTag.GITHUB_ACTIONS]: {
    iconPath: "/images/tech-icons/GitHub-Actions.png",
    label: "GitHub Actions",
  },
  [EnumTag.GITLAB]: {
    iconPath: "/images/tech-icons/GitLab.png",
    label: "GitLab",
  },
  [EnumTag.CIRCLECI]: {
    iconPath: "/images/tech-icons/CircleCI.png",
    label: "CircleCI",
  },
  [EnumTag.TRAVIS_CI]: {
    iconPath: "/images/tech-icons/Travis-CI.png",
    label: "Travis CI",
  },

  // Development Tools
  [EnumTag.GIT]: {
    iconPath: "/images/tech-icons/Git.png",
    label: "Git",
  },
  [EnumTag.GITHUB]: {
    iconPath: "/images/tech-icons/GitHub.png",
    label: "GitHub",
  },
  [EnumTag.VSCODE]: {
    iconPath: "/images/tech-icons/Visual-Studio-Code-(VS-Code).png",
    label: "VS Code",
  },
  [EnumTag.WEBSTORM]: {
    iconPath: "/images/tech-icons/WebStorm.png",
    label: "WebStorm",
  },
  [EnumTag.INTELLIJ]: {
    iconPath: "/images/tech-icons/IntelliJ-IDEA.png",
    label: "IntelliJ IDEA",
  },
  [EnumTag.ANDROID]: {
    iconPath: "/images/tech-icons/Android.png",
    label: "Android",
  },
  [EnumTag.XCODE]: {
    iconPath: "/images/tech-icons/Xcode.png",
    label: "Xcode",
  },
  [EnumTag.VIM]: {
    iconPath: "/images/tech-icons/Vim.png",
    label: "Vim",
  },
  [EnumTag.EMACS]: {
    iconPath: "/images/tech-icons/GNU-Emacs.png",
    label: "GNU Emacs",
  },

  // Testing
  [EnumTag.JEST]: {
    iconPath: "/images/tech-icons/Jest.png",
    label: "Jest",
  },
  [EnumTag.CYPRESS]: {
    iconPath: "/images/tech-icons/Cypress.png",
    label: "Cypress",
  },
  [EnumTag.SELENIUM]: {
    iconPath: "/images/tech-icons/Selenium.png",
    label: "Selenium",
  },
  [EnumTag.PLAYWRIGHT]: {
    iconPath: "/images/tech-icons/Playwrite.png",
    label: "Playwright",
  },
  [EnumTag.JASMINE]: {
    iconPath: "/images/tech-icons/Jasmine.png",
    label: "Jasmine",
  },
  [EnumTag.MOCHA]: {
    iconPath: "/images/tech-icons/Mocha.png",
    label: "Mocha",
  },
  [EnumTag.JUNIT]: {
    iconPath: "/images/tech-icons/JUnit.png",
    label: "JUnit",
  },

  // Build Tools
  [EnumTag.WEBPACK]: {
    iconPath: "/images/tech-icons/Webpack.png",
    label: "Webpack",
  },
  [EnumTag.VITE]: {
    iconPath: "/images/tech-icons/Vite.png",
    label: "Vite",
  },
  [EnumTag.ROLLUP]: {
    iconPath: "/images/tech-icons/Rollup.js.png",
    label: "Rollup",
  },
  [EnumTag.PARCEL]: {
    iconPath: "/images/tech-icons/Webpack.png",
    label: "Parcel",
  }, // Using Webpack as fallback
  [EnumTag.GULP]: {
    iconPath: "/images/tech-icons/Gulp.js.png",
    label: "Gulp",
  },
  [EnumTag.GRUNT]: {
    iconPath: "/images/tech-icons/Grunt.js.png",
    label: "Grunt",
  },

  // Mobile Development
  [EnumTag.REACT_NATIVE]: {
    iconPath: "/images/tech-icons/React.png",
    label: "React Native",
  },
  [EnumTag.FLUTTER]: {
    iconPath: "/images/tech-icons/Flutter.png",
    label: "Flutter",
  },
  [EnumTag.IONIC]: {
    iconPath: "/images/tech-icons/Ionic.png",
    label: "Ionic",
  },
  [EnumTag.XAMARIN]: {
    iconPath: "/images/tech-icons/Xamarin.png",
    label: "Xamarin",
  },
  [EnumTag.CORDOVA]: {
    iconPath: "/images/tech-icons/Capacitor.png",
    label: "Apache Cordova",
  }, // Using Capacitor as similar

  // Operating Systems
  [EnumTag.LINUX]: {
    iconPath: "/images/tech-icons/Linux.png",
    label: "Linux",
  },
  [EnumTag.UBUNTU]: {
    iconPath: "/images/tech-icons/Ubuntu.png",
    label: "Ubuntu",
  },
  [EnumTag.DEBIAN]: {
    iconPath: "/images/tech-icons/Debian.png",
    label: "Debian",
  },
  [EnumTag.CENTOS]: {
    iconPath: "/images/tech-icons/CentOS.png",
    label: "CentOS",
  },
  [EnumTag.FEDORA]: {
    iconPath: "/images/tech-icons/Fedora.png",
    label: "Fedora",
  },
  [EnumTag.ARCH_LINUX]: {
    iconPath: "/images/tech-icons/Arch-Linux.png",
    label: "Arch Linux",
  },
  [EnumTag.MACOS]: {
    iconPath: "/images/tech-icons/Apple.png",
    label: "macOS",
  },
  [EnumTag.WINDOWS]: {
    iconPath: "/images/tech-icons/Windows-11.png",
    label: "Windows",
  },

  // Other Technologies
  [EnumTag.GRAPHQL]: {
    iconPath: "/images/tech-icons/GraphQL.png",
    label: "GraphQL",
  },
  [EnumTag.REST_API]: {
    iconPath: "/images/tech-icons/Swagger.png",
    label: "REST API",
  }, // Using Swagger as API related
  [EnumTag.WEBSOCKET]: {
    iconPath: "/images/tech-icons/Socket.io.png",
    label: "WebSocket",
  },
  [EnumTag.ELECTRON]: {
    iconPath: "/images/tech-icons/Electron.png",
    label: "Electron",
  },
  [EnumTag.TAURI]: {
    iconPath: "/images/tech-icons/Tauri.png",
    label: "Tauri",
  },
  [EnumTag.WEBASSEMBLY]: {
    iconPath: "/images/tech-icons/WebAssembly.png",
    label: "WebAssembly",
  },

  // Miscellaneous
  [EnumTag.HTML5]: {
    iconPath: "/images/tech-icons/HTML5.png",
    label: "HTML5",
  },
  [EnumTag.MARKDOWN]: {
    iconPath: "/images/tech-icons/Markdown.png",
    label: "Markdown",
  },
  [EnumTag.JSON]: {
    iconPath: "/images/tech-icons/JSON.png",
    label: "JSON",
  },
  [EnumTag.XML]: {
    iconPath: "/images/tech-icons/XML.png",
    label: "XML",
  },
  [EnumTag.YAML]: {
    iconPath: "/images/tech-icons/YAML.png",
    label: "YAML",
  },

  // Conceptual Tags
  [EnumTag.WEB_DEVELOPMENT]: {
    iconPath: "/images/tech-icons/HTML5.png",
    label: "Web Development",
  },
  [EnumTag.BACKEND]: {
    iconPath: "/images/tech-icons/Node.js.png",
    label: "Backend",
  },
  [EnumTag.API]: {
    iconPath: "/images/tech-icons/JSON.png",
    label: "API",
  },
  [EnumTag.REST]: {
    iconPath: "/images/tech-icons/JSON.png",
    label: "REST",
  },
  [EnumTag.DEVELOPMENT]: {
    iconPath: "/images/tech-icons/Visual-Studio-Code-(VS-Code).png",
    label: "Development",
  },
  [EnumTag.BEST_PRACTICES]: {
    iconPath: "/images/tech-icons/ESLint.png",
    label: "Best Practices",
  },
  [EnumTag.ARCHITECTURE]: {
    iconPath: "/images/tech-icons/UML.png",
    label: "Architecture",
  },
  [EnumTag.SCALABILITY]: {
    iconPath: "/images/tech-icons/Kubernetes.png",
    label: "Scalability",
  },
  [EnumTag.PERFORMANCE]: {
    iconPath: "/images/tech-icons/Chrome.png",
    label: "Performance",
  },
  [EnumTag.OPTIMIZATION]: {
    iconPath: "/images/tech-icons/Chrome.png",
    label: "Optimization",
  },
  [EnumTag.DESIGN_PATTERNS]: {
    iconPath: "/images/tech-icons/UML.png",
    label: "Design Patterns",
  },
  [EnumTag.TESTING]: {
    iconPath: "/images/tech-icons/Jest.png",
    label: "Testing",
  },
  [EnumTag.DEVOPS]: {
    iconPath: "/images/tech-icons/Docker.png",
    label: "DevOps",
  },
  [EnumTag.SECURITY]: {
    iconPath: "/images/tech-icons/HashiCorp-Vault.png",
    label: "Security",
  },
  [EnumTag.DATABASE]: {
    iconPath: "/images/tech-icons/PostgresSQL.png",
    label: "Database",
  },
  [EnumTag.SQL]: {
    iconPath: "/images/tech-icons/PostgresSQL.png",
    label: "SQL",
  },
  [EnumTag.NOSQL]: {
    iconPath: "/images/tech-icons/MongoDB.png",
    label: "NoSQL",
  },
  [EnumTag.MOBILE]: {
    iconPath: "/images/tech-icons/Flutter.png",
    label: "Mobile",
  },
  [EnumTag.IOS]: {
    iconPath: "/images/tech-icons/Swift.png",
    label: "iOS",
  },
  [EnumTag.CLOUD]: {
    iconPath: "/images/tech-icons/AWS.png",
    label: "Cloud",
  },
};

export type Tag = {
  key: string;
  iconPath: string;
  label: string;
};

export class TagMapper {
  /**
   * Get tag details by enum value
   */
  getDetails(tag: EnumTag): Tag | null {
    const data = TAG_DATA[tag];
    if (!data) {
      return null;
    }

    return {
      key: tag,
      iconPath: data.iconPath,
      label: data.label,
    };
  }

  /**
   * Check if a value is a valid tag
   */
  isValidTag(value: string): value is EnumTag {
    return Object.values(EnumTag).includes(value as EnumTag);
  }
}
