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
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'ec2-54-163-230-103.compute-1.amazonaws.com'
    },
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    }
  }
};
