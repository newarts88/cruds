const mysql = require('mysql');
const environment = "development";
const config = require("../config/config.js")[environment];

const con = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
});
/*iniciando conexão com o banco*/
con.connect((err) => {
    if(err) {
        console.log('Erro ao conectar!', err)
        return
    }
    console.log('Conexão realizada!')
})

const agendamento = {nome:'Daniel Chaves', telefone: '991894136'}
/*inserir */
con.query('INSERT INTO listatelefonica SET ? ', agendamento, (err,rows) => {
    if(err) throw err
    console.log("Registro salvo com sucesso");
})

/*selecionar, listar */
con.query('select * from listaclientes', (err,rows) => {
    if(err) throw err
    console.log('Agendamentos', rows, '\n\n')
})

/*atualizar */
con.query('UPDATE listaclientes SET nome = ?, telefone = ? where ID = ? ', ['Tiago','12345678','1'], (err,rows) => {
    if(err) throw err
    console.log("Registro Atualizado com sucesso");
})

/*deletar*/
con.query('DELETE FROM listaclientes where ID = ? ', ['2'], (err,resultado) => {
    if(err) throw err
    console.log(`Foram excluida(s) ${resultado.affectedRows} linha(s)`);

})

/*selecionar, listar */
con.query('select * from listaclientes', (err,rows) => {
    if(err) throw err
    console.log('Agendamentos', rows, '\n\n')
})

con.query('select * from listaclientes', (err,rows) => {
    if(err) throw err

    rows.forEach(row => {
        console.log(`${row.nome} - ${row.telefone}`);
    })
})
/*finalizar conexão com o banco*/
con.end((err) => {
    if(err) {
        console.log('Erro ao finalizar conexão', err)
        return
    }
    console.log('Conexão encerrada!')
})