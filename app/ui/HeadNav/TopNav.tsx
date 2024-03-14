import Menu from "./Menu";
import ThemeSelection from "./ThemeSelection";
import { permanent_marker } from "../fonts";
import { HomeIcon } from "../Icons";

export default function TopNav() {
  return (
    <div className="topNav absolute top-0 left-0 w-screen">
      <a
        className="flex justify-center pl-5 md:pl-0 lg:pl-0 opacity-50"
        href="/"
      >
        <HomeIcon />
        <h1
          className={`m-3 text-2xl ${permanent_marker.className} antialiased`}
        >
          Eirian Ta * Full-stack Developer
        </h1>
      </a>

      <div className="flex justify-between items-end flex-warp flex-col-reverse md:flex-row lg:flex-row md:flex-start lg:flex-start md:items-start lg:items-start">
        <ThemeSelection />
        <Menu />
      </div>
    </div>
  );
}
