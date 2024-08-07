import { MouseEventHandler } from "react";
import "./DocumentsButton.scss";
import Button from "./Button";
import { DocumentIcon } from "../../../../../assets";

interface DocumentsButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * The documents button component
 *
 * The documents button is used to open the documents page.
 *
 * @component
 *
 * @param {DocumentsButtonProps} props - The props of the component
 * @param {string} props.className - The class to apply to the button
 * @param {() => void} props.onClick - Function to call when the button is clicked
 * @returns {JSX.Element} - The button
 */
export default function DocumentsButton({
  onClick,
  className = "",
}: DocumentsButtonProps): JSX.Element {
  const onClickHandler =
    onClick ||
    (() =>
      window.open(
        "https://drive.google.com/drive/folders/1mVqrK9Cjvw4f0YM33ZkpLfciz32qySil",
        "_blank",
      ));

  return (
    <Button
      className={`documents-button ${className}`}
      onClick={onClickHandler}
    >
      <DocumentIcon className="document-icon" />
    </Button>
  );
}
