const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const contas = {};

app.get("/", (req, res) => {
  res.json({ msg: "API de contas bancárias!" });
});

app.post("/contas", (req, res) => {
  const conta = req.body;
  const idConta = uuidv4();
  conta.id = idConta;
  contas[idConta] = conta;
  if (conta.saldo < 0) {
    return res.status(400).json({ msg: "Saldo inválido!" });
  }
  res.status(201).json({ msg: "Conta criada com sucesso!", data: conta });
});

app.get("/contas", (req, res) => {
  res.json({ contas: Object.values(contas) });
});

app.get("/contas/:id", (req, res) => {
  const idConta = req.params.id;
  res.json({ conta: contas[idConta] });
});

app.delete("/contas", (req, res) => {
  const id = req.query.id;
  console.log(contas[id]);
  if (id && contas[id]) {
    delete contas[id];
    console.log(contas[id]);
    res.json({ msg: "Conta excluída com sucesso!" });
  } else {
    res.status(400).json({ msg: "Conta não encontrada!" });
  }
});

app.put("/contas", (req, res) => {
  const id = req.query.id;
  if (id && contas[id]) {
    const conta = req.body;
    conta.id = id;
    contas[id] = conta;
    res.json({ msg: "Conta atualizada com sucesso!" });
  } else {
    res.status(404).json({ msg: "Conta não encontrada" });
  }
});

app.listen(8000, () => {
  console.log("Servidor rodando na porta 8000");
});
