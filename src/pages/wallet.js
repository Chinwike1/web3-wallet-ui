import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const Wallet = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Wallet
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
