# Archivist AI

A full stack AI app I'm building as a personal project. It basically helps with studying — you can chat with an AI, summarize PDFs, generate quiz questions, and analyze your resume.

Still in progress.

## What it does

- Chat with an AI assistant (uses OpenAI)
- Upload a PDF and get a summary
- Generate practice questions from your notes
- Upload your resume and get feedback + ATS score

## Tech I'm using

- React + Vite (frontend)
- Tailwind CSS
- Node.js + Express (backend)
- MongoDB
- OpenAI API

## How to run it locally

Make sure you have Node.js and MongoDB installed.

```bash
# clone the repo
git clone https://github.com/sudip-kumar-prasad/Archivist_AI.git
cd Archivist_AI
```

**Backend:**
```bash
cd server
npm install
# create a .env file (see .env.example)
npm run dev
```

**Frontend:**
```bash
cd client
npm install
npm run dev
```

Then go to `http://localhost:5173`

## Environment variables

Copy `.env.example` to `server/.env` and fill in:

```
MONGODB_URI=your mongodb connection string
OPENAI_API_KEY=your openai key
JWT_SECRET=anything random
PORT=5000
```

## Folder structure

```
client/    -> React frontend
server/    -> Express backend
  controllers/
  routes/
  models/
  middleware/
  utils/
```

## Notes

This is a personal learning project. Might have bugs. Will keep updating it.
