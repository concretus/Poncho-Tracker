module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://localhost/poncho_db_test',
    // connection: {
      // host     : process.env.POSTGRES_HOST,
      // user     : process.env.POSTGRES_USER,
      // password : process.env.POSTGRES_PASSWORD,
      // database : process.env.POSTGRES_DB,
      // charset  : 'utf8'
    // },
    migrations: {
      directory: __dirname +'/migrations'
    },
    seeds: {
      directory: __dirname +'/seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://localhost/poncho_db_dev',
    // connection: {
      // host     : process.env.POSTGRES_HOST,
      // user     : process.env.POSTGRES_USER,
      // password : process.env.POSTGRES_PASSWORD,
      // database : process.env.POSTGRES_DB,
      // charset  : 'utf8'
    // },
    migrations: {
      directory: __dirname +'/migrations'
    },
    seeds: {
      directory: __dirname +'/seeds/test'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.POSTGRES_HOST,
    // connection: {
      // host     : process.env.POSTGRES_HOST,
      // user     : process.env.POSTGRES_USER,
      // password : process.env.POSTGRES_PASSWORD,
      // database : process.env.POSTGRES_DB,
      // charset  : 'utf8'
    // },
    migrations: {
      directory: __dirname +'/migrations'
    },
    seeds: {
      directory: __dirname +'/seeds/prodection'
    }
  },
};