import Menu from "./Menu";
import ThemeSelection from "./ThemeSelection";
import { permanent_marker } from "../fonts";
import { HomeIcon } from "../Icons";

export default function TopNav() {
  return (
    <div className="topNav fixed top-0 left-0 w-screen">
      <a className="flex justify-center" href="/">
        <HomeIcon />
        <h1
          className={`m-3 text-2xl opacity-50 ${permanent_marker.className} antialiased`}
        >
          Eirian Ta * Full-stack Developer
        </h1>
      </a>

      <div className="flex justify-between">
        <ThemeSelection />
        <Menu />
      </div>
    </div>
  );
}
