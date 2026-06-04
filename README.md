# Sylvaan Dashboard App

A full-stack sports analytics dashboard featuring a frontend built with **Angular 19** and a backend powered by **Express.js** and **Prisma v7**.

---

## 🛠️ Technology Stack

### Frontend (`/client`)
- **Framework**: Angular 19 (Standalone Components, Signals, Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide Icons (`@lucide/angular`)
- **Charts**: ApexCharts (`ng-apexcharts`) with light/dark mode theme switching
- **Theme**: Dark/Light mode with local storage persistence and system preference detection

### Backend (`/server`)
- **Runtime**: Node.js & Express with TypeScript
- **ORM**: Prisma v7 (using ESNext-friendly `prisma.config.ts` configuration)
- **Database**: PostgreSQL (hosted on Neon.tech)

---

## 📂 Project Structure

```
sylvaan-dashboard-app/
├── client/              # Angular 19 Frontend
│   ├── src/app/
│   │   ├── core/        # Global Services (Theme, API)
│   │   ├── layouts/     # Main layout structures (Sidebar, Header)
│   │   ├── components/  # Reusable UI Elements (StatsCard)
│   │   └── features/    # Page Modules (Dashboard, Analytics, Settings)
│   └── package.json
├── server/              # Express.js Backend
│   ├── prisma/          # Database Schema & Migrations
│   ├── src/             # API Routing, Sync Services
│   ├── prisma.config.ts # Prisma v7 config
│   └── package.json
└── package.json         # Root Manager (Convenience scripts)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v22.12.0 or higher
- A [Neon.tech](https://neon.tech/) PostgreSQL database instance
- An API key from [Football-Data.org](https://www.football-data.org/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sylvaan/sylvaan-dashboard-app.git
   cd sylvaan-dashboard-app
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install client packages
   cd client && npm install
   
   # Install server packages
   cd ../server && npm install
   ```

3. Setup environment variables:
   - Create a `.env` file in the `/server` directory:
     ```env
     PORT=3000
     DATABASE_URL="postgresql://neondb_owner:YOUR_NEON_POOLED_CONNECTION_STRING"
     FOOTBALL_API_KEY="your_api_key_from_football_data_org"
     ```

4. Initialize the database:
   - Run Prisma push inside the `/server` folder to push the schema tables to your database:
     ```bash
     cd server
     npx prisma db push
     ```

---

## 💻 Running the App

Run these commands directly from the root workspace directory:

- **Run Frontend**: `npm run client` (serves the app on `http://localhost:4200`)
- **Run Backend**: `npm run server` (starts the Express dev API on `http://localhost:3000`)
- **Build Frontend**: `npm run build:client`
- **Build Backend**: `npm run build:server`

---

## 🎯 Key Features

- **State Management**: Built using Angular Signals (`signal()`, `effect()`, `computed()`) for reactive data bindings.
- **Adaptive Charts**: ApexCharts configurations update dynamically based on the current active theme.
- **Data Synchronization**: Designed to fetch Premier League statistics from an external API, mapping payloads directly to the PostgreSQL database schema.
