const express = require("express");
const app = express();

app.get("/", (req, res) => {

    res.send("get function")
}

)
const port = 5001;
app.listen(port, () => {
    console.log(`server started at : http://localhost:${port}`)
})