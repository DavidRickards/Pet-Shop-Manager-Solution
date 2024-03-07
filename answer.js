// Array containing pet objects with properties: image URL, name, age, species, and a brief description.
var petList = [
  // Each object represents a pet with its details.
  { image: "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg", name: "Fluffy", age: 3, species: "Cat", description: "I am a playful and fluffy cat." },
  { image: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*", name: "Whiskers", age: 2, species: "Dog", description: "I am a friendly and active dog." },
  { image: "https://static.bimago.pl/mediacache/catalog/product/cache/3/6/129163/image/750x1120/bb8426ff382faa4f6642966567bb457c/129163_6.jpg", name: "Polly", age: 5, species: "Parrot", description: "I am a colorful and talkative parrot." },
  { image: "https://www.vetcarepethospital.ca/wp-content/uploads/sites/247/2022/03/petrabbitcare-1-scaled.jpg", name: "Thumper", age: 1, species: "Rabbit", description: "I am an adorable and hopping rabbit." },
  { image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2NTI5fQ", name: "Bubbles", age: 2, species: "Fish", description: "I am a tiny and graceful fish." }
];

// Function to manage the display of pets on the webpage.
function displayPets() {
  // Getting HTML elements by their IDs to manipulate content later.
  const petListSection = document.getElementById('petList');
  const selectedPetInfoSection = document.getElementById('selectedPetInfo');
  const rightButton = document.getElementById('rightButton');
  const leftButton = document.getElementById('leftButton');

  // Clears the pet list section before adding new pet names.
  petListSection.innerHTML = '';
  // Iterates over the petList array to display each pet's name in the petListSection.
  petList.forEach((pet, index) => {
    const petName = document.createElement('p'); // Creates a new paragraph element for each pet name.
    petName.innerText = pet.name; // Sets the text of the paragraph to the pet's name.
    petListSection.appendChild(petName); // Adds the paragraph to the petListSection in the DOM.
  });

  // Stores the index of the currently selected pet, starting with the first pet in the list.
  let selectedIndex = 0;

  // Displays detailed information of the first pet when the page loads.
  showPetInfo(petList[selectedIndex], selectedIndex);

  // Function to display detailed information of a selected pet.
  function showPetInfo(pet, index) {
    // Sets the innerHTML of selectedPetInfoSection with the selected pet's details.
    selectedPetInfoSection.innerHTML = `<section>
                                               <h2>Current Pet : ${pet.name}</h2>
                                               <img src="${pet.image}" alt="A picture of a ${pet.species}" width="400px">
                                               <p>Species: ${pet.species}</p>
                                               <p>Age: ${pet.age} years old</p>
                                               <p>About Me:${pet.description}</p>
                                           </section>`;
  }

  // Adds a click event listener to the left button to navigate to the previous pet.
  leftButton.addEventListener('click', () => {
    if (selectedIndex > 0) { // Checks if it's not the first pet in the list.
      selectedIndex--; // Decrements the selectedIndex to move to the previous pet.
      showPetInfo(petList[selectedIndex], selectedIndex); // Updates the display with the previous pet's information.
    }
  });

  // Adds a click event listener to the right button to navigate to the next pet.
  rightButton.addEventListener('click', () => {
    if (selectedIndex < petList.length - 1) { // Checks if it's not the last pet in the list.
      selectedIndex++; // Increments the selectedIndex to move to the next pet.
      showPetInfo(petList[selectedIndex], selectedIndex); // Updates the display with the next pet's information.
    }
  });
}

// Calls the displayPets function to initialize the display when the script is first run.
displayPets();
