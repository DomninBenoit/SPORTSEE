/* eslint-disable react-hooks/exhaustive-deps */
import { ResponsiveContainer, PieChart, Pie } from "recharts";
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

  const score = user?.score || user?.todayScore;
  const scorePurcent = score * 100;
  const value = [
    { name: "score", value: 1 - score, stroke: "transparent" },
    { name: "score", value: score, stroke: "red" },
  ];

  return (
    <div className="score">
      <div className="legend_bloc">
        <div className="legend_title">Score</div>
        <p className="legend_value">{scorePurcent + "%"}</p>
        <p className="legend_texte">de votre objectif</p>
      </div>
      <div className="graphic_score">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={value}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="70%"
              fill="#FF0000"
              startAngle={180}
              endAngle={540}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Score;
