// ========================================
// DATABASE CONFIGURATION =================
// ========================================
const db = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql'
};

module.exports = {
  development: db,
  production: db,
  test: { ...db,  dialect: process.env.DB_DIALECT || 'sqlite' }
};
