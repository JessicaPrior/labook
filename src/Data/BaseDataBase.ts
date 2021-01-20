import dotenv from 'dotenv'
import knex from 'knex'

dotenv.config()

export class BaseDataBase {
   protected static connection = knex({
      client: "mysql",
      connection: {
         host: process.env.DB_HOST,
         user: process.env.DB_USER,
         password: process.env.DB_PASSWORD,
         port: 3306,
         database: process.env.DB_NAME,
      }
   })
}