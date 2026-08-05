About:

This is a small CRUD application built to explore and learn about React, Java, Spring, and how to connect a React frontend and Java backend.



--Backend:

Java / Spring 

Spring Initializr was used for the initial setup.
Dependencies used were Spring Web, Spring Data JPA and MySQL Driver.
Lombok was later added from the Maven online repository.

When cloning, and using IntelliJ, these steps might be required:
Go pom.xml, right-click, "add as maven project".
Go to settings and enable annotation processing.
Go to settings and enable / install the Lombok plugin.


--Frontend:

JavaScript / React / Bootstrap / Vite 

Vite was used for the initial setup. "npm create vite@latest"
Bootstrap was installed later. "npm install bootstrap --save"

If you are cloning, you might need to run "npm install" in the project folder.

To start the frontend:
Start a command line terminal, move to the project directory and run "npm run dev".

-- Connection:

Axios / React Router

To install Axios: "npm install axios --save"
To install React Router: "npm install react-router -dom --save"

-- Database:

MySQL / MySQL Workbench

Download and install MySQL server and MySQL workbench.
The database connection can be configured in "application.properties".

-- Others

Postman was used to test API calls to the backend.
