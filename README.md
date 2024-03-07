# Pet Shop Manager

## Objective
The objective of this activity is to create a simple pet shop page that utilizes objects, array and data type in Javascript. Objects will represent as pets, and all of them will be held inside an array.

## Difficulty
Beginner

## Prerequisites
* Understanding of HTML structures
* Understanding of event listener
* Understanding structure and defining of objects
* Understanding array structure
* Understand how to add elements to HTML

## Part 1 HTML Setup
1) To start off we will add a header to our site called "Pet Shop Animals"
2) Below our head we will list all the names of the pets in the shop (our array) and we will do this by creating a ```<div>``` with the id="petList"
3) Below our pet list we will have ```<div>``` with the class "navigation-buttons". Inside we will have 2 button elements (```<button></button>```), one will have the id "rightButton" and it will be called "Previous". The other one will have the id "rightButton"and it will be called "Next". These will be used to traverse through the petList array 
4) Then at the bottom in another ```<div>``` we will give it the id "selectedPetInfo". This is where the Pets information will be presented.

## Part 2 CSS Setup
1) You can just use the provided CSS for this project as it changes very little.

## Part 3 Javascript Creating Objects & Arrays
1) First lets start by creating a pet object with properties like this:

```const pet = { image: "", name: "", age: , species: "", description: "" }``` 
* Every property except the last one should be followed by a comma
2) Next fill these properties with what ever you want (make sure age is a number and image is an image address) For example:

   ```{ image: "https://www.vetcarepethospital.ca/wp-content/uploads/sites/247/2022/03/petrabbitcare-1-scaled.jpg", name: "Thumper", age: 1, species: "Rabbit", description: "An adorable and hopping rabbit." },```
3) Now create and fill out 4 more pet objects.
4) Now wrap all the object in an array like so:

```var petList = [ {object1}, {object2}, ...etc. ]```
* Every object except the last one should be followed by a comma
5) In our petList array the top object will be in the first index and the bottom object will be in the last index.

## Part 4: Javascript Displaying the Pet Objects
1) Use document.getElementById to get references to the HTML elements by their IDs we made in the HTML doc and assign these references to variables.
* I have provided the code for this step but you will learn how to do this in the next few weeks

For example : The variable "petListSection" will reference "petList".

```const petListSection = document.getElementById('petList');```

2) Now we will print the pet names to the site and we do this by first:
* Clear the content of the petListSection. by adding ```.innerHTML = '';``` after it.
* Now to display all the pet name in the array we will use a ```petList.forEach((pet, index) => {         });``` loop to iterate through the "petList" variable array. This loop goes at the pet list array and for each object in the array it does the following :
* For each pet name it will create a constant that a HTML 'p' element which is also something that you will learn in the next few weeks but I have provided for this assignment.
* Next, set the inner text of the <p> element of the petName (same command```.innerText```) equal to the objects name so ```pet.name```.
* Append the variable "petName" to the "petListSection" variable.

3) To keep track of the currently selected pet, initialize a ```let``` variable called "selectedIndex" and set it equal to the start or our array ```0```;
* To ensure the pet objects information is shown we will call a "showPetInfo" function  with the properties ```petList[selectedIndex], selectedIndex``` to display information for the first pet. (we will fill this out at the end)

4) Define the "showPetInfo" function with the properties ```pet & index```
* In the function we take our "selectedPetInfoSection" constant and use another innerHTML command to insert our HTML code. 
  * Now on the right side of the equals first start by adding a ```<section></section>```
  * Inside that we will add a ```<h2>``` element that says "Current Pet : "
  * This is where we want to display the pets (objects) information that is stored in each objects properties and we do this  in the form ```${object.objects_property}``` so if we want the property "name" from the object "pet" then we type ```${pet.name}```
  * Next make an <img> element and have the src equal to the image property (```${pet.image}```)
  * Make a ```<p>``` element and display the species property
  * Make a ```<p>``` element and display the age property
  * Make a ```<p>``` element and display the description property

5) Setup the Button Event Listeners: Start by attaching event listeners to our navigation buttons, "leftButton" and "rightButton". This is how we will traverse though our pet array
* Inside the leftButton.addEventListener function:
   * Create a if statement that is true for any value after the first index "selectedIndex" 
     * If true decrease the selectedIndex by 1
     * Then call the "showPetInfo" function to update the displayed info
* Inside the rightButton.addEventListener function:
    * Create a if statement that is true for any value before the last index "selectedIndex"
        * If true increase the selectedIndex by 1
        * Then call the "showPetInfo" function to update the displayed info

## Stretch Goals
To improve this project you can:
1) Make the buttons loops back around to the start/end of the array.
2) Create a highlighted tag that highlights the currently selected pet name from the array of listed pets at teh top of the site.
3) Create an "adopted" button that removes pets from the array that have been adopted
