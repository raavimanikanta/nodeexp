"use strict";

const express=require("express")

const PORT =3000;

const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello world !  This is the first Docker File with Nodejs...</h1>")
}
);

app.listen(PORT,()=>{
    console.log("Application running successfully")
})

