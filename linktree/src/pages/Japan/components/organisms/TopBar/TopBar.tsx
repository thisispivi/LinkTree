import { JapanFlag } from "../../../../../assets";
import useLanguage from "../../../../../hooks/language/language";
import "./TopBar.scss";

export default function TopBar() {
  const { t } = useLanguage(["japan"]);
  return (
    <div className="top-bar">
      <div className="top-bar__title">
        <h1>{`${t("title")}`}</h1>
        <JapanFlag />
      </div>
    </div>
  );
}
