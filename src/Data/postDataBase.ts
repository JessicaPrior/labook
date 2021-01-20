import { Post, POST_TYPES } from "../Model/Post"
import  BaseDataBase  from './BaseDataBase';



class PostDataBase extends BaseDataBase{

    private tableName: string = "labook_users"

    public async insertPost(
        id: string,
        photo: string,
        description: string,
        type: POST_TYPES,
        author_id: string
    ) {
        try {
            await BaseDataBase.connection(this.tableName)
                .insert({
                    id,
                    photo,
                    description,
                    type,
                    author_id
                })
    
        } catch (error) {
            throw new Error("Erro de banco de dados: " + error.sqlMessage)
        }
    }

    public async selectPostById(id: string): Promise<Post> {
        try {
    
            const queryResult: any = await BaseDataBase.connection(this.tableName)
             .select("*")
             .where({ id })
             
            return queryResult[0]
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}

export const postDataBase: PostDataBase = new PostDataBase();