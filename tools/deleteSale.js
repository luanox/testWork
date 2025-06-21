const db = require('../db');

async function deleteSale(user_id, codigo) {
    console.log('[DEBUG] Entrou em deleteSale.js > deleteSale');
  // Exclui só se o registro pertencer ao usuário
  const [rows] = await db.query(
    'DELETE FROM registros WHERE user_id = ? AND codigo = ?',
    [user_id, codigo]
  );
  // rows.affectedRows === 1 significa que um registro foi excluído
  return rows.affectedRows === 1;
}

module.exports = deleteSale;
