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

export const imageUrlsPlaceHolder = [
  "0$theme_Bg.jpg",
  "0$theme_Big_tree.png",
  "0$theme_Small_tree.png",
  "0$theme_Cloud1.png",
  "0$theme_Cloud2.png",
  "0$theme_Cloud3.png",
  "0$theme_Pinwheel.png",
];

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
  text: "github.com/Eirian-Ta",
};

const linkedIn = {
  name: "linkedIn",
  icon: <LinkedInIconLight />,
  iconBold: <LinkedInIconBlack />,
  url: "https://www.linkedin.com/in/eirian-ta/",
  text: "www.linkedin.com/in/eirian-ta/",
};

const deviantArt = {
  name: "deviantArt",
  icon: <DeviantArtIconLight />,
  iconBold: "",
  url: "https://www.deviantart.com/white-chan",
  text: "www.deviantart.com/white-chan",
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
