const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models')

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use('*', (req,res) => {
    res.status(404).render('404');
});

//server open
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
