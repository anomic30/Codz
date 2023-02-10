const express = require("express");
const router = express.Router();
const { gpt } = require("../services/gpt.service");

router.post("/prompt", async (req, res) => {
    try{
        const resp = await gpt(req.body.prompt);
        return res.status(200).json({text: resp});
    }catch(error){
        console.log(error);
        res.status(500).json({error});
    }
});

module.exports = router;