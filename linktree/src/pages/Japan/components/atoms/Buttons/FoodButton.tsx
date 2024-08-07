import { MouseEventHandler } from "react";
import "./FoodButton.scss";
import Button from "./Button";
import { FoodIcon } from "../../../../../assets";

interface FoodButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * The food button component
 *
 * The food button is used to open the food page.
 *
 * @component
 *
 * @param {FoodButtonProps} props - The props of the component
 * @param {string} props.className - The class to apply to the button
 * @param {() => void} props.onClick - Function to call when the button is clicked
 * @param {React.ReactNode} props.children - The content of the button
 * @returns {JSX.Element} - The button
 */
export default function FoodButton({
  onClick,
  className = "",
}: FoodButtonProps): JSX.Element {
  const onClickHandler =
    onClick ||
    (() =>
      window.open(
        "https://iampivi.notion.site/Food-b76ab0da63eb48f38813811c55a708e9",
        "_blank",
      ));

  return (
    <Button className={`food-button ${className}`} onClick={onClickHandler}>
      <FoodIcon className="food-icon" />
    </Button>
  );
}
