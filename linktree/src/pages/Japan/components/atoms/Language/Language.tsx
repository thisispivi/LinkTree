import { useState } from "react";
import Button from "../../atoms/Buttons/Button";
import "./Language.scss";
import useLanguage from "../../../../../hooks/language/language";
import { LanguageIcon } from "../../../../../assets";
import LanguageFlag from "../LanguageFlag/LanguageFlag";

/**
 * LanguageSelector component
 *
 * The language selector component is used to change the language of the app.
 *
 * @component
 *
 * @returns {JSX.Element} - The language selector
 */
export default function LanguageSelector(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage([]);

  const possibleLanguages = ["it", "en"];

  return (
    <div className="language-selector">
      {possibleLanguages.map((language) => (
        <Button
          key={language}
          className={`language-selector__button ${
            currentLanguage.includes(language)
              ? "language-selector__button--active"
              : ""
          } language-selector__button--${language}
          ${isOpen ? "language-selector__button--open" : ""}
        `}
          onClick={() => {
            changeLanguage(language);
            setIsOpen(false);
          }}
        >
          <LanguageFlag language={language} />
        </Button>
      ))}
      <Button
        className={`language-selector__activator ${
          isOpen ? "language-selector__activator--open" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <LanguageIcon className={`language-selector__language-icon`} />
        <LanguageFlag
          language={currentLanguage}
          className={`language-selector__language-flag-icon`}
        />
      </Button>
    </div>
  );
}
