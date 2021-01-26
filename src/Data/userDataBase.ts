import { User } from '../Model/User';
import BaseDataBase from './BaseDataBase';


class UserDatabase extends BaseDataBase {

    private tableName: string = "labook_users"

    public async login(email: string): Promise <User> {
        try {
            
            const result: any = await BaseDataBase.connection(this.tableName)
                .select("*")
                .where({ email })

            return new User (result[0].id, result[0].name, result[0].email, result[0].password)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async insertUser(id: string, name: string, email: string, password: string) {
        try {
            await BaseDataBase.connection(this.tableName)
                .insert({
                    id,
                    name,
                    email,
                    password
                })

        } catch (error) {
            throw new Error("Erro de banco de dados: " + error.sqlMessage)
        }
    }

}

export const userDatabase: UserDatabase = new UserDatabase();