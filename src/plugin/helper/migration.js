const DBMigrate = require('db-migrate');

const applyMigration = () =>
  new Promise((resolve, reject) => {
    const dbMigrate = DBMigrate.getInstance(true);
    dbMigrate.silence();

    // .up() will run all the up files inside migrations
    dbMigrate.up((error, result) => {
      if (error) {
        reject(error);
      } else {
        if (result === undefined) {
          resolve(0);
        }
        resolve(result);
      }
    });
  });

module.exports = applyMigration;
