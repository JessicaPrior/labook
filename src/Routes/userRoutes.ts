import express from 'express';
import { feedController } from '../Controller/feedController';
import { postController } from '../Controller/postController';
import { userController } from '../Controller/userController';
import { friendController } from '../Controller/friendController';


export const userRoutes = express.Router()

userRoutes.post('/signup', userController.insertUser)
userRoutes.post('/login', userController.login)

userRoutes.post('/create', postController.insertPost)
userRoutes.get('/post/:id', postController.selectPosts)

userRoutes.get('/all', feedController.selectAllFeed)
userRoutes.get('/:id', feedController.selectTypeFeed)


userRoutes.post('/:id', friendController.inviteFriend)
userRoutes.delete('/:id', friendController.unFriend)