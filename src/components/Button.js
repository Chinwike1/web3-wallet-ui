const Button = ({ type = 'submit', className, value, children, ...props }) => (
    <button
        type={type}
        className={className ? className : 'theme-btn'}
        {...props}>
        {value}
        {children}
    </button>
)

export default Button
