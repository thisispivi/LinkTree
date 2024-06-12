import useThemeDetector from "../../hooks/style/theme";
import "./Japan.scss";
import { Bar, City, Dates } from "./components/atoms";
import { Column, RowWBar } from "./components/molecules";
import { Navbar } from "./components/organisms";

export default function Japan() {
  const darkThemeData = useThemeDetector();
  const { isDarkTheme } = darkThemeData;
  return (
    <div className={`japan ${isDarkTheme ? "japan--dark" : "japan--light"}`}>
      <div className="japan__content" id="japan-content">
        <Column className="japan__content__dates">
          <Dates startDate="2024/08/13" endDate="2024/08/17" />
          <Bar displayBar={false} />
          <Dates startDate="2024/08/18" />
          <Bar displayBar={false} />
          <Dates startDate="2024/08/19" />
          <Bar displayBar={false} />
          <Dates startDate="2024/08/20" />
          <Bar displayBar={false} />
          <Dates startDate="2024/08/21" endDate="2024/08/23" />
          <Bar displayBar={false} />
          <Dates startDate="2024/08/24" />
          <Bar displayBar={false} />
          <Dates startDate="2024/08/25" />
          <Bar displayBar={false} />
          <Dates startDate="2024/08/26" endDate="2024/08/27" />
        </Column>
        <Column className="japan__content__cities">
          <RowWBar
            node1={
              <City
                name={"tokyo"}
                url={
                  "https://wanderlog.com/plan/vmaeszzkcbuzwffy/trip-to-tokyo/shared"
                }
                imageUrl={"/LinkTree/Japan/Tokyo.png"}
              />
            }
          />
          <Bar />
          <RowWBar
            node1={
              <City
                name={"takayama"}
                url={
                  "https://wanderlog.com/plan/gqwvpfdehqhasfqt/trip-to-takayama/shared"
                }
                imageUrl={"/LinkTree/Japan/Takayama.jpg"}
              />
            }
          />
          <Bar />
          <RowWBar
            node1={
              <City
                name={"shirakawago"}
                url={
                  "https://wanderlog.com/plan/nolxufeklcxgovdv/trip-to-shirakawa/shared"
                }
                imageUrl={"/LinkTree/Japan/Shirakawago.jpg"}
              />
            }
            node2={
              <City
                name={"kanazawa"}
                url={
                  "https://wanderlog.com/view/ncpiazitzx/trip-to-kanazawa/shared"
                }
                imageUrl={"/LinkTree/Japan/Kanazawa.jpg"}
              />
            }
          />
          <Bar />
          <RowWBar
            node1={
              <City
                name={"kanazawa"}
                url={
                  "https://wanderlog.com/view/ncpiazitzx/trip-to-kanazawa/shared"
                }
                imageUrl={"/LinkTree/Japan/Kanazawa.jpg"}
              />
            }
          />
          <Bar />
          <RowWBar
            node1={
              <City
                name={"kyoto"}
                url={
                  "https://wanderlog.com/plan/igzciyjgbwydijwd/trip-to-kyoto/shared"
                }
                imageUrl={"/LinkTree/Japan/Kyoto.jpg"}
              />
            }
          />
          <Bar />
          <RowWBar
            node1={
              <City
                name={"nara"}
                url={
                  "https://wanderlog.com/plan/lyicjgzrparzaogt/trip-to-nara/shared"
                }
                imageUrl={"/LinkTree/Japan/Nara.jpg"}
              />
            }
          />
          <Bar />
          <RowWBar
            node1={
              <City
                name={"osaka"}
                url={
                  "https://wanderlog.com/plan/zjcyqouqcrsirrre/trip-to-osaka/shared"
                }
                imageUrl={"/LinkTree/Japan/Osaka.png"}
              />
            }
          />
          <Bar />
          <RowWBar
            node1={
              <City
                name={"kyoto"}
                url={
                  "https://wanderlog.com/plan/igzciyjgbwydijwd/trip-to-kyoto/shared"
                }
                imageUrl={"/LinkTree/Japan/Kyoto.jpg"}
              />
            }
          />
        </Column>
      </div>
      <Navbar darkThemeData={darkThemeData} />
    </div>
  );
}
