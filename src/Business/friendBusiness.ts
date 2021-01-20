import { friendDataBase } from "../Data/friendDataBase"


class FriendBusiness {

    public async inviteFriendBusiness(tokenId: string, id: any) {
        try {
            await friendDataBase.insertFriend(
                tokenId,
                id
            )
        } catch (error) {
            throw new Error("Error")
        }
    }

    public async unFriendBusiness(id: any) {
        try {
            await friendDataBase.deleteFriend(id)
        } catch (error) {
            throw new Error("Error")
        }
    }
}

export const friendBusiness: FriendBusiness = new FriendBusiness();

