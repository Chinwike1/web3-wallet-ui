const UserDetail = () => {
    return (
        <div className="wallet-top-header-box user-top-detail">
            <div className="header-wallet-ico">
                <img src="assets/images/profile.jpg" alt="Profile" />
            </div>
            <span>Welcome Back</span>
            <h3>
                Mithila Mac <i className="fas fa-chevron-down" />
            </h3>
            <ul className="profile-dropdown">
                <li>
                    <a href="profile.html">
                        <i className="fas fa-user" /> Profile
                    </a>
                </li>
                <li>
                    <a href="wallet.html">
                        <i className="fas fa-wallet" /> My Wallet
                    </a>
                </li>
                <li>
                    <a href="transfer-coin.html">
                        <i className="fas fa-wallet" /> Transfer Coin
                    </a>
                </li>
                <li>
                    <a href="transaction.html">
                        <i className="fas fa-wallet" /> Transactions
                    </a>
                </li>
                <li>
                    <a href="login.html">
                        <i className="fas fa-sign-out-alt" /> Logout
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default UserDetail
