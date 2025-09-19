# Next.js OAuth with TypeScript, SASS & PostgreSQL

A modern Next.js application featuring secure OAuth authentication, built with TypeScript, styled with SASS, and powered by PostgreSQL. This project provides a complete authentication solution with a scalable architecture for modern web applications.

## 🚀 Features

- ✅ **OAuth Authentication** with AuthJS (NextAuth v5)
- ✅ **TypeScript** for type safety
- ✅ **SASS** for advanced styling
- ✅ **PostgreSQL** database with Docker
- ✅ **HTTPS Development** with SSL certificates
- ✅ **Form Validation** with React Hook Form
- ✅ **Email Integration** with Nodemailer
- ✅ **Modern UI Components** with React Icons

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+, TypeScript, SASS
- **Authentication**: AuthJS (NextAuth v5)
- **Database**: PostgreSQL with Docker
- **Forms**: React Hook Form with resolvers
- **Icons**: React Icons
- **Email**: Nodemailer
- **Development**: HTTPS with mkcert

## 📋 Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/) and Docker Compose
- [Git](https://git-scm.com/)

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd nextjs-oauth-ts-sass-postgres

# starting from scratch
npx create-next-app@latest .

# Install dependencies
npm install

# then
npm run dev
```

### 2. SSL Certificate Setup (HTTPS Development)

#### Option A: Using package.json script
Add the following to your `package.json`:

```json
{
  "scripts": {
    "dev": "next dev --experimental-https"
  }
}
```

#### Option B: Manual mkcert Setup (Windows)

1. Download mkcert from [GitHub releases](https://github.com/FiloSottile/mkcert/releases)
2. Download the Windows binary (`mkcert-v*-windows-amd64.exe`)
3. Rename to `mkcert.exe` and add to your PATH or project directory
4. Generate certificates:

```powershell
# Install mkcert CA
.\mkcert.exe -install

# Generate localhost certificates
.\mkcert.exe -key-file "certificates\localhost-key.pem" -cert-file "certificates\localhost.pem" localhost 127.0.0.1 ::1
```

### 3. Install Dependencies

```bash
# Core authentication dependencies
npm install next-auth@beta @auth/pg-adapter

# Form handling
npm install @hookform/resolvers react-hook-form

# Database and email
npm install pg nodemailer 

#if using resend for email authentication
npm install resend

# UI and utilities
npm install react-icons jsonwebtoken

# Development dependencies
npm install --save-dev @types/jsonwebtoken @types/nodemailer @types/pg sass
```

### 4. Database Setup with Docker

```bash
# Create database directory
mkdir database
cd database

# Start PostgreSQL and pgAdmin containers
docker compose up -d

# Verify containers are running
docker ps
```

#### Database Configuration

1. **Access pgAdmin**: Navigate to [http://localhost:5050](http://localhost:5050)
   - **Username**: `user@example.com`
   - **Password**: `password`

2. **Create PostgreSQL Server Connection**:
   - **Name**: `postgres_database`
   - **Host**: `postgres`
   - **Port**: `5432`
   - **Username**: `postgres`
   - **Password**: `password`

3. **Initialize Database Schema**:
   - Navigate to the `authdb` database
   - Open Query Tool (`Ctrl+Shift+D`)
   - Copy and execute the SQL from `postgres-schema.sql`
   - Run with `F5`
   - Verify tables: `users`, `accounts`, `verification_tokens`

### 5. Run the Application

```bash
# First install dependencies (if not already done)
npm install

# Start the development server
npm run dev
```

Open [https://localhost:3000](https://localhost:3000) in your browser to see the application.

## 🔧 Project Structure

```
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout
│       ├── page.tsx           # Home page
│       ├── globals.css        # Global styles
│       └── favicon.ico        # App icon
├── certificates/
│   ├── localhost.pem          # SSL certificate
│   └── localhost-key.pem      # SSL private key
├── database/
│   ├── docker-compose.yml     # Docker services
│   └── postgres-schema.sql    # Database schema
├── public/                    # Static assets
├── package.json
├── tsconfig.json             # TypeScript config
├── next.config.ts            # Next.js config
└── README.md
```

## 🔐 Authentication Flow

This project uses **AuthJS** (the evolution of NextAuth.js) for authentication:

- **OAuth Providers**: Support for Google, GitHub, and other providers

GOOGLE OAuth
https://console.cloud.google.com/apis/


- **Database Sessions**: Secure session management with PostgreSQL
- **Email Verification**: Email-based authentication flow
      
```bash
# email authentication using resend Signin and Generate ClientID and Api key put it in env
# https://resend.com/ | https://resend.com/docs/send-with-nextjs
# then install resend
npm install resend
```



- **AUTH_SECRET GENERATE in env**
Open GITBASH Terminal
```bash
openssl rand -base64 33
```
then generate random secret copy past it in your env


- **Type Safety**: Full TypeScript support for auth configuration

## 🐳 Docker Services

The project includes the following Docker services:

- **PostgreSQL**: Main database server
- **pgAdmin**: Web-based database administration tool

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial

### Authentication Resources
- [AuthJS Documentation](https://authjs.dev/) - Complete authentication guide
- [AuthJS PostgreSQL Adapter](https://authjs.dev/reference/adapter/pg) - Database integration

## 🚀 Deployment

The easiest way to deploy your Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
