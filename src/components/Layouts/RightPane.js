import StatusBar from './StatusBar'

const RightPane = ({ user, children }) => {
    return (
        <div className="wallet-area-right">
            <StatusBar user={user} />
            {children}
        </div>
    )
}

export default RightPane
