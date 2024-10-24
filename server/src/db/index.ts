import { drizzle } from 'drizzle-orm/postgres-js'
import  postgres from 'postgres'
import  *  as schema from './schema'
import  {env}  from '../env'

export const clieant = postgres(env.DATABASE_URL)
export const db = drizzle(clieant, {schema, logger: true})