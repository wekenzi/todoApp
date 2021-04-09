const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index')
})

app.get('/addItem', (req, res) => {
    res.render('add')
})

app.get('/todo/:index', (req, res) => {
    res.render('todo', { index: req.params.index})
})



app.listen(port,() => console.log('listening'));