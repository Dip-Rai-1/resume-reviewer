# Resume Reviewer 🧠

An AI-powered resume analyser that gives you instant feedback on your resume — scoring it on keywords, impact, and structure, with tailored suggestions to help you stand out.

🔗 **Live Demo**: [resume-reviewer-j785r71mg-dip-rai-1s-projects.vercel.app](https://resume-reviewer-j785r71mg-dip-rai-1s-projects.vercel.app)

---

## Features

- Paste your resume and select your target job role
- Get an overall score out of 100
- Breakdown scores for keywords, impact, and structure
- Actionable improvement suggestions
- Keyword pills showing what's missing from your resume
- Animated score bars and smooth loading experience
- Fully responsive design

---

## Tech Stack

**Frontend**
- React
- Axios
- React Spinners
- CSS3 (animations, responsive layout)

**Backend**
- Node.js
- Express
- OpenAI API (GPT)

**Deployment**
- Frontend → Vercel
- Backend → Render

---

## Getting Started

### Prerequisites
- Node.js installed
- OpenAI API key

### Installation

1. Clone the repo
```bash
git clone https://github.com/Dip-Rai-1/resume-reviewer.git
```

2. Install backend dependencies
```bash
cd server
npm install
```

3. Create a `.env` file in the `server` folder
```
OPENAI_API_KEY=your_api_key_here
```

4. Start the backend
```bash
npm start
```

5. Install frontend dependencies
```bash
cd ../client
npm install
```

6. Start the frontend
```bash
npm start
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## How It Works

1. User pastes their resume and selects a job role
2. The frontend sends the resume text to the Express backend
3. The backend sends it to the OpenAI API with a structured prompt
4. OpenAI returns a JSON score breakdown with suggestions
5. The frontend displays the results with animated score bars and keyword pills

---

## Project Structure

```
resume-reviewer/
├── client/          # React frontend
│   └── src/
│       ├── components/
│       └── App.jsx
└── server/          # Express backend
    ├── routes/
    ├── services/
    └── index.js
```

## Screenshots

![Landing Page](screenshots/landing.png)
![Results Page](screenshots/results.png)

---

## Author

**Dip Rai** — [GitHub](https://github.com/Dip-Rai-1)
