const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

// CRUD => Create, Read, Update e Delete
const alunos = {};

app.get('/', (req, res) => {
    res.json({msg: "API simples com Express!"});
});

app.post('/alunos', (req, res) => {
    const aluno = req.body;
    const idAluno = uuidv4();
    aluno.id = idAluno;
    alunos[idAluno] = aluno;
    res.json({msg: "Aluno adicionado com sucesso", data: aluno});
});

app.get('/alunos', (req, res) => {
    res.json({alunos: Object.values(alunos)});
});

// GET /alunos/:id
app.get('/alunos/:id', (req, res) => {
    // Params => parâmetros da URL
    const idAluno = req.params.id;
    res.json({aluno: alunos[idAluno]});
});

// DELETE /alunos por query string => /?var1=valor1&var2=valor2
app.delete('/alunos', (req, res) => {
    const id = req.query.id;
    console.log(alunos[id]);
    if (id && alunos[id]) {
        delete alunos[id];
        console.log(alunos[id]);
        res.json({msg: "Aluno excluído com sucesso!"});
    } else {
        res.status(400).json({msg: "Aluno não econtrado!"});
    }
});

// PATCH => atualiza parcialmente o recurso, não precisa enviar todas propriedades
// PUT = mandar o objeto (recurso) completo para atualizar ou 

app.put('/alunos', (req, res) => {
    const id = req.query.id; //  guardaroupa.gaveta.pochete.batom
    if (id && alunos[id]) {
        const aluno = req.body;
        aluno.id = id;
        alunos[id] = aluno;
        res.json({msg: "Aluno atualizado com sucesso!"});
    } else {
        res.status(404).json({msg: "Aluno não encontrado"});
    }
});

app.listen(8000, () =>  {
    console.log("Servidor aguardando na porta 8000");
});