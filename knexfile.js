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
      database: 'postgres://vroppzvgsspsem:knp9mzkAL3N5fN5qAgdj01naW_@ec2-54-163-230-103.compute-1.amazonaws.com:5432/d7a5jse1ic8vo0'
    },
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    }
  }
};
