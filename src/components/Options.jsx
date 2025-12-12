import {Fragment, useState} from "react";
import "../styles/Options.css";
import {generalInputs, educationInputs, experienceInputs} from "./Data.jsx";
import deleteIcon from "../assets/delete.svg";
import editIcon from "../assets/edit.svg";

export default function Options({data, handleSubmit, handleEditData, handleDeleteData}) {
  return (
    <div className={"options"}>
      <Card 
        inputs={generalInputs}
        data={data} 
        title={"General"} 
        vState={"list"} 
        handleSubmit={handleSubmit}
        handleEditData={handleEditData}
        handleDeleteData={handleDeleteData}
      />
      <Card
        inputs={educationInputs} 
        data={data} 
        title={"Education"} 
        vState={"list"}
        handleSubmit={handleSubmit}
        handleEditData={handleEditData}
        handleDeleteData={handleDeleteData}
      />
      <Card 
        inputs={experienceInputs} 
        data={data} 
        title={"Work experience"} 
        vState={"list"}
        handleSubmit={handleSubmit}
        handleEditData={handleEditData}
        handleDeleteData={handleDeleteData}
      />
    </div>
  );
}

function Card({inputs, data, title, vState, handleSubmit, handleEditData, handleDeleteData}) {
  const [visualState, setVisualState] = useState(vState); // default, list, edit
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState(undefined);
  const type = title === "Education" ? "education" : title === "General" ? "general" : "jobs";

  function toggleVisualState() {
    const vs = visualState === "default" ? "list" : "default";
    setIsEdit(false);
    setEditData(undefined);
    setVisualState(vs);
  }

  function handleAddData(e) {
    e.preventDefault();
    let tempObj = {};
    for (const x of e.target){
      if (x.type === "text" || x.type === "month")
        tempObj[x.name] = x.value;
    }
    handleSubmit(tempObj, type);
    if (type !== "General")
      setVisualState("list");
  }

  function toggleEdit(e) {
    const type = e.target.dataset.type;
    const id = e.target.dataset.id;
    setIsEdit(true);
    switch (type) {
      case "general":
        setEditData([data.firstName, data.lastName, data.email, data.phone]);
        break;
      case "education":
        setEditData(Object.values(data.education.filter(edu => edu.id === id)[0]));
        break;
      case "jobs":
        setEditData(Object.values(data.jobs.filter(job => job.id === id)[0]));
        break;
    }
    setVisualState("default");
  }

  function handleEdit(e) {
    e.preventDefault();
    let tempObj = {};
    for (const x of e.target) {
      if (x.type !== "submit" && x.type !== "reset") {
        tempObj[x.name] = x.value;
      }
    }
    const uuid = e.target.dataset.id;
    if (type === "jobs" || type === "education")
      tempObj.id = uuid;
    setIsEdit(false);
    setEditData(undefined);
    handleEditData(tempObj, type);
    setVisualState("list");
  }

  return (
    <div className={"card"}>
    <div className={"title"}>{title}</div>
    {
      visualState === "default"
        ? <Inputs 
            inputs={inputs}
            dataArr={editData}
            handleSubmit={handleAddData}
            handleCancel={toggleVisualState}
            handleEdit={handleEdit}
            toEdit={isEdit}
          />
        : <List 
            data={data}
            type={type}
            handleAdd={toggleVisualState}
            toggleEdit={toggleEdit}
            handleDelete={handleDeleteData}
          />
    }
    </div>
  );
}

function Inputs({inputs, dataArr, handleSubmit, handleCancel, handleEdit, toEdit}) {
  if (toEdit) {
    const dataId = dataArr.length >= 5 ? dataArr.at(-1) : 0;
    return (
      <div className={"inputs"}>
      <form onSubmit={handleEdit} data-id={dataId} onReset={handleCancel}>
      {
        inputs.map((inp, index) =>
          <Fragment key={inp.id}>
            <label>
              {inp.label}
              <input type={inp.type} defaultValue={dataArr[index]} name={inp.name}/>
            </label>
          </Fragment>
        )
      }
      <div className="buttons">
        <button type="submit">Save</button>
        <button type="reset">Cancel</button>
      </div>
      </form>
      </div>
    );
  }

  return (
    <div className={"inputs"}>
    <form onSubmit={handleSubmit} onReset={handleCancel}>
    {
      inputs.map(inp =>
        <Fragment key={inp.id}>
          <label>
            {inp.label}
            <input type={inp.type} name={inp.name}/>
          </label>
        </Fragment>
      )
    }
    <div className="buttons">
      <button type="submit">Save</button>
      <button type="reset">Cancel</button>
    </div>
    </form>
    </div>
  );
}

function List({data, type, handleAdd, handleDelete, toggleEdit}) {
  if (type === "general") {
    if (data.firstName === "" || data.lastName === "") {
      return <button onClick={handleAdd}>+</button>;
    }
    const fullName = `${data.firstName} ${data.lastName}`;
    return (
      <div className={"data-list"}>
        <div className={"data"}>
          <div>{fullName}</div>
          <div>{data.email}</div>
          <div>{data.phone}</div>
        </div>
        <div className="list-icons">
          <img src={deleteIcon} data-type={type} onClick={handleDelete}/>
          <img src={editIcon} data-type={type} onClick={toggleEdit}/>
        </div>
      </div>
    );
  }

  const dataArr = type === "education" ? data.education : data.jobs;
    const list = dataArr.map((obj, index) => {
    return (
      <div key={index} className={"data-list"}>
        <div className={"data"}>
        { 
          Object.values(obj).map((val, index2) => {
            return (val !== "" && index2 !== 5) && <div key={index2}>{val}</div>
          })
        }
        </div>
        <div className="list-icons">
          <img src={deleteIcon} data-type={type} data-id={obj.id} onClick={handleDelete}/>
          <img src={editIcon} data-type={type} data-id={obj.id} onClick={toggleEdit}/>
        </div>
      </div>
    )
  });

  return (
    <>
      <div className={"lists"}>
        {list}
      </div>
      <button onClick={handleAdd}>+</button>
    </>
  );
}

