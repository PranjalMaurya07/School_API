
# School Management API

A Node.js and Express-based RESTful API to manage school data. This project enables users to add schools and retrieve a list of schools sorted by their proximity to a specified location.


# Features
- Add new schools with their details.
- Retrieve a list of schools sorted by proximity to a user-specified location.
- Input validation for data integrity. 


# Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building APIs.
- **MySQL**: Relational database to store school data.


# Prerequisites

- Node.js installed on your system.
- MySQL installed and running.
- A tool like Postman to test the API endpoints.
# Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` 

`DB_PASSWORD`



# API Endpoints


```http
  POST /api/addSchool : Validates the input data and adds a new school to the schools table..
```
```http
  GET /api/listSchools : Fetches all schools from the database, sorts them based on proximity to the user's location, and returns the sorted list..
```






# Start the Application

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


# 🚀 About Me
I am a full-stack MERN developer with a solid understanding of databases and programming languages like C++ and JavaScript.

## Contact:

- Name : Pranjal Kumar Maurya
- Email : pranjalmaurya003@gmail.com
- Github : https://github.com/PranjalMaurya07
