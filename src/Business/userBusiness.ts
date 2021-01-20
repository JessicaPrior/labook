import { userDatabase } from '../Data/userDataBase';
import { User, inputUser } from '../Model/User';
import { generateToken } from "../Services/authenticator"
import { compare, hash } from "../Services/hashManager"
import { generateId } from "../Services/idGenerator"


class UserBusiness {

    public login = async (input: inputUser) => {
        try {
            let message

            const user: User = await userDatabase.login(input.inEmail())
            const token: string = generateToken({ id: user.getId() })

            if (!input.inEmail() || !input.inPassword()) {
                throw new Error('"email" and "password" must be provided')
            }

            const passwordIsCorrect: boolean = await compare(input.inPassword(), user.getPassword())

            if (!passwordIsCorrect) {
                message = "Invalid credentials"
                throw new Error(message)
            }

            if (!user) {
                message = "Invalid credentials"
                throw new Error(message)
            }

            return token

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public insertUser = async (input: inputUser) => {
        try {
    
            if (!input.inName() || !input.inEmail() || !input.inPassword()) {
                throw new Error('"name", "email" and "password" must be provided')
            }
    
            if(input.inEmail().indexOf("@") === -1){
                throw new Error("Invalid email");
            }
    
            if(input.inPassword().length < 6){
                throw new Error("Password must contain at least 6 characters");
            }
    
            const id: string = generateId()
    
            const cypherPassword = await hash(input.inPassword());
    
            await userDatabase.insertUser (
                id,
                input.inName(),
                input.inEmail(),
                cypherPassword
            )
    
            const token: string = generateToken({ id })
    
            return token
    
        } catch (error) {
    
            if (error.message.includes("for key 'email'")) {
                throw new Error("Email already exists!");
            }
    
            throw new Error(error.message)
        }
    }
}

export const userBusiness: UserBusiness = new UserBusiness();