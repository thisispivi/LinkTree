import {
  DarkModeButton,
  DocumentsButton,
  LanguageSelctor,
  LinkButton,
  ShoppingButton,
} from "../../atoms";
import "./BottomBar.scss";

interface BottomBarProps {
  darkThemeData: {
    isDarkTheme: boolean;
    handleDarkModeSwitch: () => void;
  };
}

export default function BottomBar({ darkThemeData }: BottomBarProps) {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar__left">
        <LinkButton />
        <ShoppingButton />
        <DocumentsButton />
      </div>
      <div className="bottom-bar__right">
        <LanguageSelctor />
        <DarkModeButton {...darkThemeData} />
      </div>
    </div>
  );
}
