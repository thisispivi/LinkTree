import { PropsWithChildren } from "react";
import "./Column.scss";

interface ColumnProps extends PropsWithChildren {
  className?: string;
}

/**
 * Column component
 * @component
 * @param {ColumnProps} props - Component props
 * @param {string} props.className - Additional class name
 * @param {React.ReactNode} props.children - Component children
 * @returns {JSX.Element} Column component
 */
export default function Column({
  children,
  className = "",
}: ColumnProps): JSX.Element {
  return <div className={`column ${className}`}>{children}</div>;
}
