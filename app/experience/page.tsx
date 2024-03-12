import TopNav from "../ui/HeadNav/TopNav";
import { permanent_marker } from "../ui/fonts";
import styles from "@/app/ui/experience.module.css";
import Footer from "../ui/Footer/Footer";
import ExperienceCard from "../ui/Experience/ExperienceCard";
import { experienceData } from "../lib/placeholder-data";

export default function Page() {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <div>
        <main className="flex flex-col items-center">
          <p className="m-8 p-5">
            While I officially graduated from Seneca in December 2022, my
            journey in building real-world projects commenced in 2018. 🚀
          </p>
          {experienceData.map((item, index) => (
            <ExperienceCard
              key={index}
              {...item}
              schoolItem={item.employer === "Seneca College"}
              lastItem={index == experienceData.length - 1}
            />
          ))}
        </main>
        <Footer />
      </div>
    </>
  );
}
