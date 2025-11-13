let mCurrentIndex = 0; // Tracks the current image index
let mImages = []; // Array to hold GalleryImage objects
const mUrl = "images.json"; // Replace with actual JSON URL
const mWaitTime = 5000; // Timer interval in milliseconds

$(document).ready(() => {
  $(".details").hide(); // Hide details initially

  // Call a function here to start the timer for the slideshow
  startTimer();
  // Select the moreIndicator button and add a click event to:
  // - toggle the rotation classes (rot90 and rot270)
  // - slideToggle the visibility of the .details section
  $(".moreIndicator").click(() => {
    $(".moreIndicator").toggleClass("rot90 rot270");
    $(".details").slideToggle();
  });
  // Select the "Next Photo" button and add a click event to call showNextPhoto
  $("#nextPhoto").click(() => {
    showNextPhoto();
  });
  // Select the "Previous Photo" button and add a click event to call showPrevPhoto
  $("#prevPhoto").click(() => {
    showPrevPhoto();
  });
  // Call fetchJSON() to load the initial set of images
  fetchJSON();
});

// Function to fetch JSON data and store it in mImages
function fetchJSON() {
  $.ajax({
    url: mUrl,
    dataType: "json",
    success: (data) => {
      mImages = data.images;
      swapPhoto();
    },
    error: (xhr, status, error) => {
      console.error("Failed to load JSON:", status, error);
    },
  });
}

// Function to swap and display the next photo in the slideshow
function swapPhoto() {

  let currentImage = mImages[mCurrentIndex];
  $("#photo").attr("src", currentImage.imgPath);
  $(".location").text(`Make & Model: ${currentImage.imgLocation}`);
  $(".description").text(`Description: ${currentImage.description}`);
  $(".date").text(`Year Created: ${currentImage.date}`);
}


// Advances to the next photo, loops to the first photo if the end of array is reached
function showNextPhoto() {
  // Increment mCurrentIndex and call swapPhoto()
  // Ensure it loops back to the beginning if mCurrentIndex exceeds array length
}

// Goes to the previous photo, loops to the last photo if mCurrentIndex goes negative
function showPrevPhoto() {
  // Decrement mCurrentIndex and call swapPhoto()
  // Ensure it loops to the end if mCurrentIndex is less than 0
}

// Starter code for the timer function
function startTimer() {
  // Create a timer to automatically call `showNextPhoto()` every mWaitTime milliseconds
  // Consider using setInterval to achieve this functionality
  // Hint: Make sure only one timer runs at a time
}
