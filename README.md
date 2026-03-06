# Music App

This repository contains:
- **Client**: React app under `client/`
- **Server**: Express API under `server/`

## Local run (client + server together)

```bash
npm install
npm --prefix client install
npm --prefix client run build
This project now serves both:
- a backend API (`/api/*`)
- a client page (`/`) from `client/dist/index.html`

## Run locally

```bash
npm install
npm start
```

Open:
- `http://localhost:5000/` → React client
- `http://localhost:5000/api/test` → API health

## API endpoints used by client

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/songs`
- `POST /api/songs/upload`

## Important: GitHub Pages limitation

GitHub Pages can host only static files. It **cannot run the Node/Express API server**.

If your frontend is hosted on `*.github.io`, you must host the backend separately (Render/Railway/Fly/etc.) and set:

```bash
VITE_API_BASE_URL=https://your-backend-domain.com
```

Then rebuild `client/dist`.
- `http://localhost:5000/` → client UI
- `http://localhost:5000/api/test` → backend health endpoint

The client page performs live API communication by:
- checking `/api/test`
- posting login credentials to `/api/auth/login`
