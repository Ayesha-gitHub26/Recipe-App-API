const apiKey = '122fd895473548aeb4d082569f413d14';  // Replace with your Spoonacular API key

document.getElementById('recipe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('query').value;
    fetchRecipes(query);
});

function fetchRecipes(query) {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayRecipes(data.results))
        .catch(error => console.error('Error fetching the recipes:', error));
}

function displayRecipes(recipes) {
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        recipeElement.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>Preparation time: ${recipe.readyInMinutes} minutes</p>
            <a href="https://spoonacular.com/recipes/${recipe.title.replace(/ /g, '-').toLowerCase()}-${recipe.id}" target="_blank">View Recipe</a>
        `;

        recipesDiv.appendChild(recipeElement);
    });
}

document.getElementById("recipe-form").addEventListener("reset",() => {
    document.querySelector("#query").textContent= "";
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = '';
} )