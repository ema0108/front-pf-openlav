import { LuMoon, LuSun } from "react-icons/lu";
import { useDarkMode } from "../hooks/useDarkMode";
import IconButton from "./ui/IconButton";

function DarkModeButton() {
  const { theme, toggle } = useDarkMode();
  return (
    <IconButton variant="muted" onClick={toggle}>
      {theme == "light" ? <LuSun></LuSun> : <LuMoon></LuMoon>}
    </IconButton>
  );
}

export default DarkModeButton;
