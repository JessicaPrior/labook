import express from 'express';
import { friendController } from '../Controller/friendController';


export const friendRoutes = express.Router()

friendRoutes.post('/:id', friendController.inviteFriend)
friendRoutes.delete('/:id', friendController.unFriend)