/**
 * Connections
 * 
 * The `connections` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which 
 * "saved setting" should be used if a model doesn't have a connection specified.
 *
 * Note: If you're using version control, you should put your passwords/api keys 
 * in `config/local.js`, not here, in case you inadvertently push them up to your repository.
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.connections = {

  // Local disk storage for DEVELOPMENT ONLY
  //
  // Installed by default.
  //
  localDiskDb: {
    adapter: 'sails-disk'
  },

  // MySQL is the world's most popular relational database.
  // http://en.wikipedia.org/wiki/MySQL
  //
  // Run:
  // npm install sails-mysql
  //
  someMysqlServer: {
    adapter : 'sails-mysql',
    host    : 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user    : 'YOUR_MYSQL_USER',
    password: 'YOUR_MYSQL_PASSWORD', 
    database: 'YOUR_MYSQL_DB'
  },

  // MongoDB is the leading NoSQL database.
  // http://en.wikipedia.org/wiki/MongoDB
  //
  // Run:
  // npm install sails-mongo
  //
  someMongodbServer: {
    adapter   : 'sails-mongo',
    host      : 'localhost',
    port      : 27017,
    user      : 'username',
    password  : 'password',
    database  : 'your mongo db name here'
  },

  // PostgreSQL is another officially supported relational database. 
  // http://en.wikipedia.org/wiki/PostgreSQL
  //
  // Run:
  // npm install sails-postgresql
  //
  somePostgresqlServer: {
    adapter   : 'sails-postgresql',
    host      : 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user      : 'YOUR_POSTGRES_USER',
    password  : 'YOUR_POSTGRES_PASSWORD', 
    database  : 'YOUR_POSTGRES_DB'
  }


  // More adapters:
  // https://github.com/balderdashy/sails

};




