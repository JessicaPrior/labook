import  BaseDataBase  from './BaseDataBase';


class UserDatabase extends BaseDataBase {

    private tableName: string = "labook_users"

    public async login(email: string) {
        try {
            const result: any = await BaseDataBase.connection(this.tableName)
            .select("*")
            .where({email})

        return result[0]

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async insertUser(id: string, name: string, email: string, password: string){
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