// express.json() Demo Example

// Importing the express module
var express = require('express');
var cors = require('cors')

URLS ={}

// Initializing the express and port number
var app = express();
var PORT = 4000;

// Calling the express.json() method for parsing
app.use(express.json());
app.use(cors())

// Reading content-type
app.get('/:hash', (req, res) => {
    try {
        const hash = req.params.hash 
        if(hash in URLS){
            URLS[hash].used = URLS[hash].used + 1
            console.log(URLS[hash].used)
            console.log(URLS[hash].originalURL)
            res.status(200).redirect(URLS[hash].originalURL)
        }else{
            res.status(400).send({message: "URL not found"})
        }
    } catch (error) {
        res.status(400).send({error})
    }
})

app.post('/url', (req, res) =>{
    try {
        let url = req.body.url
        const date =  new Date();
        const hash = date.getTime()
        console.log(!url.includes('http://'))
        console.log(!url.includes('https://'))
        console.log(!url.includes('http://') || !url.includes('https://'))
        if (!url.includes('http://') && !url.includes('https://')) {
            url = 'http://' + url
        }
        URLS[hash] = {
            shortURL:`http://localhost:4000/${hash}`,
            originalURL: url,
            used: 0}
        res.status(200).send({data: URLS[hash]})
        console.log(URLS[hash])
    } catch (error) {
        console.log(error)
    }
})

// Listening to the port
app.listen(PORT, function(err){
   if (err) console.log(err);
   console.log("Server listening on PORT", PORT);
});