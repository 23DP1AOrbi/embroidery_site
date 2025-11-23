const description = "A long description of the food that is unique to the particular item.";

const foods = [
  ["Pizza", description, 'italian'],
  ["Garlic Bread", description, 'italian'],
  ["Dumplings", description, 'chinese'],
  ["Spring Rolls", description, 'chinese'],
  ["Tacos", description, 'mexican'],
  ["Burritos", description, 'mexican']
];

const container = document.getElementById('cards-container');


// function to render cards
function renderCards(filteredFoods) {
  container.innerHTML = ''; // clear existing cards
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.flexWrap = 'wrap';
  container.style.gap = '50px';
  container.style.maxWidth = '80%';

  if (filteredFoods.length === 0) {
    container.innerHTML = '<p style="color: white; text-align: center;">No results found.</p>';
    return; // shows text when no results found
  }

  // create card for each food item
  filteredFoods.forEach(food => {
    const card = document.createElement('div');
    card.classList.add('card-content');
    card.innerHTML = `
      <h1>${food[0]}</h1>
      <p>${food[1]}</p>
      <a class="btn" href="#${food[0]}">Learn more</a>
    `;
    container.appendChild(card); // adds card to the container
  });
}

const searchInput = document.getElementById('search-input');
let currentFoods = [...foods]; // [...foods] creates a copy of the array, so when used it doesnt modify the og array
let filteredFoods = [...foods];
let activeSort = 'None';

// search function
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  // console.log(query);

  filteredFoods = currentFoods.filter(food => 
    food[0].toLowerCase().includes(query) // checks if food name includes the search query
  );

  renderCards(filteredFoods);
});


// sorting
const sortButtons = document.querySelectorAll('.sort');
sortButtons.forEach(button => {
  button.addEventListener('click', () => {
    const sortOrder = button.textContent.trim(); // contains text of the clicked button

    if (sortOrder === 'A-Z') {
      filteredFoods.sort((a, b) => a[0].localeCompare(b[0])); // sorts alphabetically A-Z
      renderCards(filteredFoods);
    }
    else if (sortOrder === 'Z-A') {
      filteredFoods.sort((a, b) => b[0].localeCompare(a[0])); // sorts alphabetically Z-A
      renderCards(filteredFoods);
    }
     else
      {
        filteredFoods.sort((a, b) => foods.indexOf(a) - foods.indexOf(b)); // resets to original order
        renderCards(filteredFoods); 
      }
  });
});


renderCards(currentFoods);




// form submit / validation

const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit');

const warningMessage = document.getElementById('war-message');

// So labels can gain underlines
const usernameLabel = document.getElementById('user-label')
const emailLabel = document.getElementById('email-label')
const messageLabel = document.getElementById('message-label')

let email_check =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const red = 'rgba(230, 23, 23, 1)'

submitButton.addEventListener('click', (e) => {
  
  if ((usernameInput.value.trim() === '' || usernameInput.value.trim() == null) &
    (emailInput.value.trim().trim() === '' || emailInput.value.trim() == null) &
    (messageInput.value.trim() === '' || messageInput.value.trim() == null)) {
        warningMessage.innerHTML = '<h2>Fill all fields</h2>';
        usernameLabel.style.textDecoration = 'underline'
        usernameLabel.style.textDecorationColor = red
        emailLabel.style.textDecoration = 'underline'
        emailLabel.style.textDecorationColor = red
        messageLabel.style.textDecoration = 'underline'
        messageLabel.style.textDecorationColor = red
  }
  else if ((usernameInput.value.trim() === '' || usernameInput.value.trim() == null) &
    (emailInput.value.trim() === '' || emailInput.value.trim() == null)) {
      warningMessage.innerHTML = '<h2>Empty user & email</h2>';
      usernameLabel.style.textDecoration = 'underline'
      usernameLabel.style.textDecorationColor = red
      emailLabel.style.textDecoration = 'underline'
      emailLabel.style.textDecorationColor = red
      messageLabel.style.textDecoration = 'none'
  }
  else if ((usernameInput.value.trim() === '' || usernameInput.value.trim() == null) &
  (messageInput.value.trim() === '' || messageInput.value.trim() == null)) {
    warningMessage.innerHTML = '<h2>Empty user & message</h2>';
    usernameLabel.style.textDecoration = 'underline'
      usernameLabel.style.textDecorationColor = red
      emailLabel.style.textDecoration = 'none'
      messageLabel.style.textDecoration = 'underline'
      messageLabel.style.textDecorationColor = red
  }
  else if ((messageInput.value.trim() === '' || messageInput.value.trim() == null)&
  (emailInput.value.trim() === '' || emailInput.value.trim() == null)) {
    warningMessage.innerHTML = '<h2>Empty email & message</h2>';
    usernameLabel.style.textDecoration = 'none'
      emailLabel.style.textDecoration = 'underline'
      emailLabel.style.textDecorationColor = red
      messageLabel.style.textDecoration = 'underline'
      messageLabel.style.textDecorationColor = red
  }
  else if (!emailInput.value.trim().match(email_check) &
    (usernameInput.value.trim() === '' || usernameInput.value.trim() == null)) {
    warningMessage.innerHTML = '<h2>Empty user & incorret email</h2>';
    usernameLabel.style.textDecoration = 'underline'
      usernameLabel.style.textDecorationColor = red
      emailLabel.style.textDecoration = 'underline'
      emailLabel.style.textDecorationColor = red
      messageLabel.style.textDecoration = 'none'
  }
  else if (!emailInput.value.trim().match(email_check) &
    (messageInput.value.trim() === '' || messageInput.value.trim() == null)) {
    warningMessage.innerHTML = '<h2>Empty message & incorret email</h2>';
    usernameLabel.style.textDecoration = 'none'
      emailLabel.style.textDecoration = 'underline'
      emailLabel.style.textDecorationColor = red
      messageLabel.style.textDecoration = 'underline'
      messageLabel.style.textDecorationColor = red
  }
  else if ((emailInput.value.trim().trim() === '' || emailInput.value.trim() == null)) {
    warningMessage.innerHTML = '<h2>Empty email</h2>';
    usernameLabel.style.textDecoration = 'none'
      emailLabel.style.textDecoration = 'underline'
      emailLabel.style.textDecorationColor = red
      messageLabel.style.textDecoration = 'none'
  }
  else if (!emailInput.value.trim().match(email_check)) {
    warningMessage.innerHTML = '<h2>Incorrect email</h2>';
    usernameLabel.style.textDecoration = 'none'
      emailLabel.style.textDecoration = 'underline'
      emailLabel.style.textDecorationColor = red
      messageLabel.style.textDecoration = 'none'
  }
  else if (usernameInput.value.trim() === '' || usernameInput.value.trim() == null) {
    warningMessage.innerHTML = '<h2>Empty username</h2>';
    usernameLabel.style.textDecoration = 'underline'
    usernameLabel.style.textDecorationColor = red
      emailLabel.style.textDecoration = 'none'
      messageLabel.style.textDecoration = 'none'
  }
  else if ((messageInput.value.trim() === '' || messageInput.value.trim() == null)) {
    warningMessage.innerHTML = '<h2>Empty message</h2>';
    usernameLabel.style.textDecoration = 'none'
      emailLabel.style.textDecoration = 'none'
      messageLabel.style.textDecoration = 'underline'
      messageLabel.style.textDecorationColor = red
  }
  else {
    warningMessage.innerHTML =  '<h2 style="color: lightgreen">Message succesfully sent</h2>';
    usernameInput.value = ''
    emailInput.value = ''
    messageInput.value = ''

    usernameLabel.style.textDecoration = 'none'
    emailLabel.style.textDecoration = 'none'
    messageLabel.style.textDecoration = 'none'
  }
})