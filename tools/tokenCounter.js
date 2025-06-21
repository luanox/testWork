const fs = require('fs');
const path = require('path');

const tokenLogPath = path.join(__dirname, '../token_log.json');

function registrarUsoDeTokens({ totalTokens, modelo, origem = 'agent', telefone = 'desconhecido' }) {
    console.log('[DEBUG] Entrou em tokenCounter.js > registrarUsoDeTokens');
  const agora = new Date();
  const registro = {
    data: agora.toISOString(),
    modelo,
    origem,
    telefone,
    tokens: totalTokens
  };

  let logAtual = [];

  if (fs.existsSync(tokenLogPath)) {
    try {
      logAtual = JSON.parse(fs.readFileSync(tokenLogPath, 'utf8'));
    } catch (e) {
      logAtual = [];
    }
  }

  logAtual.push(registro);

  fs.writeFileSync(tokenLogPath, JSON.stringify(logAtual, null, 2));
}

module.exports = {
  registrarUsoDeTokens
};
