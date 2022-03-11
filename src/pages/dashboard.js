import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
// TODO: convert this component to index.js in pages/dashboard folder

const Dashboard = () => {
    return (
        <AppLayout header={<h2>Dashboard</h2>}>
            <Head>
                <title>Dashboard</title>
            </Head>
            <div>dashboard content passed through children prop</div>
        </AppLayout>
    )
}

export default Dashboard
