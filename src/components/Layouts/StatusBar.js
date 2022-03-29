import StatusBarLeft from './StatusBarLeft'
import StatusBarRight from './StatusBarRight'

const StatusBar = () => {
    return (
        <div className="wallet-top-header clearfix">
            <StatusBarLeft />
            <StatusBarRight />
        </div>
    )
}

export default StatusBar
