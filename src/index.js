const express = require("express");
const app = express();
const multer = require("multer");
const multerConfig = require("./config/multer");

app.post("/upload",multer(multerConfig).any(),(req,res)=>{
	return res.status(200).send("");
});

app.listen(3333);