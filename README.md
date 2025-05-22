# MERN Video Chat & Social App

A full-stack real-time messaging and video calling application built with the MERN stack. It includes authentication, friend system, real-time chat, video calls, protected routes, onboarding, themes, and much more.

## 🚀 Tech Stack

**Backend:** Node.js, Express, MongoDB (Mongoose), JWT Authentication, Stream Chat API  
**Frontend:** React 19, Vite, Tailwind CSS + DaisyUI, Zustand, TanStack React Query, React Router, Axios, Lucide React, React Hot Toast

## 🔑 Features

- JWT Authentication (Login / Signup)  
- Onboarding flow  
- Friend system (send/accept requests)  
- Real-time chat with typing indicators and reactions  
- Video calling with Stream  
- Theme selector with 32+ themes  
- Protected routes and role-based access  
- Notifications system  
- Custom hooks and reusable components  
- Clean code architecture and best practices  
- API tested and production-ready  

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/daianaadepaula/streamify-video-calls.git
cd streamify-video-calls
```

### 2. Install dependencies for both frontend and backend:

```bash
   npm run build
```

Create a .env file in the root directory with the following content:

```bash
PORT=5001
MONGO_URI=your_mongodb_uri
STEAM_API_KEY=your_stream_api_key
STEAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret
```

### 3. Run the application in development mode:

 ```bash
   npm run dev
 ```

The frontend runs at http://localhost:5173 and connects to the backend at http://localhost:5001.
This will start both the frontend and backend on different ports.

## Scripts

- **Development**: npm run dev — Starts the backend server with nodemon in development mode.
- **Production**: npm start — Starts the backend server in production mode.
- **Build**: npm run build — Installs dependencies and builds the frontend.


## 🧪 Best Practices

* Uses TanStack Query for server state
* Zustand for global state management
* Axios for HTTP requests
* Custom hooks and UI components
* Error handling with toast notifications
* Responsive UI with Tailwind and DaisyUI
* Modular codebase following clean architecture principles

## 👤 Author

Name: Daiana de Paula </br>
Email: daianaadepaula1@gmail.com </br>
LinkedIn: [https://www.linkedin.com/in/daianadepaula](https://www.linkedin.com/in/daianadepaula/) </br>

## 📄 License

This project is licensed under the MIT License.
