import TopNav from "../ui/HeadNav/TopNav";
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
          <p className="text-xl m-8 p-5">
            While I officially <u>graduated</u> from Seneca in December{" "}
            <b>2022</b>, my journey in building <u>real-world</u> projects{" "}
            <u>commenced</u> in <b>2018</b>. 🚀
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
