import Page from './page';

const Footer = () => {
    const { spawnElement } = Page();
    let contentSection;

    const render = () => {
        contentSection = document.querySelector('#content');
        spawnElement('div', 'footer', 'Made from Taiwan with ❤️', contentSection);
    }

    return {
        render
    }
}


export default Footer;