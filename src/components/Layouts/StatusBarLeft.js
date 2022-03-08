const StatusBarLeft = () => {
    return (
        <div className="wallet-top-header-left">
            <div className="wallet-top-header-box">
                <div className="header-wallet-ico" style={{ color: '#87d682' }}>
                    <i className="fas fa-wallet" />
                </div>
                <span>Total Balance</span>
                <h3 style={{ color: '#87d682' }}>
                    <span>657.0378348945</span> USD
                </h3>
            </div>
            <div className="wallet-top-header-box">
                <div className="header-wallet-ico" style={{ color: '#7ad9e3' }}>
                    <i className="fab fa-bitcoin" />
                </div>
                <span>Pending Balance</span>
                <h3 style={{ color: '#7ad9e3' }}>
                    <span>87.749575978</span> BTC
                </h3>
            </div>
        </div>
    )
}

export default StatusBarLeft
