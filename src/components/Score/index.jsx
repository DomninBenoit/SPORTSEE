/* eslint-disable react-hooks/exhaustive-deps */
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../services/index";
import "./style.scss";

import React from "react";

const Score = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    async function init() {
      let response = await getUser(id);
      setUser(response.data);
    }
    init();
  }, []);

  const scorePurcent = user?.score * 100 || user?.todayScore * 100;
  const value = [{ value: scorePurcent }];
  console.log(value);
  return (
    <div className="score">
      <div className="legend_bloc">
        <div className="legend_title">Score</div>
        <p className="legend_value">{value[0].value + "%"}</p>
        <p className="legend_texte">de votre objectif</p>
      </div>
      <div className="graphic_score">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius={70}
            outerRadius={85}
            data={value}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              position="center"
              dataKey="value"
              fill="#ff0000"
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Score;
