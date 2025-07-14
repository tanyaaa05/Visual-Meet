# 📅[Visual Meet Project 🔗 ](https://visual-meet-ts.vercel.app) 👈 <br/>

> A full-stack MERN platform for seamless virtual meetings and real-time collaboration 🌟

---

## 🚀 Project Overview

Visual‎-Meet is a modern **virtual meeting application** built using the MERN stack—**MongoDB**, **Express.js**, **React**, and **Node.js**. It brings together real-time interactions, rich scheduling tools, and analytics to deliver a polished meeting experience.

---

## ✨ Key Features

* ⚡ **Real-Time Collaboration** via WebSockets for fluid, delay-free interaction
* 🔐 **Secure Authentication** using JWT-powered user management
* 🗕 **Meeting Scheduler** integrated with an interactive calendar and reminders
* 💬 **In-Meeting Chat** for seamless communication during sessions
* 📊 **Dashboard & Analytics** to track meetings, attendance, and user activity

---

## 🧰 Tech Stack

| Layer        | Technologies                 |
| ------------ | ---------------------------- |
| Database     | MongoDB                      |
| Backend      | Node.js + Express            |
| Frontend     | React                        |
| Realtime API | WebSockets (e.g., Socket.io) |
| Auth         | JWT-based authentication     |
| Hosting      | Vercel / Netlify (optional)  |

---

## 📂 Project Structure

```
/
├── client/         # React frontend
├── server/         # Express API backend
│   ├── routes/     # API endpoints
│   ├── models/     # MongoDB schemas
│   └── controllers/# Business logic
├── shared/         # Shared utils or configs
├── README.md
└── package.json
```

---

## 🛠️ Installation & Usage

### Clone the Repo

```bash
git clone https://github.com/tanyaaa05/Visual-Meet.git
cd Visual-Meet
```

### Backend Setup

```bash
cd server
npm install
# create a .env file: e.g. MONGO_URI, JWT_SECRET, etc.
npm run start     # or npm run dev for development with nodemon
```

### Frontend Setup

```bash
cd ../client
npm install
npm start         # Launches React app on localhost
```

---

## 🔍 How It Works

* **Schedule a Meeting** – Create meeting events via calendar UI
* **Join Live Sessions** – Real-time interactions using WebSockets
* **Chat During Meetings** – Participate using in-meeting chat
* **Track Analytics** – View stats on meeting usage and activity

---

## 🧹 Code Snippets

**Server: Schedule API**

```js
app.post('/api/meetings', meetingController.createMeeting);
```

**Client: WebSocket Connection**

```js
const socket = io(SERVER_URL);
socket.emit('joinRoom', roomId);
```

---

## 🤝 Contributing

Contributions welcome! Here's how you can help:

1. ⭐ Star the repo
2. 🧪 Fork & create a feature branch
3. 📄 Open a Pull Request with improvements or bug fixes
4. 📩 Add issues or feature suggestions

Your contributions make this project better!

---

## 👩‍💻 Project Author

**Tanya Singh**

* GitHub: [@tanyaaa05](https://github.com/tanyaaa05)
* Portfolio: [portfolio-tanya-singh-projects.vercel.app](https://portfolio-tanya-singh-projects.vercel.app/)

---

## 📄 License

Licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

**Enjoy building and collaborating! 🤝✨**



