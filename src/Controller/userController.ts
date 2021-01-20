import {Request, Response} from 'express';
import { userBusiness } from '../Business/userBusiness';

class UserController {

    public login = async(
        req: Request,
        res: Response
    ) =>{
        try {
            const loginData: any= {
                inEmail: req.body.email,
                inPassword: req.body.password
            }
    
            const token = await userBusiness.login(loginData)
    
            res.status(200).send({
                message: "Usuario logado!",
                token
            });
    
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    }

    public async insertUser(req: Request, res: Response) {
        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
    
            const token: string = await userBusiness.insertUser( input )
    
            res.status(200).send({message: "Success!", token})
    
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}

export const userController: UserController = new UserController();