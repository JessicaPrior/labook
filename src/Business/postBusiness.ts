import { inputPost, Post } from "../Model/Post"
import { generateId } from "../Services/idGenerator"
import { postDataBase } from '../Data/postDataBase';
import { getTokenData } from "../Services/authenticator";


class PostBusiness{

    public insertPostBusiness = async (input: inputPost, tokenId: string): Promise<any> => {
        try {
    
            const id: string = generateId()
    
            await postDataBase.insertPost (
                id,
                input.inPhoto(),
                input.inDescription(),
                input.inType(),
                tokenId 
            )
    
        } catch (error) {
            throw new Error(error.message)
        }
    }

    public selectPostBusiness = async (id: any, auth: string): Promise<any> => {
        try {
    
    
            if (!id) {
                throw new Error('Id must be provided')
            }
    
            if (!auth) {
                throw new Error('Authorization must be provided')
            }
    
            await getTokenData(auth)
    
            const result: Post = await postDataBase.selectPostById(id)
            
            if (!result) {
                throw new Error('Post not found!')
            }
    
            return result
    
        } catch (error) {
            throw new Error( error.sqlMessage || error.message)
        }
    }
}

export const postBusiness: PostBusiness = new PostBusiness();