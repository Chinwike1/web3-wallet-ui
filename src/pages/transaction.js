import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import { FaHistory } from 'react-icons/fa'
import TransactionHistory from '@/components/Layouts/TransactionHistory'
// import { useState } from 'react'
// import { useQuery } from 'react-query'

const Transaction = () => {
    // const [page, setPage] = useState(0)

    // const {
    //     isLoading,
    //     isError,
    //     error,
    //     data,
    //     isFetching,
    //     isPreviousData,
    // } = useQuery(['projects', page], {
    //     keepPreviousData: true,
    // })

    return (
        <AppLayout
            header={
                <h2>
                    <FaHistory />
                    <span>Transaction</span>
                </h2>
            }>
            <Head>
                <title>Transaction</title>
            </Head>
            <TransactionHistory />
        </AppLayout>
    )
}

export default Transaction
