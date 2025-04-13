function addToJumbotron(imageUrl, breedName) {
  document.querySelector("#featured-img").src = imageUrl;
  document.querySelector("#featured-name").textContent = breedName;
}


document.querySelector("#breed-select").addEventListener("change", function() {
  const selectedBreed = this.value;

  const bigBreeds = document.querySelector("#big-breeds");
  const smallBreeds = document.querySelector("#small-breeds");


  if (selectedBreed === "big") {
    bigBreeds.style.display = "block";
    smallBreeds.style.display = "none";
  } else if (selectedBreed === "small") {
    smallBreeds.style.display = "block";
    bigBreeds.style.display = "none";
  }
});
