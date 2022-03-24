import ApplicationLogo from '@/components/ApplicationLogo'
import Dropdown from '@/components/Dropdown'
import NavLink from '@/components/NavLink'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import {
    FaTachometerAlt,
    FaWallet,
    FaCoins,
    FaHistory,
    FaUserAlt,
    FaSignOutAlt,
} from 'react-icons/fa'
import { useRouter } from 'next/router'

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

const Navigation = ({ user }) => {
    const router = useRouter()
    const { logout } = useAuth()

    return (
        <div className="header-box">
            {/* logo: transform to its own component */}
            <div className="header-logo">
                <a href="dashboard.html">
                    <img src="assets/images/logo.png" alt="Logo" />
                </a>
            </div>
            <div className="header-nav-menu">
                <i className="menu-responsive fas fa-bars" />
                {/* Navigation links */}
                <ul className="p-0">
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
        </div>
    )
}

export default Navigation
