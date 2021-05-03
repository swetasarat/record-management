const env = {
  database: 'testdb',
  username: 'root',
  password: '',
  host: 'localhost',
  // port: '8082',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 100
  }
};
 
module.exports = env;
