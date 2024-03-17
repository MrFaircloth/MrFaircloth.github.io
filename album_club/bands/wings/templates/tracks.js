import { createTemplateElements } from './builder.js';

// Function to fetch data
async function fetchData() {
    // Fetch data from an API, database, etc.
    // This is just a placeholder
    return [
        {
          "track_name": "Band on the Run",
          "rating": 3.5
        },
        {
          "track_name": "Jet",
          "rating": 3.33
        },
        {
          "track_name": "Bluebird",
          "rating": 2
        },
        {
          "track_name": "Mrs. Vandebilt",
          "rating": 2
        },
        {
          "track_name": "Let Me Roll It",
          "rating": 3.17
        },
        {
          "track_name": "Mamunia",
          "rating": 2.33
        },
        {
          "track_name": "No Words",
          "rating": 2
        },
        {
          "track_name": "Picasso's Last Words (Drink to Me)",
          "rating": 2.17
        },
        {
          "track_name": "Nineteen Hundred and Eighty Five",
          "rating": 3.5
        }
      ]
}

// <!-- template.html -->
// <div class="container">
//     <div class="container">
//         <h4 class="track-name"></h4>
//     </div>
//     <div class="progress my-3">
//         <div class="progress-bar" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="4" style="width: 50%;">
//             <span>Template Value</span>
//         </div>
//     </div>
// </div>


// Function to update the progress bar in the template
function updateProgressBar(templateClone, itemData) {
    const track_name = itemData.track_name;
    const rating = itemData.rating;

    const progressBar = templateClone.querySelector('.progress-bar');
    progressBar.setAttribute('aria-valuenow', rating);
    progressBar.setAttribute('aria-valuemax', 4);  // Set max value to 4
    progressBar.style.width = `${(rating / 4) * 100}%`;  // Adjust width calculation
    progressBar.querySelector('span').textContent = rating.toFixed(2);
    if (rating >= 3.5) {
        progressBar.classList.add('bg-success');
      }

    templateClone.querySelector('.track-name').textContent = track_name;
}

// Call the function with your dataMapper
fetchData().then(data => createTemplateElements('template-container', 'templates/tracks.tmpl.html', data, updateProgressBar));