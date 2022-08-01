import Page from './page';
const Home = () => {

    const { spawnElement, spawnImage } = Page();

    const recipes = [
        {
            name: 'Pulled Pork',
            image: '',
            rating: 3
        },
        {
            name: 'Pulled Pork',
            image: '',
            rating: 3
        },
        {
            name: 'Pulled Pork',
            image: '',
            rating: 3
        },
        {
            name: 'Pulled Pork',
            image: '',
            rating: 3
        },
    ]
    const contentDiv = document.querySelector("#content");
    let navHomeButton = document.querySelector('#nav-home-button');

    let mainSection = document.querySelector('#main-section');

    const render = () => {
        renderHeroSection();
        renderRecipesContainer();
    }

    const renderHeroSection = () => {
        mainSection.textContent = ''; 
        const heroSection = spawnElement('div', 'hero', '', mainSection);
        spawnElement('h1', ' ', 'Our Restaurant', heroSection);
        spawnElement('h2', '', 'Cool tag line', heroSection);
    }

    const renderRecipesContainer = () => {
        const renderRecipe = (recipe) => {
            const recipeDiv = spawnElement('div', '', '', mainSection);
            recipeDiv.classList.add('recipe');
            spawnElement('p', '', recipe.name, recipeDiv);
            spawnImage('../src/images/placeholder.svg', recipeDiv); // add real image
            const rating = spawnElement('div', '', recipe.rating, recipeDiv);
            recipesContainer.appendChild(recipeDiv);
        }

        const recipesContainer = spawnElement('div', 'recipes-container', '', mainSection);
        recipes.forEach(recipe => renderRecipe(recipe));
    }
    
    navHomeButton.addEventListener('click', () => {
        render();
    })

    return {
        render
    }
    

}


export default Home;