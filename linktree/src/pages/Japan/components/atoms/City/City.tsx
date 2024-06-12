import useLanguage from "../../../../../hooks/language/language";
import "./City.scss";

interface CityProps {
  name: string;
  url: string;
  imageUrl: string;
}

/**
 * City component
 * @component
 * @param {CityProps} props - Component props
 * @param {string} props.name - City name
 * @param {string} props.url - City URL
 * @param {string} props.imageUrl - City image URL
 * @returns {JSX.Element} City component
 */
export default function City({ name, url, imageUrl }: CityProps): JSX.Element {
  const { t } = useLanguage(["japan"]);
  return (
    <a className="city" href={url} target="_blank" rel="noreferrer">
      <div className="city__name__container">
        <h3 className="city__name">{t(`cities.${name}`)}</h3>
      </div>
      <img className="city__image" src={imageUrl} alt={name} />
    </a>
  );
}
