function salvar(req, res) {
  res.send('Usuaio > salvar');
}

function obter(req, res) {
  res.send('Usuario > obter');
}

module.exports = { salvar, obter };
