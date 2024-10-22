# Bank Account

## Project Title and Description
Bank-Account is a web application designed to manage customers and account operations using Redux for state management. Users can create customers, manage account balances, and perform basic banking operations.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/45227df4-da5a-42f1-98b2-605b58154834" width="700" alt="Bank Account">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo (link)](#demo-link)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Create and manage customers with a name and national ID.
- Perform banking operations: deposit, withdraw, request a loan, and pay back a loan.
- Display account balance and loan status.
- Simple and intuitive user interface with Redux for state management.

## Installation

### Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/bankAccount.git
    ```

2. Navigate to the project directory:
    ```bash
    cd bankAccount
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
To start the application, run the following command:
```bash
npm start
```

After starting, go to [http://localhost:3000](http://localhost:3000) in your web browser.

## Screenshots
![image]()

<table> 
  <tr> 
    <th>Create Customer</th> 
    <th>Account Operations</th> 
  </tr> 
  <tr> 
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;"> 
      <a href="https://github.com/user-attachments/assets/1515725e-ed02-4c37-8442-7062abe6a4b5" target="_blank" rel="noopener noreferrer"> 
        <img src="https://github.com/user-attachments/assets/1515725e-ed02-4c37-8442-7062abe6a4b5" width="300" height="300" alt="Create Customer"> 
      </a> 
    </td> 
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;"> 
      <a href="https://github.com/user-attachments/assets/14bfcb57-6b96-44f7-aec0-430e139eb57f" target="_blank" rel="noopener noreferrer"> 
        <img src="https://github.com/user-attachments/assets/14bfcb57-6b96-44f7-aec0-430e139eb57f" width="300" height="300" alt="Account Operations"> 
      </a> 
    </td> 
  </tr> 
</table>

## Demo (link)

Check out the live demo of the application [here](https://bankaccountv1.netlify.app).

## Project Structure

```css
bankAccount/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
├── src/
│   ├── features/
│   │   ├── accounts/
│   │   │   ├── AccountOperations.js
│   │   │   ├── BalanceDisplay.js
│   │   │   ├── accountSlice.js
│   │   ├── customers/
│   │   │   ├── CreateCustomer.js
│   │   │   ├── Customer.js
│   │   │   ├── customerSlice.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── store.js
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
```

## Technologies Used

[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](#)
[![Redux Badge](https://img.shields.io/badge/-Redux-764ABC?style=for-the-badge&labelColor=black&logo=redux&logoColor=764ABC)](#)

## Third-Party Libraries

- **Redux Toolkit**: For efficient Redux development.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the LICENSE file for details.
