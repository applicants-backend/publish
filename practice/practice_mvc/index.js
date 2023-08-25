const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models')

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json())

//router 분리
const router = require('./routes/main');
app.use('/', router);


app.use('*', (req,res) => {
    res.status(404).render('404');
});

//server open
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
