Frontend:

Front end was built using React and Javascript, initialized using Vite by running "npm create vite@latest".
I also installed Boostrap, by running "npm install bootstrap --save".

If you are cloning, you might need to run "npm install" in the project folder.

To start the frontend:
Start a command line terminal, move to the project directory and run "npm run dev".

Backend:

These are steps I took when first setting up the project.

I used Spring Initializr to get started with only Spring Web, Spring Data JPA and MySQL Driver as dependencies.
Then added Lombok dependency from the Maven online repository.

If you are cloning, , and using IntelliJ, you might need to do these:
Go pom.xml, right-click, "add as maven project".
Go to settings and enable annotation processing.
Go to settings and enable / install the Lombok plugin.

Front To End Connection:

To coonect the React Frontend to the Java Backend I am using axios.
Installed, by running "npm install axios --save"

Database:

This project uses a MySQL database.

To set this up, you will need to download and install MySQL server and MySQL workbench.
Alternatively, you can just setup a H2 database for testing and development.

The database connection can be configured in "application.properties".
