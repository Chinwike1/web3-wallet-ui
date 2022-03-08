import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const Dashboard = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>
            <Head>
                <title>Dashboard</title>
            </Head>
            {/* Create aside navigation for different pages on the dashboard */}
            Dashboard content
        </AppLayout>
    )
}

export default Dashboard
