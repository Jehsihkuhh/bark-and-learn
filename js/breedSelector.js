const breedSelect = document.getElementById('breed-select');
const bigBreedsDiv = document.querySelector('.big-breeds');
const smallBreedsDiv = document.querySelector('.small-breeds');
const placeholder = document.getElementById('placeholder-text');

function showBreedCategory(category) {
  // Hide all
  bigBreedsDiv.classList.add('d-none');
  smallBreedsDiv.classList.add('d-none');
  placeholder.classList.add('d-none');

  if (category === 'big') {
    bigBreedsDiv.classList.remove('d-none');
  } else if (category === 'small') {
    smallBreedsDiv.classList.remove('d-none');
  } else {
    placeholder.classList.remove('d-none');
  }
}

// Set up event listener
breedSelect.addEventListener('change', function () {
  const selected = this.value;
  localStorage.setItem('breedPreference', selected); // Save selection
  showBreedCategory(selected);
});

// On page load: check localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedBreed = localStorage.getItem('breedPreference');

  if (savedBreed) {
    breedSelect.value = savedBreed; // Set dropdown value
    showBreedCategory(savedBreed);  // Show correct images
  }
});