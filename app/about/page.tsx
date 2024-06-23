import TopNav from "../ui/HeadNav/TopNav";
import ProfileImage from "../ui/About/ProfileImage";
import { permanent_marker } from "../ui/fonts";
import styles from "@/app/ui/about.module.css";
import Footer from "../ui/Footer/Footer";
import { aboutData } from "@/app/lib/static-data";
import { CurrentThemeProps } from "../lib/interfaces";

export default function Page({
  currentTheme,
  setCurrentTheme,
}: CurrentThemeProps) {
  return (
    <>
      <header>
        <TopNav currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      </header>
      <div>
        <main>
          <section
            className={`${styles.descriptionContainer} flex justify-evenly flex-wrap m-3 p-2 md:m-8 md:p-5`}
          >
            <ProfileImage />
            <div className={`${styles.description} p-5 text-left`}>
              <h2
                className={`m-3 text-3xl ${permanent_marker.className} antialiased`}
              >
                {aboutData.aboutTitle}
              </h2>
              <p className="my-3">
                I&apos;m a{" "}
                <span className="highlight"> Full-Stack Developer</span> with
                over 4 years of experience. While I can handle <b>Java</b>,{" "}
                <b>Python</b>, and <b>C#</b>, my heart truly belongs to{" "}
                <b>JavaScript</b> and <b>TypeScript</b>. Paired with frameworks
                like <b>React</b> and <b>Angular</b>, they&apos;ve been my go-to
                tools for crafting elegant solutions and bringing ideas to life.
              </p>
              <p className="my-3">
                My journey has also led me into the realm of{" "}
                <span className="highlight ">DevOps</span>, where I&apos;ve had
                a hand in developing and maintaining an internal system at{" "}
                <b>RBC</b>, managing <u>12,000 apps</u> with 30-40 new apps
                onboarded every day. On the side, I&apos;ve also delved into{" "}
                <span className="highlight">Mobile Development</span> with{" "}
                <b>React Native, Objective-C, Swift</b>; and assisted clients in
                setting up e-commerce websites on platforms like{" "}
                <b>WordPress</b>, <b>Shopify</b>, and <b>BigCommerce</b>.
              </p>
              <p className="my-3">
                To me, coding isn&apos;t just a job — it&apos;s a passion. The
                thrill of solving problems and learning something new every day
                keeps me going. Even when things don&apos;t go as planned, I see
                it as an opportunity to discover something new.⛅
              </p>
              <p className="my-3 text-sm">
                P/S: I hope you&apos;re enjoying my{" "}
                <span
                  className={`text-base ${permanent_marker.className} antialiased`}
                >
                  pinwheels land
                </span>
                ! 🌈 Have you had a chance to play around with the trees,
                pinwheels, and clouds on the{" "}
                <a className="underline highlight" href="/">
                  homepage
                </a>{" "}
                yet? Give it a whirl, and don&apos;t forget to try out the four
                seasons themes too. &quot;Winter&quot; is the default because,
                well, I&apos;m living in Canada — long winters are our
                specialty! But hey, choose the theme that tickles your fancy the
                most! 🌟 Enjoy the whimsical journey!
              </p>
            </div>
          </section>
          <section
            className={`${styles.stackContainer} flex justify-evenly flex-wrap m-3 p-2 md:m-8 md:p-5`}
          >
            <h2
              className={`m-3 text-3xl ${permanent_marker.className} antialiased`}
            >
              {aboutData.techStackTitle}
            </h2>
            <ul className={`${styles.techSkills} mr-4`}>
              {aboutData.techStack.map((skillSet) => (
                <li key={skillSet.key}>
                  <span className="font-bold">{skillSet.title}:</span>{" "}
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
