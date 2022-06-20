import { useEffect, useState } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'

import NavBar from './components/NavBar'
import useAuth from '../../hooks/useAuth'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const { logout } = useAuth()

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header className={`${isScrolled && 'bg-[#141414]'}`}>
			<NavBar />
			<div className='flex items-center space-x-4 text-sm font-light'>
				<SearchIcon className='hidden sm:inline h-6 w-6' />
				<p className='hidden lg:inline cursor-default'>Kids</p>
				<BellIcon className='h-6 w-6' />
				<img
					src='https://rb.gy/g1pwyx'
					alt=''
					className='cursor-pointer rounded'
					onClick={logout}
					title='Logout'
				/>
			</div>
		</header>
	)
}

export default Header
