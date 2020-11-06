module.exports = app => {

    app.get('/cadastro', (req, res) =>
        res.send('Get Cadastro de Time')
    )

    app.post('/cadastro', (req, res) => {
        console.log(req.body);
        res.send('Post Cadastro')
    })
}