const express = require("express")
const zod = require("zod");
const app = express();
const port = 5000;

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/healthChekup", function(req,res){
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney);
    if(!response.success){
        res.status(500).json({
            msg: "wrong input"
        })
    }
    else{
        res.send({
            response
        })
    }

});

app.listen(port);

