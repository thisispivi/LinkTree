import "./RowWBar.scss";

interface RowWBarProps {
  className?: string;
  node1?: JSX.Element;
  node2?: JSX.Element;
}

/**
 * RowWBar component
 * @component
 * @param {RowWBarProps} props - Component props
 * @param {string} [props.className] - Additional class name
 * @param {JSX.Element} [props.node1] - First node
 * @param {JSX.Element} [props.node2] - Second node
 * @returns {JSX.Element} RowWBar component
 */
export default function RowWBar({
  node1,
  node2,
  className = "",
}: RowWBarProps): JSX.Element {
  return (
    <div className={`row-w-bar ${className}`}>
      <div
        className={`row-w-bar__content ${node2 ? "row-w-bar__content--2" : ""}`}
      >
        {node1}
        {node2 && (
          <>
            <div className="row-w-bar__container">
              <div className="row-w-bar__bar" />
            </div>
            {node2}
          </>
        )}
      </div>
    </div>
  );
}
