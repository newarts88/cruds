Aluno:
10706674 - Daniel Chaves Pereira

Para usar os cruds é necessário:
Usar o PHPMyAdmin, na porta 3306.
Criar os seguintes bancos:

CRUD1
Banco: listaclientes 
Tabela: listaclientes:
id int (11) not null, primary key
nome varchar(50) not null
telefone varchar(50) not null

CRUD2
Banco: agendamento 
Tabela: agendamento
id int (11) not null, primary key
email varchar (255) not null
nome varchar (255) not null

CRUD3
Banco: cadastroequipe
Tabela: cadastroequipe:
id int (11) not null, primary key
nome varchar(50) not null
equipe varchar(50) not null


Após criar os bancos de dados, abrir o terminal na pasta em que se encontra o projeto e digitar os seguintes comandos:
1. npm install
2. npm start
3. node src\config\conexao.js
