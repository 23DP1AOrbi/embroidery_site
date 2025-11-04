const description = "A long description of the food that is unique to the food item.";

const foods = [
  ["Pizza", description, 'italian'],
  ["Garlic Bread", description, 'italian'],
  ["Dumplings", description, 'chinese'],
  ["Spring Rolls", description, 'chinese'],
  ["Tacos", description, 'mexican'],
  ["Burritos", description, 'mexican']
];

const container = document.getElementById('cards-container');
const searchInput = document.getElementById('search-input');

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
    return;
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
    container.appendChild(card);
  });
}


renderCards(foods);

// search function
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();

  const filteredFoods = foods.filter(food => 
    food[0].toLowerCase().includes(query)
  );

  renderCards(filteredFoods);
});
