import Menu from "./Menu";
import ThemeSelection from "./ThemeSelection";

export default function TopNav() {
  return (
    <div>
      <h1>Eirian Ta - Full-stack Developer</h1>
      <div className="flex justify-between">
        <ThemeSelection />
        <Menu />
      </div>
    </div>
  );
}
