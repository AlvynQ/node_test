const express = require('express');
const app = express();
const port = 3000 ;
app.use(express.static('public'));
app.set("view engine", "ejs");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const regex = require('./module/regex');


const user={
    name : "alvyn",
    email : "aquennehen.pro@gmail.com",
    mdp : "1234",
    isAdmin : true 
}


app.get('/', (req, res) => {
//    res.send('Hello Alvyn!')
//    res.sendFile("index.html", {root :__dirname})
    res.render('index', {user:user});
    
})

app.get('/inscription', (req, res) => {
    res.render('inscription');
})



app.post('/inscription', (req, res) =>{

if(regex.mail.test(req.body.mail) == false) {
    good = false;
    console.log("mail non valide");
}
if(req.body.mail != req.body.mail_confirm) {
    good = false;
    console.log("mail ne correspond pas");
}
if(regex.pass.test(req.body.password) == false) {
    good = false;
    console.log("mot de passe non valide");
}
if(req.body.password != req.body.password_confirm) {
    good = false;
    console.log("mot de passe ne correspond pas");
}
else{
    good = true;
}

if (good == true){
    res.redirect('/');
}

})


app.get('/TT', (req, res) => {
    res.send('Hello gR!')
})
app.get('/tre', (req, res) => {
    res.send('Hello grezrezR!')
})


app.listen(port, () => {
    console.log(`Example app listeningyutuuy at http://localhost:${port}`)
})





