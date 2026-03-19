const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const contas = {};

app.get("/", (req, res) => {
  res.json({ msg: "API simples de contas bancárias!" });
});

app.post("/contas", (req, res) => {
  const conta = req.body;
  console.log(conta?.saldo);
  const saldo = Number(conta?.saldo); // NaN
  console.log(saldo);
  // NaN verdadeiro, NaN falso (35.00)
  // ! NaN -> !false -> true
  if (!isNaN(saldo) && saldo > 0) {
    conta.saldo = saldo;
    const numero = uuidv4();
    conta.numero = numero;
    contas[numero] = conta;
    res
      .status(201)
      .json({ msg: "Conta bancária criada com sucesso!", data: conta });
  } else {
    res.status(400).json({ msg: "Saldo inválido!" });
  }
});

//app.get("/contas", (req, res) => {
//res.json({ contas: Object.values(contas) });
//});

// GET /contas/:numero
app.get("/contas/:numero", (req, res) => {
  // Params => parametros da URL
  const numero = req.params.numero;
  if (contas[numero]) {
    res.json({ conta: contas[numero] });
  } else {
    res.status(404).json({ msg: "Conta não encontrada!" });
  }
});

// GET /contas?numero=GJJD
app.get("/contas", (req, res) => {
  // Query Strung => ?chave=valor
  const numero = req.query.numero;
  if (!numero) {
    res.json({ contas: Object.values(contas) });
  } else if (contas[numero]) {
    res.json({ contas: contas[numero] });
  } else {
    res.status(404).json({ msg: "Conta não encontrada!" });
  }
});

app.put("/contas", (req, res) => {
  const numero = req.query.numero;
  if (numero && contas[numero]) {
    const conta = req.body;
    conta.numero = numero;
    contas[numero] = conta;
    res.json({ msg: "Conta atualizada com sucesso!" });
  } else {
    res.status(404).json({ msg: "Conta não encontrada" });
  }
});

app.listen(8000, () => {
  console.log("Servidor rodando na porta 8000");
});
