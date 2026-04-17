# LetterBoxd/GoodReads but for games

## Team TBD

Shannon, D, and Xavier

## User Stories

As a user, I want to be able to categorize and rate the games that I play, to be able to keep a record of how I feel about games right after I play them.

As a user, I want to be able to share these reviews with friends, as well as see what they are playing/reviewing, to gain insight into what to play next.

As a user, I would like to be able to catagorize a list of "To be played", "playing", and "played" games to share to my followers and keep track for myself.

## Local Setup Instructions

### Create Clerk Project

Create a free [Clerk](clerk.com) account and a Free Project

In the project dashboard navigate to Developers/API Keys

Copy the PUBLIC and SECRET_KEY values for later

### Install packages

In the terminal run:

`npm i`

### Create Postgres DB

Create a Postgres DB (run `docker compose up -d` if you want to use our docker setup)

### Create .env files

Create a file named ".env" in apps/frontend

Populate the file with:

```bash
VITE_CLERK_PUBLISHABLE_KEY=<clerk-publishable-key>

VITE_API_BASE_URL=http://localhost:3000
```

Create a file named ".env" in apps/backend

Populate the file with:

```bash
PORT=3000

DATABASE_URL=<local-postgres-db-url> # postgresql://postgres:postgres@localhost:5435/gamestars_db if you ran "docker compose"

FRONTEND_URL=http://localhost:5173

CLERK_PUBLISHABLE_KEY=<clerk-publishable-key>

CLERK_SECRET_KEY=<clerk-secret-key>
```

### Migrate and seed database

In the terminal run:

`npx prisma migrate dev`

`cd apps/backend`

`npx prisma db seed`

## Sprint 1

Project Initialization - Shannon

Set up git Repository -D

Team Vercel Account - D

Project README - D

App Stylesheet and Style Guide - Shannon

app integration - Xavier

Review Component - D

Review CSS - D

I.1: High-Level Component - Shannon - Shannon

Popular Games Component - Xavier

## Sprint 2

Multi-page Navigation - Shannon

Navigation Interface(s) - D

Shared State Across Pages - Xavier

Status Component - D

Feature Page - Friends - Shannon

Feature Page - Reviews - D

Feature Page - User Account - Xavier

Form Component - Friends Page - Shannon

Form Component - Reviews Page - D

Form Component - User Account Page - Xavier

Element Addition/Removal - Friends Page - Shannon

Element Addition/Removal - Reviews - D

Element Addition/Removal - User Account Page - Xavier

Update README.md for Sprint 2 - Shannon

## Sprint 3

Hook - useGame - Xavier

Hook - useSearch D / Xavier

Service - gameService - Xavier

Service - searchService - Shannon / D

Shared Page State Refactor - D

Repository - gameRepo - Xavier

Repository - friendsRepo - Shannon

Repository - Reviews - D

Test Data - friendsData - Shannon

Test Data - gameData - Xavier

Test Data - Reviews - D

Refactored Component - PopularGame - Xavier

Refactored Component - Reviews - D

Refactored Component - Friends - Shannon

Architectural Layout documents - Xavier, D, Shannon

Update README.md for Sprint 3 - Xavier

## Sprint 4

### Group Requirements

Back-end App Initialization - Xavier

Development SQL Database - D

Prisma Installation and Client Initialization - Shannon

Back-end CORS Configuration - D

### Individual Requirements

Back-end Resource Endpoints - Reviews - D

Resource Database Schema - Reviews - D + Shannon

Front-end Repository sends requests to back-end - Reviews - D

Application State Persistence - Reviews - D

Back-end Resource Endpoints - Games - Xavier

Resource Database Schema - Games - Xavier + Shannon

Front-end Repository sends requests to back-end - Games - Xavier

Application State Persistence - Games - Xavier

Back-end Resource Endpoints - Users + Friends - Shannon

Resource Database Schema - Friends - Shannon

Front-end Repository sends requests to back-end - Users + Friends - Shannon

Application State Persistence - Users + Friends - Shannon

Resource Database Schema - Users - Shannon + D
