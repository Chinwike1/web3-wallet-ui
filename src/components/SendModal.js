import { Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaTimes } from 'react-icons/fa'
import Button from './Button'

const SendModal = ({ isOpen, hideModal, user, currentCrypto }) => {
    // retrieve object of current crypto from user object
    const crypto = user.crypto.find(c => c.notation === currentCrypto)

    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        // process form data here
        console.log(data)

        // close modal after data has been processed
        hideModal()
    }

    return (
        <Modal
            show={isOpen}
            id="sent-coin-wallet"
            className="fade theme-popup"
            onHide={hideModal}>
            <div className="modal-dialog">
                {/* Modal content */}
                <div className="modal-content">
                    <Modal.Body className="modal-body">
                        <button
                            type="button"
                            className="close"
                            onClick={hideModal}>
                            <FaTimes />
                        </button>
                        <div className="wallet-popup">
                            <div className="wallet-balance-box clearfix">
                                <h3 className="theme-title">
                                    <img
                                        src={`assets/images/${crypto.notation}.png`}
                                        alt={crypto.name}
                                    />
                                    {crypto.notation} Wallet
                                </h3>
                                <span>
                                    <span>Bal:</span> {crypto.balance}{' '}
                                    {crypto.notation.toUpperCase()}
                                </span>
                            </div>
                            <div className="theme-popup-scroll">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="theme-input-box">
                                        <label>To Address</label>
                                        <input
                                            className="theme-input"
                                            type="text"
                                            placeholder="1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
                                            required
                                            {...register('receivingAddress')}
                                        />
                                    </div>
                                    <div className="theme-input-box wallet-amount-box">
                                        <label>Amount to send</label>
                                        <input
                                            className="theme-input"
                                            type="number"
                                            name=""
                                            placeholder="0.0000015"
                                            required
                                            {...register('amountToSend')}
                                        />
                                        <span className="coin-status">
                                            / {crypto.notation.toUpperCase()}
                                        </span>
                                    </div>
                                    <div className="theme-input-box">
                                        <label>Note</label>
                                        <input
                                            className="theme-input"
                                            type="text"
                                            placeholder=""
                                            {...register('transactionNote')}
                                        />
                                    </div>
                                    <Modal.Footer className="wallet-btn text-right">
                                        <button
                                            type="button"
                                            className="theme-btn cancel-btn"
                                            onClick={hideModal}>
                                            Cancel
                                        </button>
                                        <Button type="submit" value="Send" />
                                    </Modal.Footer>
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                </div>
            </div>
        </Modal>
    )
}

export default SendModal
