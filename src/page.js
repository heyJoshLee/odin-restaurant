
const Page = () => {

    // const initialPageLoad = () => {
    //     renderHeader();
    //     mainSection = renderMainSection();
    //     renderPage();
    //     navHomeButton = document.querySelector('#nav-home-button');
    //     navMenuButton = document.querySelector('#nav-menu-button');

    //     navHomeButton.addEventListener('click', () => {
    //         mainSection.textContent = '';
    //         renderPage();
    //     })

    //     navMenuButton.addEventListener('click', () => {
    //         mainSection.textContent = '';
    //         menu.render();
    //     });

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
        spawnElement,
        spawnImage
    }
}

export default Page;

