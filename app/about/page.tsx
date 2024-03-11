import TopNav from "../ui/HeadNav/TopNav";
import ProfileImage from "../ui/About/ProfileImage";
import { permanent_marker } from "../ui/fonts";
import styles from "@/app/ui/about.module.css";
import Footer from "../ui/Footer/Footer";

export default function Page() {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <div>
        <main>
          <section
            className={`${styles.descriptionContainer} flex justify-evenly flex-wrap m-8 p-5`}
          >
            <ProfileImage />
            <div className={`${styles.description} p-5`}>
              <h2
                className={`m-3 text-3xl ${permanent_marker.className} antialiased`}
              >
                Hey! I&apos;m Eirian
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
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
                vehicula. Etiam fermentum auctor ullamcorper.
              </p>
            </div>
          </section>
          <section
            className={`${styles.stackContainer} flex justify-evenly flex-wrap m-8 p-5`}
          >
            <h2
              className={`m-3 text-3xl ${permanent_marker.className} antialiased`}
            >
              My Tech Stack
            </h2>
            <ul className={`${styles.techSkills}`}>
              <li>
                <span className="font-bold">Languages & Frameworks:</span>{" "}
                HTML5, CSS/ SASS, Bootstrap, Express.js, JavaScript, TypeScript,
                React, React Native, Angular, C++, PHP, Java, C#, ASP.NET,
                Python, Django
              </li>
              <li>
                <span className="font-bold">Database:</span> MongoDB, SQL,
                GraphQL, Elasticsearch
              </li>
              <li>
                <span className="font-bold">Cloud:</span> Microsoft Azure,
                Amazon Web Services
              </li>
              <li>
                <span className="font-bold">Testing:</span> Jest, Jasmine,
                Karma, Selenium, SonarQube
              </li>
              <li>
                <span className="font-bold">DevOps:</span> Jenkins, Git, Docker,
                OpenShift Container Platform, RabbitMQ, Kafka
              </li>
              <li>
                <span className="font-bold">Certification:</span> AZ-900
                [Microsoft Azure Fundamentals] (Dec 2021)
              </li>
            </ul>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
