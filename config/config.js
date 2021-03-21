require('dotenv').config();

module.exports = {
  development: {
    // dialect: 'sqlite',
    // storage: './database.sqlite3',
    // logQueryParameters: true,
    // benchmark: true
    url: 'postgres://cutdzkyqxihtxu:19cd8c82d32b161fc4587dbfe40fa0bba9e22f7f6eafcae6ee11961a81bbbe40@ec2-54-167-168-52.compute-1.amazonaws.com:5432/d1lg1d407c4t1q',
    dialect: 'postgres'
  },
  test: {
    dialect: 'sqlite',
    storage: './db-test.sqlite',
    logQueryParameters: true,
    benchmark: true,
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
};
