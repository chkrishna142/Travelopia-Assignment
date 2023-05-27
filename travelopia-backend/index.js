const express = require("express");
const cors = require('cors')
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors())


const { formModel } = require("./model/form.Model")
const { connection } = require("./configs/db");




app.get("/", (req, res) => {

    res.send("server working")
}

)


// form input


app.post("/insertdata", async (req, res) => {
    const { name, emailid, place, travellers, budget, total } = req.body;
    const new_input = new formModel({
        name,
        emailid,
        place,
        travellers,
        budget,
        total
    });

    try {
        await new_input.save();
        res.send(new_input);
    } catch (err) {
        res.send({ msg: "something wrong while form input", err: err });
    }
});

// for get data

app.get("/getdata", async (req, res) => {


    try {
        const formdata = await formModel.find();
        res.status(200).send(formdata);
    } catch (err) {
        res.status(500).send({ msg: "something wrong while form input", err: err });
    }
});








const port = 5001;
app.listen(port, async () => {
    try {
        await connection;
        console.log(`connecte to db `)

    } catch (error) {
        console.log("unable to connect with db")
    }
    console.log(`server started at : http://localhost:${port} `)
})