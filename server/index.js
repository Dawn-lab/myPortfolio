const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: '*',
    // credentials: false
}));

const PORT = 8080 || process.env.PORT;

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.get('/', (req,res) =>{
    res.download('./My Resume.pdf');
});


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});