import Link from 'next/link'

const NavLink = ({ active = false, icon, children, ...props }) => (
    <li className={active ? 'active' : undefined}>
        <Link {...props}>
            <a>
                {icon}
                {children}
            </a>
        </Link>
    </li>
)

export default NavLink
