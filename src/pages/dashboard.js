import CoinBalance from '@/components/CoinBalance'
import AppLayout from '@/components/Layouts/AppLayout'
import TransactionHistory from '@/components/Layouts/TransactionHistory'
import WalletChart from '@/components/WalletChart'
import Head from 'next/head'
import { useState } from 'react'
import { FaTachometerAlt } from 'react-icons/fa'

const Dashboard = () => {
    const [crypto, setCrypto] = useState('bitcoin')

    const handleCrypto = e => setCrypto(e.target.value)

    return (
        <AppLayout
            header={
                <>
                    <h2 className="col-md-4">
                        <FaTachometerAlt />
                        <span>Dashboard</span>
                    </h2>
                    <div className="theme-input-box transaction-coin-filter col-md-8 float-right">
                        <select
                            id="dLabel"
                            style={{ width: 150, padding: '10px 16px' }}
                            className="dropdown-select theme-input"
                            onChange={handleCrypto}>
                            <option value="bitcoin">BTC</option>
                            <option value="ethereum">ETH</option>
                            <option value="litecoin">LTC</option>
                            <option value="bitcoin-cash">BCH</option>
                            <option value="dash">DASH</option>
                            {/* <option value="xmr">XMR</option> */}
                        </select>
                    </div>
                </>
            }>
            <Head>
                <title>Dashboard</title>
            </Head>
            <WalletChart crypto={crypto} />
            <div className="wallet-box-main clearfix">
                <div className="wallet-box-left">
                    <CoinBalance />
                </div>
                <div className="wallet-box-right">
                    <div className="wallet-transaction">
                        <h2 className="dashboard-title">Last Transaction</h2>
                        <TransactionHistory
                            limit={4}
                            pagination={false}
                            hasShadowParent={true}
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
