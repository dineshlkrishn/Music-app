# Music App

This project now serves both:
- a backend API (`/api/*`)
- a client page (`/`) from `client/dist/index.html`

## Run locally

```bash
npm install
npm start
```

Open:
- `http://localhost:5000/` → client UI
- `http://localhost:5000/api/test` → backend health endpoint

The client page performs live API communication by:
- checking `/api/test`
- posting login credentials to `/api/auth/login`
