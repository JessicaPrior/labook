import { userDatabase } from '../Data/userDataBase';
import { User, createUser, inputUser } from '../Model/User';
import { generateToken } from "../Services/authenticator"
import { compare, hash } from "../Services/hashManager"
import { generateId } from "../Services/idGenerator"


class UserBusiness {

    public login = async (input: inputUser) => {
        try {
            let message
            
            if (!input.email || !input.password) {
                throw new Error('"email" and "password" must be provided')
            }

            const user: User = await userDatabase.login(input.email)
            if (!user) {
                message = "Invalid credentials"
                throw new Error(message)
            }
            

            const passwordIsCorrect: boolean = await compare(input.password, user.getPassword())

            if (!passwordIsCorrect) {
                message = "Invalid credentials"
                throw new Error(message)
            }

            const token: string = generateToken({ id: user.getId() })

            return token

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public insertUser = async (input: createUser) => {
        try {
            if (!input.name || !input.email || !input.password) {
                throw new Error('"name", "email" and "password" must be provided')
            }

            if (input.email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }

            if (input.password.length < 6) {
                throw new Error("Password must contain at least 6 characters");
            }

            const id: string = generateId()

            const cypherPassword = await hash(input.password);

            await userDatabase.insertUser(
                id,
                input.name,
                input.email,
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