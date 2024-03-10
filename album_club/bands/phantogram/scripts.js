const album_results = {
    "album_name": "Ceremony",
    "band_name": "Phantogram",
    "album_rating": 2.6666666666666665,
    "track_ratings": [
      [
        "Dear God",
        3.0
      ],
      [
        "In A Spiral",
        3.8333333333333335
      ],
      [
        "Into Happiness",
        3.6666666666666665
      ],
      [
        "Pedestal",
        2.5
      ],
      [
        "Love Me Now",
        2.6666666666666665
      ],
      [
        "Let Me Down",
        2.5
      ],
      [
        "News Today",
        1.6666666666666667
      ],
      [
        "Mister Impossible",
        2.6666666666666665
      ],
      [
        "Glowing",
        2.5
      ],
      [
        "Gaunt Kids",
        1.8333333333333333
      ],
      [
        "Ceremony",
        2.6666666666666665
      ]
    ],
    "comments": [
      {
        "user": "Mitch F.",
        "comment": "It's an album that hits hard at the start and winds down the further you go along. Perfect for night drives and background work music. "
      },
      {
        "user": "Kristie K.",
        "comment": "It def grew on me. The songs got weirder as they went on but I also added 3 songs from the album to my regular rotation. "
      },
      {
        "user": "Big T.",
        "comment": "I think this album has some great songs in it. Overall I don\u2019t think I would listen to this band/artist consistently to really get to know them and the flow of the music they make. I will say though not knowing \u201cIn A Spiral\u201d was on this album came to me as a great surprise since it\u2019s a song that gets played on my stations when I\u2019m driving to work, at the gym, etc. "
      },
      {
        "user": "Nick M.",
        "comment": "Verifiable banger, made for good commute vibes. First half of the album was better."
      },
      // {
      //   "user": "Eric D.",
      //   "comment": "I knew this album was a risk for the group because it's dark and experimental. In my mind I knew it wasn't a banger of an album, but they're are some bangers in it. It's more of an experience. Feeling ALL the emotions of losing someone really close to you. \n\nFalling Into Happiness, Dear God, Glowing, Mr Impossible, and In A Spiral are my favorites on the album. Falling Into Happiness I listen to quite on the regular.\n\nThis was also a glimpse to get people into female indie bands. I feel like there are so many good ones that people haven't listened to like the Yeah Yeah Yeahs, Metric, and Chvrches. Plus Phantogram has an amazing discography that everyone should check out."
      // }
    ]
  }

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

// Function to add track ratings to HTML
function addTrackRatings() {
  const trackRatings = album_results.track_ratings;

  // Get the table element
  const table = document.getElementById('track-ratings');

  // Loop through each track rating and create a row for it
  trackRatings.forEach((track) => {
    const trackName = track[0];
    const trackRating = track[1];

    // Create a new row
    const row = document.createElement('div');
    row.classList.add('row');

    // Create the track name column
    const nameColumn = document.createElement('div');
    nameColumn.classList.add('col-sm-4');
    nameColumn.textContent = trackName;
    row.appendChild(nameColumn);

    // Create the track rating column
    const ratingColumn = document.createElement('div');
    ratingColumn.classList.add('col-sm-8');
    // Create the progress div
    const progressDiv = document.createElement('div');
    progressDiv.classList.add('progress');

    // Create the progress bar
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.setAttribute('role', 'progressbar');
    progressBar.setAttribute('aria-valuenow', trackRating % 25);
    progressBar.setAttribute('aria-valuemin', '0');
    progressBar.setAttribute('aria-valuemax', '100');
    progressBar.style.width = `${trackRating * 25}%`;

    // Create the progress bar text
    const progressBarText = document.createElement('span');
    progressBarText.textContent = trackRating.toFixed(2);

    // Append the progress bar text to the progress bar
    progressBar.appendChild(progressBarText);

    // Append the progress bar to the progress div
    progressDiv.appendChild(progressBar);

    // Append the progress div to the rating column
    ratingColumn.appendChild(progressDiv);
    row.appendChild(ratingColumn);

    // Append the row to the table
    table.appendChild(row);
  });
}

    // Modify the addComments function to include newlines
    function addComments() {
      function addNewlines(text) {
        return text.replace(/\n/g, "<br>");
      }
      const comments = album_results.comments;

      // Add comments to HTML
      const commentsList = document.getElementById('comments');
      comments.forEach((comment, index) => {
        const user = comment.user;
        const commentText = comment.comment;

        const commentDiv = document.createElement('div');
        commentDiv.classList.add('carousel-item', 'text-center', 'py-3');
        // commentDiv.classList.add('text-center');
        if (index === 0) {
          commentDiv.classList.add('active');
        }
        const commentP = document.createElement('p');

        commentP.innerHTML = `"${addNewlines(commentText)}" - <strong>${user}</strong>`;

        commentDiv.appendChild(commentP);
        commentsList.appendChild(commentDiv);
      });
    }



// Call the functions to add the values to the HTML page
addAlbumDetails();
addTrackRatings();
addComments();


