import { Dropdown } from 'react-bootstrap'
import {
    FaBell,
    FaCheckCircle,
    FaTimesCircle,
    FaExclamationCircle,
} from 'react-icons/fa'

const Notification = () => {
    return (
        <div className="notification-box-area">
            <Dropdown>
                <Dropdown.Toggle
                    style={{ background: 'transparent', border: 0 }}>
                    <FaBell />
                </Dropdown.Toggle>
                <Dropdown.Menu align="end">
                    <Dropdown.Header style={{ backgroundColor: '#f3f3f3' }}>
                        You have <strong>3</strong> new notifications
                    </Dropdown.Header>
                    <div className="dropdown-item-wrapper">
                        <Dropdown.Item
                            as="li"
                            className="notification-wrapper notification-success">
                            <div className="notification-ico">
                                <FaCheckCircle />
                            </div>
                            <div className="notification-message">
                                <h3>Successful transaction of 0.01 BTC</h3>
                                <h4>15 mins ago</h4>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item
                            as="li"
                            className="notification-wrapper notification-pending">
                            <div className="notification-ico">
                                <FaExclamationCircle />
                            </div>
                            <div className="notification-message">
                                <h3>4 of pending transactions</h3>
                                <h4>45 mins ago</h4>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item
                            as="li"
                            className="notification-wrapper notification-cancel">
                            <div className="notification-ico">
                                <FaTimesCircle />
                            </div>
                            <div className="notification-message">
                                <h3>Cancelled transaction of 20 BTC</h3>
                                <h4>45 mins ago</h4>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item
                            as="li"
                            className="notification-wrapper notification-cancel">
                            <div className="notification-ico">
                                <FaTimesCircle />
                            </div>
                            <div className="notification-message">
                                <h3>Cancelled transaction of 20 BTC</h3>
                                <h4>45 mins ago</h4>
                            </div>
                        </Dropdown.Item>
                    </div>
                    <div className="notification-footer">
                        <a href="JavaScript:Void(0)">Read All Notifications</a>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Notification
