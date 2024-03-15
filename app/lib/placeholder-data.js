// This file contains placeholder data that could be replaced later with data fetched from a postgreSQLQL database

import {
  GitHubIconLight,
  GitHubIconBlackBoldSquare,
  LinkedInIconLight,
  LinkedInIconBlack,
  DeviantArtIconLight,
  MailIcon,
  MailIconBold,
  ResumeIcon,
} from "../ui/Icons";

const AWS_ASSETS_URL =
  "https://pinwheels-portfolio-eirian.s3.ca-central-1.amazonaws.com/";

export const aboutData = {
  avatarCartoonUrl: "",
  avatarUrl: "",
  aboutTitle: "Hey! I'm Eirian",
  techStackTitle: "Technical Skills",
  techStack: [
    {
      key: "languagesFramework",
      title: "Languages & Frameworks",
      skills:
        "HTML5, CSS/ SASS, Bootstrap, Express.js, JavaScript, TypeScript,  React, React Native, Angular, C++, PHP, Java, C#, ASP.NET, Python, Django",
    },
    {
      key: "database",
      title: "Database",
      skills: "MongoDB, SQL, GraphQL, Elasticsearch",
    },
    {
      key: "cloud",
      title: "Cloud",
      skills: "Microsoft Azure, Amazon Web Services",
    },
    {
      key: "testing",
      title: "Testing",
      skills: "Jest, Jasmine, Karma, Selenium, SonarQube",
    },
    {
      key: "devops",
      title: "DevOps",
      skills:
        "Jenkins, Git, Docker, OpenShift Container Platform, RabbitMQ, Kafka",
    },
    {
      key: "cert",
      title: "Certification",
      skills: `AZ-900 [Microsoft Azure Fundamentals] (Dec 2021)`,
    },
  ],
};

// ---------------

export const resumeData = {
  text: "Resume",
  url: AWS_ASSETS_URL + "Resume_Eirian+Ta_Software.pdf",
  icon: <ResumeIcon />,
};

const github = {
  name: "github",
  icon: <GitHubIconLight />,
  iconBold: <GitHubIconBlackBoldSquare />,
  url: "https://github.com/Eirian-Ta",
  text: "https://github.com/Eirian-Ta",
};

const linkedIn = {
  name: "linkedIn",
  icon: <LinkedInIconLight />,
  iconBold: <LinkedInIconBlack />,
  url: "https://www.linkedin.com/in/eirian-ta/",
  text: "https://www.linkedin.com/in/eirian-ta/",
};

const deviantArt = {
  name: "deviantArt",
  icon: <DeviantArtIconLight />,
  iconBold: "",
  url: "https://www.deviantart.com/white-chan",
  text: "https://www.deviantart.com/white-chan",
};

const gMail = {
  name: "gMail",
  icon: <MailIcon />,
  iconBold: <MailIconBold />,
  url: "mailto:eirian.ta.tech@gmail.com",
  text: "eirian.ta.tech@gmail.com",
};

export const allSocialContactLinks = [github, linkedIn, deviantArt, gMail];
export const contactLinks = [github, linkedIn, gMail];
export const socialLinks = [github, linkedIn, deviantArt];

export const contact = {
  title: "Drop me a line",
  content: `Hey! Shoot me a message, and I'll get back to you pronto.
  I'm fluent in English, Vietnamese, and I've got a
  sprinkle of Mandarin - just enough to impress your
  neighbour's parrot. Feel free to chat in any of those, or
  throw in some Esperanto if you're feeling adventurous (just
  kidding!). Any languages are welcomed, if things get lost in
  translation, my BFF Google will swoop in for the rescue. Excited
  to hear from you! ! 🚀`,
  location: "Toronto, ON Canada",
};

export const experienceData = [
  {
    employer: "Dealsy Limited",
    employerLogoUrl: "",
    title: "Full-Stack + Mobile Developer",
    time: "Dec 2023 – Feb 2024",
    year: 2024,
    content: [
      {
        key: "dealsySkill1",
        achieve:
          "Optimized Redux state for a cross-platform mobile app by restructuring data and selectively subscribing to state changes, resulting in a 60% reduction in re-renders.",
      },
      {
        key: "dealsySkill2",
        achieve:
          "Implemented selective data caching mechanism within the Redux state for key features using only 40% of the allocated time, reducing API calls by 50% and improving data loading efficiency for shared data among screens.",
      },
      {
        key: "dealsySkill3",
        achieve:
          "Developed a real-time analytics feature for admin website using the MEAN stack, delivering actionable insights to primary stakeholders and aiding product managers in decision-making.",
      },
    ],
    stack: "",
  },
  {
    employer: "Royal Bank of Canada",
    employerLogoUrl: "",
    title: "Full-Stack + DevOps Intern",
    time: "Sep 2022 – Aug 2023",
    year: 2023,
    content: [
      {
        key: "rbcSkill1",
        achieve:
          "Collaborated with a senior developer to deliver a highly demanded feature for a micro service in Helios, an internal DevOps system managing 12,000 apps with 30-40 daily onboardings, by leveraging API interactions to dynamically apply user-defined setting for Jenkins build agents, achieving a 20% reduction in support tickets.",
      },
      {
        key: "rbcSkill2",
        achieve:
          "Designed and developed an inclusive solution for Helios that enables customizing Service IDs for mainframe apps during onboarding and deployment requests, by integrating frontend, backend customization with different microservices and workers, effectively resolving critical issues tied to legacy hardcoded patterns.",
      },
      {
        key: "rbcSkill3",
        achieve:
          "Automated dataset creation process for mainframe apps with a Vue front-end, reducing manual configuration drift and increasing environment stability.",
      },
      {
        key: "rbcSkill4",
        achieve:
          "Optimized UCD Logs retrieval time for mainframe apps in the CI/CD pipeline by approximately 66%.",
      },
    ],
    stack: "",
  },
  {
    employer: "Alpha Laboratories Inc.",
    employerLogoUrl: "",
    title: "Full-Stack Developer Intern & Software Developer",
    time: "Dec 2021 – Aug 2022",
    year: 2022,
    content: [
      {
        key: "alphaSkill1",
        achieve:
          "Resolved 80% of reported front-end bugs while reducing amount of existing code by 3% through optimizing shared UI components.",
      },
      {
        key: "alphaSkill2",
        achieve:
          "Performed database modelling and developed requested back-end features with ASP.NET in collaboration with three senior engineers; resulted in bug-free deployment and a 30% reduction in development time.",
      },
    ],
    stack: "",
  },
  {
    employer: "RotorQuest Inc.",
    employerLogoUrl: "",
    title: "Web Developer",
    time: "Apr 2021 – Dec 2021, April 2023 - July 2023",
    year: 2021,
    content: [
      {
        key: "rqSkill1",
        achieve:
          "Led the entire lifecycle of a business transformation from ideation to commercialization, launching full-fledged e-commerce systems with BigCommerce and Shopify; achieved 40% improvement in website traffic through the strategic optimization of content, speed, and UX/UI design elements.",
      },
      {
        key: "rqSkill2",
        achieve:
          "Provided guidelines and training in system usage, reducing 80% of the usual time spent managing delivery, logistics, and handling customers’ complaint.",
      },
    ],
    stack: "",
  },
  {
    employer: "Seneca College",
    employerLogoUrl: "",
    title: "College Diploma of Computer Programmer (High Honours)",
    time: "Jan 2020 - Dec 2022",
    year: 2020,
    content: [
      {
        key: "seneca1",
        achieve: "Cumulative GPA: 4.0/4.0",
      },
      {
        key: "seneca2",
        achieve: "President’s Honour List",
      },
    ],
    stack: "",
  },
  {
    employer: "MLD Solutions Inc.",
    employerLogoUrl: "",
    title: "Fullstack + Mobile Developer",
    time: "Mar 2019 - May 2019",
    year: 2019,
    content: [
      {
        key: "mldSkill1",
        achieve:
          "Developed a React Native app that consumes custom digital assets and resources, allowing dynamic rendering of images, PDFs, videos",
      },
      {
        key: "mldSkill2",
        achieve:
          "Contributed to refactoring the APIs to incorporate GraphQL, postgreSQL, Node, and Express, improving ability to handle rapidly changing data",
      },
    ],
    stack: "",
  },
  {
    employer: "Planned Parenthood Toronto",
    employerLogoUrl: "",
    title: "Web Developer ",
    time: "Dec 2018 - Jan 2019, April 2019 - Sep 2019",
    year: 2018,
    content: [
      {
        key: "pptSkill1",
        achieve:
          "Crafted a WordPress theme from scratch using PHP to create custom post types, custom taxonomies, and custom fields for additional content types and metadata",
      },
      {
        key: "pptSkill2",
        achieve:
          "Improved user experience by taking lead on writing widgets facilitation website content addition for end-users",
      },
    ],
    stack: "",
  },
];

export const realWorldProjectsData = [
  {
    appCode: "dealsyW",
    title: "Dealsy Main Website",
    company: "Dealsy Limited",
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
    thumbnailFormat: "jpg",
    tags: [
      "mobile-app",
      "android",
      "ios",
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
    thumbnailFormat: "gif",
    tags: [
      "mobile-app",
      "ios",
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

export const otherProjectsData = [
  {
    appCode: "blogW",
    title: "My Personal Blog",
    tags: ["website", "nextjs", "react", "nodejs", "tailwind", "typescript"],
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
    tags: ["micro-service", "aws", "docker", "nodejs", "javascript", "jest"],
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

export const tagsByGroup = [
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
      "ASP.NET",
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
