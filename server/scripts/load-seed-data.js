const client = require('../db-client'); 
const albums = require('../data/albums');
const genres = require('./genre-data'); 
console.log('loading', albums);

Promise.all(
  genres.map(genre => {
    return client.query(`
    INSERT INTO genre (name, short_name)
      VALUES($1, $2);
    `,
    [genre.name, genre.shortName]);
  })
)
  .then(() => {
    return Promise.all (
      albums.map(album =>{
        return client.query(`
      INSERT INTO album(name, year, description, genre_id, rating)
      SELECT
      $1 as name,
      $2 as year,
      $3 as description,
      id as genre_id,
      $4 as rating
      FROM genre
      WHERE short_name = $5;
      `,
        [album.name, album.year, album.description, album.rating, album.genre]);
      }) 
    );
  })


  
  .then(
    () => console.log('seed data load complete'),
    err =>console.log(err)
  )
  .then(() => {
    client.end();
  });