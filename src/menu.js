import Page from './page';

const Menu = () => {
    const { spawnElement } = Page();
    let mainSection;
    let navMenuButton = document.querySelector('#nav-menu-button');
    const menuItems = [
        {
            name: 'Chicken Afredo',
            description: 'Cheesey chicken with noodles',
            price: 23
        },
        {
            name: 'Pulled Pork',
            description: 'Pork with BBQ sauce.',
            price: 14
        },
        {
            name: 'Beef Tacos',
            description: 'Premium grade beef with homemade tortillas.',
            price: 13
        },
        {
            name: 'Chicken Burger',
            description: 'Chicken breast on a homemade bun.',
            price: 9
        },
        {
            name: 'French Fries',
            description: 'Crispy frech fries.',
            price: 5
        },
        
    ]

    navMenuButton.addEventListener('click', () => {
        mainSection = document.querySelector('#main-section');
        render();
    });
    
    const render = () => {
        mainSection.textContent = '';
        const menuSection = spawnElement('div', 'menu-section', '', mainSection);
        spawnElement('h1', '', 'Menu', menuSection)
        const renderMenuItem = (item) => {
            let menuItemDiv = spawnElement('div', 'menu-item', '', menuSection);
            spawnElement('p', '', item.name, menuItemDiv);
            spawnElement('p', '', `$${item.price}`, menuItemDiv);
        }
        menuItems.forEach(item => renderMenuItem(item));
    }

    
    return {
        render
    }

}


export default Menu;