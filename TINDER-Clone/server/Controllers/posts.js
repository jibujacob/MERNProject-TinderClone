import mongoose from "mongoose";

import dbCards from "../Model/dbCards.js";

export const getPosts = (req,res) => res.status(200).send("Tinder API Call");

export const createCards = (req,res) => {
    const data = req.body
    console.log(data);
    const card = new dbCards(data);
    card.save( err => {
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(201).json(card);
        }
    }) ;
};

export const getCards = (req,res) => {
    dbCards.find({},(err,data) => {
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json(data);
        }
    })
};

