import user from '../utils/user'

const CoinBalance = () => {
    return (
        <div className="wallet-balance">
            <h2 className="dashboard-title">Coin Balance</h2>
            {user.crypto.map((crypto, index) => (
                <div key={index} className="wallet-balance-box clearfix">
                    <div className="wallet-balance-ico">
                        <img
                            src={`assets/images/${crypto.notation}.png`}
                            alt={crypto.name}
                        />
                    </div>
                    <div className="wallet-balance-name">
                        <h3>{crypto.name}</h3>
                        <span>{crypto.notation.toUpperCase()}</span>
                    </div>
                    <div className="wallet-balance-amount">
                        <h3>
                            {crypto.balance} {crypto.notation.toUpperCase()}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CoinBalance
