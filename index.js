const express = require( "express" );
const mongo = require( "./connect" );
const dataRouter= require("./routers/dataRouter")
const dotenv = require("dotenv")

dotenv.config();
mongo.connect();
const app = express();
app.use(express.json());

app.use('/',dataRouter);


app.listen(process.env.PORT);