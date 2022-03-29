import StatusBar from './StatusBar'

const RightPane = ({ user, children, header }) => {
    return (
        <div className="wallet-area-right">
            <StatusBar user={user} />
            <div
                className="wallet-box-scroll"
                style={{ backgroundColor: '#F6F6F6' }}>
                <div className="wallet-bradcrumb row">{header}</div>
                {children}
            </div>
        </div>
    )
}

export default RightPane
