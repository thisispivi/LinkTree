import useThemeDetector from "../../hooks/style/theme";
import "./Japan.scss";

export default function Japan() {
  const { isDarkTheme } = useThemeDetector();
  console.log(isDarkTheme);

  return (
    <div className={`japan ${isDarkTheme ? "japan--dark" : "japan--light"}`}>
      <div className="japan__content"></div>
    </div>
  );
}
