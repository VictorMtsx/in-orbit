import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
