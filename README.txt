Backend:

These are steps I took when first setting up the project.

I used Spring Initializr to get started with only Spring Web, Spring Data JPA and MySQL Driver as dependencies.
Then added Lombok dependency from the Maven online repository.

If you are cloning, , and using IntelliJ, you might need to do these:
Go pom.xml, right-click, "add as maven project".
Go to settings and enable annotation processing.
Go to settings and enable / install the Lombok plugin.

Database:

This project uses a MySQL database.

To set this up, you will need to download and install MySQL server and MySQL workbench.
Alternatively, you can just setup a H2 database for testing and development.

The database connection can be configured in "application.properties".
