// This file contains placeholder data that could be replaced later with data fetched from a PostgreSQL database

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
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
  scelerisque quam eu massa tincidunt fringilla. Mauris vitae nunc
  eros. Curabitur nec ex aliquam, blandit ante et, venenatis
  tortor. Pellentesque quis lobortis nisl, eu semper nisl. Ut in
  lacinia metus. Phasellus interdum blandit ornare. Sed blandit,
  nisl vitae consectetur molestie, quam velit commodo arcu, non
  mattis felis mi facilisis metus. Ut lectus mi, gravida at
  fringilla ac, tempor sit amet elit. Phasellus placerat diam eget
  nulla lacinia feugiat. Vestibulum velit ligula, congue id erat
  vitae, condimentum malesuada metus. Praesent vel lobortis neque.
  Aliquam in ullamcorper augue. Curabitur placerat condimentum
  vehicula. Etiam fermentum auctor ullamcorper.`,
  techStackTitle: "My Tech Stack",
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
