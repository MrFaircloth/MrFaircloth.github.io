
const album_id = '134243072';
const album_url = `https://api.deezer.com/album/${album_id}`;


fetch(album_url, { mode: 'no-cors' })
  .then(response => response.json())
  .then(data => {
    const artist = data.artist.name;
    const title = data.title;
    const genres = data.genres.data.map(genre => genre.name);
    const tracks = data.tracks.data.map(track => track.title);

    console.log(JSON.stringify({artist, title, genres, tracks}))
  })
  .catch(error => {
    console.error("Error:", error);
  });
