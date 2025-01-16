import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

router.post('/', async (req, res)=> {
    try {
        const { prompt } = req.body;

        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt,
            n: 1,
            size: "1024x1024",
          });

          res.status(200).json( response.data[0].url );
        } catch (error) {
        res.status(500).json({
            error: error,
            message: error.message, 
            success: false
        })
    }
})

export default router;
