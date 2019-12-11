// Remove overlays created by intentional intervention (e.g. finishing a puzzle,
// or guess the last group).

// "You solved the grid!"
const gridcomplete = document.getElementById("gridcomplete");
gridcomplete.parentNode.removeChild(gridcomplete)

// "Rate this grid"
const rating = document.getElementById("rating");
rating.parentNode.removeChild(rating);
