import express from "express";

import { getPosts,createCards,getCards } from "../Controllers/posts.js";

const router = express.Router();

router.get("/",getPosts);
router.post("/tinder/cards",createCards);
router.get("/tinder/cards",getCards);

export default router;