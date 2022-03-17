import StatusBar from './StatusBar'

const RightPane = ({ user, children, header }) => {
    return (
        <div className="wallet-area-right">
            <StatusBar user={user} />
            <div className="wallet-box-scroll">
                <div className="wallet-bradcrumb">{header}</div>
                {children}
            </div>
        </div>
    )
}

export default RightPane
