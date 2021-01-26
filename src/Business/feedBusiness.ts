import { feedDataBase } from '../Data/feedDataBase';
import { getTokenData } from '../Services/authenticator';


class FeedBusiness {

    public selectAllFeed = async (auth: string) => {
        try {

            if (!auth) {
                throw new Error('Authorization must be provided')
            }

            getTokenData(auth)

            const result: any = await feedDataBase.selectAllFeed()

            if (!result) {
                throw new Error('No posts found!')
            }

            return result

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public typeEventBusiness = async (input: any) => {
        try {

            if (!input.authorization) {
                throw new Error('Authorization must be provided')
            }

            await getTokenData(input.authorization)

            const result: any = await feedDataBase.selectTypeEvent(input.type)

            if (!result) {
                throw new Error('No posts found!')
            }

            return result

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}

export const feedBusiness: FeedBusiness = new FeedBusiness();