/**************************** IMPORTS ******************************/

import express, { Express } from "express"
import cors from "cors"
import { userRoutes } from './Routes/userRoutes';
import { postRoutes } from "./Routes/postRoutes";
import { friendRoutes } from "./Routes/friendRoutes";
import { feedRoutes } from "./Routes/feedRoutes";


/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())
app.use('/user', userRoutes)
app.use('/post', postRoutes)
app.use('/friend', friendRoutes)
app.use('/feed', feedRoutes)

/**************************** SERVER INIT ******************************/

app.listen(process.env.PORT || 5000 , () => {
   console.log("Server running on port 3003")
})