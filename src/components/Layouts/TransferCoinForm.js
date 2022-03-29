import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'

const TransferCoinForm = () => {
    const { register, handleSubmit } = useForm()
    const [crypto, setCrypto] = useState('btc')

    const handleCrypto = e => {
        setCrypto(e.target.value)
    }
    const onSubmit = data => {
        // process form data here
        console.log(data)
    }
    return (
        <div className="transfer-coin-content-box mt-3" id="transfer-coin">
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
                <div className="theme-input-box">
                    <label>To Email</label>
                    <input
                        className="theme-input"
                        type="email"
                        placeholder="wallet@gmail.com"
                        required
                        {...register('recepientEmail')}
                    />
                </div>
                <div className="theme-input-box amount-box">
                    <label>Amount to send</label>
                    <input
                        className="theme-input"
                        type="number"
                        placeholder="0.000000"
                        required
                        {...register('amountToSend')}
                    />
                    <span className="coin-status">{`/ ${crypto.toUpperCase()}`}</span>
                </div>
                <div className="transfer-coin-button">
                    <Button value="Send Coin" />
                </div>
            </form>
        </div>
    )
}

export default TransferCoinForm
