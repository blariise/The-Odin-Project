import {Fragment} from "react";
import "../styles/Options.css";
import {general, education, experience} from "./Data.jsx";

export default function Options() {
  return (
    <div className={"options"}>
      <Card inputs={general} title={"General"}/>
      <Card inputs={education} title={"Education"}/>
      <Card inputs={experience} title={"Work experience"}/>
    </div>
  );
}

function Card({inputs, title}) {
  return (
    <div className={"card"}>
    <div className={"title"}>{title}</div>
    <div className={"inputs"}>
    {
      inputs.map(inp =>
        <Fragment key={inp.id}>
          <label>
            {inp.label}
            <input type={inp.type} id={inp.name}/>
          </label>
        </Fragment>
      )
    }
    </div>
    </div>
  );
}

