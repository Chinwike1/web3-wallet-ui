import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'

const TransferCoin = () => {
    return (
        <AppLayout header={<h2>Transfer coin</h2>}>
            <Head>
                <title>Transfer coin</title>
            </Head>
            Transfer coin page
        </AppLayout>
    )
}

export default TransferCoin
