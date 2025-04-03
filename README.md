This is a full-stack Employee Pulse Survey Application built with ReactJS (Frontend), Node.js + Express (Backend), and MongoDB (Database). It allows employees to submit surveys and admins to view & export responses.

**Features**\
Employee:\
✅ Register/Login\
✅ Submit a pulse survey\
✅ View past survey responses

Admin:\
✅ Login \
✅ View all employee responses\
✅ Export survey data (CSV/JSON)

**Tech Stack**\
Frontend: ReactJS, React Router, Axios\

Backend: Node.js, Express.js, JWT Authentication\

Database: MongoDB + Mongoose\

**Setup Instructions**

1. Clone the Repository

    git clone https://github.com/satyapriyamishra/survey-app.git

    cd employee-pulse-survey

2.Backend Setup

    cd backend

    npm install

3. Create .env file in backend

    PORT=5000

    MONGO_URI=your_mongodb_connection_string

    JWT_SECRET=your_secret_key

4. Start Backend Server

    npm start 


5. Install Frontend Dependencies

    cd ../frontend

    npm install

6. Start React App

    npm start

Frontend will run on http://localhost:3000

**API Endpoints**

<ins>Authentication</ins>

POST /api/auth/register → Register User

POST /api/auth/login → Login User

<ins>Employee APIs</ins>

POST /api/surveys → Submit survey


GET /api/surveys → Get employee's past surveys

<ins>Admin APIs</ins>

GET /api/surveys/admin → Get all employee surveys



**Usage** 

<ins>Employee</ins>

✅ Register/Login

✅ Submit a survey

✅ View past submissions

<ins>Admin</ins>

✅ Login

✅ View employee responses

✅ Export data

**Future Improvements** 

🔹 Add survey analytics

🔹 Implement role-based access control

🔹 Improve UI/UX

**License**

MIT License

