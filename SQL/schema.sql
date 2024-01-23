 
USE Company;
DROP TABLE IF EXISTS Employees;
CREATE TABLE Employees (
    LastName varchar(20),
    FirstName varchar(20),
    JobTitle varchar(20),
    Department varchar(20),
    EMPID int(10)
);


DROP TABLE IF EXISTS Departments;
CREATE TABLE Departments (
    DepartmentName varchar(35),
    DepartmentID varchar(10)
);

DROP TABLE IF EXISTS Roles;
CREATE TABLE Roles (
    JobTitle varchar(20),
    RoleID varchar(20),
    Department varchar(16),
    Salary varchar(16)
);

INSERT INTO Employees VALUES ("bobbington", "bob", "Manager", "finance", "1")
