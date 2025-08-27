export enum EnumTag {
  // Programming Languages
  JAVASCRIPT = 'javascript',
  TYPESCRIPT = 'typescript',
  PYTHON = 'python',
  JAVA = 'java',
  CSHARP = 'csharp',
  CPP = 'cpp',
  C = 'c',
  GO = 'go',
  RUST = 'rust',
  PHP = 'php',
  RUBY = 'ruby',
  SWIFT = 'swift',
  ANDROID = 'android',
  KOTLIN = 'kotlin',
  DART = 'dart',
  SCALA = 'scala',
  CLOJURE = 'clojure',
  HASKELL = 'haskell',
  LUA = 'lua',
  R = 'r',
  MATLAB = 'matlab',
  PERL = 'perl',
  OBJECTIVE_C = 'objective-c',
  FSHARP = 'fsharp',
  ELIXIR = 'elixir',
  ERLANG = 'erlang',
  JULIA = 'julia',
  NIM = 'nim',
  CRYSTAL = 'crystal',
  ZIG = 'zig',
  SOLIDITY = 'solidity',
  FORTRAN = 'fortran',
  COFFEESCRIPT = 'coffeescript',
  CLOJURESCRIPT = 'clojurescript',
  ELM = 'elm',
  EMBEDDED_C = 'embedded-c',
  OCAML = 'ocaml',
  PURESCRIPT = 'purescript',
  BALLERINA = 'ballerina',
  HAXE = 'haxe',
  LABVIEW = 'labview',
  PROCESSING = 'processing',
  VYPER = 'vyper',
  VALA = 'vala',
  JULE = 'jule',
  AWK = 'awk',
  BASH = 'bash',
  POWERSHELL = 'powershell',
  AARCH64 = 'aarch64',
  APL = 'apl',

  // Frontend Frameworks & Libraries
  REACT = 'react',
  VUE = 'vue',
  ANGULAR = 'angular',
  SVELTE = 'svelte',
  EMBER = 'ember',
  BACKBONE = 'backbone',
  ALPINEJS = 'alpinejs',
  SOLID = 'solid',
  JQUERY = 'jquery',
  ANGULARJS = 'angularjs',
  KNOCKOUT = 'knockout',
  MOBX = 'mobx',
  REDUX = 'redux',
  THREE_JS = 'threejs',
  P5_JS = 'p5js',
  HANDLEBARS = 'handlebars',
  DISCORD_JS = 'discordjs',
  CORE_JS = 'corejs',
  QWIK = 'qwik',

  // Meta Frameworks
  NEXT_JS = 'nextjs',
  NUXT = 'nuxt',
  GATSBY = 'gatsby',
  ASTRO = 'astro',
  REMIX = 'remix',
  SVELTEKIT = 'sveltekit',
  ELEVENTY = 'eleventy',
  JEKYLL = 'jekyll',

  // CSS & Styling
  CSS3 = 'css3',
  SASS = 'sass',
  LESS = 'less',
  STYLUS = 'stylus',
  TAILWIND = 'tailwind',
  BOOTSTRAP = 'bootstrap',
  BULMA = 'bulma',
  MATERIALIZE = 'materialize',
  MATERIAL_UI = 'material-ui',
  ANT_DESIGN = 'ant-design',
  CHAKRA_UI = 'chakra-ui',
  FOUNDATION = 'foundation',
  POSTCSS = 'postcss',
  VEUTIFY = 'veutify',
  AMP = 'amp',

  // Backend Frameworks
  NODE_JS = 'nodejs',
  EXPRESS = 'express',
  FASTIFY = 'fastify',
  NEST_JS = 'nestjs',
  DJANGO = 'django',
  FLASK = 'flask',
  FASTAPI = 'fastapi',
  SPRING = 'spring',
  LARAVEL = 'laravel',
  SYMFONY = 'symfony',
  RAILS = 'rails',
  PHOENIX = 'phoenix',
  ADONIS = 'adonis',
  DOTNET_CORE = 'dotnet-core',
  DOTNET = 'dotnet',
  DJANGO_REST = 'django-rest',
  CAKEPHP = 'cakephp',
  CODEIGNITER = 'codeigniter',
  PHALCON = 'phalcon',
  YII_FRAMEWORK = 'yii-framework',
  ZEND_FRAMEWORK = 'zend-framework',
  LUMEN = 'lumen',
  LIVEWIRE = 'livewire',
  FEATHERS = 'feathers',
  MOLECULER = 'moleculer',
  KRAKENJS = 'krakenjs',
  KTOR = 'ktor',
  QUARKUS = 'quarkus',
  DROPWIZARD = 'dropwizard',
  GRAILS = 'grails',
  HIBERNATE = 'hibernate',
  NHIBERANTE = 'nhibernate',
  ECLIPSE_VERT_X = 'eclipse-vert-x',

  // Databases
  MONGODB = 'mongodb',
  POSTGRESQL = 'postgresql',
  MYSQL = 'mysql',
  SQLITE = 'sqlite',
  REDIS = 'redis',
  ELASTICSEARCH = 'elasticsearch',
  CASSANDRA = 'cassandra',
  COUCHDB = 'couchdb',
  FIREBASE = 'firebase',
  SUPABASE = 'supabase',
  PLANETSCALE = 'planetscale',
  RABBITMQ = 'rabbitmq',
  INFLUXDB = 'influxdb',
  MICROSOFT_SQL_SERVER = 'microsoft-sql-server',
  ORACLE = 'oracle',
  AZURE_SQL = 'azure-sql',
  COSMOS_DB = 'cosmos-db',
  NEW4J = 'new4j',
  ROCKSDB = 'rocksdb',
  FAUNA = 'fauna',
  APPWRITE = 'appwrite',
  SQLALCHEMY = 'sqlalchemy',
  SEQUELIZE = 'sequelize',
  MONGOOSE_JS = 'mongoose-js',
  KNEX_JS = 'knex-js',
  DOCTRINE = 'doctrine',
  LIQUIBASE = 'liquibase',

  // Cloud & DevOps
  AWS = 'aws',
  AZURE = 'azure',
  GCP = 'gcp',
  DOCKER = 'docker',
  KUBERNETES = 'kubernetes',
  TERRAFORM = 'terraform',
  ANSIBLE = 'ansible',
  JENKINS = 'jenkins',
  GITHUB_ACTIONS = 'github-actions',
  GITLAB = 'gitlab',
  CIRCLECI = 'circleci',
  TRAVIS_CI = 'travis-ci',
  AZURE_DEVOPS = 'azure-devops',
  HELM = 'helm',
  NGINX = 'nginx',
  HEROKU = 'heroku',
  VERCEL = 'vercel',
  DIGITALOCEAN = 'digitalocean',
  CLOUDFLARE = 'cloudflare',
  CLOUDFLARE_WORKERS = 'cloudflare-workers',
  CONSUL = 'consul',
  RANCHER = 'rancher',
  K3S = 'k3s',
  K3OS = 'k3os',
  ARGO_CD = 'argo-cd',
  TRAEFIK_PROXY = 'traefik-proxy',
  TRAEFIK_MESH = 'traefik-mesh',
  ENVOY = 'envoy',
  PROMETHEUS = 'prometheus',
  JAEGER_TRACING = 'jaeger-tracing',
  ELASTIC_BEATS = 'elastic-beats',
  LOGSTASH = 'logstash',
  KIBANA = 'kibana',
  SPLUNK = 'splunk',
  PACKER = 'packer',
  HASHICORP_VAGRANT = 'hashicorp-vagrant',
  BAMBOO = 'bamboo',
  PODMAN = 'podman',
  PORTAINER = 'portainer',
  HARVESTER = 'harvester',
  OPENTELEMETRY = 'opentelemetry',

  // Development Tools
  GIT = 'git',
  GITHUB = 'github',
  VSCODE = 'vscode',
  WEBSTORM = 'webstorm',
  INTELLIJ = 'intellij',
  ANDROID_STUDIO = 'android-studio',
  XCODE = 'xcode',
  VIM = 'vim',
  EMACS = 'emacs',
  POSTMAN = 'postman',
  CONFLUENCE = 'confluence',
  PYCHARM = 'pycharm',
  PHPSTORM = 'phpstorm',
  CLION = 'clion',
  DATAGRIP = 'datagrip',
  DATASPELL = 'dataspell',
  GOLAND = 'goland',
  RIDER = 'rider',
  RUBYMINE = 'rubymine',
  QODANA = 'qodana',
  JETBRAINS = 'jetbrains',
  ECLIPSE_IDE = 'eclipse-ide',
  ECLIPSE = 'eclipse',
  VISUAL_STUDIO = 'visual-studio',
  ATOM = 'atom',
  NANO = 'nano',
  OH_MY_ZSH = 'oh-my-zsh',
  PUTTY = 'putty',
  SSH = 'ssh',
  FILEZILLA = 'filezilla',
  SOURCETREE = 'sourcetree',
  TORTOISEGIT = 'tortoisegit',
  TOWER = 'tower',
  GITBOOK = 'gitbook',
  GITHUB_CODESPACES = 'github-codespaces',
  GITPOD = 'gitpod',
  INSOMNIA = 'insomnia',
  BROWSERSTACK = 'browserstack',
  FIGMA = 'figma',
  SKETCH = 'sketch',
  CANVA = 'canva',
  ADOBE_ILLUSTRATOR = 'adobe-illustrator',
  ADOBE_PHOTOSHOP = 'adobe-photoshop',
  ADOBE_XD = 'adobe-xd',
  ADOBE_PREMIERE_PRO = 'adobe-premiere-pro',
  BLENDER = 'blender',
  AUTODESK_MAYA = 'autodesk-maya',
  AUTODESK_SHOTGRID = 'autodesk-shotgrid',
  GIMP = 'gimp',
  INKSCAPE = 'inkscape',
  UNITY = 'unity',
  UNREAL_ENGINE = 'unreal-engine',
  GODOT_ENGINE = 'godot-engine',

  // Testing
  JEST = 'jest',
  CYPRESS = 'cypress',
  SELENIUM = 'selenium',
  PLAYWRIGHT = 'playwright',
  JASMINE = 'jasmine',
  MOCHA = 'mocha',
  JUNIT = 'junit',
  CUCUMBER = 'cucumber',
  PROTRACTOR_TEST = 'protractor-test',
  GATLING = 'gatling',
  KARATE_LABS = 'karate-labs',
  KARMA = 'karma',
  PYTEST = 'pytest',
  RSPEC = 'rspec',
  STORYBOOK = 'storybook',
  SONARQUBE = 'sonarqube',
  CODECOV = 'codecov',
  CODEAC = 'codeac',

  // Build Tools
  WEBPACK = 'webpack',
  VITE = 'vite',
  ROLLUP = 'rollup',
  PARCEL = 'parcel',
  GULP = 'gulp',
  GRUNT = 'grunt',
  BABEL = 'babel',
  CMAKE = 'cmake',
  VITE_JS = 'vite-js',
  BOWER = 'bower',
  NPM = 'npm',
  YARN = 'yarn',
  COMPOSER = 'composer',
  NUGET = 'nuget',
  GRADLE = 'gradle',
  APACHE_MAVEN = 'apache-maven',
  BUN = 'bun',
  DENO = 'deno',
  NODEMON = 'nodemon',
  NODE_WEBKIT = 'node-webkit',
  GCC = 'gcc',
  LLVM = 'llvm',
  V8 = 'v8',

  // Mobile Development
  REACT_NATIVE = 'react-native',
  FLUTTER = 'flutter',
  IONIC = 'ionic',
  XAMARIN = 'xamarin',
  CORDOVA = 'cordova',
  APPCELERATOR = 'appcelerator',
  TITANIUM_SDK = 'titanium-sdk',

  // Operating Systems
  LINUX = 'linux',
  UBUNTU = 'ubuntu',
  DEBIAN = 'debian',
  CENTOS = 'centos',
  FEDORA = 'fedora',
  ARCH_LINUX = 'arch-linux',
  IOS = 'ios',
  MACOS = 'macos',
  WINDOWS = 'windows',
  GENTOO = 'gentoo',
  OPENSUSE = 'opensuse',
  NIXOS = 'nixos',
  DOS = 'dos',
  UNIX = 'unix',
  RED_HAT = 'red-hat',
  VSPHERE = 'vsphere',
  PFSENSE = 'pfsense',

  // Other Technologies
  GRAPHQL = 'graphql',
  REST_API = 'rest-api',
  WEBSOCKET = 'websocket',
  ELECTRON = 'electron',
  TAURI = 'tauri',
  WEBASSEMBLY = 'webassembly',
  D3_JS = 'd3-js',
  JUPYTER = 'jupyter',
  LATEX = 'latex',
  MATPLOTLIB = 'matplotlib',
  PYTORCH = 'pytorch',
  TENSORFLOW = 'tensorflow',
  GRAFANA = 'grafana',
  APACHE_AIRFLOW = 'apache-airflow',
  NUMPY = 'numpy',
  PANDAS = 'pandas',
  SCIKIT_LEARN = 'scikit-learn',
  KERAS = 'keras',
  STREAMLIT = 'streamlit',
  PYSCRIPT = 'pyscript',
  PYTHON_POETRY = 'python-poetry',
  ANACONDA = 'anaconda',
  MINITAB = 'minitab',
  STATA = 'stata',
  ALGOLIA = 'algolia',
  APACHE = 'apache',
  APACHE_GROOVY = 'apache-groovy',
  APACHE_HADOOP = 'apache-hadoop',
  APACHE_KAFKA = 'apache-kafka',
  APACHE_SPARK = 'apache-spark',
  APACHE_SUBVERSION = 'apache-subversion',
  APACHE_TOMCAT = 'apache-tomcat',
  ARDUINO = 'arduino',
  GAZEBO = 'gazebo',
  ROS = 'ros',
  RASPBERRY_PI = 'raspberry-pi',
  CAIRO_GRAPHICS = 'cairo-graphics',
  OPENAL = 'openal',
  OPENAPI = 'openapi',
  OPENCL = 'opencl',
  OPENCV = 'opencv',
  OPENGL = 'opengl',
  OPENSTACK = 'openstack',
  SDL = 'sdl',
  QT_FRAMEWORK = 'qt-framework',
  TEX = 'tex',
  UWSGI = 'uwsgi',
  HARDHAT = 'hardhat',
  METEOR_JS = 'meteor-js',
  JAMSTACK = 'jamstack',
  WEBFLOW = 'webflow',
  WEBLATE = 'weblate',
  CONTAO = 'contao',
  DRUPAL = 'drupal',
  GHOST = 'ghost',
  MODX = 'modx',
  MOODLE = 'moodle',
  SHOPWARE = 'shopware',
  TYPO3 = 'typo3',
  WORDPRESS = 'wordpress',
  WOOCOMMERCE = 'woocommerce',
  YUNO_HOST = 'yuno-host',
  VUE_STOREFRONT = 'vue-storefront',
  CLARITY = 'clarity',
  JEET = 'jeet',
  NETWORKX = 'networkx',
  PLOTY = 'ploty',

  // Miscellaneous
  HTML5 = 'html5',
  MARKDOWN = 'markdown',
  JSON = 'json',
  XML = 'xml',
  YAML = 'yaml',
  DEVICON = 'devicon',
  DOCS = 'docs',
  HOMEBREW = 'homebrew',
  APPLE_SAFARI = 'apple-safari',
  CHROME = 'chrome',
  FIREFOX = 'firefox',
  IE = 'ie',
  OPERA = 'opera',
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
  LINKEDIN = 'linkedin',
  TWITTER = 'twitter',
  BEHANCE = 'behance',
  CODEPEN = 'codepen',
  BITBUCKET = 'bitbucket',
  STACK_OVERFLOW = 'stack-overflow',
  KAGGLE = 'kaggle',
  SLACK = 'slack',
  TRELLO = 'trello',
  JIRA = 'jira',
  JIRA_ALIGN = 'jira-align',
  OKTA = 'okta',
  SALESFORCE = 'salesforce',
  SANITY = 'sanity',
  SEMA_SOFTWARE = 'sema-software',
  THE_ALGORITHMS = 'the-algorithms',
  IFTTT = 'ifttt',
  ECLIPSE_CEYLON = 'eclipse-ceylon',
  PHOTON = 'photon',
  POLYGON = 'polygon',
  QUASAR = 'quasar',
  RENS_PY = 'rens-py',

  // Conceptual Topics
  API = 'api',
  BACKEND = 'backend',
  WEB_DEVELOPMENT = 'web-development',
  BEST_PRACTICES = 'best-practices',
  ARCHITECTURE = 'architecture',
  SCALABILITY = 'scalability',
  PERFORMANCE = 'performance',
  OPTIMIZATION = 'optimization',
  DESIGN_PATTERNS = 'design-patterns',
  TESTING = 'testing',
  DEVOPS = 'devops',
  SECURITY = 'security',
  DATABASE = 'database',
  SQL = 'sql',
  NOSQL = 'nosql',
  MOBILE = 'mobile',
  CLOUD = 'cloud',
}

const TAG_DATA: Record<EnumTag, { iconPath: string; label: string }> = {
  // Programming Languages
  [EnumTag.JAVASCRIPT]: {
    iconPath: '/images/tech-icons/JavaScript.png',
    label: 'JavaScript',
  },
  [EnumTag.TYPESCRIPT]: {
    iconPath: '/images/tech-icons/TypeScript.png',
    label: 'TypeScript',
  },
  [EnumTag.PYTHON]: {
    iconPath: '/images/tech-icons/Python.png',
    label: 'Python',
  },
  [EnumTag.JAVA]: {
    iconPath: '/images/tech-icons/Java.png',
    label: 'Java',
  },
  [EnumTag.CSHARP]: {
    iconPath: '/images/tech-icons/C#.png',
    label: 'C#',
  },
  [EnumTag.CPP]: {
    iconPath: '/images/tech-icons/C++.png',
    label: 'C++',
  },
  [EnumTag.C]: { iconPath: '/images/tech-icons/C.png', label: 'C' },
  [EnumTag.GO]: { iconPath: '/images/tech-icons/Go.png', label: 'Go' },
  [EnumTag.RUST]: {
    iconPath: '/images/tech-icons/Rust.png',
    label: 'Rust',
  },
  [EnumTag.PHP]: {
    iconPath: '/images/tech-icons/PHP.png',
    label: 'PHP',
  },
  [EnumTag.RUBY]: {
    iconPath: '/images/tech-icons/Ruby.png',
    label: 'Ruby',
  },
  [EnumTag.SWIFT]: {
    iconPath: '/images/tech-icons/Swift.png',
    label: 'Swift',
  },
  [EnumTag.ANDROID]: {
    iconPath: '/images/tech-icons/Android.png',
    label: 'Android',
  },
  [EnumTag.KOTLIN]: {
    iconPath: '/images/tech-icons/Kotlin.png',
    label: 'Kotlin',
  },
  [EnumTag.DART]: {
    iconPath: '/images/tech-icons/Dart.png',
    label: 'Dart',
  },
  [EnumTag.SCALA]: {
    iconPath: '/images/tech-icons/Scala.png',
    label: 'Scala',
  },
  [EnumTag.CLOJURE]: {
    iconPath: '/images/tech-icons/Clojure.png',
    label: 'Clojure',
  },
  [EnumTag.HASKELL]: {
    iconPath: '/images/tech-icons/Haskell.png',
    label: 'Haskell',
  },
  [EnumTag.LUA]: {
    iconPath: '/images/tech-icons/Lua.png',
    label: 'Lua',
  },
  [EnumTag.R]: { iconPath: '/images/tech-icons/R.png', label: 'R' },
  [EnumTag.MATLAB]: {
    iconPath: '/images/tech-icons/MATLAB.png',
    label: 'MATLAB',
  },
  [EnumTag.PERL]: {
    iconPath: '/images/tech-icons/Perl.png',
    label: 'Perl',
  },
  [EnumTag.OBJECTIVE_C]: {
    iconPath: '/images/tech-icons/Objective-C.png',
    label: 'Objective-C',
  },
  [EnumTag.FSHARP]: {
    iconPath: '/images/tech-icons/F#.png',
    label: 'F#',
  },
  [EnumTag.ELIXIR]: {
    iconPath: '/images/tech-icons/Elixir.png',
    label: 'Elixir',
  },
  [EnumTag.ERLANG]: {
    iconPath: '/images/tech-icons/Erlang.png',
    label: 'Erlang',
  },
  [EnumTag.JULIA]: {
    iconPath: '/images/tech-icons/Julia.png',
    label: 'Julia',
  },
  [EnumTag.NIM]: {
    iconPath: '/images/tech-icons/Nim.png',
    label: 'Nim',
  },
  [EnumTag.CRYSTAL]: {
    iconPath: '/images/tech-icons/Crystal.png',
    label: 'Crystal',
  },
  [EnumTag.ZIG]: {
    iconPath: '/images/tech-icons/Zig.png',
    label: 'Zig',
  },
  [EnumTag.SOLIDITY]: {
    iconPath: '/images/tech-icons/Solidity.png',
    label: 'Solidity',
  },
  [EnumTag.FORTRAN]: {
    iconPath: '/images/tech-icons/Fortran.png',
    label: 'Fortran',
  },
  [EnumTag.COFFEESCRIPT]: {
    iconPath: '/images/tech-icons/CoffeeScript.png',
    label: 'CoffeeScript',
  },
  [EnumTag.CLOJURESCRIPT]: {
    iconPath: '/images/tech-icons/ClojureScript.png',
    label: 'ClojureScript',
  },
  [EnumTag.ELM]: {
    iconPath: '/images/tech-icons/Elm.png',
    label: 'Elm',
  },
  [EnumTag.EMBEDDED_C]: {
    iconPath: '/images/tech-icons/Embedded-C.png',
    label: 'Embedded C',
  },
  [EnumTag.OCAML]: {
    iconPath: '/images/tech-icons/OCaml.png',
    label: 'OCaml',
  },
  [EnumTag.PURESCRIPT]: {
    iconPath: '/images/tech-icons/PureScript.png',
    label: 'PureScript',
  },
  [EnumTag.BALLERINA]: {
    iconPath: '/images/tech-icons/Ballerina.png',
    label: 'Ballerina',
  },
  [EnumTag.HAXE]: {
    iconPath: '/images/tech-icons/Haxe.png',
    label: 'Haxe',
  },
  [EnumTag.LABVIEW]: {
    iconPath: '/images/tech-icons/LabVIEW.png',
    label: 'LabVIEW',
  },
  [EnumTag.PROCESSING]: {
    iconPath: '/images/tech-icons/Processing.png',
    label: 'Processing',
  },
  [EnumTag.VYPER]: {
    iconPath: '/images/tech-icons/Vyper.png',
    label: 'Vyper',
  },
  [EnumTag.VALA]: {
    iconPath: '/images/tech-icons/Vala.png',
    label: 'Vala',
  },
  [EnumTag.JULE]: {
    iconPath: '/images/tech-icons/Jule.png',
    label: 'Jule',
  },
  [EnumTag.AWK]: {
    iconPath: '/images/tech-icons/Awk.png',
    label: 'Awk',
  },
  [EnumTag.BASH]: {
    iconPath: '/images/tech-icons/Bash.png',
    label: 'Bash',
  },
  [EnumTag.POWERSHELL]: {
    iconPath: '/images/tech-icons/Powershell.png',
    label: 'PowerShell',
  },
  [EnumTag.AARCH64]: {
    iconPath: '/images/tech-icons/AArch64.png',
    label: 'AArch64',
  },
  [EnumTag.APL]: {
    iconPath: '/images/tech-icons/APL.png',
    label: 'APL',
  },

  // Frontend Frameworks & Libraries
  [EnumTag.REACT]: {
    iconPath: '/images/tech-icons/React.png',
    label: 'React',
  },
  [EnumTag.VUE]: {
    iconPath: '/images/tech-icons/Vue.js.png',
    label: 'Vue.js',
  },
  [EnumTag.ANGULAR]: {
    iconPath: '/images/tech-icons/Angular.png',
    label: 'Angular',
  },
  [EnumTag.SVELTE]: {
    iconPath: '/images/tech-icons/Svelte.png',
    label: 'Svelte',
  },
  [EnumTag.EMBER]: {
    iconPath: '/images/tech-icons/Ember.js.png',
    label: 'Ember.js',
  },
  [EnumTag.BACKBONE]: {
    iconPath: '/images/tech-icons/Backbone.js.png',
    label: 'Backbone.js',
  },
  [EnumTag.ALPINEJS]: {
    iconPath: '/images/tech-icons/Alpine.js.png',
    label: 'Alpine.js',
  },
  [EnumTag.SOLID]: {
    iconPath: '/images/tech-icons/Solid.js.png',
    label: 'Solid.js',
  },
  [EnumTag.JQUERY]: {
    iconPath: '/images/tech-icons/jQuery.png',
    label: 'jQuery',
  },
  [EnumTag.ANGULARJS]: {
    iconPath: '/images/tech-icons/AngularJS.png',
    label: 'AngularJS',
  },
  [EnumTag.KNOCKOUT]: {
    iconPath: '/images/tech-icons/Knockout.png',
    label: 'Knockout.js',
  },
  [EnumTag.MOBX]: {
    iconPath: '/images/tech-icons/MobX.png',
    label: 'MobX',
  },
  [EnumTag.REDUX]: {
    iconPath: '/images/tech-icons/Redux.png',
    label: 'Redux',
  },
  [EnumTag.THREE_JS]: {
    iconPath: '/images/tech-icons/Three.js.png',
    label: 'Three.js',
  },
  [EnumTag.P5_JS]: {
    iconPath: '/images/tech-icons/p5-JS.png',
    label: 'p5.js',
  },
  [EnumTag.HANDLEBARS]: {
    iconPath: '/images/tech-icons/Handlebars.png',
    label: 'Handlebars',
  },
  [EnumTag.DISCORD_JS]: {
    iconPath: '/images/tech-icons/Discord.js.png',
    label: 'Discord.js',
  },
  [EnumTag.CORE_JS]: {
    iconPath: '/images/tech-icons/Core-js.png',
    label: 'Core.js',
  },
  [EnumTag.QWIK]: {
    iconPath: '/images/tech-icons/Qwik.png',
    label: 'Qwik',
  },

  // Meta Frameworks
  [EnumTag.NEXT_JS]: {
    iconPath: '/images/tech-icons/Next.js.png',
    label: 'Next.js',
  },
  [EnumTag.NUXT]: {
    iconPath: '/images/tech-icons/Nuxt-JS.png',
    label: 'Nuxt.js',
  },
  [EnumTag.GATSBY]: {
    iconPath: '/images/tech-icons/Gatsby.png',
    label: 'Gatsby',
  },
  [EnumTag.ASTRO]: {
    iconPath: '/images/tech-icons/Astro.png',
    label: 'Astro',
  },
  [EnumTag.REMIX]: {
    iconPath: '/images/tech-icons/Remix.png',
    label: 'Remix',
  },
  [EnumTag.SVELTEKIT]: {
    iconPath: '/images/tech-icons/Svelte.png',
    label: 'SvelteKit',
  },
  [EnumTag.ELEVENTY]: {
    iconPath: '/images/tech-icons/11ty.png',
    label: 'Eleventy',
  },
  [EnumTag.JEKYLL]: {
    iconPath: '/images/tech-icons/Jekyll.png',
    label: 'Jekyll',
  },

  // CSS & Styling
  [EnumTag.CSS3]: {
    iconPath: '/images/tech-icons/CSS3.png',
    label: 'CSS3',
  },
  [EnumTag.SASS]: {
    iconPath: '/images/tech-icons/Sass.png',
    label: 'Sass',
  },
  [EnumTag.LESS]: {
    iconPath: '/images/tech-icons/Less.js.png',
    label: 'Less',
  },
  [EnumTag.STYLUS]: {
    iconPath: '/images/tech-icons/Stylus.png',
    label: 'Stylus',
  },
  [EnumTag.TAILWIND]: {
    iconPath: '/images/tech-icons/Tailwind-CSS.png',
    label: 'Tailwind CSS',
  },
  [EnumTag.BOOTSTRAP]: {
    iconPath: '/images/tech-icons/Bootstrap.png',
    label: 'Bootstrap',
  },
  [EnumTag.BULMA]: {
    iconPath: '/images/tech-icons/Bulma.png',
    label: 'Bulma',
  },
  [EnumTag.MATERIALIZE]: {
    iconPath: '/images/tech-icons/Materialize.png',
    label: 'Materialize',
  },
  [EnumTag.MATERIAL_UI]: {
    iconPath: '/images/tech-icons/Material-UI.png',
    label: 'Material-UI',
  },
  [EnumTag.ANT_DESIGN]: {
    iconPath: '/images/tech-icons/Ant-Design.png',
    label: 'Ant Design',
  },
  [EnumTag.CHAKRA_UI]: {
    iconPath: '/images/tech-icons/Chakra.png',
    label: 'Chakra UI',
  },
  [EnumTag.FOUNDATION]: {
    iconPath: '/images/tech-icons/Foundation.png',
    label: 'Foundation',
  },
  [EnumTag.POSTCSS]: {
    iconPath: '/images/tech-icons/PostCSS.png',
    label: 'PostCSS',
  },
  [EnumTag.VEUTIFY]: {
    iconPath: '/images/tech-icons/Veutify.png',
    label: 'Veutify',
  },
  [EnumTag.AMP]: {
    iconPath: '/images/tech-icons/AMP.png',
    label: 'AMP',
  },

  // Backend Frameworks
  [EnumTag.NODE_JS]: {
    iconPath: '/images/tech-icons/Node.js.png',
    label: 'Node.js',
  },
  [EnumTag.EXPRESS]: {
    iconPath: '/images/tech-icons/Express.png',
    label: 'Express',
  },
  [EnumTag.FASTIFY]: {
    iconPath: '/images/tech-icons/Fastify.png',
    label: 'Fastify',
  },
  [EnumTag.NEST_JS]: {
    iconPath: '/images/tech-icons/Nest.js.png',
    label: 'Nest.js',
  },
  [EnumTag.DJANGO]: {
    iconPath: '/images/tech-icons/Django.png',
    label: 'Django',
  },
  [EnumTag.FLASK]: {
    iconPath: '/images/tech-icons/Flask.png',
    label: 'Flask',
  },
  [EnumTag.FASTAPI]: {
    iconPath: '/images/tech-icons/FastAPI.png',
    label: 'FastAPI',
  },
  [EnumTag.SPRING]: {
    iconPath: '/images/tech-icons/Spring.png',
    label: 'Spring',
  },
  [EnumTag.LARAVEL]: {
    iconPath: '/images/tech-icons/Laravel.png',
    label: 'Laravel',
  },
  [EnumTag.SYMFONY]: {
    iconPath: '/images/tech-icons/Symfony.png',
    label: 'Symfony',
  },
  [EnumTag.RAILS]: {
    iconPath: '/images/tech-icons/Ruby-on-Rails.png',
    label: 'Ruby on Rails',
  },
  [EnumTag.PHOENIX]: {
    iconPath: '/images/tech-icons/Phoenix.png',
    label: 'Phoenix',
  },
  [EnumTag.ADONIS]: {
    iconPath: '/images/tech-icons/AdonisJS.png',
    label: 'AdonisJS',
  },
  [EnumTag.DOTNET_CORE]: {
    iconPath: '/images/tech-icons/.NET-core.png',
    label: '.NET Core',
  },
  [EnumTag.DOTNET]: {
    iconPath: '/images/tech-icons/.NET.png',
    label: '.NET Framework',
  },
  [EnumTag.DJANGO_REST]: {
    iconPath: '/images/tech-icons/Django-REST.png',
    label: 'Django REST Framework',
  },
  [EnumTag.CAKEPHP]: {
    iconPath: '/images/tech-icons/CakePHP.png',
    label: 'CakePHP',
  },
  [EnumTag.CODEIGNITER]: {
    iconPath: '/images/tech-icons/CodeIgniter.png',
    label: 'CodeIgniter',
  },
  [EnumTag.PHALCON]: {
    iconPath: '/images/tech-icons/Phalcon.png',
    label: 'Phalcon',
  },
  [EnumTag.YII_FRAMEWORK]: {
    iconPath: '/images/tech-icons/Yii-Framework.png',
    label: 'Yii Framework',
  },
  [EnumTag.ZEND_FRAMEWORK]: {
    iconPath: '/images/tech-icons/Zend-Framework.png',
    label: 'Zend Framework',
  },
  [EnumTag.LUMEN]: {
    iconPath: '/images/tech-icons/Lumen.png',
    label: 'Lumen',
  },
  [EnumTag.LIVEWIRE]: {
    iconPath: '/images/tech-icons/Livewire.png',
    label: 'Livewire',
  },
  [EnumTag.FEATHERS]: {
    iconPath: '/images/tech-icons/Feathers.png',
    label: 'FeathersJS',
  },
  [EnumTag.MOLECULER]: {
    iconPath: '/images/tech-icons/Moleculer.png',
    label: 'Moleculer',
  },
  [EnumTag.KRAKENJS]: {
    iconPath: '/images/tech-icons/Krakenjs.png',
    label: 'KrakenJS',
  },
  [EnumTag.KTOR]: {
    iconPath: '/images/tech-icons/Ktor.png',
    label: 'Ktor',
  },
  [EnumTag.QUARKUS]: {
    iconPath: '/images/tech-icons/Quarkus.png',
    label: 'Quarkus',
  },
  [EnumTag.DROPWIZARD]: {
    iconPath: '/images/tech-icons/Dropwizard.png',
    label: 'Dropwizard',
  },
  [EnumTag.GRAILS]: {
    iconPath: '/images/tech-icons/Grails.png',
    label: 'Grails',
  },
  [EnumTag.HIBERNATE]: {
    iconPath: '/images/tech-icons/Hibernate.png',
    label: 'Hibernate',
  },
  [EnumTag.NHIBERANTE]: {
    iconPath: '/images/tech-icons/NHibernate.png',
    label: 'NHibernate',
  },
  [EnumTag.ECLIPSE_VERT_X]: {
    iconPath: '/images/tech-icons/Eclipse-Vert.x.png',
    label: 'Eclipse Vert.x',
  },

  // Databases
  [EnumTag.MONGODB]: {
    iconPath: '/images/tech-icons/MongoDB.png',
    label: 'MongoDB',
  },
  [EnumTag.POSTGRESQL]: {
    iconPath: '/images/tech-icons/PostgresSQL.png',
    label: 'PostgreSQL',
  },
  [EnumTag.MYSQL]: {
    iconPath: '/images/tech-icons/MySQL.png',
    label: 'MySQL',
  },
  [EnumTag.SQLITE]: {
    iconPath: '/images/tech-icons/SQLite.png',
    label: 'SQLite',
  },
  [EnumTag.REDIS]: {
    iconPath: '/images/tech-icons/Redis.png',
    label: 'Redis',
  },
  [EnumTag.ELASTICSEARCH]: {
    iconPath: '/images/tech-icons/Elastic-Search.png',
    label: 'Elasticsearch',
  },
  [EnumTag.CASSANDRA]: {
    iconPath: '/images/tech-icons/Apache-Cassandra.png',
    label: 'Apache Cassandra',
  },
  [EnumTag.COUCHDB]: {
    iconPath: '/images/tech-icons/CouchDB.png',
    label: 'CouchDB',
  },
  [EnumTag.FIREBASE]: {
    iconPath: '/images/tech-icons/Firebase.png',
    label: 'Firebase',
  },
  [EnumTag.SUPABASE]: {
    iconPath: '/images/tech-icons/Supabase.png',
    label: 'Supabase',
  },
  [EnumTag.PLANETSCALE]: {
    iconPath: '/images/tech-icons/PlanetScale.png',
    label: 'PlanetScale',
  },
  [EnumTag.RABBITMQ]: {
    iconPath: '/images/tech-icons/RabbitMQ.png',
    label: 'RabbitMQ',
  },
  [EnumTag.INFLUXDB]: {
    iconPath: '/images/tech-icons/InfluxDB.png',
    label: 'InfluxDB',
  },
  [EnumTag.MICROSOFT_SQL_SERVER]: {
    iconPath: '/images/tech-icons/Microsoft-SQL-Server.png',
    label: 'Microsoft SQL Server',
  },
  [EnumTag.ORACLE]: {
    iconPath: '/images/tech-icons/Oracle.png',
    label: 'Oracle Database',
  },
  [EnumTag.AZURE_SQL]: {
    iconPath: '/images/tech-icons/Azure-SQL.png',
    label: 'Azure SQL Database',
  },
  [EnumTag.COSMOS_DB]: {
    iconPath: '/images/tech-icons/Cosmos-BD.png',
    label: 'Azure Cosmos DB',
  },
  [EnumTag.NEW4J]: {
    iconPath: '/images/tech-icons/New4j.png',
    label: 'Neo4j',
  },
  [EnumTag.ROCKSDB]: {
    iconPath: '/images/tech-icons/RocksDB.png',
    label: 'RocksDB',
  },
  [EnumTag.FAUNA]: {
    iconPath: '/images/tech-icons/Fauna.png',
    label: 'Fauna',
  },
  [EnumTag.APPWRITE]: {
    iconPath: '/images/tech-icons/Appwrite.png',
    label: 'Appwrite',
  },
  [EnumTag.SQLALCHEMY]: {
    iconPath: '/images/tech-icons/SQLAlchemy.png',
    label: 'SQLAlchemy',
  },
  [EnumTag.SEQUELIZE]: {
    iconPath: '/images/tech-icons/Sequelize.png',
    label: 'Sequelize',
  },
  [EnumTag.MONGOOSE_JS]: {
    iconPath: '/images/tech-icons/Mongoose.js.png',
    label: 'Mongoose',
  },
  [EnumTag.KNEX_JS]: {
    iconPath: '/images/tech-icons/Knex.js.png',
    label: 'Knex.js',
  },
  [EnumTag.DOCTRINE]: {
    iconPath: '/images/tech-icons/Doctrine.png',
    label: 'Doctrine',
  },
  [EnumTag.LIQUIBASE]: {
    iconPath: '/images/tech-icons/Liquibase.png',
    label: 'Liquibase',
  },

  // Cloud & DevOps
  [EnumTag.AWS]: {
    iconPath: '/images/tech-icons/AWS.png',
    label: 'AWS',
  },
  [EnumTag.AZURE]: {
    iconPath: '/images/tech-icons/Azure.png',
    label: 'Microsoft Azure',
  },
  [EnumTag.GCP]: {
    iconPath: '/images/tech-icons/Google-Cloud.png',
    label: 'Google Cloud Platform',
  },
  [EnumTag.DOCKER]: {
    iconPath: '/images/tech-icons/Docker.png',
    label: 'Docker',
  },
  [EnumTag.KUBERNETES]: {
    iconPath: '/images/tech-icons/Kubernetes.png',
    label: 'Kubernetes',
  },
  [EnumTag.TERRAFORM]: {
    iconPath: '/images/tech-icons/HashiCorp-Terraform.png',
    label: 'Terraform',
  },
  [EnumTag.ANSIBLE]: {
    iconPath: '/images/tech-icons/Ansible.png',
    label: 'Ansible',
  },
  [EnumTag.JENKINS]: {
    iconPath: '/images/tech-icons/Jenkins.png',
    label: 'Jenkins',
  },
  [EnumTag.GITHUB_ACTIONS]: {
    iconPath: '/images/tech-icons/GitHub-Actions.png',
    label: 'GitHub Actions',
  },
  [EnumTag.GITLAB]: {
    iconPath: '/images/tech-icons/GitLab.png',
    label: 'GitLab',
  },
  [EnumTag.CIRCLECI]: {
    iconPath: '/images/tech-icons/CircleCI.png',
    label: 'CircleCI',
  },
  [EnumTag.TRAVIS_CI]: {
    iconPath: '/images/tech-icons/Travis-CI.png',
    label: 'Travis CI',
  },
  [EnumTag.AZURE_DEVOPS]: {
    iconPath: '/images/tech-icons/Azure-Devops.png',
    label: 'Azure DevOps',
  },
  [EnumTag.HELM]: {
    iconPath: '/images/tech-icons/Helm.png',
    label: 'Helm',
  },
  [EnumTag.NGINX]: {
    iconPath: '/images/tech-icons/NGINX.png',
    label: 'Nginx',
  },
  [EnumTag.HEROKU]: {
    iconPath: '/images/tech-icons/Heroku.png',
    label: 'Heroku',
  },
  [EnumTag.VERCEL]: {
    iconPath: '/images/tech-icons/Vercel.png',
    label: 'Vercel',
  },
  [EnumTag.DIGITALOCEAN]: {
    iconPath: '/images/tech-icons/DigitalOcean.png',
    label: 'DigitalOcean',
  },
  [EnumTag.CLOUDFLARE]: {
    iconPath: '/images/tech-icons/Cloudflare.png',
    label: 'Cloudflare',
  },
  [EnumTag.CLOUDFLARE_WORKERS]: {
    iconPath: '/images/tech-icons/Cloudflare-Workers.png',
    label: 'Cloudflare Workers',
  },
  [EnumTag.CONSUL]: {
    iconPath: '/images/tech-icons/Consul.png',
    label: 'Consul',
  },
  [EnumTag.RANCHER]: {
    iconPath: '/images/tech-icons/Rancher.png',
    label: 'Rancher',
  },
  [EnumTag.K3S]: {
    iconPath: '/images/tech-icons/K3s.png',
    label: 'K3s',
  },
  [EnumTag.K3OS]: {
    iconPath: '/images/tech-icons/K3OS.png',
    label: 'K3OS',
  },
  [EnumTag.ARGO_CD]: {
    iconPath: '/images/tech-icons/Argo-CD.png',
    label: 'Argo CD',
  },
  [EnumTag.TRAEFIK_PROXY]: {
    iconPath: '/images/tech-icons/Traefik-Proxy.png',
    label: 'Traefik Proxy',
  },
  [EnumTag.TRAEFIK_MESH]: {
    iconPath: '/images/tech-icons/Traefik-Mesh.png',
    label: 'Traefik Mesh',
  },
  [EnumTag.ENVOY]: {
    iconPath: '/images/tech-icons/Envoy.png',
    label: 'Envoy',
  },
  [EnumTag.PROMETHEUS]: {
    iconPath: '/images/tech-icons/Prometheus.png',
    label: 'Prometheus',
  },
  [EnumTag.JAEGER_TRACING]: {
    iconPath: '/images/tech-icons/Jaeger-Tracing.png',
    label: 'Jaeger',
  },
  [EnumTag.ELASTIC_BEATS]: {
    iconPath: '/images/tech-icons/Elastic-Beats.png',
    label: 'Elastic Beats',
  },
  [EnumTag.LOGSTASH]: {
    iconPath: '/images/tech-icons/Logstash.png',
    label: 'Logstash',
  },
  [EnumTag.KIBANA]: {
    iconPath: '/images/tech-icons/Kibana.png',
    label: 'Kibana',
  },
  [EnumTag.SPLUNK]: {
    iconPath: '/images/tech-icons/Splunk.png',
    label: 'Splunk',
  },
  [EnumTag.PACKER]: {
    iconPath: '/images/tech-icons/Packer.png',
    label: 'Packer',
  },
  [EnumTag.HASHICORP_VAGRANT]: {
    iconPath: '/images/tech-icons/HashiCorp-Vagrant.png',
    label: 'Vagrant',
  },
  [EnumTag.BAMBOO]: {
    iconPath: '/images/tech-icons/Bamboo.png',
    label: 'Bamboo',
  },
  [EnumTag.PODMAN]: {
    iconPath: '/images/tech-icons/Podman.png',
    label: 'Podman',
  },
  [EnumTag.PORTAINER]: {
    iconPath: '/images/tech-icons/Portainer.png',
    label: 'Portainer',
  },
  [EnumTag.HARVESTER]: {
    iconPath: '/images/tech-icons/Harvester.png',
    label: 'Harvester',
  },

  // Development Tools
  [EnumTag.GIT]: {
    iconPath: '/images/tech-icons/Git.png',
    label: 'Git',
  },
  [EnumTag.GITHUB]: {
    iconPath: '/images/tech-icons/GitHub.png',
    label: 'GitHub',
  },
  [EnumTag.VSCODE]: {
    iconPath: '/images/tech-icons/VS-Code.png',
    label: 'VS Code',
  },
  [EnumTag.WEBSTORM]: {
    iconPath: '/images/tech-icons/WebStorm.png',
    label: 'WebStorm',
  },
  [EnumTag.INTELLIJ]: {
    iconPath: '/images/tech-icons/IntelliJ-IDEA.png',
    label: 'IntelliJ IDEA',
  },
  [EnumTag.ANDROID_STUDIO]: {
    iconPath: '/images/tech-icons/Android-Studio.png',
    label: 'Android Studio',
  },
  [EnumTag.XCODE]: {
    iconPath: '/images/tech-icons/Xcode.png',
    label: 'Xcode',
  },
  [EnumTag.VIM]: {
    iconPath: '/images/tech-icons/Vim.png',
    label: 'Vim',
  },
  [EnumTag.EMACS]: {
    iconPath: '/images/tech-icons/GNU-Emacs.png',
    label: 'GNU Emacs',
  },
  [EnumTag.POSTMAN]: {
    iconPath: '/images/tech-icons/Postman.png',
    label: 'Postman',
  },
  [EnumTag.CONFLUENCE]: {
    iconPath: '/images/tech-icons/Confluence.png',
    label: 'Confluence',
  },
  [EnumTag.PYCHARM]: {
    iconPath: '/images/tech-icons/PyCharm.png',
    label: 'PyCharm',
  },
  [EnumTag.PHPSTORM]: {
    iconPath: '/images/tech-icons/PhpStorm.png',
    label: 'PhpStorm',
  },
  [EnumTag.CLION]: {
    iconPath: '/images/tech-icons/CLion.png',
    label: 'CLion',
  },
  [EnumTag.DATAGRIP]: {
    iconPath: '/images/tech-icons/DataGrip.png',
    label: 'DataGrip',
  },
  [EnumTag.DATASPELL]: {
    iconPath: '/images/tech-icons/DataSpell.png',
    label: 'DataSpell',
  },
  [EnumTag.GOLAND]: {
    iconPath: '/images/tech-icons/GoLand.png',
    label: 'GoLand',
  },
  [EnumTag.RIDER]: {
    iconPath: '/images/tech-icons/Rider.png',
    label: 'Rider',
  },
  [EnumTag.RUBYMINE]: {
    iconPath: '/images/tech-icons/RubyMine.png',
    label: 'RubyMine',
  },
  [EnumTag.QODANA]: {
    iconPath: '/images/tech-icons/Qodana.png',
    label: 'Qodana',
  },
  [EnumTag.JETBRAINS]: {
    iconPath: '/images/tech-icons/JetBrains.png',
    label: 'JetBrains',
  },
  [EnumTag.ECLIPSE_IDE]: {
    iconPath: '/images/tech-icons/Eclipse-IDE.png',
    label: 'Eclipse IDE',
  },
  [EnumTag.ECLIPSE]: {
    iconPath: '/images/tech-icons/Eclipse.png',
    label: 'Eclipse',
  },
  [EnumTag.VISUAL_STUDIO]: {
    iconPath: '/images/tech-icons/Visual-Studio.png',
    label: 'Visual Studio',
  },
  [EnumTag.ATOM]: {
    iconPath: '/images/tech-icons/Atom.png',
    label: 'Atom',
  },
  [EnumTag.NANO]: {
    iconPath: '/images/tech-icons/Nano.png',
    label: 'Nano',
  },
  [EnumTag.OH_MY_ZSH]: {
    iconPath: '/images/tech-icons/Oh-my-zsh.png',
    label: 'Oh My Zsh',
  },
  [EnumTag.PUTTY]: {
    iconPath: '/images/tech-icons/PuTTY.png',
    label: 'PuTTY',
  },
  [EnumTag.SSH]: {
    iconPath: '/images/tech-icons/SSH.png',
    label: 'SSH',
  },
  [EnumTag.FILEZILLA]: {
    iconPath: '/images/tech-icons/FileZilla.png',
    label: 'FileZilla',
  },
  [EnumTag.FIGMA]: {
    iconPath: '/images/tech-icons/Figma.png',
    label: 'Figma',
  },
  [EnumTag.SKETCH]: {
    iconPath: '/images/tech-icons/Sketch.png',
    label: 'Sketch',
  },
  [EnumTag.CANVA]: {
    iconPath: '/images/tech-icons/Canva.png',
    label: 'Canva',
  },
  [EnumTag.ADOBE_ILLUSTRATOR]: {
    iconPath: '/images/tech-icons/Adobe-Illustrator.png',
    label: 'Adobe Illustrator',
  },
  [EnumTag.ADOBE_PHOTOSHOP]: {
    iconPath: '/images/tech-icons/Adobe-Photoshop.png',
    label: 'Adobe Photoshop',
  },
  [EnumTag.ADOBE_XD]: {
    iconPath: '/images/tech-icons/Adobe-XD.png',
    label: 'Adobe XD',
  },
  [EnumTag.ADOBE_PREMIERE_PRO]: {
    iconPath: '/images/tech-icons/Adobe-Premiere-Pro.png',
    label: 'Adobe Premiere Pro',
  },
  [EnumTag.BLENDER]: {
    iconPath: '/images/tech-icons/Blender.png',
    label: 'Blender',
  },
  [EnumTag.AUTODESK_MAYA]: {
    iconPath: '/images/tech-icons/Autodesk-Maya.png',
    label: 'Autodesk Maya',
  },
  [EnumTag.AUTODESK_SHOTGRID]: {
    iconPath: '/images/tech-icons/Autodesk-ShotGrid.png',
    label: 'Autodesk ShotGrid',
  },
  [EnumTag.GIMP]: {
    iconPath: '/images/tech-icons/GIMP.png',
    label: 'GIMP',
  },
  [EnumTag.INKSCAPE]: {
    iconPath: '/images/tech-icons/Inkscape-.png',
    label: 'Inkscape',
  },
  [EnumTag.UNITY]: {
    iconPath: '/images/tech-icons/Unity.png',
    label: 'Unity',
  },
  [EnumTag.UNREAL_ENGINE]: {
    iconPath: '/images/tech-icons/Unreal-Engine.png',
    label: 'Unreal Engine',
  },
  [EnumTag.GODOT_ENGINE]: {
    iconPath: '/images/tech-icons/Godot-Engine.png',
    label: 'Godot Engine',
  },
  [EnumTag.SOURCETREE]: {
    iconPath: '/images/tech-icons/Sourcetree.png',
    label: 'Sourcetree',
  },
  [EnumTag.TORTOISEGIT]: {
    iconPath: '/images/tech-icons/TortoiseGit.png',
    label: 'TortoiseGit',
  },
  [EnumTag.TOWER]: {
    iconPath: '/images/tech-icons/Tower.png',
    label: 'Tower',
  },
  [EnumTag.GITBOOK]: {
    iconPath: '/images/tech-icons/GitBook.png',
    label: 'GitBook',
  },
  [EnumTag.GITHUB_CODESPACES]: {
    iconPath: '/images/tech-icons/GitHub-Codespaces.png',
    label: 'GitHub Codespaces',
  },
  [EnumTag.GITPOD]: {
    iconPath: '/images/tech-icons/Gitpod.png',
    label: 'Gitpod',
  },
  [EnumTag.INSOMNIA]: {
    iconPath: '/images/tech-icons/Insomnia.png',
    label: 'Insomnia',
  },
  [EnumTag.BROWSERSTACK]: {
    iconPath: '/images/tech-icons/BrowserStack.png',
    label: 'BrowserStack',
  },

  // Testing
  [EnumTag.JEST]: {
    iconPath: '/images/tech-icons/Jest.png',
    label: 'Jest',
  },
  [EnumTag.CYPRESS]: {
    iconPath: '/images/tech-icons/Cypress.png',
    label: 'Cypress',
  },
  [EnumTag.SELENIUM]: {
    iconPath: '/images/tech-icons/Selenium.png',
    label: 'Selenium',
  },
  [EnumTag.PLAYWRIGHT]: {
    iconPath: '/images/tech-icons/Playwrite.png',
    label: 'Playwright',
  },
  [EnumTag.JASMINE]: {
    iconPath: '/images/tech-icons/Jasmine.png',
    label: 'Jasmine',
  },
  [EnumTag.MOCHA]: {
    iconPath: '/images/tech-icons/Mocha.png',
    label: 'Mocha',
  },
  [EnumTag.JUNIT]: {
    iconPath: '/images/tech-icons/JUnit.png',
    label: 'JUnit',
  },
  [EnumTag.CUCUMBER]: {
    iconPath: '/images/tech-icons/Cucumber.png',
    label: 'Cucumber',
  },
  [EnumTag.PROTRACTOR_TEST]: {
    iconPath: '/images/tech-icons/Protractor-Test.png',
    label: 'Protractor',
  },
  [EnumTag.GATLING]: {
    iconPath: '/images/tech-icons/Gatling.png',
    label: 'Gatling',
  },
  [EnumTag.KARATE_LABS]: {
    iconPath: '/images/tech-icons/Karate-Labs.png',
    label: 'Karate Labs',
  },
  [EnumTag.KARMA]: {
    iconPath: '/images/tech-icons/Karma.png',
    label: 'Karma',
  },
  [EnumTag.PYTEST]: {
    iconPath: '/images/tech-icons/pytest.png',
    label: 'pytest',
  },
  [EnumTag.RSPEC]: {
    iconPath: '/images/tech-icons/RSpec.png',
    label: 'RSpec',
  },
  [EnumTag.STORYBOOK]: {
    iconPath: '/images/tech-icons/Storybook.png',
    label: 'Storybook',
  },
  [EnumTag.SONARQUBE]: {
    iconPath: '/images/tech-icons/SonarQube.png',
    label: 'SonarQube',
  },
  [EnumTag.CODECOV]: {
    iconPath: '/images/tech-icons/Codecov.png',
    label: 'Codecov',
  },
  [EnumTag.CODEAC]: {
    iconPath: '/images/tech-icons/Codeac.png',
    label: 'Codeac',
  },

  // Build Tools
  [EnumTag.WEBPACK]: {
    iconPath: '/images/tech-icons/Webpack.png',
    label: 'Webpack',
  },
  [EnumTag.VITE]: {
    iconPath: '/images/tech-icons/Vite.png',
    label: 'Vite',
  },
  [EnumTag.ROLLUP]: {
    iconPath: '/images/tech-icons/Rollup.js.png',
    label: 'Rollup',
  },
  [EnumTag.PARCEL]: {
    iconPath: '/images/tech-icons/Parcel.png',
    label: 'Parcel',
  },
  [EnumTag.GULP]: {
    iconPath: '/images/tech-icons/Gulp.js.png',
    label: 'Gulp',
  },
  [EnumTag.GRUNT]: {
    iconPath: '/images/tech-icons/Grunt.js.png',
    label: 'Grunt',
  },
  [EnumTag.BABEL]: {
    iconPath: '/images/tech-icons/Babel.png',
    label: 'Babel',
  },
  [EnumTag.CMAKE]: {
    iconPath: '/images/tech-icons/CMake.png',
    label: 'CMake',
  },
  [EnumTag.VITE_JS]: {
    iconPath: '/images/tech-icons/Vite.js.png',
    label: 'Vite.js',
  },
  [EnumTag.BOWER]: {
    iconPath: '/images/tech-icons/Bower.png',
    label: 'Bower',
  },
  [EnumTag.NPM]: {
    iconPath: '/images/tech-icons/NPM.png',
    label: 'npm',
  },
  [EnumTag.YARN]: {
    iconPath: '/images/tech-icons/Yarn.png',
    label: 'Yarn',
  },
  [EnumTag.COMPOSER]: {
    iconPath: '/images/tech-icons/Composer.png',
    label: 'Composer',
  },
  [EnumTag.NUGET]: {
    iconPath: '/images/tech-icons/NuGet.png',
    label: 'NuGet',
  },
  [EnumTag.GRADLE]: {
    iconPath: '/images/tech-icons/Gradle.png',
    label: 'Gradle',
  },
  [EnumTag.APACHE_MAVEN]: {
    iconPath: '/images/tech-icons/Apache-Maven.png',
    label: 'Apache Maven',
  },
  [EnumTag.BUN]: {
    iconPath: '/images/tech-icons/Bun.png',
    label: 'Bun',
  },
  [EnumTag.DENO]: {
    iconPath: '/images/tech-icons/Deno.png',
    label: 'Deno',
  },
  [EnumTag.NODEMON]: {
    iconPath: '/images/tech-icons/Nodemon.png',
    label: 'Nodemon',
  },
  [EnumTag.NODE_WEBKIT]: {
    iconPath: '/images/tech-icons/node-webkit.png',
    label: 'node-webkit',
  },
  [EnumTag.GCC]: {
    iconPath: '/images/tech-icons/GCC.png',
    label: 'GCC',
  },
  [EnumTag.LLVM]: {
    iconPath: '/images/tech-icons/LLVM.png',
    label: 'LLVM',
  },
  [EnumTag.V8]: {
    iconPath: '/images/tech-icons/V8.png',
    label: 'V8',
  },

  // Mobile Development
  [EnumTag.REACT_NATIVE]: {
    iconPath: '/images/tech-icons/React.png',
    label: 'React Native',
  },
  [EnumTag.FLUTTER]: {
    iconPath: '/images/tech-icons/Flutter.png',
    label: 'Flutter',
  },
  [EnumTag.IONIC]: {
    iconPath: '/images/tech-icons/Ionic.png',
    label: 'Ionic',
  },
  [EnumTag.XAMARIN]: {
    iconPath: '/images/tech-icons/Xamarin.png',
    label: 'Xamarin',
  },
  [EnumTag.CORDOVA]: {
    iconPath: '/images/tech-icons/Cordova.png',
    label: 'Apache Cordova',
  },
  [EnumTag.APPCELERATOR]: {
    iconPath: '/images/tech-icons/Appcelerator.png',
    label: 'Appcelerator',
  },
  [EnumTag.TITANIUM_SDK]: {
    iconPath: '/images/tech-icons/Titanium-SDK.png',
    label: 'Titanium SDK',
  },

  // Operating Systems
  [EnumTag.LINUX]: {
    iconPath: '/images/tech-icons/Linux.png',
    label: 'Linux',
  },
  [EnumTag.UBUNTU]: {
    iconPath: '/images/tech-icons/Ubuntu.png',
    label: 'Ubuntu',
  },
  [EnumTag.DEBIAN]: {
    iconPath: '/images/tech-icons/Debian.png',
    label: 'Debian',
  },
  [EnumTag.CENTOS]: {
    iconPath: '/images/tech-icons/CentOS.png',
    label: 'CentOS',
  },
  [EnumTag.FEDORA]: {
    iconPath: '/images/tech-icons/Fedora.png',
    label: 'Fedora',
  },
  [EnumTag.ARCH_LINUX]: {
    iconPath: '/images/tech-icons/Arch-Linux.png',
    label: 'Arch Linux',
  },
  [EnumTag.WINDOWS]: {
    iconPath: '/images/tech-icons/Windows.png',
    label: 'Windows',
  },
  [EnumTag.GENTOO]: {
    iconPath: '/images/tech-icons/Gentoo.png',
    label: 'Gentoo',
  },
  [EnumTag.OPENSUSE]: {
    iconPath: '/images/tech-icons/openSUSE.png',
    label: 'openSUSE',
  },
  [EnumTag.NIXOS]: {
    iconPath: '/images/tech-icons/NixOS.png',
    label: 'NixOS',
  },
  [EnumTag.DOS]: {
    iconPath: '/images/tech-icons/DOS.png',
    label: 'DOS',
  },
  [EnumTag.UNIX]: {
    iconPath: '/images/tech-icons/UNIX.png',
    label: 'UNIX',
  },
  [EnumTag.RED_HAT]: {
    iconPath: '/images/tech-icons/Red-Hat.png',
    label: 'Red Hat',
  },
  [EnumTag.VSPHERE]: {
    iconPath: '/images/tech-icons/vSphere.png',
    label: 'vSphere',
  },
  [EnumTag.PFSENSE]: {
    iconPath: '/images/tech-icons/pfSense.png',
    label: 'pfSense',
  },

  // Other Technologies
  [EnumTag.GRAPHQL]: {
    iconPath: '/images/tech-icons/GraphQL.png',
    label: 'GraphQL',
  },
  [EnumTag.REST_API]: {
    iconPath: '/images/tech-icons/JSON.png',
    label: 'REST API',
  },
  [EnumTag.WEBSOCKET]: {
    iconPath: '/images/tech-icons/WebSocket.png',
    label: 'WebSocket',
  },
  [EnumTag.ELECTRON]: {
    iconPath: '/images/tech-icons/Electron.png',
    label: 'Electron',
  },
  [EnumTag.TAURI]: {
    iconPath: '/images/tech-icons/Tauri.png',
    label: 'Tauri',
  },
  [EnumTag.WEBASSEMBLY]: {
    iconPath: '/images/tech-icons/WebAssembly.png',
    label: 'WebAssembly',
  },
  [EnumTag.D3_JS]: {
    iconPath: '/images/tech-icons/D3.js.png',
    label: 'D3.js',
  },
  [EnumTag.JUPYTER]: {
    iconPath: '/images/tech-icons/Jupyter.png',
    label: 'Jupyter',
  },
  [EnumTag.LATEX]: {
    iconPath: '/images/tech-icons/LaTeX.png',
    label: 'LaTeX',
  },
  [EnumTag.MATPLOTLIB]: {
    iconPath: '/images/tech-icons/Matplotlib.png',
    label: 'Matplotlib',
  },
  [EnumTag.PYTORCH]: {
    iconPath: '/images/tech-icons/PyTorch.png',
    label: 'PyTorch',
  },
  [EnumTag.TENSORFLOW]: {
    iconPath: '/images/tech-icons/TensorFlow.png',
    label: 'TensorFlow',
  },
  [EnumTag.GRAFANA]: {
    iconPath: '/images/tech-icons/Grafana.png',
    label: 'Grafana',
  },
  [EnumTag.APACHE_AIRFLOW]: {
    iconPath: '/images/tech-icons/Apache-Airflow.png',
    label: 'Apache Airflow',
  },
  [EnumTag.NUMPY]: {
    iconPath: '/images/tech-icons/NumPy.png',
    label: 'NumPy',
  },
  [EnumTag.PANDAS]: {
    iconPath: '/images/tech-icons/Pandas.png',
    label: 'Pandas',
  },
  [EnumTag.SCIKIT_LEARN]: {
    iconPath: '/images/tech-icons/scikit-learn.png',
    label: 'scikit-learn',
  },
  [EnumTag.KERAS]: {
    iconPath: '/images/tech-icons/Keras.png',
    label: 'Keras',
  },
  [EnumTag.STREAMLIT]: {
    iconPath: '/images/tech-icons/Streamlit.png',
    label: 'Streamlit',
  },
  [EnumTag.PYSCRIPT]: {
    iconPath: '/images/tech-icons/PyScript.png',
    label: 'PyScript',
  },
  [EnumTag.PYTHON_POETRY]: {
    iconPath: '/images/tech-icons/Python-Poetry.png',
    label: 'Python Poetry',
  },
  [EnumTag.ANACONDA]: {
    iconPath: '/images/tech-icons/Anaconda.png',
    label: 'Anaconda',
  },
  [EnumTag.MINITAB]: {
    iconPath: '/images/tech-icons/Minitab.png',
    label: 'Minitab',
  },
  [EnumTag.STATA]: {
    iconPath: '/images/tech-icons/Stata.png',
    label: 'Stata',
  },
  [EnumTag.ALGOLIA]: {
    iconPath: '/images/tech-icons/Algolia.png',
    label: 'Algolia',
  },
  [EnumTag.APACHE]: {
    iconPath: '/images/tech-icons/Apache.png',
    label: 'Apache',
  },
  [EnumTag.APACHE_GROOVY]: {
    iconPath: '/images/tech-icons/Apache-Groovy.png',
    label: 'Apache Groovy',
  },
  [EnumTag.APACHE_HADOOP]: {
    iconPath: '/images/tech-icons/Apache-Hadoop.png',
    label: 'Apache Hadoop',
  },
  [EnumTag.APACHE_KAFKA]: {
    iconPath: '/images/tech-icons/Apache-Kafka.png',
    label: 'Apache Kafka',
  },
  [EnumTag.APACHE_SPARK]: {
    iconPath: '/images/tech-icons/Apache-Spark.png',
    label: 'Apache Spark',
  },
  [EnumTag.APACHE_SUBVERSION]: {
    iconPath: '/images/tech-icons/Apache-Subversion.png',
    label: 'Apache Subversion',
  },
  [EnumTag.APACHE_TOMCAT]: {
    iconPath: '/images/tech-icons/Apache-Tomcat.png',
    label: 'Apache Tomcat',
  },
  [EnumTag.ARDUINO]: {
    iconPath: '/images/tech-icons/Arduino.png',
    label: 'Arduino',
  },
  [EnumTag.GAZEBO]: {
    iconPath: '/images/tech-icons/Gazebo.png',
    label: 'Gazebo',
  },
  [EnumTag.ROS]: {
    iconPath: '/images/tech-icons/ROS.png',
    label: 'ROS',
  },
  [EnumTag.RASPBERRY_PI]: {
    iconPath: '/images/tech-icons/Raspberry-Pi.png',
    label: 'Raspberry Pi',
  },
  [EnumTag.OPENTELEMETRY]: {
    iconPath: '/images/tech-icons/OpenTelemetry.png',
    label: 'OpenTelemetry',
  },
  [EnumTag.CAIRO_GRAPHICS]: {
    iconPath: '/images/tech-icons/Cairo-Graphics.png',
    label: 'Cairo Graphics',
  },
  [EnumTag.OPENAL]: {
    iconPath: '/images/tech-icons/OpenAL.png',
    label: 'OpenAL',
  },
  [EnumTag.OPENAPI]: {
    iconPath: '/images/tech-icons/OpenAPI.png',
    label: 'OpenAPI',
  },
  [EnumTag.OPENCL]: {
    iconPath: '/images/tech-icons/OpenCL.png',
    label: 'OpenCL',
  },
  [EnumTag.OPENCV]: {
    iconPath: '/images/tech-icons/OpenCV.png',
    label: 'OpenCV',
  },
  [EnumTag.OPENGL]: {
    iconPath: '/images/tech-icons/OpenGL.png',
    label: 'OpenGL',
  },
  [EnumTag.OPENSTACK]: {
    iconPath: '/images/tech-icons/OpenStack.png',
    label: 'OpenStack',
  },
  [EnumTag.SDL]: {
    iconPath: '/images/tech-icons/SDL.png',
    label: 'SDL',
  },
  [EnumTag.QT_FRAMEWORK]: {
    iconPath: '/images/tech-icons/Qt-Framework.png',
    label: 'Qt Framework',
  },
  [EnumTag.TEX]: {
    iconPath: '/images/tech-icons/TeX.png',
    label: 'TeX',
  },
  [EnumTag.UWSGI]: {
    iconPath: '/images/tech-icons/uWSGI.png',
    label: 'uWSGI',
  },
  [EnumTag.HARDHAT]: {
    iconPath: '/images/tech-icons/Hardhat.png',
    label: 'Hardhat',
  },
  [EnumTag.METEOR_JS]: {
    iconPath: '/images/tech-icons/Meteor.js.png',
    label: 'Meteor.js',
  },
  [EnumTag.JAMSTACK]: {
    iconPath: '/images/tech-icons/Jamstack.png',
    label: 'Jamstack',
  },
  [EnumTag.WEBFLOW]: {
    iconPath: '/images/tech-icons/Webflow.png',
    label: 'Webflow',
  },
  [EnumTag.WEBLATE]: {
    iconPath: '/images/tech-icons/Weblate.png',
    label: 'Weblate',
  },
  [EnumTag.CONTAO]: {
    iconPath: '/images/tech-icons/Contao.png',
    label: 'Contao',
  },
  [EnumTag.DRUPAL]: {
    iconPath: '/images/tech-icons/Drupal.png',
    label: 'Drupal',
  },
  [EnumTag.GHOST]: {
    iconPath: '/images/tech-icons/Ghost.png',
    label: 'Ghost',
  },
  [EnumTag.MODX]: {
    iconPath: '/images/tech-icons/MODX.png',
    label: 'MODX',
  },
  [EnumTag.MOODLE]: {
    iconPath: '/images/tech-icons/Moodle.png',
    label: 'Moodle',
  },
  [EnumTag.SHOPWARE]: {
    iconPath: '/images/tech-icons/Shopware.png',
    label: 'Shopware',
  },
  [EnumTag.TYPO3]: {
    iconPath: '/images/tech-icons/TYPO3.png',
    label: 'TYPO3',
  },
  [EnumTag.WORDPRESS]: {
    iconPath: '/images/tech-icons/WordPress.png',
    label: 'WordPress',
  },
  [EnumTag.WOOCOMMERCE]: {
    iconPath: '/images/tech-icons/WooCommerce.png',
    label: 'WooCommerce',
  },
  [EnumTag.YUNO_HOST]: {
    iconPath: '/images/tech-icons/Yuno-Host.png',
    label: 'Yuno Host',
  },
  [EnumTag.VUE_STOREFRONT]: {
    iconPath: '/images/tech-icons/Vue-Storefront.png',
    label: 'Vue Storefront',
  },
  [EnumTag.CLARITY]: {
    iconPath: '/images/tech-icons/Clarity.png',
    label: 'Clarity',
  },
  [EnumTag.JEET]: {
    iconPath: '/images/tech-icons/Jeet.png',
    label: 'Jeet',
  },
  [EnumTag.NETWORKX]: {
    iconPath: '/images/tech-icons/NetworkX.png',
    label: 'NetworkX',
  },

  // Miscellaneous
  [EnumTag.HTML5]: {
    iconPath: '/images/tech-icons/HTML5.png',
    label: 'HTML5',
  },
  [EnumTag.MARKDOWN]: {
    iconPath: '/images/tech-icons/Markdown.png',
    label: 'Markdown',
  },
  [EnumTag.JSON]: {
    iconPath: '/images/tech-icons/JSON.png',
    label: 'JSON',
  },
  [EnumTag.XML]: {
    iconPath: '/images/tech-icons/XML.png',
    label: 'XML',
  },
  [EnumTag.YAML]: {
    iconPath: '/images/tech-icons/YAML.png',
    label: 'YAML',
  },
  [EnumTag.PLOTY]: {
    iconPath: '/images/tech-icons/Ploty.png',
    label: 'Plotly',
  },
  [EnumTag.DEVICON]: {
    iconPath: '/images/tech-icons/Devicon.png',
    label: 'Devicon',
  },
  [EnumTag.DOCS]: {
    iconPath: '/images/tech-icons/Docs.png',
    label: 'Docs',
  },
  [EnumTag.HOMEBREW]: {
    iconPath: '/images/tech-icons/Homebrew.png',
    label: 'Homebrew',
  },
  [EnumTag.APPLE_SAFARI]: {
    iconPath: '/images/tech-icons/Apple-Safari.png',
    label: 'Safari',
  },
  [EnumTag.CHROME]: {
    iconPath: '/images/tech-icons/Chrome.png',
    label: 'Chrome',
  },
  [EnumTag.FIREFOX]: {
    iconPath: '/images/tech-icons/Firefox.png',
    label: 'Firefox',
  },
  [EnumTag.IE]: {
    iconPath: '/images/tech-icons/IE.png',
    label: 'Internet Explorer',
  },
  [EnumTag.OPERA]: {
    iconPath: '/images/tech-icons/Opera.png',
    label: 'Opera',
  },
  [EnumTag.FACEBOOK]: {
    iconPath: '/images/tech-icons/Facebook.png',
    label: 'Facebook',
  },
  [EnumTag.GOOGLE]: {
    iconPath: '/images/tech-icons/Google.png',
    label: 'Google',
  },
  [EnumTag.LINKEDIN]: {
    iconPath: '/images/tech-icons/LinkedIn.png',
    label: 'LinkedIn',
  },
  [EnumTag.TWITTER]: {
    iconPath: '/images/tech-icons/Twitter.png',
    label: 'Twitter',
  },
  [EnumTag.BEHANCE]: {
    iconPath: '/images/tech-icons/Behance.png',
    label: 'Behance',
  },
  [EnumTag.CODEPEN]: {
    iconPath: '/images/tech-icons/CodePen.png',
    label: 'CodePen',
  },
  [EnumTag.BITBUCKET]: {
    iconPath: '/images/tech-icons/BitBucket.png',
    label: 'Bitbucket',
  },
  [EnumTag.STACK_OVERFLOW]: {
    iconPath: '/images/tech-icons/Stack-Overflow.png',
    label: 'Stack Overflow',
  },
  [EnumTag.KAGGLE]: {
    iconPath: '/images/tech-icons/Kaggle.png',
    label: 'Kaggle',
  },
  [EnumTag.SLACK]: {
    iconPath: '/images/tech-icons/Slack.png',
    label: 'Slack',
  },
  [EnumTag.TRELLO]: {
    iconPath: '/images/tech-icons/Trello.png',
    label: 'Trello',
  },
  [EnumTag.JIRA]: {
    iconPath: '/images/tech-icons/Jira.png',
    label: 'Jira',
  },
  [EnumTag.JIRA_ALIGN]: {
    iconPath: '/images/tech-icons/Jira-Align.png',
    label: 'Jira Align',
  },
  [EnumTag.OKTA]: {
    iconPath: '/images/tech-icons/Okta.png',
    label: 'Okta',
  },
  [EnumTag.SALESFORCE]: {
    iconPath: '/images/tech-icons/Salesforce.png',
    label: 'Salesforce',
  },
  [EnumTag.SANITY]: {
    iconPath: '/images/tech-icons/Sanity.png',
    label: 'Sanity',
  },
  [EnumTag.SEMA_SOFTWARE]: {
    iconPath: '/images/tech-icons/Sema-Software.png',
    label: 'Sema Software',
  },
  [EnumTag.THE_ALGORITHMS]: {
    iconPath: '/images/tech-icons/The-Algorithms.png',
    label: 'The Algorithms',
  },
  [EnumTag.IFTTT]: {
    iconPath: '/images/tech-icons/IFTTT.png',
    label: 'IFTTT',
  },
  [EnumTag.ECLIPSE_CEYLON]: {
    iconPath: '/images/tech-icons/Eclipse-Ceylon.png',
    label: 'Eclipse Ceylon',
  },
  [EnumTag.PHOTON]: {
    iconPath: '/images/tech-icons/Photon.png',
    label: 'Photon',
  },
  [EnumTag.POLYGON]: {
    iconPath: '/images/tech-icons/Polygon.png',
    label: 'Polygon',
  },
  [EnumTag.QUASAR]: {
    iconPath: '/images/tech-icons/Quasar.png',
    label: 'Quasar',
  },
  [EnumTag.RENS_PY]: {
    iconPath: "/images/tech-icons/Ren'Py.png",
    label: "Ren'Py",
  },

  // Conceptual Tags
  [EnumTag.WEB_DEVELOPMENT]: {
    iconPath: '/images/tech-icons/HTML5.png',
    label: 'Web Development',
  },
  [EnumTag.BACKEND]: {
    iconPath: '/images/tech-icons/Node.js.png',
    label: 'Backend',
  },
  [EnumTag.API]: {
    iconPath: '/images/tech-icons/JSON.png',
    label: 'API',
  },
  [EnumTag.BEST_PRACTICES]: {
    iconPath: '/images/tech-icons/ESLint.png',
    label: 'Best Practices',
  },
  [EnumTag.ARCHITECTURE]: {
    iconPath: '/images/tech-icons/UML.png',
    label: 'Architecture',
  },
  [EnumTag.SCALABILITY]: {
    iconPath: '/images/tech-icons/Kubernetes.png',
    label: 'Scalability',
  },
  [EnumTag.PERFORMANCE]: {
    iconPath: '/images/tech-icons/Chrome.png',
    label: 'Performance',
  },
  [EnumTag.OPTIMIZATION]: {
    iconPath: '/images/tech-icons/Chrome.png',
    label: 'Optimization',
  },
  [EnumTag.DESIGN_PATTERNS]: {
    iconPath: '/images/tech-icons/UML.png',
    label: 'Design Patterns',
  },
  [EnumTag.TESTING]: {
    iconPath: '/images/tech-icons/Jest.png',
    label: 'Testing',
  },
  [EnumTag.DEVOPS]: {
    iconPath: '/images/tech-icons/Docker.png',
    label: 'DevOps',
  },
  [EnumTag.SECURITY]: {
    iconPath: '/images/tech-icons/Security.png',
    label: 'Security',
  },
  [EnumTag.DATABASE]: {
    iconPath: '/images/tech-icons/PostgresSQL.png',
    label: 'Database',
  },
  [EnumTag.SQL]: {
    iconPath: '/images/tech-icons/PostgresSQL.png',
    label: 'SQL',
  },
  [EnumTag.NOSQL]: {
    iconPath: '/images/tech-icons/MongoDB.png',
    label: 'NoSQL',
  },
  [EnumTag.MOBILE]: {
    iconPath: '/images/tech-icons/Mobile.png',
    label: 'Mobile',
  },
  [EnumTag.IOS]: {
    iconPath: '/images/tech-icons/iOS.png',
    label: 'iOS',
  },
  [EnumTag.MACOS]: {
    iconPath: '/images/tech-icons/macOS.png',
    label: 'macOS',
  },
  [EnumTag.CLOUD]: {
    iconPath: '/images/tech-icons/AWS.png',
    label: 'Cloud',
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
