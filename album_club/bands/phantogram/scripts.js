
// Function to add album details to HTML
function addAlbumDetails() {
    const albumName = album_results.album_name;
    const bandName = album_results.band_name;
    const albumRating = album_results.album_rating;

    // Add album name to HTML
    const albumNameElement = document.getElementById('album-name');
    albumNameElement.textContent = albumName;

    // Add band name to HTML
    const bandNameElement = document.getElementById('band-name');
    bandNameElement.textContent = `by ${bandName}`;

    // Add album rating to HTML
    const albumRatingElement = document.getElementById('album-rating');
    albumRatingElement.textContent = `Overall Album Rating: ${albumRating.toFixed(2)} / 4`;
}



// Function to create a progress bar
function createProgressBar(trackRating) {
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  progressBar.setAttribute('role', 'progressbar');
  progressBar.setAttribute('aria-valuenow', trackRating % 25);
  progressBar.setAttribute('aria-valuemin', '0');
  progressBar.setAttribute('aria-valuemax', '100');
  progressBar.style.width = `${trackRating * 25}%`;
  if (trackRating >= 3.5) {
    progressBar.classList.add('bg-success');
  }

  // Create the progress bar text
  const progressBarText = document.createElement('span');
  progressBarText.textContent = trackRating.toFixed(2);

  // Append the progress bar text to the progress bar
  progressBar.appendChild(progressBarText);

  return progressBar;
}

// Function to create a track name column
function createTrackNameColumn(trackName) {
  const nameColumn = document.createElement('div');
  nameColumn.classList.add('col-sm-4');
  nameColumn.textContent = trackName;
  return nameColumn;
}

// Function to create a track rating column
function createRatingColumn(trackRating) {
  const ratingColumn = document.createElement('div');
  ratingColumn.classList.add('col-sm-8');
  // Create the progress div
  const progressDiv = document.createElement('div');
  progressDiv.classList.add('progress');

  // Create the progress bar
  const progressBar = createProgressBar(trackRating);

  // Append the progress bar to the progress div
  progressDiv.appendChild(progressBar);

  // Append the progress div to the rating column
  ratingColumn.appendChild(progressDiv);

  return ratingColumn;
}

// Function to create a row for a track rating
function createTrackRatingRow(trackName, trackRating) {
  // Create a new row
  const row = document.createElement('div');
  row.classList.add('row');

  // Create the track name column
  const nameColumn = createTrackNameColumn(trackName);
  row.appendChild(nameColumn);

  // Create the track rating column
  const ratingColumn = createRatingColumn(trackRating);
  row.appendChild(ratingColumn);

  return row;
}

// Function to add track ratings to HTML
function addTrackRatings() {
  const trackRatings = album_results.track_ratings;

  // Get the table element
  const table = document.getElementById('track-ratings');

  // Loop through each track rating and create a row for it
  trackRatings.forEach((track) => {
    const trackName = track[0];
    const trackRating = track[1];

    const row = createTrackRatingRow(trackName, trackRating);

    // Append the row to the table
    table.appendChild(row);
  });
}

// Comments
 
function createComment(user, comment) {
  function addNewlines(text) {
    return text.replace(/\n/g, "<br>");
  }
  const commentP = document.createElement('p');
  commentP.innerHTML = `"${addNewlines(comment)}" - <strong>${user}</strong>`;
  return commentP;
}

function createCarouselItem(active = false) {
  const carouselItem = document.createElement('div');
  carouselItem.classList.add('carousel-item', 'text-center', 'py-3');
  if (active) {
    carouselItem.classList.add('active');
  }
  return carouselItem;
}

// Modify the addComments function to include newlines
function addComments(comments) {

  const commentsList = document.getElementById('comments'); // parent element

  comments.forEach((comment, index) => {
    const user = comment.user;
    const commentText = comment.comment;

    const carouselItem = createCarouselItem(index === 0)
    const commentP = createComment(user, commentText);
    
    carouselItem.appendChild(commentP);
    commentsList.appendChild(carouselItem);
  });
}

let album_results = {}
    
fetch('data/phantogram_ceremony.json')
.then(response => response.json())
.then(data => { 
  album_results = data
  return album_results
 })
.then((album_results) => {
  // Call the functions to add the values to the HTML page
  addAlbumDetails();
  addTrackRatings();
  addComments(album_results.comments);
})
.catch(error => console.error('Error:', error));
