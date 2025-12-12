const generalInputs = [
  {
    id: 0,
    name: "firstName",
    type: "text",
    label: "First Name"
  },
  {
    id: 1,
    name: "lastName",
    type: "text",
    label: "Last Name"
  },
  {
    id: 2,
    name: "email",
    type: "text",
    label: "Email"
  },
  {
    id: 3,
    name: "phone",
    type: "text",
    label: "Phone"
  }
];

const educationInputs = [
  {
    id: 0,
    name: "school",
    type: "text",
    label: "School"
  },
  {
    id: 1,
    name: "major",
    type: "text",
    label: "Major"
  },
  {
    id: 2,
    name: "schoolStartDate",
    type: "month",
    label: "Start Date"
  },
  {
    id: 3,
    name: "schoolEndDate",
    type: "month",
    label: "End Date"
  },
  {
    id: 4,
    name: "schoolCustom",
    type: "text",
    label: "Custom"
  },
];

const experienceInputs = [
  {
    id: 0,
    name: "company",
    type: "text",
    label: "Company"
  },
  {
    id: 1,
    name: "position",
    type: "text",
    label: "Position"
  },
  {
    id: 2,
    name: "workStartDate",
    type: "month",
    label: "Start Date"
  },
  {
    id: 3,
    name: "workEndDate",
    type: "month",
    label: "End Date"
  },
  {
    id: 4,
    name: "workCustom",
    type: "text",
    label: "Custom"
  },
];

const defaultData = {
  fullName: "",
  email: "",
  phone: "",
  schools: [],
  jobs: [],
}

export {generalInputs, educationInputs, experienceInputs, defaultData};
