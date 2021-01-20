import  BaseDataBase  from './BaseDataBase';


class FriendDataBase extends BaseDataBase {

    private tableName: string = "labook_users"

    public async insertFriend(id_user: string, id_friend: string) {
        try {
            await BaseDataBase.connection(this.tableName)
                .insert({ id_user, id_friend })
        } catch (error) {
            throw new Error("Erro de banco de dados: " + error.sqlMessage)
        }
    }

    public async deleteFriend(id_friend: string) {
        try {
            await BaseDataBase.connection(this.tableName)
                .delete(id_friend)
        } catch (error) {
            throw new Error("Erro de banco de dados: " + error.sqlMessage)
        }
    }
}

export const friendDataBase: FriendDataBase = new FriendDataBase();