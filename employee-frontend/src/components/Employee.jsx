import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployeeById,
} from "../services/EmployeeService.js";
import { useNavigate, useParams } from "react-router-dom";

const Employee = () => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployeeById(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const saveEmployee = (event) => {
    event.preventDefault();

    if (validateForm()) {
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
    }

    function validateForm() {
      let valid = true;

      // ... -> spread operator : it means "copy everything from errors into a new object"
      const errorsCopy = { ...errors };

      // if first name is not empty, trim() will return a value
      // so we use this to check if first name is empty or not
      if (firstName.trim()) {
        errorsCopy.firstName = "";
      } else {
        errorsCopy.firstName = "First name is required!";
        valid = false;
      }

      if (lastName.trim()) {
        errorsCopy.lastName = "";
      } else {
        errorsCopy.lastName = "Last name is required!";
        valid = false;
      }

      if (email.trim()) {
        errorsCopy.email = "";
      } else {
        errorsCopy.email = "Email is required!";
        valid = false;
      }

      setErrors(errorsCopy);

      return valid;
    }
  };

  function pageTitle() {
    if (id) {
      return <h2 className={"text-center"}>Update Employee</h2>;
    } else {
      return <h2 className={"text-center"}>Add Employee</h2>;
    }
  }

  return (
    <div className={"container"}>
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  value={firstName}
                  className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                  onChange={(event) => setFirstName(event.target.value)}
                ></input>
                {errors.firstName && (
                  <div className={"invalid-feedback"}>{errors.firstName}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                  onChange={(event) => setLastName(event.target.value)}
                ></input>
                {errors.lastName && (
                  <div className={"invalid-feedback"}>{errors.lastName}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={(event) => setEmail(event.target.value)}
                ></input>
                {errors.email && (
                  <div className={"invalid-feedback"}>{errors.email}</div>
                )}
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
