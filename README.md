# Fullstack Dashboard

> Modern admin dashboard built with React, TypeScript, Node.js, and PostgreSQL.

## Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React · TypeScript · TailwindCSS · Next.js |
| **Backend** | Node.js · Express · TypeScript |
| **Database** | PostgreSQL · Prisma ORM |
| **Auth** | JWT · bcrypt |
| **Deploy** | Docker · CI/CD |

## Features

- User authentication (register/login/JWT)
- Dashboard with real-time metrics
- CRUD operations with PostgreSQL via Prisma
- Responsive UI with dark/light theme
- RESTful API architecture
- Input validation and error handling
- Unit & integration tests

## Getting Started

```bash
git clone https://github.com/Anonimo93/fullstack-dashboard.git
cd fullstack-dashboard

# Backend
cd server
npm install
cp .env.example .env   # configure your DB
npx prisma migrate dev
npm run dev

# Frontend
cd client
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Create user |
| POST | `/api/auth/login` | Login |
| GET | `/api/dashboard` | Get metrics |
| CRUD | `/api/items` | Resource management |

## Roadmap

- [ ] Add WebSocket for real-time updates
- [ ] Add role-based access control
- [ ] Add data export (CSV/PDF)
- [ ] Add CI/CD pipeline

---

*Built with TypeScript, because type safety is not optional.*
