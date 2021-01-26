import {Response, Request} from 'express'
import { getTokenData } from "../Services/authenticator"
import { AuthenticationData } from "../Model/User"
import { postBusiness } from "../Business/postBusiness"

class PostController{

    public async insertPost (req: Request, res: Response) {
        try {
            const input: any = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type
            }
            const {authorization} = req.headers

            const tokenId: AuthenticationData = await getTokenData(authorization as string)
 
            await postBusiness.insertPostBusiness(input, tokenId.id)
    
            res.status(200).send({message: "Success!"})
    
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public async selectPosts(
        req: Request,
        res: Response
    ){
        try {
            
            const input ={
                authorization: req.headers.authorization as string
            }
    
            const {id} = req.params
    
            const posts = await postBusiness.selectPostBusiness(id, input.authorization)
    
            res.status(200).send({
                posts
            });
    
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    }
}

export const postController: PostController = new PostController();