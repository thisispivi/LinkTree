import { DarkModeButton, LanguageSelctor } from "../../atoms";
import "./Navbar.scss";

interface NavbarProps {
  darkThemeData: {
    isDarkTheme: boolean;
    handleDarkModeSwitch: () => void;
  };
}

export default function Navbar({ darkThemeData }: NavbarProps) {
  return (
    <div className="navbar">
      <div className="navbar__left" />
      <div className="navbar__right">
        <LanguageSelctor />
        <DarkModeButton {...darkThemeData} />
      </div>
    </div>
  );
}
