# Task Management App

## 📌 Overview
The **Task Management App** is a Node.js-based application that helps users create, manage, and track their tasks efficiently. It provides features like user authentication, task assignment, and progress tracking.

## 🚀 Features
- ✅ User authentication (Login/Signup)
- 📝 Create, update, delete tasks
- 📅 Set task due dates and priorities
- 📊 Task status tracking (To Do, In Progress, Completed)
- 🔔 Notifications & reminders

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Token)
- **Other:** Nodemailer (for email notifications), bcrypt.js (password hashing)

## 📂 Folder Structure
```
project-root/
│── src/
│   ├── controllers/       # Route handlers
│   ├── models/            # Mongoose models
│   ├── routes/            # Express routes
│   ├── middleware/        # Custom middleware
│   ├── config/            # Configuration files
│── tests/                 # Unit and integration tests
│── .env                   # Environment variables
│── package.json           # Dependencies & scripts
│── README.md              # Documentation
```

## 🏗 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file and add the following at root level:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Server
```sh
npm run dev
```

## 🎯 API Endpoints
### **Auth Routes**
- `POST /api/auth/register` → Register a new user
- `POST /api/auth/login` → Login user

### **Task Routes** (Requires Auth)
- `POST /api/tasks` → Create a new task
- `GET /api/tasks` → Get all tasks
- `GET /api/tasks/:id` → Get task by ID
- `PUT /api/tasks/:id` → Update task
- `DELETE /api/tasks/:id` → Delete task

## 🛠 Running Tests
```sh
npm test
```

## 🤝 Contributing
Feel free to fork this repository and submit pull requests.

## 📜 License
This project is licensed under the **MIT License**.

---
Made with ❤️ by [Your Name](https://github.com/your-username)

