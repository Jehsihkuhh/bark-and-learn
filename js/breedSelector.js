// Replace featured dog with selected one
function addToJumbotron(imgUrl, name) {
  document.getElementById("featured-img").src = imgUrl;
  document.getElementById("featured-name").textContent = name;

  // Optional: store current featured dog
  localStorage.setItem("featuredDog", JSON.stringify({ img: imgUrl, name: name }));
}

// Load saved featured dog from localStorage on page load
window.onload = function () {
  const savedDog = localStorage.getItem("featuredDog");
  if (savedDog) {
    const { img, name } = JSON.parse(savedDog);
    addToJumbotron(img, name);
  }
};

// Clear featured dog from localStorage
function clearFeaturedDog() {
  localStorage.removeItem("featuredDog");
  addToJumbotron(
    "https://images.dog.ceo/breeds/labrador/n02099712_2441.jpg",
    "Labrador"
  );
}
