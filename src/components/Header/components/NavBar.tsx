import BurgerMenu from './BurgerMenu'
import Logo from './Logo'
import NavLink from './NavLink'

const NavBar = () => {
	return (
		<nav className='flex items-center space-x-2 md:space-x-10'>
			<Logo />
			<BurgerMenu />
			<ul className='hidden space-x-4 md:flex'>
				<NavLink text='Home' />
				<NavLink text='Tv Shows' />
				<NavLink text='Movies' />
				<NavLink text='New &amp; Popular' />
				<NavLink text='My List' />
			</ul>
		</nav>
	)
}

export default NavBar
