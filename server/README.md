# VisitMysuru Backend (Express + MongoDB)

This directory contains the Express backend for the VisitMysuru app. It provides:

- JWT authentication (register/login) with roles: `user`, `lister`, `admin`
- Lister profiles and listings management
- User contributions (photo/story) with image uploads and admin moderation
- Public read-only data for events, places, hotels, restaurants (stubbed)

## Prerequisites
- Node.js LTS (>= 18)
- MongoDB running locally or a MongoDB URI

## Setup
1) Copy env file
```
cp .env.example .env
```
Edit `.env` and set values:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/visitmysuru
JWT_SECRET=change_me_to_a_long_random_string
```

2) Install dependencies
```
npm install
```

3) Run the server (development)
```
npm run dev
```

Health check:
- GET http://localhost:5000/api/health

Uploads are served from:
- http://localhost:5000/uploads/<filename>

## API Overview

Auth
- POST `/api/auth/register` { name, email, password, role? }
- POST `/api/auth/login` { email, password }

Listers
- POST `/api/listers/profile` (auth: lister|admin)
- GET `/api/listers/me` (auth: lister|admin)
- GET `/api/listers` (public)
- GET `/api/listers/:id` (public)

Listings
- POST `/api/listings` (auth: lister|admin)
- PUT `/api/listings/:id` (auth: owner lister|admin)
- GET `/api/listings?category=&q=` (public)
- GET `/api/listings/:id` (public)

Contributions
- POST `/api/contributions` (multipart form-data)
  - Fields: `image` (file), `name`, `email`, `location`, `title`, `description`, `category` (photo|story)
  - Optional auth: if Bearer token present, `user` will be set
- GET `/api/contributions?status=approved` (public)
- GET `/api/contributions/mine` (auth)
- PATCH `/api/contributions/:id/status` (auth: admin) { status: approved|rejected }

Public (stubbed)
- GET `/api/public/events`
- GET `/api/public/places`
- GET `/api/public/hotels`
- GET `/api/public/restaurants`

## Notes
- Image uploads are stored under `server/uploads/`. In production consider S3/Cloudinary.
- CORS is enabled with default allow-all. Lock this down for production.
- The app uses ESM (`type: module`).

## Troubleshooting
- If the server fails to start, check:
  - MongoDB connection (MONGODB_URI)
  - JWT_SECRET set in `.env`
  - Port 5000 is available
- For CORS issues, verify your frontend points to the correct base URL and restart the server after changes.
