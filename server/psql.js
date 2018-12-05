const pg = require ('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/albums';
const client = new Client(databaseUrl);

client.connect()
.then(() => {
    return client.query(`
    CREATE TABLE IF NOT EXISTS albums (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        track VARCHAR(256),
        start_date DATE
    )`)
});

client.query(`
SELECT *FROM albums;
`)
.then(result => {
    console.log(results);
})
.catch(err)