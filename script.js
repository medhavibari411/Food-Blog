document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
  
    searchBtn.addEventListener('click', function(event) {
      event.preventDefault();
      alert(`You searched for: ${searchInput.value}`);
    });
  });
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    const recipes = [
      { name: 'Briyani', description: 'Boneless chicken marinated in special Indian spices and cooked with basmati rice.', image: 'f.png' },
      { name: 'Noodles', description: 'an essential ingredient and staple in Chinese cuisine.', image: 'f2.jpg' },
      { name: 'Butter Chicken', description: 'The splendid blend of cream sauce, butter, spiced up tomatoes, and an array of Indian spices melts in your mouth instantly.', image: 'f3.png' },
      // Add more recipes to the array
    ];

    const filteredRecipes = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) || recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    });

    searchResults.innerHTML = '';
    filteredRecipes.forEach((recipe) => {
      const recipeHTML = `
        <div class="design-item">
          <div class="design-img">
            <img src="${recipe.image}" alt="${recipe.name}">
            <span><i class="far fa-heart"></i></span>
            <span>${recipe.name}</span>
          </div>
          <div class="design-title">
            <a href="#">${recipe.description}</a>
          </div>
        </div>
      `;
      searchResults.innerHTML += recipeHTML;
    });
  });