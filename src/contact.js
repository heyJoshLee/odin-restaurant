import Page from './page';

const Contact = () => {
    const { spawnElement } = Page();
    let mainSection;
    let navContactButton = document.querySelector('#nav-contact-button');

    navContactButton.addEventListener('click', () => {
        mainSection = document.querySelector('#main-section');
        render();
    });
    
    const render = () => {
        mainSection.textContent = '';
        const menuSection = spawnElement('div', 'menu-section', '', mainSection);
        spawnElement('h1', '', 'Contact', mainSection);
        spawnElement('p', '', 'To contact us, please send an email to hello at great-restaurant.com.', mainSection);

    }

    
    return {
        render
    }

}


export default Contact;