import AppLayout from '@/components/Layouts/AppLayout'
import WalletChart from '@/components/WalletChart'
import Head from 'next/head'
import { FaTachometerAlt } from 'react-icons/fa'
// TODO: component should reach out to CoinCap

const Dashboard = () => {
    return (
        <AppLayout
            header={
                <h2>
                    <FaTachometerAlt />
                    <span>Dashboard</span>
                </h2>
            }>
            <Head>
                <title>Dashboard</title>
            </Head>
            <div>
                <WalletChart />
            </div>
        </AppLayout>
    )
}

export default Dashboard
