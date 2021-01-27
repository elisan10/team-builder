import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "./axios";
import Form from "./Form";
import TeamMember from "./TeamMember";

const initialFormValue = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [teamMembers, setTeamMembers] = useState(null);
  const [formValues, setFormValues] = useState(initialFormValue);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role)
      return;

    axios
      .post("fakeapi.com", newTeamMember)
      .then((res) => {
        setTeamMembers([newTeamMember, ...teamMembers]);
        setFormValues(initialFormValue);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setTeamMembers(res.data));
  }, []);

  if (!teamMembers) return null;

  return (
    <div className="container">
      <h1>Team Member Form</h1>

      <Form values={formValues} update={updateForm} submit={submitForm} />

      {teamMembers.map((member) => {
        return <TeamMember key={member.id} details={member} />;
      })}
    </div>
  );
}

export default App;
