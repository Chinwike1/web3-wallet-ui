import Language from './Language'
import Notification from './Notification'
import UserDetail from './UserDetail'

const StatusBarRight = () => {
    return (
        <div className="wallet-top-header-right">
            <Language />
            <Notification />
            <UserDetail />
        </div>
    )
}

export default StatusBarRight
