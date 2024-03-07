import Image from "next/image";
import PageTheme from "./ui/theme";
import ThemeSelection from "./ui/HeadNav/ThemeSelection";
import TopNav from "./ui/HeadNav/TopNav";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="w-full container mx-auto">
      <div className=" flex flex-col items-center justify-center">        
        <div className="landing-box">
          <TopNav />
          <div className="landscape left-cloud"></div>
          <div className="landscape right-cloud"></div>
          <div className="landscape mid-tree"></div>
          <div className="landscape left-tree">
            <div className="left-pinwheel-container">            
              <div className="landscape left-pinwheel"></div>

            </div>

          </div>
          <div className="landscape right-tree">
            <div className="landscape right-pinwheel"></div>
          </div>
          <div className="landscape ground-cloud"></div>

        </div>
      </div>
    </div>
    // </main>
  );
}
