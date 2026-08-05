import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeService.js";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigator = useNavigate();

  const saveEmployee = (event) => {
    event.preventDefault();

    const employee = {
      firstName,
      lastName,
      email,
    };

    console.log(employee);

    createEmployee(employee).then((response) => {
      console.log(response.data);
      navigator("/employee");
    });
  };

  return (
    <div className={"container"}>
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className={"text-center"}>Add Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  value={firstName}
                  className="form-control"
                  onChange={(event) => setFirstName(event.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  value={lastName}
                  className="form-control"
                  onChange={(event) => setLastName(event.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={(event) => setEmail(event.target.value)}
                ></input>
              </div>

              <button className="btn btn-success" onClick={saveEmployee}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
