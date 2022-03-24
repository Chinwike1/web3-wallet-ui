const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    telephone: '+29282393',
    avatarUrl: 'assets/images/profile.jpg',
    crypto: [
        {
            name: 'Bitcoin',
            notation: 'btc',
            balance: '0.312373',
            walletAddress: 'btctAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
        },
        {
            name: 'Ethereum',
            notation: 'eth',
            balance: '1.007346',
            walletAddress: 'ethtAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
        },
        {
            name: 'Litecoin',
            notation: 'ltc',
            balance: '2.1332',
            walletAddress: 'ltcAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
        },
        {
            name: 'Bitcoin Cash',
            notation: 'bch',
            balance: '877393121',
            walletAddress: 'bchtAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
        },
        {
            name: 'Ripple',
            notation: 'xrp',
            balance: '322.0421',
            walletAddress: 'xrpAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
        },
        {
            name: 'Dashcoin',
            notation: 'dash',
            balance: '3.042189',
            walletAddress: 'dashtAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
        },
    ],
    transactions: [
        {
            type: 'deposit',
            crypto: { name: 'Bitcoin', notation: 'btc' },
            timestamp: Date.now(),
            amount: '405.34',
            transactionId:
                '7604a0c2f63385acfe6f817729a86430d9a98825b0820bd92494937d052f5ae4',
        },
        {
            type: 'withdrawal',
            crypto: { name: 'Litecoin', notation: 'ltc' },
            timestamp: Date.now(),
            amount: '405.34',
            transactionId:
                '7604a0c2f63385acfe6f817729a86430d9a98825b0820bd92494937d052f5ae4',
        },
        {
            type: 'transfer',
            crypto: { name: 'Ethereum', notation: 'eth' },
            timestamp: Date.now(),
            amount: '405.34',
            transactionId:
                '7604a0c2f63385acfe6f817729a86430d9a98825b0820bd92494937d052f5ae4',
            recepientEmail: 'akslkj8128303',
        },
        {
            type: 'deposit',
            crypto: { name: 'Bitcoin', notation: 'btc' },
            timestamp: Date.now(),
            amount: '405.34',
            transactionId:
                '7604a0c2f63385acfe6f817729a86430d9a98825b0820bd92494937d052f5ae4',
            receivingAddress: 'akslkj8128303',
        },
        {
            type: 'transfer',
            crypto: { name: 'Bitcoin', notation: 'btc' },
            timestamp: Date.now(),
            amount: '405.34',
            transactionId:
                '7604a0c2f63385acfe6f817729a86430d9a98825b0820bd92494937d052f5ae4',
            receivingAddress: 'akslkj8128303',
        },
        {
            type: 'deposit',
            crypto: { name: 'Bitcoin', notation: 'btc' },
            timestamp: Date.now(),
            amount: '405.34',
            transactionId:
                '7604a0c2f63385acfe6f817729a86430d9a98825b0820bd92494937d052f5ae4',
            receivingAddress: 'akslkj8128303',
        },
        {
            type: 'withdrawal',
            crypto: { name: 'Bitcoin', notation: 'btc' },
            timestamp: Date.now(),
            amount: '405.34',
            transactionId:
                '7604a0c2f63385acfe6f817729a86430d9a98825b0820bd92494937d052f5ae4',
            receivingAddress: 'akslkj8128303',
        },
    ],
}

export default user
