import TopNav from "../ui/HeadNav/TopNav";
import { permanent_marker } from "../ui/fonts";
import styles from "@/app/ui/contact.module.css";
import Footer from "../ui/Footer/Footer";
import { LocationIconBold } from "../ui/Icons";
import { contact, contactLinks } from "../lib/placeholder-data";
import ContactFrom from "../ui/Contact/ContactForm";

export default function Page() {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <div>
        <main className="flex flex-wrap justify-between">
          <section
            className={`${styles.contactTextContainer} contactTextContainer m-3 p-2 md:m-8 md:p-5`}
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
          <section className={`${styles.formContainer} m-3 p-2 md:m-8 p-5`}>
            <ContactFrom />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
