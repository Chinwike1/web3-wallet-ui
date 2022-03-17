import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { FaWallet } from 'react-icons/fa'

const Wallet = () => {
    return (
        <AppLayout
            header={
                <h2>
                    <FaWallet />
                    <span>Wallet</span>
                </h2>
            }>
            <Head>
                <title>Wallet</title>
            </Head>
            Wallet page
        </AppLayout>
    )
}

export default Wallet
