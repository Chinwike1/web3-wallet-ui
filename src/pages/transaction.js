import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'

const Transaction = () => {
    return (
        <AppLayout header={<h2>Transaction</h2>}>
            <Head>
                <title>Transaction</title>
            </Head>
            Transaction page
        </AppLayout>
    )
}

export default Transaction
