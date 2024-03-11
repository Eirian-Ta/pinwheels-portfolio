import TopNav from "../ui/HeadNav/TopNav";
import { permanent_marker } from "../ui/fonts";
import styles from "@/app/ui/contact.module.css";
import Footer from "../ui/Footer/Footer";
import {
  DeviantArtIconBlackBold,
  GitHubIconBlackBoldSquare,
  LinkedInIconBlack,
  LocationIconBold,
  MailIconBold,
} from "../ui/Icons";

export default function Page() {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <div>
        <main className="flex flex-wrap justify-between">
          <section
            className={`${styles.contactTextContainer} contactTextContainer m-5 p-2 md:m-8 md:p-5`}
          >
            <h2
              className={`m-3 text-3xl ${permanent_marker.className} antialiased`}
            >
              Drop me a line
            </h2>
            <p className="text-left">
              Hey! Shoot me a message, and I&apos;ll get back to you pronto.
              I&apos;m fluent in English, Vietnamese, and I&apos;ve got a
              sprinkle of Mandarin &minus; just enough to impress your
              neighbour&apos;s parrot. Feel free to chat in any of those, or
              throw in some Esperanto if you&apos;re feeling adventurous (just
              kidding!). Any languages are welcomed, if things get lost in
              translation, my BFF Google will swoop in for the rescue. Excited
              to hear from you! ! 🚀
            </p>
            <ul className={`mt-5`}>
              <li className="m-1">
                <a
                  href="https://github.com/Eirian-Ta"
                  className="flex"
                  // href={userData.socialLinks.github}
                >
                  <GitHubIconBlackBoldSquare /> https://github.com/Eirian-Ta
                </a>
              </li>
              <li className="m-1">
                <a
                  href="https://www.linkedin.com/in/eirian-ta/"
                  className="flex"
                >
                  <LinkedInIconBlack /> https://www.linkedin.com/in/eirian-ta/
                </a>
              </li>
              <li className="m-1">
                <a href="mailto:eirian.ta.tech@gmail.com" className="flex">
                  <MailIconBold /> eirian.ta.tech@gmail.com
                </a>
              </li>
              <li className="m-1 flex ">
                <LocationIconBold /> Toronto, ON Canada
              </li>
            </ul>
          </section>
          <section className={`${styles.formContainer} m-5 p-2 md:m-8 p-5`}>
            <form className="form rounded-lg flex flex-col">
              <label htmlFor="name" className="text-sm  mx-4">
                {" "}
                Your Name
              </label>
              <input
                type="text"
                className="rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                name="name"
              />
              <label htmlFor="email" className="text-sm mx-4 mt-4">
                Email
              </label>
              <input
                type="text"
                className="rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                name="email"
              />
              <label htmlFor="message" className="text-sm mx-4 mt-4">
                Message
              </label>
              <textarea
                rows="4"
                type="text"
                className="rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                name="message"
              ></textarea>
              <button
                type="submit"
                className="rounded-md  mt-8 py-2 mx-4 text-xs font-bold"
              >
                Send Message
              </button>
            </form>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
