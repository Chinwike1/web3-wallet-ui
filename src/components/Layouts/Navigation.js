import NavLink from '@/components/NavLink'
import { useAuth } from '@/hooks/auth'
import {
    FaTachometerAlt,
    FaWallet,
    FaCoins,
    FaHistory,
    FaUserAlt,
    FaSignOutAlt,
    FaBars,
} from 'react-icons/fa'
import { useRouter } from 'next/router'
import ApplicationLogo from '../ApplicationLogo'
import { useState } from 'react'

const navLinks = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: <FaTachometerAlt />,
    },
    {
        name: 'My Wallet',
        url: '/wallet',
        icon: <FaWallet />,
    },
    {
        name: 'Transfer Coin',
        url: '/transfer-coin',
        icon: <FaCoins />,
    },
    {
        name: 'Transaction',
        url: '/transaction',
        icon: <FaHistory />,
    },
    {
        name: 'Profile',
        url: '/profile',
        icon: <FaUserAlt />,
    },
]

const Navigation = () => {
    const router = useRouter()
    const { logout } = useAuth()

    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <nav className="header-box">
            <ApplicationLogo />
            <div className="header-nav-menu">
                <FaBars
                    className="menu-responsive"
                    role="button"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                />
                {/* Navigation links */}
                <ul style={{ display: isNavOpen && 'block' }} className="p-0">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.name}
                            href={link.url}
                            icon={link.icon}
                            active={router.pathname === `${link.url}`}>
                            {link.name}
                        </NavLink>
                    ))}
                    <NavLink
                        href="#"
                        icon={<FaSignOutAlt />}
                        onClick={() => logout()}>
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
