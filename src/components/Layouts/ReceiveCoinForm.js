import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaCopy } from 'react-icons/fa'
import Button from '../Button'

const ReceiveCoinForm = () => {
    // dummy user data
    const user = {
        name: 'John Doe',
        walletAddress: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    }

    const [crypto, setCrypto] = useState('btc')
    const { register, handleSubmit } = useForm()

    const handleCrypto = e => setCrypto(e.target.value)
    const onSubmit = data => {
        // process form info here
        console.log(data)
    }

    return (
        <div className="transfer-coin-content-box mt-3" id="receive-coin">
            <div className="payment-invoice-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="theme-input-box">
                        <div className="theme-custom-dropdown dropdown">
                            <select
                                {...register('crypto')}
                                className="dropdown-select theme-input"
                                onChange={handleCrypto}>
                                <option value="BTC">Bitcoin</option>
                                <option value="eth">Ethereum</option>
                                <option value="ltc">Litecoin</option>
                                <option value="bch">Bitcoin Cash</option>
                                <option value="doge">DogeCoin</option>
                                <option value="usdt">Tether USDT</option>
                                <option value="dash">Dash</option>
                                <option value="usdterc20">
                                    Tether USD (ERC20)
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="invoice-warning">
                        <p>
                            <span className="invoice-text">
                                <i className="fas fa-exclamation-circle" />
                            </span>
                            Please Verify the Address and Amount properly. Sent{' '}
                            {crypto.toUpperCase()} can not be reversed in any
                            case.
                        </p>
                    </div>
                    <div className="invoice-qr-img">
                        <img
                            id="copy"
                            data-clipboard-text={user.walletAddress}
                            src="assets/images/coinremitterqrcode.png"
                            data-original-title=""
                            alt="Qr Code"
                        />
                    </div>
                    <div className="invoice-qr-ammount-box">
                        <div className="invoice-ammount-box">
                            <label>Amount</label>
                            <h2
                                id="ammount-copy"
                                data-clipboard-text={user.walletAddress}
                                data-original-title=""
                                title="">
                                0.00001 {crypto.toUpperCase()}
                            </h2>
                        </div>
                        <div className="invoice-qr-box">
                            <label>Address</label>
                            <div className="invoice-payment-url">
                                <input
                                    type=""
                                    name=""
                                    value={user.walletAddress}
                                    disabled={true}
                                />
                                <FaCopy
                                    id="input-copy"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            user.walletAddress,
                                        )
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="transfer-coin-button">
                        <Button value="Receive Coin" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReceiveCoinForm
