// This file contains placeholder data that could be replaced later with data fetched from a postgreSQLQL database

const realWorldProjectsData = [
  {
    appCode: "dealsyW",
    title: "Dealsy Main Website",
    company: "Dealsy Limited",
    date: new Date(2024, 1, 1),
    thumbnailFormat: "jpg",
    tags: [
      "website",
      "aws",
      "aws-ecs",
      "aws-s3",
      "aws-code-pipeline",
      "amplify",
      "mongoDB",
      "react",
      "redux",
      "node.js",
      "RESTful API",
      "javascript",
    ],
    desc: "This website is constructed using the MERN stack, providing restaurants with the capability to create and manage their deals. My contributions were primarily focused on the frontend of the website, where I addressed existing bugs related to registration and deals rendering.",
    urls: [
      {
        type: "live",
        url: "https://www.dealsy.ca/",
      },
    ],
  },
  {
    appCode: "dealsyA",
    title: "Dealsy Admin Website",
    company: "Dealsy Limited",
    date: new Date(2024, 1, 1),
    thumbnailFormat: "jpg",
    tags: [
      "website",
      "aws",
      "aws-ecs",
      "aws-s3",
      "aws-code-pipeline",
      "amplify",
      "mongoDB",
      "angular",
      "node.js",
      "RESTful API",
      "typeScript",
    ],
    desc: "Constructed with the MEAN stack, this website facilitates admins in reviewing, approving, and managing restaurants' requests for onboarding. My involvement in this project extended to both frontend and backend development. Specifically, I implemented a real-time analytics feature that delivers actionable insights to primary stakeholders.",
    urls: [
      {
        type: "live",
        url: "https://admin.dealsy.ca/",
      },
    ],
  },
  {
    appCode: "dealsyM",
    title: "Dealsy Mobile App",
    company: "Dealsy Limited",
    date: new Date(2024, 1, 1),
    thumbnailFormat: "jpg",
    tags: [
      "mobile-app",
      "android",
      "iOS",
      "aws",
      "aws-ecs",
      "aws-s3",
      "aws-code-pipeline",
      "mongoDB",
      "react-native",
      "redux",
      "node.js",
      "javascript",
    ],
    desc: "Engaging in both front and back end development for this cross-platform mobile app, I optimized Redux state by restructuring data and selectively subscribing to state changes, resulting in a 60% reduction in re-renders. Additionally, I also implemented selective data caching mechanism within the Redux state for key features using only 40% of the allocated time, reducing API calls by 50% and improving data loading efficiency for shared data among screens.",
    urls: [
      {
        type: "android",
        url: "https://play.google.com/store/apps/details?id=com.dealsy&pli=1",
      },
      {
        type: "ios",
        url: "https://apps.apple.com/ca/app/dealsy/id6472035041",
      },
    ],
  },
  {
    appCode: "helios",
    title: "Helios DevOps System",
    company: "RBC",
    date: new Date(2023, 7, 1),
    thumbnailFormat: "",
    tags: [
      "devops",
      "pipeline",
      "micro-frontend",
      "react",
      "redux",
      "vue",
      "django",
      "spring-boot",
      "node.js",
      "RESTful API",
      "mongoDB",
      "elasticsearch",
      "javascript",
      "python",
      "java",
      "micro-service",
      "sonarQube",
      "jenkins",
      "docker",
      "openShift-container-platform",
      "rabbitMQ",
      "kafka",
      "kubernetes",
    ],
    desc: `In this project, I have:
    |•	Collaborated with a senior developer to deliver a highly demanded feature for a micro service in Helios, an internal DevOps system managing 12,000 apps with 30-40 daily onboardings, by leveraging API interactions to dynamically apply user-defined setting for Jenkins build agents, achieving a 20% reduction in support tickets.
    |•	Designed and developed an inclusive solution for Helios that enables customizing Service IDs for mainframe apps during onboarding and deployment requests, by integrating frontend, backend customization with different microservices and workers, effectively resolving critical issues tied to legacy hardcoded patterns.
    |•	Automated dataset creation process for mainframe apps with a Vue front-end, reducing manual configuration drift and increasing environment stability.
    |•	Optimized UCD Logs retrieval time for mainframe apps in the CI/CD pipeline by approximately 66%.`,
    urls: [
      {
        type: "intro",
        url: "https://community.ibm.com/community/user/ibmz-and-linuxone/blogs/sherri-hanna1/2023/12/27/rbc-standard-devops-pipeline",
      },
    ],
  },
  {
    appCode: "alW",
    title: "Alpha Labs Website",
    company: "Alpha Laboratories Inc.",
    date: new Date(2022, 7, 1),
    thumbnailFormat: "jpg",
    tags: [
      "website",
      "ASP.NET",
      "C#",
      "SQL",
      "RESTful API",
      "jQuery",
      "bootstrap",
      "javascript",
      "java",
      "selenium",
    ],
    desc: `In this project, I have:
    |•	Resolved 80% of reported front-end bugs while reducing amount of existing code by 3% through optimizing shared UI components.
    |•	Performed database modelling and developed requested back-end features with ASP.NET in collaboration with three senior engineers; resulted in bug-free deployment and a 30% reduction in development time.`,
    urls: [
      {
        type: "live",
        url: "https://alphalabs.ca/",
      },
    ],
  },
  {
    appCode: "rqW",
    title: "Rotorquest E-commerce Website",
    company: "RotorQuest Inc.",
    date: new Date(2021, 11, 1),
    thumbnailFormat: "jpg",
    tags: ["website", "bigCommerce", "javascript", "shopify", "liquid"],
    desc: "In 2021, I spearheaded a business transformation for RotorQuest Inc., launching a comprehensive e-commerce system implementing BigCommerce. The strategic optimization of content, speed, and UX/UI design elements resulted in a 40% improvement in website traffic, earning the CEO's satisfaction. Two years later, the CEO entrusted me with migrating the website to Shopify in alignment with evolving business strategies.",
    urls: [
      {
        type: "live",
        url: "https://rotorquest.com/",
      },
    ],
  },
  {
    appCode: "mozaikA",
    title: "Mozaik.Global iOS Mobile App",
    company: "MLD Solutions Inc.",
    date: new Date(2019, 4, 1),
    thumbnailFormat: "gif",
    tags: [
      "mobile-app",
      "iOS",
      "aws",
      "aws-s3",
      "graphQL",
      "postgreSQL",
      "apollo",
      "react-native",
      "node.js",
      "javascript",
    ],
    desc: "This is a React Native app that consumes custom digital assets and resources, allowing dynamic rendering of images, PDFs, videos. As part of this project, I've worked on implementing a GraphQL solution to refactor legacy APIs, aiming to improve their capacity to handle rapidly changing data.",
    urls: [], //Unfortunately, this project is no longer available for viewing.
  },
  {
    appCode: "pptW",
    title: "Planned Parenthood Toronto Website",
    company: "Planned Parenthood Toronto",
    date: new Date(2019, 8, 1),
    thumbnailFormat: "jpg",
    tags: ["website", "wordpress", "pHP"],
    desc: "As a contractor for Planned Parenthood Toronto, I collaborated on developing a demonstration version for their website in 2018. The successful client approval led to securing sponsorship, transforming our demonstration into a fully functional website in 2019.",
    urls: [
      {
        type: "live",
        url: "https://ppt.on.ca/",
      },
    ],
  },
];

const otherProjectsData = [
  {
    appCode: "blogW",
    title: "My Personal Blog",
    date: new Date(2021, 10, 11),
    tags: ["website", "next.js", "react", "node.js", "tailwind", "typeScript"],
    thumbnailFormat: "jpg",
    desc: "Picture it as a cozy corner of the internet where I stash my personal musings in Vietnamese. The blog offers both light and dark modes, facilitated by React state management, giving you the option to switch between them.",
    urls: [
      {
        type: "live",
        url: "https://quybut.netlify.app/",
      },
      {
        type: "code",
        url: "https://github.com/Eirian-Ta/my-blog",
      },
    ],
  },
  {
    appCode: "fragmentsS",
    title: "Fragments Microservice",
    date: new Date(2022, 7, 14),
    tags: ["micro-service", "aws", "docker", "node.js", "javascript", "jest"],
    thumbnailFormat: "jpg",
    desc: `In this project, I've:
    |•	Developed a scalable cloud-based microservice with a React web app UI, connecting to a Docker container running on AWS Elastic Beanstalk, and API server running on EC2, facilitating working with small fragments of text or images.
    |•	Implemented a data format conversion feature enabling seamless transitions between different formats (e.g., Markdown to HTML, JPEG to PNG), with a focus on minimizing storage costs by retaining only the original version.
    |•	Constructed CI/CD workflows, automating build, test, and deployment processes from GitHub to AWS for a streamlined and reliable development pipeline.`,
    urls: [
      {
        type: "intro",
        url: "https://www.youtube.com/watch?v=xEU9DYP0xe8",
      },
      {
        type: "uI-code",
        url: "https://github.com/Eirian-Ta/fragments-ui",
      },
      {
        type: "backend-code",
        url: "https://github.com/Eirian-Ta/fragments",
      },
    ],
  },
  {
    appCode: "pongG",
    title: "Pong Game",
    date: new Date(2018, 10, 5),
    tags: ["game", "javascript"],
    thumbnailFormat: "jpg",
    desc: "A simple ping pong game utilizing SVG rendering, coded in JavaScript, allowing two players to participate using the same keyboard.",
    urls: [
      {
        type: "demo-clip",
        url: "https://seneca-my.sharepoint.com/:v:/g/personal/tta6_myseneca_ca/EZ4WJfiTWzhLttjTE6PuxCcBQwdbs9hwxm50Y558iwG7Zg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=9P5sF0",
      },
      {
        type: "code",
        url: "https://github.com/Eirian-Ta/pong-game",
      },
    ],
  },
  {
    appCode: "pokemonM",
    title: "Pokemon Android App",
    tags: ["mobile-app", "android", "java"],
    date: new Date(2022, 7, 1),
    thumbnailFormat: "jpg",
    desc: "The Android app is designed for Pokémon management, strictly adhering to specific guidelines. It employs the Singleton pattern to handle Pokémon data consistently across the application. View bindings are exclusively used, eliminating the need for data bindings or findViewById(). The ListView integrates a custom adapter extending ArrayAdapter, enabling efficient updates to each row's content within the adapter's getView() function.",
    urls: [
      {
        type: "demo-clip",
        url: "https://youtu.be/XcZULABXS6Q",
      },
      {
        type: "code",
        url: "https://github.com/Eirian-Ta/pokemon",
      },
    ],
  },
  {
    appCode: "movieM",
    title: "Purchase Movie Ticket",
    date: new Date(2022, 6, 1),
    tags: ["mobile-app", "android", "java", "room", "retrofit"],
    thumbnailFormat: "jpg",
    desc: "The Android app facilitates browsing and purchasing movie tickets, employing Fragments for screen creation. Navigation and data exchange between screens are managed via the Navigation Component library and nav_graph. Data persistence is ensured through the Room database, while API interactions are handled using the Retrofit client with GSON parser. Images are downloaded and displayed using the Glide library, enhancing the user experience.",
    urls: [
      {
        type: "demo-clip",
        url: "https://youtu.be/MVipgu0HLCE",
      },
      {
        type: "code",
        url: "https://github.com/Eirian-Ta/Movies",
      },
    ],
  },
  {
    appCode: "weatherM",
    title: "Weather iOS App",
    date: new Date(2022, 5, 1),
    tags: ["mobile-app", "iOS", "swift", "core-data"],
    thumbnailFormat: "jpg",
    desc: "The Weather iOS app empowers users to monitor weather conditions in their favorite cities. It utilizes Core Data to store and retrieve saved cities, which are displayed on the initial view controller for easy access and monitoring.",
    urls: [
      {
        type: "demo-clip",
        url: "https://youtube.com/shorts/qWLTPlNmHdk",
      },
      {
        type: "code",
        url: "https://github.com/Eirian-Ta/Weather/",
      },
    ],
  },
  {
    appCode: "ticketM",
    title: "Airplane Tickets iOS App",
    date: new Date(2022, 4, 1),
    tags: ["mobile-app", "iOS", "objective-c"],
    thumbnailFormat: "jpg",
    desc: "The Airplane Tickets iOS app facilitates users in adding various types of tickets to their cart, alongside the option to append a note and apply vouchers to their purchase.",
    urls: [
      {
        type: "demo-clip",
        url: "https://youtu.be/QVOBeXYSYLI",
      },
      {
        type: "code",
        url: "https://github.com/Eirian-Ta/AirplaneTickets",
      },
    ],
  },
];

const tagsByGroup = [
  {
    groupName: "Project Type",
    tags: ["website", "mobile-app", "game", "android", "iOS"],
  },
  {
    groupName: "Languages",
    tags: [
      "javascript",
      "typeScript",
      "python",
      "java",
      "C#",
      "pHP",
      "swift",
      "objective-c",
      "liquid",
    ],
  },
  {
    groupName: "Frameworks & Libraries",
    tags: [
      "react-native",
      "react",
      "redux",
      "angular",
      "next.js",
      "vue",
      "ASP.NET",
      "spring-boot",
      "django",
      "apollo",
      "jQuery",
      "bootstrap",
      "tailwind",
    ],
  },
  {
    groupName: "E-Commerce Platform",
    tags: ["bigCommerce", "shopify", "wordpress"],
  },
  {
    groupName: "Cloud",
    tags: [, "aws", "aws-ecs", "aws-s3", "aws-code-pipeline", "amplify"],
  },
  {
    groupName: "Database",
    tags: [
      "SQL",
      "postgreSQL",
      "graphQL",
      "mongoDB",
      "elasticsearch",
      "room",
      "core-data",
    ],
  },
  { groupName: "Messaging Systems ", tags: ["rabbitMQ", "kafka"] },
  { groupName: "Testing", tags: ["jest", "selenium", "sonarQube"] },
  {
    groupName: "DevOps",
    tags: [
      "devops",
      "pipeline",
      "jenkins",
      "docker",
      "openShift-container-platform",
      "kubernetes",
    ],
  },
  {
    groupName: "Others",
    tags: [
      "node.js",
      "RESTful API",
      "micro-frontend",
      "micro-service",
      "retrofit",
    ],
  },
];

module.exports = {
  realWorldProjectsData,
  otherProjectsData,
  tagsByGroup,
};
