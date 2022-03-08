import Link from 'next/link'

const ResponsiveNavLink = ({ active = false, children, ...props }) => (
    <Link {...props}>
        <a className={active && 'active'}>{children}</a>
    </Link>
)

export const ResponsiveNavButton = props => <button {...props} />

export default ResponsiveNavLink
