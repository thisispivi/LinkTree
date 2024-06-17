import { MouseEventHandler } from "react";
import "./ShoppingButton.scss";
import Button from "./Button";
import { ShoppingIcon } from "../../../../../assets";

interface ShoppingButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * The shopping button component
 *
 * The shopping button is used to open the shopping page.
 *
 * @component
 *
 * @param {ShoppingButtonProps} props - The props of the component
 * @param {string} props.className - The class to apply to the button
 * @param {() => void} props.onClick - Function to call when the button is clicked
 * @param {React.ReactNode} props.children - The content of the button
 * @returns {JSX.Element} - The button
 */
export default function ShoppingButton({
  onClick,
  className = "",
}: ShoppingButtonProps): JSX.Element {
  const onClickHandler =
    onClick ||
    (() =>
      window.open(
        "https://iampivi.notion.site/Cose-da-portare-4b3d0412a42247e2adfeed0d4848e234?pvs=4",
        "_blank",
      ));

  return (
    <Button className={`shopping-button ${className}`} onClick={onClickHandler}>
      <ShoppingIcon className="shopping-icon" />
    </Button>
  );
}
