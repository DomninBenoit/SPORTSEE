/* eslint-disable react-hooks/exhaustive-deps */
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getUserPerformance } from "../../services/index";
import "./style.scss";

const Performance = () => {
  const { id } = useParams();
  const [userPerformance, setUserPerformance] = useState({});
  useEffect(() => {
    async function init() {
      let response = await getUserPerformance(id);
      setUserPerformance(response.data);
    }
    init();
  }, []);

  /**
   * add const week with the letter of each day of the week
   * @param {number} num
   * @returns the first letter of the day
   */
  function perform(num) {
    const perf = [
      "Intensité",
      "Vitesse",
      "Force",
      "Endurance",
      "Energie",
      "Cardio",
    ];
    return perf[+num - 1];
  }

  return (
    <div className="performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="63%"
          data={userPerformance?.data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" tickFormatter={perform} />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;
