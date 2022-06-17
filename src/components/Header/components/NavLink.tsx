interface NavLinkProps {
	text: string
}

const NavLink = ({ text }: NavLinkProps) => {
	return <li className='navLink'>{text}</li>
}

export default NavLink
