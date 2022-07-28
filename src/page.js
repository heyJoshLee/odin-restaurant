const Page = () => {
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
    const contentDiv = document.querySelector("#content")

    const initialPageLoad = () => {
        renderHeader();
        renderHeroSection();
        renderRecipesContainer();
        renderFooter();
    }

    const renderHeader = () => {

        const headerBase = spawnElement('div', 'header', '', contentDiv);

        const logoContainer = spawnElement('div', 'logo-container', '', headerBase);
        spawnElement('div', 'logo-text', 'Restaurant', logoContainer);
        spawnImage('../src/images/placeholder.svg', logoContainer);

        const navList = spawnElement('ul', '', '', headerBase);
        spawnElement('li', '', 'Option 1', navList);
        spawnElement('li', '', 'Option 2', navList);
        spawnElement('li', '', 'Option 3', navList);
        
    }

    const renderHeroSection = () => {
        const heroSection = spawnElement('div', 'hero', '', contentDiv);
        spawnElement('h1', ' ', 'Our Restaurant', heroSection);
        spawnElement('h2', '', 'Cool tag line', heroSection);
    }

    const renderRecipesContainer = () => {
        const renderRecipe = (recipe) => {
            const recipeDiv = spawnElement('div', '', '', contentDiv);
            recipeDiv.classList.add('recipe');
            spawnElement('p', '', recipe.name, recipeDiv);
            spawnImage('../src/images/placeholder.svg', recipeDiv); // add real image
            const rating = spawnElement('div', '', recipe.rating, recipeDiv);
            recipesContainer.appendChild(recipeDiv);
        }

        const recipesContainer = spawnElement('div', 'recipes-container', '', contentDiv);
        recipes.forEach(recipe => renderRecipe(recipe));
    }

    const renderFooter = () => {
        spawnElement('div', 'footer', 'Made from Taiwan with ❤️', contentDiv);
    }

    const spawnElement = (tag, id, content, parent) => {
        const element = document.createElement(tag);
        if (id) { element.id = id; }
        element.textContent = content;
        parent.appendChild(element)
        return element;
    }

    const spawnImage = (source, parent) => {
        const element = document.createElement('img');
        element.src = source;
        parent.appendChild(element);
    }

    return {
        initialPageLoad
    }
}

export default Page;

