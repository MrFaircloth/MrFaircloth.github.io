import { createTemplateElements } from './builder.js';

const data = [
  {
    "timestamp": "3/15/2024 11:39:29",
    "username": "Eric D.",
    "album_rating": 2,
    "comments": "Kind of a hard listen for most of these songs because they seem to drag. They're are some bangers but the others are a bit repetitive with the lyrics.",
    "submission_guess": "Big T.",
    "listen_count": 1
  },
  {
    "timestamp": "3/16/2024 12:10:20",
    "username": "Kristie K.",
    "album_rating": 3,
    "comments": "Classic album, classic album. Jet gives me Scooby doo vibes. I would have listened to it more but I had work events and extra videos to be edited both of which are hard to listen to music while doing.",
    "submission_guess": "Big T.",
    "listen_count": 5
  },
  {
    "timestamp": "3/16/2024 13:11:22",
    "username": "Mitch F.",
    "album_rating": 3,
    "comments": "Was never a big Paul McCartney fan but I can understand why he has a household name. Like most songs from the era, the repetitiveness can be a bit tiresome but overall I think it was a solid album.",
    "submission_guess": "Big T.",
    "listen_count": 5
  },
  {
    "timestamp": "3/16/2024 16:24:55",
    "username": "Nick M.",
    "album_rating": 2,
    "comments": "Pretty mellow, not quite my speed but a good listen anyway.",
    "submission_guess": "Mitch F.",
    "listen_count": 1
  }
]

{/* <div class="container shadow p-3 mb-5 bg-white rounded">
    <div class="row">
    <p class="col username">Eric D.</p>
    <p class="col timestamp">3/15/2024 11:39:29</p>
    </div>
    <div class="row">
    <p class="text">Kind of a hard listen for most of these songs because they seem to drag. They're are some bangers but the others are a bit repetitive with the lyrics.</p>
    </div>
    <div class="row">
        <p class="col">Listen Count: 1</p>
        <p class="col">Guess: Big T.</p>
    </div>
</div> */}

// Function to update the progress bar in the template
function updateCommentTemplate(templateClone, itemData) {
    templateClone.querySelector('.username').textContent = itemData.username;
    templateClone.querySelector('.timestamp').textContent = itemData.timestamp;
    templateClone.querySelector('.text').innerHTML = itemData.comments.replace(/\n/g, '<br>');
    templateClone.querySelector('.listen-count').textContent = `Listen Count ${itemData['listen_count']}`;
    templateClone.querySelector('.guess').textContent = `Guess: ${itemData['submission_guess']}`;
}

// Call the function with your dataMapper
createTemplateElements('comments-container', 'templates/comment.tmpl.html', data, updateCommentTemplate);