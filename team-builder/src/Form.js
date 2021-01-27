import React from "react";

function Form(props) {
  const { values, update, submit } = props;

  const onChange = (event) => {
    const { name, value } = event.target;
    update(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="for-group inputs">
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={values.name}
        />

        <label>Email: </label>
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={values.email}
        />

        <label>
          Role:
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">--select role--</option>
            <option value="friend">friend</option>
            <option value="bestFriend">best friend</option>
            <option value="bestestFriend">bestesfriend</option>
          </select>
        </label>

        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
