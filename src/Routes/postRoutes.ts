import express from 'express';
import { postController } from '../Controller/postController';


export const postRoutes = express.Router()


postRoutes.post('/create', postController.insertPost)
postRoutes.get('/post/:id', postController.selectPosts)
