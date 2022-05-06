import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

/* Creating an Express application using express() function 
which is a top-level function exported by the express module. */
const app = express();

/* Setting up Express middlewares that 
execute during the lifecycle of a request to the Express server. */
app.use(express.json());
app.use(express.urlencoded());


app.use(cors())

routes(app)

export default app;
