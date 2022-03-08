const Notification = () => {
    return (
        <div className="notification-box-area">
            <div className="notification-box">
                <i className="fas fa-bell" />
                <span className="notification-active" />
            </div>
            <div className="notification-dropdown">
                <div className="notification-header">
                    <h3>
                        You have <strong>3</strong> new notifications.
                    </h3>
                </div>
                <ul className="notification-list">
                    <li className="notification-success">
                        <div className="notification-icon">
                            <i className="fas fa-check-circle" />
                        </div>
                        <div className="notification-content">
                            <h3>Successful transaction of 0.01 BTC</h3>
                            <h4>15 mins ago</h4>
                        </div>
                    </li>
                    <li className="notification-pending">
                        <div className="notification-icon">
                            <i className="fas fa-exclamation-circle" />
                        </div>
                        <div className="notification-content">
                            <h3>4 of Pending Transactions!</h3>
                            <h4>45 mins ago</h4>
                        </div>
                    </li>
                    <li className="notification-cancel read-notification">
                        <div className="notification-icon">
                            <i className="fas fa-times-circle" />
                        </div>
                        <div className="notification-content">
                            <h3>Cancelled Transaction of 20 BTC</h3>
                            <h4>1 hour ago</h4>
                        </div>
                    </li>
                    <li className="notification-cancel read-notification">
                        <div className="notification-icon">
                            <i className="fas fa-times-circle" />
                        </div>
                        <div className="notification-content">
                            <h3>Cancelled Transaction of 5 BTC</h3>
                            <h4>1 hour ago</h4>
                        </div>
                    </li>
                    <li className="notification-cancel read-notification">
                        <div className="notification-icon">
                            <i className="fas fa-times-circle" />
                        </div>
                        <div className="notification-content">
                            <h3>Cancelled Transaction of 30 BTC</h3>
                            <h4>1 hour ago</h4>
                        </div>
                    </li>
                </ul>
                <div className="notification-footer">
                    <a href="JavaScript:Void(0)">Read All Notifications</a>
                </div>
            </div>
        </div>
    )
}

export default Notification
