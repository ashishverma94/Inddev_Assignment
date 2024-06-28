# Inddev_Assignment

This repository contains a simple User Management API built with Node.js and Express, which supports operations such as creating, reading, updating, and deleting user records.

## Prerequisites

Before running this project, ensure you have the following software installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Postman](https://www.postman.com/)
- [MongoDB](https://www.mongodb.com/) (running locally or a MongoDB Atlas account)

## Installation
1. Clone this repository to your local machine using:
   ```sh
   git clone https://github.com/ashishverma94/Inddev_Assignment.git
   cd Inddev_Assignment
   ```
3. Open Inddev_Assignment folder in your vscode
4. Install dependencies using :
   ```sh
   npm install
   ```
5. Make .env file in root directory and make two variable in this :
   ```sh
   PORT = 3000
   DB_URL = mongodb+srv://<username>:<password>@receiptdetails.z9b35jf.mongodb.net/ 
   ```

6. To run the development server and view the project in your browser:
      ```sh
   npm run dev
   ```

7. Open Postman. Click on Import in the top left corner. Select the swagger.yaml file from the repository.



## Questions
   **How long did it take you to complete this assignment?**
   I completed this assignment in approximately 5 hours.
  
  **What about this assignment did you find most challenging?**
  The most challenging part was writing the controller for the `getAllUsers` API. This involved implementing pagination, search functionality, and sorting, which required careful handling of query parameters.
  
  **What about this assignment did you find unclear?**
  I found the requirements for the schema definitions to be unclear, particularly regarding which fields were mandatory and how they should be validated.
  
  **What challenges did you face that you did not expect?**
   I faced unexpected challenges in implementing the logger.
  
  **Do you feel like this assignment has an appropriate level of difficulty?**
  Difficulty level was average. It covered skills including creating API endpoints and managing data with MongoDB
  
  **Briefly explain your decisions to use tools, frameworks and libraries like fastapi, DRF etc.**
  FastAPI is  modern, high-performance framework, which is perfect for building robust and fast APIs.
  
  **Did you make certain assumptions and decisions around the application? Please elaborate on your reasonings.**
   I assumed that certain fields (e.g., `first_name`, `last_name`, `email`) are mandatory and validated them to return appropriate error messages.
 

