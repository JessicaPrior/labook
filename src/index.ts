/**************************** IMPORTS ******************************/

import express, { Express } from "express"
import cors from "cors"
import { userRoutes } from './Routes/userRoutes';


/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())
app.use('/user', userRoutes)
app.use('/post', userRoutes)
app.use('/friend', userRoutes)

/**************************** SERVER INIT ******************************/

app.listen(process.env.PORT || 5000 , () => {
   console.log("Server running on port 3003")
})