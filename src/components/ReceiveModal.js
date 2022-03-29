import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import {
    FaTimes,
    FaExclamationCircle,
    FaCopy,
    FaCheckCircle,
} from 'react-icons/fa'

const ReceiveModal = ({ isOpen, hideModal, user, currentCrypto }) => {
    const [copied, setCopied] = useState(false)
    // retrieve object of current crypto from user object
    const crypto = user.crypto.find(c => c.notation === currentCrypto)

    const handleClipboardCopy = () => {
        setCopied(true)
        navigator.clipboard.writeText(crypto.walletAddress)

        setTimeout(() => {
            setCopied(false)
        }, 5000)
    }
    return (
        <Modal
            show={isOpen}
            id="transfer-coin-wallet"
            className="fade theme-popup"
            onHide={hideModal}>
            <Modal.Dialog className="modal-dialog receive-modal">
                {/* Modal content */}
                <div className="modal-content">
                    <Modal.Body className="modal-body">
                        <button
                            type="button"
                            className="close"
                            onClick={hideModal}>
                            <FaTimes />
                        </button>
                        <div className="transfer-coin-content-box">
                            <div className="payment-invoice-content">
                                <div className="invoice-warning">
                                    <p>
                                        <span className="invoice-text">
                                            <FaExclamationCircle />
                                        </span>
                                        Please Verify the Address and Amount
                                        properly. Sent
                                        {` ${crypto.notation.toUpperCase()} `}
                                        can not be reversed in any case.
                                    </p>
                                </div>
                                <div className="invoice-qr-img">
                                    <img
                                        id="copy"
                                        data-clipboard-text="MgzB63dVsdbshsbhsbsbhsbsdhsdhvs"
                                        src="assets/images/coinremitterqrcode.png"
                                        data-original-title=""
                                        alt={`Your ${crypto.name} QR code`}
                                    />
                                </div>
                                <div className="invoice-qr-ammount-box">
                                    <div className="invoice-ammount-box">
                                        <h2 id="ammount-copy">
                                            <img
                                                src={`assets/images/${crypto.notation}.png`}
                                                alt={crypto.name}
                                            />{' '}
                                            {crypto.name}{' '}
                                            {`(${crypto.notation})`}
                                        </h2>
                                    </div>
                                    <div className="invoice-qr-box">
                                        <label>Address</label>
                                        <div className="invoice-payment-url">
                                            <input
                                                type="text"
                                                value={crypto.walletAddress}
                                                disabled={true}
                                            />
                                            <FaCopy
                                                id="input-copy"
                                                onClick={handleClipboardCopy}
                                            />
                                            {copied && (
                                                <p className="text-center text-success">
                                                    <span>
                                                        Copied to clipboard
                                                    </span>
                                                    <FaCheckCircle className="ml-2" />
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal.Footer>
                            <div className="wallet-btn text-right">
                                <button
                                    className="theme-btn cancel-btn"
                                    onClick={hideModal}>
                                    Cancel
                                </button>
                            </div>
                        </Modal.Footer>
                    </Modal.Body>
                </div>
            </Modal.Dialog>
        </Modal>
    )
}

export default ReceiveModal
