import Head from 'next/head'
import AppLayout from '@/components/La/youts/AppLayout'
import { FaHistory } from 'react-icons/fa'

const Transaction = () => {
    return (
        <AppLayout
            header={
                <h2>
                    <FaHistory />
                    <span>Transfer coin</span>
                </h2>
            }>
            <Head>
                <title>Transaction</title>
            </Head>
            Transaction page
        </AppLayout>
    )
}

export default Transaction
