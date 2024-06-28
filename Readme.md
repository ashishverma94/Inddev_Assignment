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