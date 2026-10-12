# CareerConnect – Job Portal Web Application

CareerConnect is a full-stack job portal web application that connects students and job seekers with employment opportunities. Users can register, sign in, manage their career profiles, explore available jobs, apply for positions, and track their applications through a simple and responsive interface.

The application is built using React for the frontend and Spring Boot for the backend, with MySQL for data storage. The project is deployed online to demonstrate a complete full-stack application.

## 🌐 Live Demo

- **Frontend:** https://career-connect-wheat.vercel.app
- **Backend API:** https://careerconnect-backend-w9y5.onrender.com
- **Jobs API:** https://careerconnect-backend-w9y5.onrender.com/api/jobs

> Note: The backend runs on a free instance that may sleep during inactivity. The first request after a period of inactivity may take longer to respond.

## ✨ Features

### User Authentication
- User registration and login.
- JWT-based authentication.
- Password encryption using BCrypt.
- Protected endpoints for authenticated users.

### Student Dashboard
- Personalized dashboard after login.
- Student account information.
- Navigation to profile management, job listings, and applications.

### Student Profile Management
- Manage career and education information.
- Maintain skills and contact details.
- Upload a resume for job applications.

### Job Listings
- View available job opportunities.
- See job title, company, location, job type, description, requirements, and application deadline.
- Apply for available positions.

### Application Tracking
- Submit job applications.
- View previously submitted applications.
- Track application status and application dates.
- Refresh application information.

### Responsive User Interface
- Clean, modern interface.
- Consistent navigation and page layouts.
- User-friendly dashboard and job cards.

## 🛠️ Technology Stack

| Component | Technology |
|---|---|
| Frontend | React |
| Frontend build tool | Vite |
| Frontend styling | CSS |
| Backend | Java, Spring Boot |
| Security | Spring Security, JWT |
| Password encryption | BCrypt |
| Database | MySQL |
| ORM | Spring Data JPA, Hibernate |
| Build tool | Maven |
| Backend deployment | Render |
| Frontend deployment | Vercel |
| Database hosting | Aiven for MySQL |
| Version control | Git and GitHub |

## 🏗️ Project Architecture

The application follows a frontend-backend-database architecture.

1. **Frontend:** React provides the user interface and sends HTTP requests to the backend API.
2. **Backend:** Spring Boot processes requests, applies authentication and authorization rules, and implements application logic.
3. **Database:** MySQL stores user accounts, student profiles, job listings, and job applications.
4. **Authentication:** JWT tokens are used to authenticate users when accessing protected API endpoints.
5. **Deployment:** Vercel hosts the frontend, Render hosts the backend, and Aiven provides the MySQL database service.

## 📁 Repository Structure

```text
CareerConnect/
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/careerconnect/
│   │       └── resources/
│   │           └── application.properties
│   ├── .mvn/
│   ├── mvnw
│   ├── mvnw.cmd
│   ├── pom.xml
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── api.js
│   ├── public/
│   ├── package.json
│   └── index.html
└── .gitignore
```

The exact source-file organization may vary as the project develops.

## ⚙️ Prerequisites

Install the following software before running the project locally:

- Java Development Kit (JDK) 21
- Node.js and npm
- MySQL 8 or a compatible MySQL database service
- Git
- A code editor such as Visual Studio Code or IntelliJ IDEA

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/pranithkumar8639/CareerConnect.git
cd CareerConnect
```

### 2. Configure the database

Create a MySQL database for local development:

```sql
CREATE DATABASE careerconnect;
```

Configure the backend environment variables with your database connection details and a strong JWT secret.

Example values for a local MySQL database:

```text
DB_URL=jdbc:mysql://localhost:3306/careerconnect
DB_USERNAME=your_mysql_username
DB_PASSWORD=your_mysql_password
JWT_SECRET=your_generated_base64_secret
```

Replace the example values with your own local credentials. Do not commit passwords or production secrets to GitHub.

The deployed application uses the Aiven database connection configured in Render.

### 3. Run the backend

Open a terminal in the project root and navigate to the backend:

```bash
cd backend
```

On Windows PowerShell, set the required environment variables for your local session. For example:

```powershell
$env:DB_URL="jdbc:mysql://localhost:3306/careerconnect"
$env:DB_USERNAME="your_mysql_username"
$env:DB_PASSWORD="your_mysql_password"
$env:JWT_SECRET="your_generated_base64_secret"
```

Replace the example values before running the application.

Start Spring Boot:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend should start at:

http://localhost:8080

If your environment already has the required variables configured, you do not need to set them again.

### 4. Run the frontend

Open a second terminal and navigate to the frontend:

```bash
cd frontend
npm install
npm run dev
```

Vite will display the local frontend URL in the terminal, usually:

http://localhost:5173

Open that URL in your browser.

Ensure that the frontend API configuration points to `http://localhost:8080` when testing locally, or to the deployed backend URL when using the live application. Configure the API base URL according to the implementation in `frontend/src/api.js`.

## 🔗 API Information

The backend exposes REST endpoints for the application's features.

The publicly accessible jobs endpoint is:

```text
GET /api/jobs
```

Full URL:

https://careerconnect-backend-w9y5.onrender.com/api/jobs

Authentication, profile management, resume uploads, and application endpoints may require a valid JWT token. The exact request paths and payloads are defined in the backend controllers.

## ☁️ Deployment

### Frontend – Vercel

The React frontend is deployed using Vercel.

1. Import the GitHub repository into Vercel.
2. Set the frontend project root directory to `frontend`.
3. Configure the build command as `npm run build`.
4. Configure the output directory as `dist`.
5. Set the required frontend environment variables, if applicable.
6. Deploy the application.

Live frontend: https://career-connect-wheat.vercel.app

### Backend – Render

The Spring Boot backend is deployed using Render and Docker.

1. Connect the GitHub repository to Render.
2. Configure the service to use Docker.
3. Set the Dockerfile path to `backend/Dockerfile`.
4. Add the required environment variables in the Render dashboard.
5. Deploy the backend and verify the deployment logs.

Live backend: https://careerconnect-backend-w9y5.onrender.com

### Database – Aiven

Aiven for MySQL provides the hosted database used by the deployed backend.

The Render service must be configured with the correct database URL, username, password, and SSL settings. Database credentials should be stored as environment variables rather than committed to source control.

## 🔐 Security Considerations

- Passwords are hashed using BCrypt.
- JWT-based authentication protects secured API endpoints.
- Spring Security controls access to backend resources.
- CORS configuration specifies which frontend origins can access the backend.
- Database credentials and JWT secrets must remain private.
- Uploaded resumes and other user-generated files should not be committed to the public repository.
- Production configuration should use HTTPS and appropriate access controls.

## 🧪 Testing and Verification

The application can be verified by testing the following workflows:

- Register a new user and log in.
- Open the dashboard after successful authentication.
- View available jobs.
- Apply for a job while authenticated.
- Open the applications page and verify the submitted application.
- Update student profile information.
- Test protected endpoints with and without a valid JWT token.
- Verify the backend API and database connection.
- Check frontend and backend deployment logs if an error occurs.

## 🎯 Project Objectives

- Build a complete full-stack web application.
- Demonstrate frontend and backend integration using REST APIs.
- Implement authentication and authorization.
- Store and retrieve application data using MySQL.
- Provide a platform for exploring jobs and tracking applications.
- Practice Git-based development and cloud deployment.

## 🔮 Future Enhancements

- Recruiter registration and dashboard.
- Job creation and management for recruiters.
- Search, filtering, and sorting of job listings.
- Advanced application status tracking.
- Email notifications for application updates.
- Resume preview and improved document management.
- Automated testing and continuous integration.
- Improved monitoring, logging, and production security.

## 👨‍💻 Author

**Pranith Kumar**

GitHub: https://github.com/pranithkumar8639

## 📄 License

This project is intended for educational, portfolio, and demonstration purposes. Add a LICENSE file if you intend to distribute the project under a specific open-source license.
