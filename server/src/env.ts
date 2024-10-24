//aqui vão as variaveis de ambiente 
//as variaveis ambientes sao usadas para configurar o projeto no ambiente de desenvolvimento
import  z  from 'zod'
 
 const envSchema = z.object({
   DATABASE_URL: z.string().url(),
 })

 export const env = envSchema.parse(process.env)