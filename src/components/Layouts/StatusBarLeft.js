import user from '@/utils/user'
import { FaWallet, FaBitcoin } from 'react-icons/fa'

const StatusBarLeft = () => {
    return (
        <div className="wallet-top-header-left">
            <div className="wallet-top-header-box">
                <div className="header-wallet-ico">
                    <FaWallet />
                </div>
                <span>Total Balance</span>
                <h3>
                    <span style={{ color: '#87d682' }}>
                        {`${user.totatBalanceUSD} USD`}
                    </span>
                </h3>
            </div>
            <div className="wallet-top-header-box">
                <div className="header-wallet-ico">
                    <FaBitcoin />
                </div>
                <span>Pending Balance</span>
                <h3>
                    <span style={{ color: '#87d682' }}>
                        {`${user.pendingBalanceBTC} BTC`}
                    </span>
                </h3>
            </div>
        </div>
    )
}

export default StatusBarLeft
