# nextjs-oauth-ts-sass-postgres
A Next.js application with OAuth authentication, built using TypeScript, styled with SASS, and powered by PostgreSQL. Secure and scalable authentication flow for modern web apps.
link : [text](https://www.youtube.com/watch?v=TLGFTH4s_0Y)
(12.31)continue
# Instalation
```
npx create-next-app@latest .
```

# Certificate

## Download mkcert Manually

1. Download mkcert from its GitHub releases page:
   https://github.com/FiloSottile/mkcert/releases

2. Download the Windows binary (`mkcert-v*-windows-amd64.exe`)

3. Rename it to `mkcert.exe` and move it to a folder in your PATH or the project directory

4. Run from your project root:
```powershell
.\mkcert.exe -install
.\mkcert.exe -key-file "certificates\localhost-key.pem" -cert-file "certificates\localhost.pem" localhost 127.0.0.1 ::1
```



```
npm install next-auth@beta
npm install @auth/pg-adapter
npm install @hookform/resolvers
npm install pg
npm install nodemailer
npm install react-hook react-hook-form
npm install react-icons
npm install jsonwebtoken
npm install --save-dev @types/jsonwebtoken
npm install --save-dev sass
npm install --save-dev @types/nodemailer
npm install --save-dev @types/pg
```
# Docker Set up For PG DATABASE
```
docker ps
```
```
mkdir database
```
Add Docker-compose.yml
CD database
```
docker compose up -d 
```
- localhost:5050 (PG Admin)
- uname - user@example.com
- pwd - password
### Create new server for set up pg database and connect
- name = postgres_database
- >Connections Host address = postgres
- Save
- Table (*)
- > postgres-schema.sql
- authdb > ctrl+shift+d (query)
- copy schema
- f5 (run)
- > Tables
- Account alt+shift+v (table view)


- -d (run it in background / with out -d run in foregrounde)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# NextAuth.js vs Auth.js: Comparison

## Overview

| Feature | NextAuth.js | Auth.js |
|---------|------------|---------|
| **Framework** | Next.js-specific | Framework-agnostic (supports multiple frameworks) |
| **Origin** | Original authentication solution for Next.js | Evolution of NextAuth.js into a framework-agnostic library |
| **Installation** | `npm install next-auth` | `npm install @auth/core` + framework adapter |
| **Configuration** | Simpler for Next.js applications | Requires more configuration for framework setup |
| **Provider Support** | 50+ OAuth providers | Same 50+ OAuth providers |
| **TypeScript** | Built-in TypeScript support | Built-in TypeScript support |
| **Database Adapters** | Multiple database adapters | Same database adapters |
| **Documentation** | Next.js focused | More comprehensive, covers multiple frameworks |

## Pros and Cons

### NextAuth.js

#### Pros
- **Simplified Setup**: Optimized specifically for Next.js applications
- **Easy Integration**: Seamless integration with Next.js API routes and middleware
- **Mature Ecosystem**: Well-established in the Next.js community
- **Minimal Configuration**: Less boilerplate code for Next.js projects

#### Cons
- **Limited to Next.js**: Cannot be used with other frameworks
- **Less Flexible**: Some advanced customizations may be more difficult
- **Migration Concerns**: When switching from Next.js to another framework

### Auth.js

#### Pros
- **Framework Agnostic**: Can be used with React, Svelte, SolidJS, etc.
- **Future-Proof**: Not tied to a specific framework's lifecycle
- **Consistent API**: Similar experience across different frameworks
- **Modular Design**: More flexible architecture for advanced use cases

#### Cons
- **More Complex Setup**: Requires adapter installation and configuration
- **Newer Evolution**: Potentially less community examples for non-Next.js frameworks
- **Additional Dependencies**: Needs framework-specific adapters

## Which One to Choose?

- **Choose NextAuth.js if**: You're committed to Next.js and want the simplest authentication setup
- **Choose Auth.js if**: You want a portable authentication solution or work across multiple frameworks
