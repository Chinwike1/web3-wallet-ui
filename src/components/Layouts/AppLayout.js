import Navigation from '@/components/Layouts/Navigation'
import RightPane from './RightPane'
// import { useAuth } from '@/hooks/auth'

const AppLayout = ({ header, children }) => {
    // const { user } = useAuth({ middleware: 'auth' })
    // Dummy data
    const user = {
        name: 'John Doe',
        email: 'john@doe.com',
    }

    return (
        <section>
            {/* Page Content */}
            <div className="wallet-area">
                <div className="wallet-area warpper">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <Navigation user={user} />
                            <RightPane user={user}>{children}</RightPane>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppLayout
