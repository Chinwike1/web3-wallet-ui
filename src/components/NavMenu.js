import { useRouter } from 'next/router'
import {
    FaTachometerAlt,
    FaWallet,
    FaCoins,
    FaHistory,
    FaUserAlt,
} from 'react-icons/fa'
import NavLink from './NavLink'

const navLinks = [
    {
        name: 'dashboard',
        url: '/dashboard',
        icon: <FaTachometerAlt />,
    },
    {
        name: 'wallet',
        url: '/wallet',
        icon: <FaWallet />,
    },
    {
        name: 'transfer-coin',
        url: '/transfer-coin',
        icon: <FaCoins />,
    },
    {
        name: 'transaction',
        url: '/transaction',
        icon: <FaHistory />,
    },
    {
        name: 'profile',
        url: '/profile',
        icon: <FaUserAlt />,
    },
]

const NavMenu = ({ children }) => {
    const router = useRouter()

    return (
        <ul>
            {navLinks.map(link => (
                <NavLink
                    key={link.name}
                    href={link.url}
                    icon={link.icon}
                    active={router.pathname === `${link.name}`}>
                    {link.name}
                </NavLink>
            ))}
            {children}
        </ul>
    )
}

export default NavMenu
