const express = require('express');

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(8080, ()=> {
    console.log("server is running at http://localhost:8080")
})