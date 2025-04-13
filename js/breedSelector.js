// Function to add selected breed to the Jumbotron
function addToJumbotron(imageUrl, breedName) {
  document.getElementById("featured-img").src = imageUrl;
  document.getElementById("featured-name").textContent = breedName;
}

// Handle breed size selection (Big or Small Breeds)
document.getElementById("breed-select").addEventListener("change", function() {
  const selectedBreed = this.value;

  const bigBreeds = document.getElementById("big-breeds");
  const smallBreeds = document.getElementById("small-breeds");

  // Toggle display based on user selection
  if (selectedBreed === "big") {
    bigBreeds.style.display = "block";
    smallBreeds.style.display = "none";
  } else if (selectedBreed === "small") {
    smallBreeds.style.display = "block";
    bigBreeds.style.display = "none";
  }
});
