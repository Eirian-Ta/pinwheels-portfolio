import TopNav from "../ui/HeadNav/TopNav";
import { permanent_marker } from "../ui/fonts";
import styles from "@/app/ui/contact.module.css";
import Footer from "../ui/Footer/Footer";
import {
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
          <section></section>
        </main>
        <Footer />
      </div>
    </>
  );
}
