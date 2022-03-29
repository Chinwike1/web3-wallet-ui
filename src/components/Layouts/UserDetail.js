import user from '@/utils/user'
import { Dropdown } from 'react-bootstrap'
import {
    FaTachometerAlt,
    FaWallet,
    FaCoins,
    FaHistory,
    FaUserAlt,
    FaSignOutAlt,
} from 'react-icons/fa'

const UserDetail = () => {
    return (
        <div className="wallet-top-header-box user-top-detail">
            <div className="header-wallet-ico">
                <img src="assets/images/profile.jpg" alt="Profile" />
            </div>
            <span>Welcome Back</span>
            <h3>
                <Dropdown>
                    <Dropdown.Toggle
                        style={{
                            background: 'transparent',
                            border: 0,
                            padding: 0,
                        }}>
                        {user.firstName + ' ' + user.lastName}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="profile-dropdown">
                        <Dropdown.Item href="/dashboard">
                            <FaTachometerAlt /> <span>Dashboard</span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/profile">
                            <FaUserAlt />
                            <span>Profile</span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/wallet">
                            <FaWallet />
                            <span>My Wallet</span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/transfer-coin">
                            <FaCoins />
                            <span>Transfer Coin</span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/transaction">
                            <FaHistory />
                            <span>Transaction</span>
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            <FaSignOutAlt />
                            <span>Logout</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
