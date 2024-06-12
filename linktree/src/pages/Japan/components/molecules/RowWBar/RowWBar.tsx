import { PropsWithChildren } from "react";
import "./RowWBar.scss";

interface RowWBarProps extends PropsWithChildren {
  className?: string;
}

/**
 * RowWBar component
 * @component
 * @param {RowWBarProps} props - Component props
 * @param {string} [props.className] - Additional class name
 * @returns {JSX.Element} RowWBar component
 */
export default function RowWBar({
  children,
  className = "",
}: RowWBarProps): JSX.Element {
  return (
    <div className={`row-w-bar ${className}`}>
      <div className="row-w-bar__content">{children}</div>
      <div className="row-w-bar__bar" />
    </div>
  );
}
