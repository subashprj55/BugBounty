# BugBounty Platform Frontend

A React-based bug bounty platform where users can join as hunters or clients. Clients can publish bounties, and hunters can submit bugs. Each bounty offers a reward upon successful bug submission.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [API Integration](#api-integration)


## Features

- User-friendly React-based frontend
- Role-based access control for Hunters and Clients
- Integration with backend API for user authentication, bounty creation, and bug submissions
- Dynamic forms for bug submission and bounty creation
- Responsive design for mobile and desktop

## Tech Stack

- React.js
- React Router for navigation
- Axios and react-query for API integration
- MaterialUI and styled components for styling
- createContext for state management
- react-hook-form for form validation 

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- Git (to clone the repository)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/subashprj55/BugBounty.git
   cd BugBounty
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file and add the following code:**

   ```env
   REACT_APP_BASE_URL=https://prod-bugbounty.vercel.app/api
   ```

### Running the Project

1. **Start the Development Server**

   ```bash
   npm start
   ```

2. **Access the Application**

   - The app will be available at `http://localhost:3000/`.

## API Integration

The frontend communicates with the hosted backend API at [https://prod-bugbounty.vercel.app/](https://prod-bugbounty.vercel.app/) for the following features:

- **User Authentication**: Login, registration, and OTP verification
- **Bounty Management**: Listing, creating, updating, and deleting bounties
- **Bug Submission**: Listing, creating, updating, and deleting bugs

Ensure the frontend correctly integrates with the hosted backend.

