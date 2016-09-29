const databaseName = 'catan';

module.exports = {
  development: {
    client: 'postgresql',
    connection: `postgres://localhost/${databaseName}`,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  },
  test: {
    client: 'postgresql',
    connection: `postgres://localhost/${databaseName}_test`,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  }
  production: {
    client: 'postgresql',
    connection: {
      database: 'postgresql-flexible-16508'
    },
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    }
};
