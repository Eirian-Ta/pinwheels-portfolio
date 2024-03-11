import TopNav from "../ui/HeadNav/TopNav";
import ProfileImage from "../ui/About/ProfileImage";
import { permanent_marker } from "../ui/fonts";
import styles from "@/app/ui/about.module.css";
import Footer from "../ui/Footer/Footer";
import { aboutData } from "@/app/lib/placeholder-data";

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
                {aboutData.aboutTitle}
              </h2>
              <p>{aboutData.description}</p>
            </div>
          </section>
          <section
            className={`${styles.stackContainer} flex justify-evenly flex-wrap m-8 p-5`}
          >
            <h2
              className={`m-3 text-3xl ${permanent_marker.className} antialiased`}
            >
              {aboutData.techStackTitle}
            </h2>
            <ul className={`${styles.techSkills}`}>
              {aboutData.techStack.map((skillSet) => (
                <li key={skillSet.key}>
                  <span className="font-bold">{skillSet.title}</span>{" "}
                  {skillSet.skills}
                </li>
              ))}
            </ul>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
