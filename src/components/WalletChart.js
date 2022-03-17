import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import Spinner from './Spinner'

const WalletChart = () => {
    const [currency, setCurrency] = useState('bitcoin')
    const [chartRanges, setChartRanges] = useState([
        { value: '2d' },
        { value: '1w' },
        { value: '2w' },
        { value: '1m' },
        { value: '3m' },
        { value: '6m' },
        { value: '1y' },
        { value: '2y' },
        { value: '4y' },
    ])

    return (
        <div className="wallet-chart mt-5">
            <div id="chart">
                <div id="timeline-chart">
                    <div style={{ height: '400px' }}>
                        <div className="top2">
                            <div
                                id="ranges"
                                className="dashboard-chart-range buttons mb-2">
                                Range:
                                {chartRanges.map((range, index) => (
                                    <a
                                        key={index}
                                        id={range.value}
                                        href={`#BTC/USDT:${range.value}`}
                                        className="active">
                                        {range.value}
                                    </a>
                                ))}
                            </div>
                            <div className="buttons">
                                <a href="#" id="average-button" />
                            </div>
                        </div>
                        <div
                            id="ChartContainer"
                            style={{ height: '350px', width: 1000 }}
                        />
                    </div>
                </div>
            </div>
            {/* <Spinner /> */}
        </div>
    )
}

export default WalletChart
