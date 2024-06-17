import useLanguage from "../../hooks/language/language";
import useThemeDetector from "../../hooks/style/theme";
import "./Japan.scss";
import { Bar, City, Dates } from "./components/atoms";
import { Column, RowWBar } from "./components/molecules";
import { BottomBar, TopBar } from "./components/organisms";
import { cities, dates } from "./utils/data";

export default function Japan() {
  const { t } = useLanguage(["japan"]);
  const darkThemeData = useThemeDetector();
  const { isDarkTheme } = darkThemeData;
  document.title = `${t("title")} 🇯🇵`;

  return (
    <div className={`japan ${isDarkTheme ? "japan--dark" : "japan--light"}`}>
      <TopBar />
      <div className="japan__content" id="japan-content">
        <Column className="japan__content__dates">
          {dates.map((date, index) => (
            <>
              <Dates
                key={index}
                startDate={date.startDate}
                endDate={date.endDate}
              />
              {index !== dates.length - 1 && <Bar displayBar={false} />}
            </>
          ))}
        </Column>
        <Column className="japan__content__cities">
          {cities.map((city, index) => (
            <>
              <RowWBar
                key={index}
                node1={
                  <City
                    name={city[0].name}
                    url={city[0].url}
                    imageUrl={city[0].imageUrl}
                  />
                }
                node2={
                  city[1] && (
                    <City
                      name={city[1].name}
                      url={city[1].url}
                      imageUrl={city[1].imageUrl}
                    />
                  )
                }
              />
              {index !== cities.length - 1 && <Bar />}
            </>
          ))}
        </Column>
      </div>
      <BottomBar darkThemeData={darkThemeData} />
    </div>
  );
}
