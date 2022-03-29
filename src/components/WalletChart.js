import {
    Chart as ChartJS,
    CategoryScale,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import Spinner from './Spinner'
import { useQuery } from 'react-query'
import { useState } from 'react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

const WalletChart = ({ crypto }) => {
    const [currentRange, setCurrentRange] = useState(2)

    let baseUrl = 'https://api.coingecko.com/api/v3/coins'
    let url = new URL(`${baseUrl}/${crypto}/market_chart`)
    let params = {
        vs_currency: 'usd',
        days: currentRange,
    }

    url.search = new URLSearchParams(params).toString()

    const chartRanges = [
        { label: '2d', value: 2 },
        { label: '1w', value: 7 },
        { label: '2w', value: 14 },
        { label: '1m', value: 30 },
        { label: '3m', value: 60 },
        { label: '6m', value: 90 },
        { label: '1y', value: 365 },
        { label: '2y', value: 730 },
        { label: '4y', value: 1460 },
    ]

    const fetchCoins = async () => {
        const response = await fetch(url.href)
        const data = await response.json()
        return data.prices
    }

    const { isLoading, isError, data: chartData } = useQuery(
        ['coins', crypto, currentRange],
        fetchCoins,
        { staleTime: 120000 },
    )

    return (
        <div className="wallet-chart mt-3">
            <div id="chart">
                <div id="timeline-chart">
                    <div style={{ height: 350 }}>
                        <div className="top2">
                            <div
                                id="ranges"
                                className="dashboard-chart-range buttons mb-2">
                                Range:
                                {chartRanges.map((range, index) => (
                                    <a
                                        key={index}
                                        id={range.time}
                                        href={`#${crypto}/usdt:${range.label}`}
                                        className={
                                            range.value === currentRange
                                                ? 'active'
                                                : undefined
                                        }
                                        onClick={() =>
                                            setCurrentRange(range.value)
                                        }>
                                        {range.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <Line
                                className="pb-4"
                                data={{
                                    labels: chartData.map(coin => {
                                        let date = new Date(coin[0])
                                        return date.toLocaleDateString()
                                    }),
                                    datasets: [
                                        {
                                            label: `${
                                                crypto.charAt(0).toUpperCase() +
                                                crypto.slice(1)
                                            } price at ${chartData[
                                                chartData.length - 1
                                            ][1].toFixed(2)} / $`,
                                            data: chartData.map(
                                                coin => coin[1],
                                            ),
                                            borderColor: '#001c71',
                                        },
                                    ],
                                }}
                                options={{
                                    elements: { point: { radius: 1 } },
                                    maintainAspectRatio: false,
                                    responsive: true,
                                }}
                            />
                        )}
                        {isError && (
                            <p>
                                We had trouble fetching your data. Check your
                                network connection
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {/* <Line id="ChartContainer" data={chartData} options={chartOptions} /> */}
            {/* <Spinner /> */}
        </div>
    )
}

export default WalletChart
