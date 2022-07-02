import express from "express";
import Router from "./router/router.js"
import cors from "cors";

const app = express();

//initiation express
app.use(express());

//use cors
app.use(cors());

//use route
app.use(Router);

app.listen(5000, () => console.log('SERVER RUNNING AT http://localhost:5000'));