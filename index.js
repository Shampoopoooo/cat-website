/*** Dark Mode ***
    
    Purpose:
    - Use this starter code to add a dark mode feature to your website.

    When To Modify:
    - [ ] Project 5 (REQUIRED FEATURE) 
    - [ ] Any time after
    ***/

    // Step 1: Select the theme button
    let themeButton = document.getElementById('theme-button')
    

    // Step 2: Write the callback function
    const toggleDarkMode = () => {
      document.body.classList.toggle("dark-mode");
    }

    // Step 3: Register a 'click' event listener for the theme button,
    //             and tell it to use toggleDarkMode as its callback function
    
    themeButton.addEventListener('click',toggleDarkMode);



/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
let button = document.getElementById("rsvp-button")

const addParticipant = (person) => {
    // Step 2: Write your code to manipulate the DOM here


    let store = document.querySelector(".rsvp-participants")

    let message = document.createElement('p');
    message.textContent = "🎟️ " + person.name + ' from ' + person.hometown + " has RSVP'd " ;
    store.appendChild(message);

   
}

// Step 3: Add a click event listener to the submit RSVP button here

    /*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
    /*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault();

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  let person = {
    name: rsvpInputs[0].value,
    hometown: rsvpInputs[1].value,
    email: rsvpInputs[2].value
  }

  // TODO: Loop through all inputs
  for (i = 0; i < rsvpInputs.length; i++){
    if (rsvpInputs[i].value.length < 2){
      containsErrors = true
      rsvpInputs[i].classList.add("error")
    }
    else{
      rsvpInputs[i].classList.remove("error")
    }


  }
  

  

  let email = document.getElementById("email")
  if (!email.value.includes("@") || !email.value.includes(".com")){
    containsErrors = true
    email.classList.add("error")
  } else{
    email.classList.remove("error")

  }


  // TODO: If no errors, call addParticipant() and clear fields

 if (containsErrors== false){
  addParticipant(person)
  toggleModal(person)
  for (i = 0; i < rsvpInputs.length; i++){
    rsvpInputs[i].value = ""

  }
 }

 

}

// Step 3: Replace the form button's event listener with a new one that calls validateForm(
button.addEventListener("click", validateForm)
    /*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
   /*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {

  let modal = document.getElementById("success-modal"); // TODO
  let modalContent = document.getElementById("modal-text")
  // TODO: Update modal display to flex
  modal.style.display = "flex"; 

  modalContent.textContent = "Thank's for RSVPing, " + person.name +"! We can't wait to see you at the event!"
  
  // TODO: Update modal text to personalized message
  let intervalID = setInterval(animateImage, 500);

  setTimeout(() => {
    modal.style.display  = "none";
    clearInterval(intervalID)
  }, 3000);


  // Set modal timeout to 5 seconds
    
}

let rotateFactor = 0;
let modalImage = document.getElementById("modal-img")

const animateImage = () => {
  if (rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }

  modalImage.style.transform = `rotate(${rotateFactor}deg)`; }

let modal_button = document.getElementById("close-modal")
const close =() => {
  let modal = document.getElementById("success-modal"); 

  modal.style.display  = "none";
}
modal_button.addEventListener("click", close)