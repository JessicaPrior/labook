import { Request, Response } from 'express'
import { getTokenData } from '../Services/authenticator'
import { friendBusiness } from '../Business/friendBusiness';
import { AuthenticationData } from '../Model/User';

class FriendController{

    public async inviteFriend (req: Request, res: Response) {
        try {
            const input = {
                authorization: req.headers.authorization as string
            }
    
            const {id} = req.params
    
            const tokenId: AuthenticationData = await getTokenData( input.authorization )
    
            await friendBusiness.inviteFriendBusiness(tokenId.id, id )
    
            res.status(200).send({message: "Friendship successfully added!"})
    
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public async unFriend (req: Request, res: Response) {
        try {
            const input = {
                authorization: req.headers.authorization as string
            }
    
            const {id} = req.params
    
            const tokenId: AuthenticationData = await getTokenData( input.authorization )
    
            await friendBusiness.unFriendBusiness( id )
    
            res.status(200).send({message: "UnFriendship successfully!"})
    
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}

export const friendController: FriendController = new FriendController();