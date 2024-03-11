import TopNav from "../ui/HeadNav/TopNav";
import { permanent_marker } from "../ui/fonts";
import styles from "@/app/ui/contact.module.css";
import Footer from "../ui/Footer/Footer";
import { LocationIconBold } from "../ui/Icons";
import { contact, contactLinks } from "../lib/placeholder-data";

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
              {contact.title}
            </h2>
            <p className="text-left">{contact.content}</p>
            <ul className={`mt-5`}>
              {contactLinks.map((l) => (
                <li key={l.name} className="m-1">
                  <a href={l.url} className="flex">
                    {l.iconBold}
                    {l.text}
                  </a>
                </li>
              ))}
              <li className="m-1 flex ">
                <LocationIconBold /> {contact.location}
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
