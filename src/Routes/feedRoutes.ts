import express from 'express';
import { feedController } from '../Controller/feedController';


export const feedRoutes = express.Router()


feedRoutes.get('/all', feedController.selectAllFeed)
feedRoutes.get('/:id', feedController.selectTypeFeed)
