import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const Profile = () => {
    return (
        <AppLayout header={<h2>Profile</h2>}>
            <Head>
                <title>Profile</title>
            </Head>
            Profile page
        </AppLayout>
    )
}

export default Profile
