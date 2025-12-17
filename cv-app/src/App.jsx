import { useState } from 'react'
import './App.css'
import Options from "./components/Options.jsx";
import Document from "./components/Document.jsx";

const defaultData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  education: [],
  jobs: []
};

function App() {
  const [data, setData] = useState(defaultData);

  function handleAddData(obj, type) {
    switch (type) {
      case "general":
        setData({
          ...data,
          ...obj
        });
        break;
      case "education":
        obj.id = self.crypto.randomUUID();
        setData({
          ...data,
          education: [...data.education, obj]
        });
        break;
      case "jobs":
        obj.id = self.crypto.randomUUID();
        setData({
          ...data,
          jobs: [...data.jobs, obj]
        });
        break;
    }
  }

  function handleEditData(obj, type) {
    switch (type) {
      case "general":
        setData({
          ...data,
          ...obj
        });
        break;
      case "education":
        setData({
          ...data,
          education: [...data.education.filter((item) => item.id !== obj.id), obj]
        });
        break;
      case "jobs":
        setData({
          ...data,
          jobs: [...data.jobs.filter((item) => item.id !== obj.id), obj]
        });
        break;
    }
  }

  function handleDeleteData(e) {
    const type = e.target.dataset.type;
    const id = e.target.dataset.id;
    switch (type) {
      case "general":
        setData({
          ...data,
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        });
        break;
      case "education":
        setData({
          ...data,
          education: [...data.education.filter((item) => item.id !== id)]
        });
        break;
      case "jobs":
        setData({
          ...data,
          jobs: [...data.jobs.filter((item) => item.id !== id)]
        });
        break;
    }
  }

  return (
    <>
    <Options 
      data={data} 
      handleSubmit={handleAddData} 
      handleEditData={handleEditData}
      handleDeleteData={handleDeleteData}
    />
    <Document />
    </>
  );
}

export default App;
