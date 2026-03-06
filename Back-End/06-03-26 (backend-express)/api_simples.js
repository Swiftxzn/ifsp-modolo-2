const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

// CRUD => Create, Read, Update, Delete
const alunos = {};

app.get("/", (req, res) => {
  res.json({ msg: "API simples com Express!" });
});

app.post("/alunos", (req, res) => {
  const aluno = req.body;
  const idAluno = uuidv4();
  aluno.id = idAluno;
  alunos[idAluno] = aluno;
  res.json({ msg: "Aluno adicionado com sucesso!", data: aluno });
});

app.get("/alunos", (req, res) => {
  res.json({ alunos: Object.values(alunos) });
});

app.listen(8000, () => {
  console.log("Servidor aguardando na porta 8000");
});
