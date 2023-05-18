// Import necessary dependencies
const { exec } = require('child_process');

// Array of table names in the order they need to be dropped and created
const tableNames = ['Users', 'Tasks'];

// Function to execute a migration command
const executeMigrationCommand = async (command, tableName) => {
  return new Promise((resolve, reject) => {
    exec(`${command} --to ${tableName}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing migration command for ${tableName}:`, error);
        reject(error);
      } else {
        console.log(`Migration command executed successfully for ${tableName}`);
        resolve();
      }
    });
  });
};

// Function to drop a table
const dropTable = async (tableName) => {
  const dropCommand = `npx sequelize-cli db:migrate:undo:all --env test`;
  await executeMigrationCommand(dropCommand, tableName);
};

// Function to create a table
const createTable = async (tableName) => {
  const createCommand = `npx sequelize-cli db:migrate --env test`;
  await executeMigrationCommand(createCommand, tableName);
};

// Function to run migrations
const runTestMigrations = async () => {
  for (const tableName of tableNames) {
    await dropTable(tableName);
    await createTable(tableName);
  }
};

// Run the test migrations before running the tests
before(async () => {
  await runTestMigrations();
});

