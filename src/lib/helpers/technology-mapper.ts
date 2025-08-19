export enum EnumTechnology {
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
  ANDROID_STUDIO = "android-studio",
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
}

export type Technology = {
  key: string;
  iconPath: string;
  label: string;
};

// Technology mapping data - more maintainable than a huge switch statement
const TECHNOLOGY_DATA: Record<
  EnumTechnology,
  { iconPath: string; label: string }
> = {
  // Programming Languages
  [EnumTechnology.JAVASCRIPT]: {
    iconPath: "/images/tech-icons/JavaScript.png",
    label: "JavaScript",
  },
  [EnumTechnology.TYPESCRIPT]: {
    iconPath: "/images/tech-icons/TypeScript.png",
    label: "TypeScript",
  },
  [EnumTechnology.PYTHON]: {
    iconPath: "/images/tech-icons/Python.png",
    label: "Python",
  },
  [EnumTechnology.JAVA]: {
    iconPath: "/images/tech-icons/Java.png",
    label: "Java",
  },
  [EnumTechnology.CSHARP]: {
    iconPath: "/images/tech-icons/C#-(CSharp).png",
    label: "C#",
  },
  [EnumTechnology.CPP]: {
    iconPath: "/images/tech-icons/C++-(CPlusPlus).png",
    label: "C++",
  },
  [EnumTechnology.C]: { iconPath: "/images/tech-icons/C.png", label: "C" },
  [EnumTechnology.GO]: { iconPath: "/images/tech-icons/Go.png", label: "Go" },
  [EnumTechnology.RUST]: {
    iconPath: "/images/tech-icons/Rust.png",
    label: "Rust",
  },
  [EnumTechnology.PHP]: {
    iconPath: "/images/tech-icons/PHP.png",
    label: "PHP",
  },
  [EnumTechnology.RUBY]: {
    iconPath: "/images/tech-icons/Ruby.png",
    label: "Ruby",
  },
  [EnumTechnology.SWIFT]: {
    iconPath: "/images/tech-icons/Swift.png",
    label: "Swift",
  },
  [EnumTechnology.KOTLIN]: {
    iconPath: "/images/tech-icons/Kotlin.png",
    label: "Kotlin",
  },
  [EnumTechnology.DART]: {
    iconPath: "/images/tech-icons/Dart.png",
    label: "Dart",
  },
  [EnumTechnology.SCALA]: {
    iconPath: "/images/tech-icons/Scala.png",
    label: "Scala",
  },
  [EnumTechnology.CLOJURE]: {
    iconPath: "/images/tech-icons/Clojure.png",
    label: "Clojure",
  },
  [EnumTechnology.HASKELL]: {
    iconPath: "/images/tech-icons/Haskell.png",
    label: "Haskell",
  },
  [EnumTechnology.LUA]: {
    iconPath: "/images/tech-icons/Lua.png",
    label: "Lua",
  },
  [EnumTechnology.R]: { iconPath: "/images/tech-icons/R-.png", label: "R" },
  [EnumTechnology.MATLAB]: {
    iconPath: "/images/tech-icons/MATLAB.png",
    label: "MATLAB",
  },
  [EnumTechnology.PERL]: {
    iconPath: "/images/tech-icons/Perl.png",
    label: "Perl",
  },
  [EnumTechnology.OBJECTIVE_C]: {
    iconPath: "/images/tech-icons/Objective-C.png",
    label: "Objective-C",
  },
  [EnumTechnology.FSHARP]: {
    iconPath: "/images/tech-icons/FSharp-(F#).png",
    label: "F#",
  },
  [EnumTechnology.ELIXIR]: {
    iconPath: "/images/tech-icons/Elixir.png",
    label: "Elixir",
  },
  [EnumTechnology.ERLANG]: {
    iconPath: "/images/tech-icons/Erlang.png",
    label: "Erlang",
  },
  [EnumTechnology.JULIA]: {
    iconPath: "/images/tech-icons/Julia.png",
    label: "Julia",
  },
  [EnumTechnology.NIM]: {
    iconPath: "/images/tech-icons/Nim.png",
    label: "Nim",
  },
  [EnumTechnology.CRYSTAL]: {
    iconPath: "/images/tech-icons/Crystal.png",
    label: "Crystal",
  },
  [EnumTechnology.ZIG]: {
    iconPath: "/images/tech-icons/Zig.png",
    label: "Zig",
  },
  [EnumTechnology.SOLIDITY]: {
    iconPath: "/images/tech-icons/Solidity.png",
    label: "Solidity",
  },

  // Frontend Frameworks & Libraries
  [EnumTechnology.REACT]: {
    iconPath: "/images/tech-icons/React.png",
    label: "React",
  },
  [EnumTechnology.VUE]: {
    iconPath: "/images/tech-icons/Vue.js.png",
    label: "Vue.js",
  },
  [EnumTechnology.ANGULAR]: {
    iconPath: "/images/tech-icons/Angular.png",
    label: "Angular",
  },
  [EnumTechnology.SVELTE]: {
    iconPath: "/images/tech-icons/Svelte.png",
    label: "Svelte",
  },
  [EnumTechnology.EMBER]: {
    iconPath: "/images/tech-icons/Ember.js.png",
    label: "Ember.js",
  },
  [EnumTechnology.BACKBONE]: {
    iconPath: "/images/tech-icons/Backbone.js.png",
    label: "Backbone.js",
  },
  [EnumTechnology.ALPINEJS]: {
    iconPath: "/images/tech-icons/Alpine.js.png",
    label: "Alpine.js",
  },
  [EnumTechnology.SOLID]: {
    iconPath: "/images/tech-icons/Solid.js.png",
    label: "Solid.js",
  },
  [EnumTechnology.JQUERY]: {
    iconPath: "/images/tech-icons/jQuery.png",
    label: "jQuery",
  },

  // Meta Frameworks
  [EnumTechnology.NEXT_JS]: {
    iconPath: "/images/tech-icons/Next.js.png",
    label: "Next.js",
  },
  [EnumTechnology.NUXT]: {
    iconPath: "/images/tech-icons/Nuxt-JS.png",
    label: "Nuxt.js",
  },
  [EnumTechnology.GATSBY]: {
    iconPath: "/images/tech-icons/Gatsby.png",
    label: "Gatsby",
  },
  [EnumTechnology.ASTRO]: {
    iconPath: "/images/tech-icons/Astro.png",
    label: "Astro",
  },
  [EnumTechnology.REMIX]: {
    iconPath: "/images/tech-icons/Reach.png",
    label: "Remix",
  }, // Using Reach as closest match
  [EnumTechnology.SVELTEKIT]: {
    iconPath: "/images/tech-icons/Svelte.png",
    label: "SvelteKit",
  }, // Using Svelte icon

  // CSS & Styling
  [EnumTechnology.CSS3]: {
    iconPath: "/images/tech-icons/CSS3.png",
    label: "CSS3",
  },
  [EnumTechnology.SASS]: {
    iconPath: "/images/tech-icons/Sass.png",
    label: "Sass",
  },
  [EnumTechnology.LESS]: {
    iconPath: "/images/tech-icons/Less.js.png",
    label: "Less",
  },
  [EnumTechnology.STYLUS]: {
    iconPath: "/images/tech-icons/Stylus.png",
    label: "Stylus",
  },
  [EnumTechnology.TAILWIND]: {
    iconPath: "/images/tech-icons/Tailwind-CSS.png",
    label: "Tailwind CSS",
  },
  [EnumTechnology.BOOTSTRAP]: {
    iconPath: "/images/tech-icons/Bootstrap.png",
    label: "Bootstrap",
  },
  [EnumTechnology.BULMA]: {
    iconPath: "/images/tech-icons/Bulma.png",
    label: "Bulma",
  },
  [EnumTechnology.MATERIALIZE]: {
    iconPath: "/images/tech-icons/Materialize.png",
    label: "Materialize",
  },
  [EnumTechnology.MATERIAL_UI]: {
    iconPath: "/images/tech-icons/Material-UI.png",
    label: "Material-UI",
  },
  [EnumTechnology.ANT_DESIGN]: {
    iconPath: "/images/tech-icons/Ant-Design.png",
    label: "Ant Design",
  },
  [EnumTechnology.CHAKRA_UI]: {
    iconPath: "/images/tech-icons/React.png",
    label: "Chakra UI",
  }, // Using React as fallback

  // Backend Frameworks
  [EnumTechnology.NODE_JS]: {
    iconPath: "/images/tech-icons/Node.js.png",
    label: "Node.js",
  },
  [EnumTechnology.EXPRESS]: {
    iconPath: "/images/tech-icons/Express.png",
    label: "Express",
  },
  [EnumTechnology.FASTIFY]: {
    iconPath: "/images/tech-icons/Fastify.png",
    label: "Fastify",
  },
  [EnumTechnology.NEST_JS]: {
    iconPath: "/images/tech-icons/Nest.js.png",
    label: "Nest.js",
  },
  [EnumTechnology.DJANGO]: {
    iconPath: "/images/tech-icons/Django.png",
    label: "Django",
  },
  [EnumTechnology.FLASK]: {
    iconPath: "/images/tech-icons/Flask.png",
    label: "Flask",
  },
  [EnumTechnology.FASTAPI]: {
    iconPath: "/images/tech-icons/FastAPI.png",
    label: "FastAPI",
  },
  [EnumTechnology.SPRING]: {
    iconPath: "/images/tech-icons/Spring.png",
    label: "Spring",
  },
  [EnumTechnology.LARAVEL]: {
    iconPath: "/images/tech-icons/Laravel.png",
    label: "Laravel",
  },
  [EnumTechnology.SYMFONY]: {
    iconPath: "/images/tech-icons/Symfony.png",
    label: "Symfony",
  },
  [EnumTechnology.RAILS]: {
    iconPath: "/images/tech-icons/Ruby-on-Rails.png",
    label: "Ruby on Rails",
  },
  [EnumTechnology.PHOENIX]: {
    iconPath: "/images/tech-icons/Phoenix-Framework.png",
    label: "Phoenix",
  },
  [EnumTechnology.ADONIS]: {
    iconPath: "/images/tech-icons/AdonisJS.png",
    label: "AdonisJS",
  },

  // Databases
  [EnumTechnology.MONGODB]: {
    iconPath: "/images/tech-icons/MongoDB.png",
    label: "MongoDB",
  },
  [EnumTechnology.POSTGRESQL]: {
    iconPath: "/images/tech-icons/PostgresSQL.png",
    label: "PostgreSQL",
  },
  [EnumTechnology.MYSQL]: {
    iconPath: "/images/tech-icons/MySQL.png",
    label: "MySQL",
  },
  [EnumTechnology.SQLITE]: {
    iconPath: "/images/tech-icons/SQLite.png",
    label: "SQLite",
  },
  [EnumTechnology.REDIS]: {
    iconPath: "/images/tech-icons/Redis.png",
    label: "Redis",
  },
  [EnumTechnology.ELASTICSEARCH]: {
    iconPath: "/images/tech-icons/Elastic-Search.png",
    label: "Elasticsearch",
  },
  [EnumTechnology.CASSANDRA]: {
    iconPath: "/images/tech-icons/Apache-Cassandra.png",
    label: "Apache Cassandra",
  },
  [EnumTechnology.COUCHDB]: {
    iconPath: "/images/tech-icons/CouchDB.png",
    label: "CouchDB",
  },
  [EnumTechnology.FIREBASE]: {
    iconPath: "/images/tech-icons/Firebase.png",
    label: "Firebase",
  },
  [EnumTechnology.SUPABASE]: {
    iconPath: "/images/tech-icons/PostgresSQL.png",
    label: "Supabase",
  }, // Using PostgreSQL as fallback
  [EnumTechnology.PLANETSCALE]: {
    iconPath: "/images/tech-icons/MySQL.png",
    label: "PlanetScale",
  }, // Using MySQL as fallback

  // Cloud & DevOps
  [EnumTechnology.AWS]: {
    iconPath: "/images/tech-icons/AWS.png",
    label: "AWS",
  },
  [EnumTechnology.AZURE]: {
    iconPath: "/images/tech-icons/Azure.png",
    label: "Microsoft Azure",
  },
  [EnumTechnology.GCP]: {
    iconPath: "/images/tech-icons/Google-Cloud.png",
    label: "Google Cloud Platform",
  },
  [EnumTechnology.DOCKER]: {
    iconPath: "/images/tech-icons/Docker.png",
    label: "Docker",
  },
  [EnumTechnology.KUBERNETES]: {
    iconPath: "/images/tech-icons/Kubernetes.png",
    label: "Kubernetes",
  },
  [EnumTechnology.TERRAFORM]: {
    iconPath: "/images/tech-icons/HashiCorp-Terraform.png",
    label: "Terraform",
  },
  [EnumTechnology.ANSIBLE]: {
    iconPath: "/images/tech-icons/Ansible.png",
    label: "Ansible",
  },
  [EnumTechnology.JENKINS]: {
    iconPath: "/images/tech-icons/Jenkins.png",
    label: "Jenkins",
  },
  [EnumTechnology.GITHUB_ACTIONS]: {
    iconPath: "/images/tech-icons/GitHub-Actions.png",
    label: "GitHub Actions",
  },
  [EnumTechnology.GITLAB]: {
    iconPath: "/images/tech-icons/GitLab.png",
    label: "GitLab",
  },
  [EnumTechnology.CIRCLECI]: {
    iconPath: "/images/tech-icons/CircleCI.png",
    label: "CircleCI",
  },
  [EnumTechnology.TRAVIS_CI]: {
    iconPath: "/images/tech-icons/Travis-CI.png",
    label: "Travis CI",
  },

  // Development Tools
  [EnumTechnology.GIT]: {
    iconPath: "/images/tech-icons/Git.png",
    label: "Git",
  },
  [EnumTechnology.GITHUB]: {
    iconPath: "/images/tech-icons/GitHub.png",
    label: "GitHub",
  },
  [EnumTechnology.VSCODE]: {
    iconPath: "/images/tech-icons/Visual-Studio-Code-(VS-Code).png",
    label: "VS Code",
  },
  [EnumTechnology.WEBSTORM]: {
    iconPath: "/images/tech-icons/WebStorm.png",
    label: "WebStorm",
  },
  [EnumTechnology.INTELLIJ]: {
    iconPath: "/images/tech-icons/IntelliJ-IDEA.png",
    label: "IntelliJ IDEA",
  },
  [EnumTechnology.ANDROID_STUDIO]: {
    iconPath: "/images/tech-icons/Android-Studio.png",
    label: "Android Studio",
  },
  [EnumTechnology.XCODE]: {
    iconPath: "/images/tech-icons/Xcode.png",
    label: "Xcode",
  },
  [EnumTechnology.VIM]: {
    iconPath: "/images/tech-icons/Vim.png",
    label: "Vim",
  },
  [EnumTechnology.EMACS]: {
    iconPath: "/images/tech-icons/GNU-Emacs.png",
    label: "GNU Emacs",
  },

  // Testing
  [EnumTechnology.JEST]: {
    iconPath: "/images/tech-icons/Jest.png",
    label: "Jest",
  },
  [EnumTechnology.CYPRESS]: {
    iconPath: "/images/tech-icons/Cypress.png",
    label: "Cypress",
  },
  [EnumTechnology.SELENIUM]: {
    iconPath: "/images/tech-icons/Selenium.png",
    label: "Selenium",
  },
  [EnumTechnology.PLAYWRIGHT]: {
    iconPath: "/images/tech-icons/Playwrite.png",
    label: "Playwright",
  },
  [EnumTechnology.JASMINE]: {
    iconPath: "/images/tech-icons/Jasmine.png",
    label: "Jasmine",
  },
  [EnumTechnology.MOCHA]: {
    iconPath: "/images/tech-icons/Mocha.png",
    label: "Mocha",
  },
  [EnumTechnology.JUNIT]: {
    iconPath: "/images/tech-icons/JUnit.png",
    label: "JUnit",
  },

  // Build Tools
  [EnumTechnology.WEBPACK]: {
    iconPath: "/images/tech-icons/Webpack.png",
    label: "Webpack",
  },
  [EnumTechnology.VITE]: {
    iconPath: "/images/tech-icons/Vite.png",
    label: "Vite",
  },
  [EnumTechnology.ROLLUP]: {
    iconPath: "/images/tech-icons/Rollup.js.png",
    label: "Rollup",
  },
  [EnumTechnology.PARCEL]: {
    iconPath: "/images/tech-icons/Webpack.png",
    label: "Parcel",
  }, // Using Webpack as fallback
  [EnumTechnology.GULP]: {
    iconPath: "/images/tech-icons/Gulp.js.png",
    label: "Gulp",
  },
  [EnumTechnology.GRUNT]: {
    iconPath: "/images/tech-icons/Grunt.js.png",
    label: "Grunt",
  },

  // Mobile Development
  [EnumTechnology.REACT_NATIVE]: {
    iconPath: "/images/tech-icons/React.png",
    label: "React Native",
  },
  [EnumTechnology.FLUTTER]: {
    iconPath: "/images/tech-icons/Flutter.png",
    label: "Flutter",
  },
  [EnumTechnology.IONIC]: {
    iconPath: "/images/tech-icons/Ionic.png",
    label: "Ionic",
  },
  [EnumTechnology.XAMARIN]: {
    iconPath: "/images/tech-icons/Xamarin.png",
    label: "Xamarin",
  },
  [EnumTechnology.CORDOVA]: {
    iconPath: "/images/tech-icons/Capacitor.png",
    label: "Apache Cordova",
  }, // Using Capacitor as similar

  // Operating Systems
  [EnumTechnology.LINUX]: {
    iconPath: "/images/tech-icons/Linux.png",
    label: "Linux",
  },
  [EnumTechnology.UBUNTU]: {
    iconPath: "/images/tech-icons/Ubuntu.png",
    label: "Ubuntu",
  },
  [EnumTechnology.DEBIAN]: {
    iconPath: "/images/tech-icons/Debian.png",
    label: "Debian",
  },
  [EnumTechnology.CENTOS]: {
    iconPath: "/images/tech-icons/CentOS.png",
    label: "CentOS",
  },
  [EnumTechnology.FEDORA]: {
    iconPath: "/images/tech-icons/Fedora.png",
    label: "Fedora",
  },
  [EnumTechnology.ARCH_LINUX]: {
    iconPath: "/images/tech-icons/Arch-Linux.png",
    label: "Arch Linux",
  },
  [EnumTechnology.MACOS]: {
    iconPath: "/images/tech-icons/Apple.png",
    label: "macOS",
  },
  [EnumTechnology.WINDOWS]: {
    iconPath: "/images/tech-icons/Windows-11.png",
    label: "Windows",
  },

  // Other Technologies
  [EnumTechnology.GRAPHQL]: {
    iconPath: "/images/tech-icons/GraphQL.png",
    label: "GraphQL",
  },
  [EnumTechnology.REST_API]: {
    iconPath: "/images/tech-icons/Swagger.png",
    label: "REST API",
  }, // Using Swagger as API related
  [EnumTechnology.WEBSOCKET]: {
    iconPath: "/images/tech-icons/Socket.io.png",
    label: "WebSocket",
  },
  [EnumTechnology.ELECTRON]: {
    iconPath: "/images/tech-icons/Electron.png",
    label: "Electron",
  },
  [EnumTechnology.TAURI]: {
    iconPath: "/images/tech-icons/Tauri.png",
    label: "Tauri",
  },
  [EnumTechnology.WEBASSEMBLY]: {
    iconPath: "/images/tech-icons/WebAssembly.png",
    label: "WebAssembly",
  },

  // Miscellaneous
  [EnumTechnology.HTML5]: {
    iconPath: "/images/tech-icons/HTML5.png",
    label: "HTML5",
  },
  [EnumTechnology.MARKDOWN]: {
    iconPath: "/images/tech-icons/Markdown.png",
    label: "Markdown",
  },
  [EnumTechnology.JSON]: {
    iconPath: "/images/tech-icons/JSON.png",
    label: "JSON",
  },
  [EnumTechnology.XML]: {
    iconPath: "/images/tech-icons/XML.png",
    label: "XML",
  },
  [EnumTechnology.YAML]: {
    iconPath: "/images/tech-icons/YAML.png",
    label: "YAML",
  },
};

export class TechnologyMapper {
  /**
   * Get technology details by enum value
   */
  getDetails(technology: EnumTechnology): Technology | null {
    const data = TECHNOLOGY_DATA[technology];
    if (!data) {
      return null;
    }

    return {
      key: technology,
      iconPath: data.iconPath,
      label: data.label,
    };
  }

  /**
   * Get all available technologies
   */
  getAllTechnologies(): Technology[] {
    return Object.values(EnumTechnology)
      .map((tech) => this.getDetails(tech))
      .filter(Boolean) as Technology[];
  }

  /**
   * Get technologies by category
   */
  getTechnologiesByCategory(category: TechnologyCategory): Technology[] {
    const categoryMap: Record<TechnologyCategory, EnumTechnology[]> = {
      languages: [
        EnumTechnology.JAVASCRIPT,
        EnumTechnology.TYPESCRIPT,
        EnumTechnology.PYTHON,
        EnumTechnology.JAVA,
        EnumTechnology.CSHARP,
        EnumTechnology.CPP,
        EnumTechnology.C,
        EnumTechnology.GO,
        EnumTechnology.RUST,
        EnumTechnology.PHP,
        EnumTechnology.RUBY,
        EnumTechnology.SWIFT,
        EnumTechnology.KOTLIN,
        EnumTechnology.DART,
        EnumTechnology.SCALA,
        EnumTechnology.CLOJURE,
        EnumTechnology.HASKELL,
        EnumTechnology.LUA,
        EnumTechnology.R,
        EnumTechnology.MATLAB,
        EnumTechnology.PERL,
        EnumTechnology.OBJECTIVE_C,
        EnumTechnology.FSHARP,
        EnumTechnology.ELIXIR,
        EnumTechnology.ERLANG,
        EnumTechnology.JULIA,
        EnumTechnology.NIM,
        EnumTechnology.CRYSTAL,
        EnumTechnology.ZIG,
        EnumTechnology.SOLIDITY,
      ],
      frontend: [
        EnumTechnology.REACT,
        EnumTechnology.VUE,
        EnumTechnology.ANGULAR,
        EnumTechnology.SVELTE,
        EnumTechnology.EMBER,
        EnumTechnology.BACKBONE,
        EnumTechnology.ALPINEJS,
        EnumTechnology.SOLID,
        EnumTechnology.JQUERY,
        EnumTechnology.NEXT_JS,
        EnumTechnology.NUXT,
        EnumTechnology.GATSBY,
        EnumTechnology.ASTRO,
        EnumTechnology.REMIX,
        EnumTechnology.SVELTEKIT,
      ],
      styling: [
        EnumTechnology.CSS3,
        EnumTechnology.SASS,
        EnumTechnology.LESS,
        EnumTechnology.STYLUS,
        EnumTechnology.TAILWIND,
        EnumTechnology.BOOTSTRAP,
        EnumTechnology.BULMA,
        EnumTechnology.MATERIALIZE,
        EnumTechnology.MATERIAL_UI,
        EnumTechnology.ANT_DESIGN,
        EnumTechnology.CHAKRA_UI,
      ],
      backend: [
        EnumTechnology.NODE_JS,
        EnumTechnology.EXPRESS,
        EnumTechnology.FASTIFY,
        EnumTechnology.NEST_JS,
        EnumTechnology.DJANGO,
        EnumTechnology.FLASK,
        EnumTechnology.FASTAPI,
        EnumTechnology.SPRING,
        EnumTechnology.LARAVEL,
        EnumTechnology.SYMFONY,
        EnumTechnology.RAILS,
        EnumTechnology.PHOENIX,
        EnumTechnology.ADONIS,
      ],
      database: [
        EnumTechnology.MONGODB,
        EnumTechnology.POSTGRESQL,
        EnumTechnology.MYSQL,
        EnumTechnology.SQLITE,
        EnumTechnology.REDIS,
        EnumTechnology.ELASTICSEARCH,
        EnumTechnology.CASSANDRA,
        EnumTechnology.COUCHDB,
        EnumTechnology.FIREBASE,
        EnumTechnology.SUPABASE,
        EnumTechnology.PLANETSCALE,
      ],
      cloud: [
        EnumTechnology.AWS,
        EnumTechnology.AZURE,
        EnumTechnology.GCP,
        EnumTechnology.DOCKER,
        EnumTechnology.KUBERNETES,
        EnumTechnology.TERRAFORM,
        EnumTechnology.ANSIBLE,
        EnumTechnology.JENKINS,
        EnumTechnology.GITHUB_ACTIONS,
        EnumTechnology.GITLAB,
        EnumTechnology.CIRCLECI,
        EnumTechnology.TRAVIS_CI,
      ],
      tools: [
        EnumTechnology.GIT,
        EnumTechnology.GITHUB,
        EnumTechnology.VSCODE,
        EnumTechnology.WEBSTORM,
        EnumTechnology.INTELLIJ,
        EnumTechnology.ANDROID_STUDIO,
        EnumTechnology.XCODE,
        EnumTechnology.VIM,
        EnumTechnology.EMACS,
        EnumTechnology.WEBPACK,
        EnumTechnology.VITE,
        EnumTechnology.ROLLUP,
        EnumTechnology.PARCEL,
        EnumTechnology.GULP,
        EnumTechnology.GRUNT,
      ],
      testing: [
        EnumTechnology.JEST,
        EnumTechnology.CYPRESS,
        EnumTechnology.SELENIUM,
        EnumTechnology.PLAYWRIGHT,
        EnumTechnology.JASMINE,
        EnumTechnology.MOCHA,
        EnumTechnology.JUNIT,
      ],
      mobile: [
        EnumTechnology.REACT_NATIVE,
        EnumTechnology.FLUTTER,
        EnumTechnology.IONIC,
        EnumTechnology.XAMARIN,
        EnumTechnology.CORDOVA,
      ],
      os: [
        EnumTechnology.LINUX,
        EnumTechnology.UBUNTU,
        EnumTechnology.DEBIAN,
        EnumTechnology.CENTOS,
        EnumTechnology.FEDORA,
        EnumTechnology.ARCH_LINUX,
        EnumTechnology.MACOS,
        EnumTechnology.WINDOWS,
      ],
    };

    return (
      (categoryMap[category]
        ?.map((tech) => this.getDetails(tech))
        .filter(Boolean) as Technology[]) || []
    );
  }

  /**
   * Search technologies by name or label
   */
  searchTechnologies(query: string): Technology[] {
    const lowerQuery = query.toLowerCase();
    return this.getAllTechnologies().filter(
      (tech) =>
        tech.label.toLowerCase().includes(lowerQuery) ||
        tech.key.toLowerCase().includes(lowerQuery),
    );
  }
}

export type TechnologyCategory =
  | "languages"
  | "frontend"
  | "styling"
  | "backend"
  | "database"
  | "cloud"
  | "tools"
  | "testing"
  | "mobile"
  | "os";

export function isValidTechnology(value: string): value is EnumTechnology {
  return Object.values(EnumTechnology).includes(value as EnumTechnology);
}
