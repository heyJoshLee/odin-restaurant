import Page from './page';

const Header = () => {
    const { spawnElement, spawnImage } = Page();
    const contentDiv = document.querySelector('#content');
    const render = () => {
        const headerBase = spawnElement('div', 'header', '', document.querySelector('#content'));

        const logoContainer = spawnElement('div', 'logo-container', '', headerBase);
        spawnElement('div', 'logo-text', 'Restaurant', logoContainer);
        spawnImage('../src/images/placeholder.svg', logoContainer);

        const navList = spawnElement('ul', '', '', headerBase);
        spawnElement('li', 'nav-home-button', 'Home Page', navList);
        spawnElement('li', 'nav-contact-button', 'Contact', navList);
        spawnElement('li', 'nav-menu-button', 'Menu', navList);
        spawnElement('div', 'main-section', '', contentDiv);
    }



    return {
        render
    }

}


export default Header;