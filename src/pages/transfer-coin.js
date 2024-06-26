import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import {
    FaCoins,
    FaArrowAltCircleUp,
    FaArrowAltCircleDown,
    FaExchangeAlt,
} from 'react-icons/fa'
import { useState } from 'react'
import CoinBalance from '@/components/CoinBalance'
import SendCoinForm from '@/components/Layouts/SendCoinForm'
import ReceiveCoinForm from '@/components/Layouts/ReceiveCoinForm'
import TransferCoinForm from '@/components/Layouts/TransferCoinForm'

const TransferCoin = () => {
    const [currentView, setCurrentView] = useState('send-coin')
    return (
        <AppLayout
            header={
                <h2>
                    <FaCoins />
                    <span>Transfer Coin</span>
                </h2>
            }>
            <Head>
                <title>Transfer Coin</title>
            </Head>
            <div className="tranfer-coin-box">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="transfer-coin-left-box">
                            <div className="transfer-coin-btn">
                                <a
                                    href="#"
                                    className={
                                        currentView === 'send-coin'
                                            ? 'active'
                                            : undefined
                                    }
                                    onClick={() => setCurrentView('send-coin')}>
                                    <FaArrowAltCircleUp /> Send
                                </a>
                                <a
                                    href="#"
                                    className={
                                        currentView === 'receive-coin'
                                            ? 'active'
                                            : undefined
                                    }
                                    onClick={() =>
                                        setCurrentView('receive-coin')
                                    }>
                                    <FaArrowAltCircleDown />
                                    Receive
                                </a>
                                <a
                                    href="#"
                                    className={
                                        currentView === 'transfer-coin'
                                            ? 'active'
                                            : undefined
                                    }
                                    onClick={() =>
                                        setCurrentView('transfer-coin')
                                    }>
                                    <FaExchangeAlt />
                                    Transfer
                                </a>
                                {/* TODO: use framer motion to add exit animations for these 3 components */}
                                <div className="transfer-coin-content">
                                    {currentView === 'send-coin' && (
                                        <SendCoinForm />
                                    )}
                                    {currentView === 'receive-coin' && (
                                        <ReceiveCoinForm />
                                    )}
                                    {currentView === 'transfer-coin' && (
                                        <TransferCoinForm />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <CoinBalance />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default TransferCoin
