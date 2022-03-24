import { useState } from 'react'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'
import Button from '../Button'
import ReceiveModal from '../ReceiveModal'
import SendModal from '../SendModal'

const WalletBalance = ({ user }) => {
    const [currentCrypto, setCurrentCrypto] = useState('btc')
    const [isSendModalOpen, setIsSendModalOpen] = useState(false)
    const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false)

    // send modal functions
    const showSendModal = crypto => {
        setCurrentCrypto(crypto)
        setIsSendModalOpen(true)
    }
    const closeSendModal = () => setIsSendModalOpen(false)

    // receive modal functions
    const showReceiveModal = crypto => {
        setCurrentCrypto(crypto)
        setIsReceiveModalOpen(true)
    }
    const closeReceiveModal = () => setIsReceiveModalOpen(false)

    return (
        <>
            {user.crypto.map((crypto, index) => (
                <div
                    key={index}
                    className={`wallet-balance-box wallet${index + 1}`}>
                    <div className="wallet-balance-ico">
                        <img
                            src={`assets/images/${crypto.notation}.png`}
                            alt={`${crypto.name}`}
                        />
                    </div>
                    <h3>{crypto.name} Wallet</h3>
                    <h4>
                        {/* TODO: round balance to last 6 figures */}
                        {crypto.balance} {crypto.notation.toUpperCase()}
                    </h4>
                    <div className="wallet-balance-btn clearfix">
                        <Button
                            className="theme-btn wallet-sent-btn"
                            onClick={() => showSendModal(crypto.notation)}>
                            <FaArrowAltCircleUp />
                            Send
                        </Button>
                        <Button
                            onClick={() => showReceiveModal(crypto.notation)}>
                            <FaArrowAltCircleDown />
                            Receive
                        </Button>
                    </div>
                </div>
            ))}
            <SendModal
                isOpen={isSendModalOpen}
                hideModal={() => closeSendModal()}
                user={user}
                currentCrypto={currentCrypto}
            />
            <ReceiveModal
                isOpen={isReceiveModalOpen}
                hideModal={() => closeReceiveModal()}
                user={user}
                currentCrypto={currentCrypto}
            />
        </>
    )
}

export default WalletBalance
