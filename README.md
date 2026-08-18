# KRM NEXORA - Project Registration Portal 🚀

Welcome to **KRM NEXORA**, a premium platform for students to register and track their Academic, Minor, Major, and Personal Portfolio projects.

![Live Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-blue?style=for-the-badge&logo=postgresql)

🌍 **Live Website:** [https://krm-nexora.vercel.app](https://krm-nexora.vercel.app)

## Features
- **Beautiful 3D UI**: Fully responsive, glassmorphic design with interactive Three.js backgrounds.
- **Student Dashboard**: Live timeline tracking of project development phases.
- **Admin Dashboard**: Secure, password-protected admin panel to view all incoming leads.
- **Instant Notifications**: Automated WhatsApp redirect system for instant communication between students and admins.
- **Cloud Database**: Powered by Prisma and Neon PostgreSQL for serverless reliability.

## Tech Stack
- **Frontend**: Next.js 14 (App Router), React, Framer Motion, Three.js
- **Backend**: Next.js Server Actions, Next.js Middleware (Basic Auth)
- **Database**: PostgreSQL (Neon), Prisma ORM
- **Deployment**: Vercel

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env` file with your `DATABASE_URL` and Admin credentials:
   ```env
   DATABASE_URL="postgresql://..."
   ADMIN_USERNAME="admin"
   ADMIN_PASSWORD="your-secure-password"
   ```
4. Push the database schema:
   ```bash
   npx prisma db push
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Contact
For project development and support inquiries, please contact the KRM NEXORA administration team through the live portal.
