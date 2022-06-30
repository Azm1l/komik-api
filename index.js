import express from "express";
import Router from "./router/router.js"
import cors from "cors";
//import Router from "./router/router.js";

const app = express();

//inisiasi express
app.use(express());

//gunakan cors
app.use(cors());

//gunakan router
app.use(Router);

app.listen(5000, () => console.log('SERVER RUNNING AT http://localhost:5000'));