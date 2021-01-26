import {Request, Response} from 'express';
import { feedBusiness } from '../Business/feedBusiness';

class FeedController {

    public async selectAllFeed(
        req: Request,
        res: Response
    ){
        try {
            const input ={
                authorization: req.headers.authorization as string
            }
    
            const posts = await feedBusiness.selectAllFeed(input.authorization)
    
            res.status(200).send({
                posts
            });
    
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    }

    public async selectTypeFeed(
        req: Request,
        res: Response
    ){
        try {
            const input ={
                type: req.query.type,
                authorization: req.headers.authorization as string
            }
   
            const posts = await feedBusiness.typeEventBusiness(input)
    
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

export const feedController: FeedController = new FeedController();