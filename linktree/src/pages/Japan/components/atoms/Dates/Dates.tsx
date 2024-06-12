import useLanguage from "../../../../../hooks/language/language";
import { formatDate } from "../../../../../i18n/functions/date";
import "./Dates.scss";

interface DatesProps {
  startDate: string;
  endDate?: string;
}

/**
 * Dates component
 * @component
 * @param {DatesProps} props - Component props
 * @param {string} props.startDate - Start Date
 * @param {string} [props.endDate] - End Date
 * @returns {JSX.Element} Dates component
 */
export default function Dates({ startDate, endDate }: DatesProps): JSX.Element {
  const { currentLanguage } = useLanguage(["japan"]);
  const sDate = new Date(startDate);
  return (
    <div className="dates">
      <p className="dates__start">
        {`${formatDate(sDate, currentLanguage)}${endDate ? " -" : ""}`}
      </p>
      {endDate && (
        <p className="dates__end">
          {formatDate(new Date(endDate), currentLanguage)}
        </p>
      )}
    </div>
  );
}
