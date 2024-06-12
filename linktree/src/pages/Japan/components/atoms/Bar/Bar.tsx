import "./Bar.scss";

interface BarProps {
  className?: string;
  displayBar?: boolean;
  barStart?: "left" | "right" | "center";
  barEnd?: "left" | "right" | "center";
}

/**
 * Bar component
 * @component
 * @param {BarProps} props - Component props
 * @param {string} [props.className] - Additional class name
 * @param {boolean} [props.displayBar] - Display the bar
 * @returns {JSX.Element} Bar component
 */
export default function Bar({
  className = "",
  displayBar = true,
  barStart = "left",
  barEnd = "right",
}: BarProps): JSX.Element {
  return (
    <div className={`bar__container ${className}`}>
      <div className={`bar__wrapper bar--${barStart} bar--${barEnd}`}>
        {displayBar && <div className="bar" />}
      </div>
    </div>
  );
}
