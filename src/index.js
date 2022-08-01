import Header from './header';
import Footer from './footer';
import Menu from './menu';
import Home from './home';
import Contact from './contact';

const header = Header();
header.render();
const home = Home();
const footer = Footer();
const menu = Menu();
const contact = Contact();
home.render();
footer.render();



