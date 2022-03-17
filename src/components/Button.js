const Button = ({ type = 'submit', className, value, ...props }) => (
    <button
        type={type}
        className={className ? className : 'theme-btn'}
        {...props}>
        {value}
    </button>
)

export default Button
