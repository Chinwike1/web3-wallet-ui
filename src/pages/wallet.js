import AppLayout from '@/components/Layouts/AppLayout'
import TransactionHistory from '@/components/Layouts/TransactionHistory'
import WalletBalance from '@/components/Layouts/WalletBalance'
import Head from 'next/head'
import { useState } from 'react'
import { FaWallet, FaHistory } from 'react-icons/fa'
import user from '../utils/user'

const Wallet = () => {
    const [crypto, setCrypto] = useState('btc')
    const handleCrypto = e => {
        setCrypto(e.target.value)
        console.log(crypto)
    }

    return (
        <AppLayout
            header={
                <h2>
                    <FaWallet />
                    <span>My Wallet</span>
                </h2>
            }>
            <Head>
                <title>Wallet</title>
            </Head>
            <div className="wallet-balance-area clearfix">
                <WalletBalance user={user} />
            </div>
            <div className="last-transaction-widget">
                <h2 className="dashboard-title">
                    <FaHistory /> <span>Last Transaction</span>
                </h2>
                <div className="theme-input-box transaction-coin-filter">
                    <div className="theme-custom-dropdown dropdown">
                        <select
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
                <TransactionHistory />
            </div>
        </AppLayout>
    )
}

export default Wallet
