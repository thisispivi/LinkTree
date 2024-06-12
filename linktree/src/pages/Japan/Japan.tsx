import useThemeDetector from "../../hooks/style/theme";
import "./Japan.scss";
import { City, Dates } from "./components/atoms";
import { Column, RowWBar } from "./components/molecules";

export default function Japan() {
  const { isDarkTheme } = useThemeDetector();

  return (
    <div className={`japan ${isDarkTheme ? "japan--dark" : "japan--light"}`}>
      <div className="japan__content">
        <Column className="japan__content__dates">
          <Dates startDate="2024/08/19" />
        </Column>
        <Column className="japan__content__cities">
          <RowWBar>
            <City
              name={"shirakawago"}
              url={
                "https://wanderlog.com/plan/nolxufeklcxgovdv/trip-to-shirakawa/shared"
              }
              imageUrl={"/LinkTree/Japan/Shirakawago.jpg"}
            />
            <City
              name={"shirakawago"}
              url={
                "https://wanderlog.com/plan/nolxufeklcxgovdv/trip-to-shirakawa/shared"
              }
              imageUrl={"/LinkTree/Japan/Shirakawago.jpg"}
            />
          </RowWBar>
        </Column>
      </div>
    </div>
  );
}
