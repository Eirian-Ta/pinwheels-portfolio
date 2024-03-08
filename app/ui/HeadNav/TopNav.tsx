import Menu from "./Menu";
import ThemeSelection from "./ThemeSelection";
import { permanent_marker } from "../fonts";

export default function TopNav() {
  return (
    <div>
      <h1
        className={`m-3 text-2xl opacity-50 ${permanent_marker.className} antialiased`}
      >
        Eirian Ta * Full-stack Developer
      </h1>
      <div className="flex justify-between">
        <ThemeSelection />
        <Menu />
      </div>
    </div>
  );
}
