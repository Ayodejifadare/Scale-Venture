# Scale Venture

Scale Venture is a full stack TypeScript template that combines an Express API with a React client powered by Vite. It demonstrates a simple contact form flow backed by a PostgreSQL database using Drizzle ORM.

## Development

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
   The app listens on **http://localhost:5000**.

## Building for production

1. Build the client and bundle the server
   ```bash
   npm run build
   ```
2. Run the compiled server
   ```bash
   npm start
   ```

## Environment Variables

- `DATABASE_URL` – PostgreSQL connection string required for database operations.

## Project Structure

- `server/` – Express server and API routes
- `client/` – React application
- `shared/` – Shared database schema and types

