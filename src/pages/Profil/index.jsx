/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Activity from "../../components/Activity";
import Header from "../../components/Header";
import Host from "../../components/Host";
import Sessions from "../../components/Sessions";
import SubMenu from "../../components/SubMenu";
import Performance from "../../components/Performance";
import "./style.scss";
import Score from "../../components/Score";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../services/index";
import IntakeCounter from "../../components/IntakeCounter";
import Fire from "../../assets/fire.png";
import Chicken from "../../assets/chicken.png";
import Apple from "../../assets/apple.png";
import Burger from "../../assets/burger.png";

const Profil = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    async function init() {
      let response = await getUser(id);
      setUser(response.data);
    }
    init();
  }, []);

  return (
    <div>
      <Header />
      <section>
        <SubMenu />
        <div className="hostAndGraph">
          <Host />
          <div className="graph">
            <div className="left-graph">
              <Activity />
              <div className="left-bottom-graph">
                <Sessions />
                <Performance />
                <Score />
              </div>
            </div>
            <div className="right-graph">
              <IntakeCounter
                name="Calories"
                value={user?.keyData?.calorieCount}
                measure="kCal"
                svg={Fire}
              />
              <IntakeCounter
                name="Proteines"
                value={user?.keyData?.proteinCount}
                measure="g"
                svg={Chicken}
              />
              <IntakeCounter
                name="Glucides"
                value={user?.keyData?.carbohydrateCount}
                measure="g"
                svg={Apple}
              />
              <IntakeCounter
                name="Lipides"
                value={user?.keyData?.lipidCount}
                measure="g"
                svg={Burger}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profil;
