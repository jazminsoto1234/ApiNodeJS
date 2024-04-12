/*const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('usuarios.sqlite');


const createTableQuery = `
  CREATE TABLE IF NOT EXISTS CREATE TABLE users(
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
	email TEXT NOT NULL
    )
`;


db.run(createTableQuery, function(err) {
  if (err) {
    return console.error('Error al crear la tabla:', err.message);
  }
  console.log('Tabla creada exitosamente');
  
  
  db.close();
});
*/