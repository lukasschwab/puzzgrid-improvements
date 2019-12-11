// Remove overlays created by intentional intervention (e.g. finishing a puzzle,
// or guess the last group).

// "Rate this grid"
const rating = document.getElementById("rating");
rating.parentNode.removeChild(rating);
