import dotenv from 'dotenv'
import knex from 'knex'
import Knex from 'knex'

dotenv.config()

export default class BaseDataBase {
   protected static connection: Knex = knex({
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