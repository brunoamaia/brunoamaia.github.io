import {changeStateMenu, insertNavBar} from '../../utils/components/Navbar.js'

insertNavBar('projects', '../../')
document.querySelector('#toggleNavbar').addEventListener('click', changeStateMenu)
