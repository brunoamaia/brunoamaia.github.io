import {changeStateMenu, insertNavBar} from '../../utils/components/Navbar.js'
import insertFooter from '../../utils/components/Footer.js'

const directory = 'projects'
const route = '../../'

// Insert NavBar
insertNavBar(directory, route)
document.querySelector('#toggleNavbar').addEventListener('click', changeStateMenu)

// Insert Footer
insertFooter(route)
