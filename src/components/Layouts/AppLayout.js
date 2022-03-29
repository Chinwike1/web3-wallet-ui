import Navigation from '@/components/Layouts/Navigation'
import RightPane from './RightPane'
// import { useAuth } from '@/hooks/auth'

const AppLayout = ({ header, children }) => {
    // const { user } = useAuth({ middleware: 'auth' })

    return (
        <section>
            {/* Page Content */}
            <div className="wallet-area">
                <div className="wallet-area warpper">
                    <div className="row">
                        <div
                            className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                            style={{ paddingRight: 0 }}>
                            <Navigation />
                            <RightPane header={header}>{children}</RightPane>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppLayout
