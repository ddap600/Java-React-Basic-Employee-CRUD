import React from "react";

const ListEmployee = () => {
  const dummyData = [
    {
      id: 10,
      firstName: "John",
      lastName: "James",
      email: "jjames@j.com",
    },
    {
      id: 20,
      firstName: "John",
      lastName: "Johnson",
      email: "jjohnson@j.com",
    },
    {
      id: 30,
      firstName: "John",
      lastName: "Jack",
      email: "jjack@j.com",
    },
  ];

  return (
    <div className={"container"}>
      <h2 className={"text-center"}>List of employees</h2>
      <table className={"table table-striped table-bordered"}>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
          </tr>
        </thead>

        <tbody>
          {dummyData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
