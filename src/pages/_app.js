// import 'tailwindcss/tailwind.css'
import { QueryClient, QueryClientProvider } from 'react-query'

// stylesheets
import 'bootstrap/dist/css/bootstrap.min.css'

// Initiate react-query client
const queryClient = new QueryClient()

// blank screen fix here
const isPaymentComplete = false

const App = ({ Component, pageProps }) => (
    <QueryClientProvider client={queryClient}>
        {isPaymentComplete ? <Component {...pageProps} /> : <></>}
    </QueryClientProvider>
)

export default App
