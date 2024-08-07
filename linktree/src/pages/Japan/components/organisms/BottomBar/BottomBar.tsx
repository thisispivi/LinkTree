import {
  DarkModeButton,
  DocumentsButton,
  FoodButton,
  LanguageSelector,
  LinkButton,
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
        <FoodButton />
        <DocumentsButton />
      </div>
      <div className="bottom-bar__right">
        <LanguageSelector />
        <DarkModeButton {...darkThemeData} />
      </div>
    </div>
  );
}
