/* eslint-disable react-hooks/exhaustive-deps */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
  CartesianGrid,
} from "recharts";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getUserAverageSessions } from "../../services/index";
import "./style.scss";

const Sessions = () => {
  const { id } = useParams();
  const [userSessions, setUserSessions] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    async function init() {
      try {
        let response = await getUserAverageSessions(id);
        setUserSessions(response.data);
        setError("");
      } catch (error) {
        setError(error.message);
      }
    }
    init();
  }, []);

  /**
   * add const week with the letter of each day of the week
   * @param {number} num
   * @returns the first letter of the day
   */
  function weekDays(num) {
    const week = ["L", "M", "M", "J", "V", "S", "D"];
    return week[+num - 1];
  }

  /**
   * fonction return form and data of tooltip
   * @param {array} payload / array of objects present the custom tooltip
   * @returns a custom tooltip
   */
  function CustomTooltip({ payload }) {
    return (
      <div
        className="custom_tooltip"
        style={{ background: "white", padding: "1px 5px" }}
      >
        <p className="desc">{payload[0]?.payload?.sessionLength} min</p>
      </div>
    );
  }

  /**
   *
   * @param {*} props
   * @returns
   */
  function CustomCursor(props) {
    const { points, width, height } = props;
    const { x, y } = points[0];

    return (
      <Rectangle
        fillOpacity="0.2"
        x={x}
        y={y - 30}
        width={width}
        height={height * 2}
      />
    );
  }

  if (error !== "") {
    return (
      <div className="sessions">
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div className="sessions">
      <div className="legend_text">Durée moyenne des sessions</div>
      {userSessions && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={userSessions.sessions}
            margin={{
              top: 30,
              right: 0,
              left: 0,
              bottom: 30,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <Tooltip
              content={<CustomTooltip />}
              animationEasing="easing-out"
              cursor={<CustomCursor />}
            />

            <XAxis
              dataKey="day"
              tickFormatter={weekDays}
              tick={{ fill: "white", opacity: ".6" }}
              tickLine={false}
              tickMargin={20}
              interval="preserveStartEnd"
              axisLine={false}
            />

            <YAxis hide={true} domain={["dataMin", "dataMax +10"]} />

            <Line
              type="natural"
              dataKey="sessionLength"
              stroke="white"
              strokeWidth={3}
              dot={false}
              activeDot={{
                fill: "white",
                strokeOpacity: ".5",
                strokeWidth: "10",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Sessions;
