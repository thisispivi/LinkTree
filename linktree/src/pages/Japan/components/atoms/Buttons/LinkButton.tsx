import { MouseEventHandler } from "react";
import "./LinkButton.scss";
import Button from "./Button";
import { LinkIcon } from "../../../../../assets";

interface LinkButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * The link button component
 *
 * The link button is used to open the link page.
 *
 * @component
 *
 * @param {LinkButtonProps} props - The props of the component
 * @param {string} props.className - The class to apply to the button
 * @param {() => void} props.onClick - Function to call when the button is clicked
 * @returns {JSX.Element} - The button
 */
export default function LinkButton({
  onClick,
  className = "",
}: LinkButtonProps): JSX.Element {
  const onClickHandler =
    onClick ||
    (() =>
      window.open(
        "https://iampivi.notion.site/Link-Utili-ce5b73a593d9492ebd837de99d7b57b5?pvs=4",
        "_blank",
      ));

  return (
    <Button className={`link-button ${className}`} onClick={onClickHandler}>
      <LinkIcon className="link-icon" />
    </Button>
  );
}
