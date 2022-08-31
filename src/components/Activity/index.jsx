/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./style.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getUserActivity } from "../../services/index";

const Activity = () => {
  const { id } = useParams();
  const [userActivity, setUserActivity] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    async function init() {
      try {
        let response = await getUserActivity(id);
        setUserActivity(response.data);
      } catch (error) {
        setError(error.message);
      }
    }
    init();
  }, []);

  /** @description Creation of a function to adapt the replacement color
   * @param {color} value
   * @returns Returns the desired color on the texts in the legend
   */
  const colorLegendText = (value) => {
    return <span className="colorLegendText">{value}</span>;
  };

  const tooltip = (active) => {
    console.log(userActivity.sessions);
    if (active) {
      return (
        <div className="tooltip">
          <p>{userActivity.sessions.kilogram}</p>
          <p>{userActivity.sessions.calories}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="activity">
      <p className="activityTitle">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={userActivity.sessions}
          margin={{
            top: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} />
          <YAxis
            tickCount={3}
            orientation="right"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
            formatter={colorLegendText}
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            name="Poids (kg)"
            radius={[20, 20, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            name="Calories brûlées (kCal)"
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;
