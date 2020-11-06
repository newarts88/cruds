const express = require('express');
const app = express();
const port = 3000;

app.get('/aula', (req,resp) =>  { 
    resp.send('Hello World')
    }) 

app.listen(port, () => {
    console.log('Aplicação porta' + port)
    })

//daqui pra baixo
app.route('/config/conexao.js')
.get(function(req, res){
    const cursor = db.collection('data').find()
    res.render(formulario.ejs)
})

.post((req,res) => {
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log("Erro!")
        console.log("Salvo com sucesso!")
        res.redirect('/registros')
    })
})

app.route('/registros')
.get((req, res) => {
  db.collection('data').find().toArray((err, results) => {
    if (err) return console.log(err)
    res.render('registros.ejs', { data: results })
  })
})

app.route('/edit/:id')
.get((req, res) => {
  var id = req.params.id

  db.collection('data').find(ObjectId(id)).toArray((err, result) => {
    if (err) return res.send(err)
    res.render('editar.ejs', { data: result })
  })
})
.post((req, res) => {
  var id = req.params.id
  var nome = req.body.nome
  var time = req.body.time

  db.collection('data').updateOne({_id: ObjectId(id)}, {
    $set: {
      nome: nome,
      time: time
    }
  }, (err, result) => {
    if (err) return res.send(err)
    res.redirect('/registros')
    console.log('Editado com sucesso!')
  })
})

app.route('/delete/:id')
.get((req, res) => {
  var id = req.params.id

  db.collection('data').deleteOne({_id: ObjectId(id)}, (err, result) => {
    if (err) return res.send(500, err)
    console.log('Excluído')
    res.redirect('/registros')
  })
})