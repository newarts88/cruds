Equipe:
10769226 - Dayvison Santos de Souza
10770593 - Franciene Mayara Silva Zacarias
10772308 - Thiago dos Anjos Bezerra
10769897 - Jonata dos Anjos Afonso
10528326 - José Cordeiro Moura Segundo Neto


Para usar os cruds é necessário:
Usar o PHPMyAdmin, na porta 3306.
Criar os seguintes bancos:

CRUD1
Banco: agendamento 
Tabela: agendamento
id int (11) not null, primary key
email varchar (255) not null
nome varchar (255) not null
ativo boolean default false

CRUD2
Banco: listatelefonica 
Tabela: listatelefonica:
id int (11) not null, primary key
nome varchar(50) not null
telefone varchar(50) not null

CRUD3
Banco: cadastrotime
Tabela: cadastrotime:
id int (11) not null, primary key
nome varchar(50) not null
time varchar(50) not null


Após criar os bancos de dados, abrir o terminal na pasta em que se encontra o projeto e digitar os seguintes comandos:
1. npm install
2. npm start
3. node src\config\conexao.js