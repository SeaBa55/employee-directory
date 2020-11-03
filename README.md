# Unit 19 React Homework: Employee Directory

## Description

This application is an employee search tool, created with react. This app allows users to pinpoint employee details with the implementation of sort toggle buttons as the data table column labels, and a dropdown integrated search bar that enables the user to search by column.

![React-App](./react-employee-directory/public/React-App.gif)

## Table of Contents

* [Installation](#installation) 
* [License](#license) 
* [Contributors](#contributing) 
* [Tests](#tests)
* [Revisions](#Revisions) 

## Installation

Run the app locally by navigating to the react-app directry (react-employee-directory) in terminal and running the following commands:
> npm i

> npm start

Try it on the web:

> https://seaba55.github.io/employee-directory/

## License

![License](https://img.shields.io/badge/License-none-blue.svg)

## Contributing

none

## Tests

none

## Revisions
employee-directory_v1.0 - Initial commit: Added basic README, react file structure, and .gitignore files.

employee-directory_v1.1 - Random user API integrated and displaying profile image, first and last name for 20 random employees.

employee-directory_v1.2 - Added unique key prop to my DataRow divs using the index value used in the map method.

employee-directory_v1.3 - Added a lable row above the current table structure.

employee-directory_v1.4 - Added a search bar component above the table area. Restructured table divs using bootstrap styling.

employee-directory_v1.5 - Changed directory configuration.

employee-directory_v1.6 - Added toggle buttons to the table col lables.

employee-directory_v1.7 - Added sort functionality to data lable toggle buttons.

employee-directory_v1.8 - Added crude search feature, which is currently only capable of searching by first name (wildcard).

employee-directory_v1.9 - Changed the search button to a dropdown, which enables the user to select the column for which the search will be applied to.

employee-directory_v2.0 - Refactored DataLabeles.js. Converted hard coded elements to programtic elements based on the number of columns.  

employee-directory_v2.1 - Consolidated first and last names into a single row, and added additional employee information columns. Refactored the code for modularity, where now the rendered data is controlled at a single point in the useEffect hook return object in component Main.

employee-directory_v2.2 - Updated styles for more uniform aesthetic.

- - -

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.