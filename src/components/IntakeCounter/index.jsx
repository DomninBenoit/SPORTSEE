import { any, number, string } from "prop-types";
import "./style.scss";

const IntakeCounter = ({ name, value, measure, svg }) => {
  return (
    <div className="intakeCounter">
      <img className="intakeSvg" alt={name} src={svg} />
      <div className="intakeData">
        <p className="value">
          {value}
          {measure}
        </p>
        <p className="name">{name}</p>
      </div>
    </div>
  );
};

IntakeCounter.propTypes = {
  name: string,
  value: number,
  measure: string,
  svg: any,
};

export default IntakeCounter;
