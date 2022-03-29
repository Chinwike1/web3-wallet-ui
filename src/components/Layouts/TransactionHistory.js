import {
    FaExternalLinkAlt,
    FaArrowLeft,
    FaArrowRight,
    FaExchangeAlt,
    FaLongArrowAltRight,
} from 'react-icons/fa'
import user from '../../utils/user'

const TransactionHistory = ({
    limit,
    pagination = true,
    hasShadowParent = false,
}) => {
    const calculateHourDifference = time => {
        let hours = Math.abs(time - Date.now()) / 36e5
        return <>{`${hours.toFixed(0)} Hour${hours > 1 ? 's' : ''} before`}</>
    }

    return (
        <>
            <div
                className={
                    hasShadowParent ? '' : 'wallet-transaction clearfix'
                }>
                {user.transactions.slice(0, limit).map((trx, index) => (
                    <div
                        key={index}
                        className="wallet-transaction-box clearfix">
                        <div
                            className={`wallet-transaction-ico ${
                                trx.type === 'withdrawal'
                                    ? 'wallet-withdrawal'
                                    : trx.type === 'transfer'
                                    ? 'wallet-sync'
                                    : ''
                            }`}>
                            {trx.type === 'deposit' && <FaArrowRight />}
                            {trx.type === 'withdrawal' && <FaArrowLeft />}
                            {trx.type === 'transfer' && <FaExchangeAlt />}
                        </div>
                        <div className="wallet-transaction-inner clearfix">
                            <div className="wallet-transaction-name">
                                <h3>
                                    {/* capitalize first letter */}
                                    {trx.type.charAt(0).toUpperCase() +
                                        trx.type.slice(1)}
                                </h3>
                                <span>{trx.crypto.notation.toUpperCase()}</span>
                            </div>
                            <div className="coin-wallet-name text-center">
                                <span>Wallet Name</span>
                                <h3>{trx.crypto.name} Wallet</h3>
                            </div>
                            <div className="coin-wallet-date text-center">
                                <span>Date</span>
                                <h3>
                                    {calculateHourDifference(trx.timestamp)}
                                </h3>
                            </div>
                            <div className="wallet-transaction-balance float-right">
                                <span>Amount</span>
                                <h3>
                                    {trx.amount}{' '}
                                    {trx.crypto.notation.toUpperCase()}
                                </h3>
                            </div>
                        </div>
                        <div className="wallet-trx-id">
                            <p className="trx-id">
                                <span>
                                    <span>TRX:</span>
                                    {trx.transactionId}
                                </span>
                                <a href="#" target="_blank">
                                    <FaExternalLinkAlt />
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {pagination && (
                <div className="pagination-box text-center">
                    <ul className="clearfix">
                        <li className="current">
                            <span>1</span>
                        </li>
                        <li>
                            <a href="">2</a>
                        </li>
                        <li>
                            <a href="">3</a>
                        </li>
                        <li>
                            <a href="">
                                Next <FaLongArrowAltRight />
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default TransactionHistory
