import { useEffect, useState } from 'react';
import classes from './crypto-table.module.css'
import { getCryptoList } from '../../../services/crypto-list/cripto-list'
import CryptoRow from '../crypro-row/crypto-row';

function CryptoTable() {
    const [cryptoList, setCryptoList] = useState([]);

    useEffect(() => {
        callAPI();
    }, []);


    const callAPI = () => {
        getCryptoList().then(response => {
            const cryptoList = response.data.cryptoList
            setCryptoList(cryptoList);
        }).catch(e => {
            console.log(e);
        });
    }

    return (
        <div>
            <table>
                <thead>
                    <div className={classes.rectLine}></div>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Name</th>
                        <th >Price</th>
                        <th>24h %</th>
                        <th>7d %</th>
                        <th>Market Cap</th>
                        <th>Volume(24h)</th>
                        <th>Circulating Supply</th>
                        <th>Last 7 days</th>
                        <th></th>
                    </tr>
                    <div className={classes.rectLine}></div>

                </thead>
                <tbody>
                    {
                        cryptoList.map(({ id, cmc_rank, symbol, name, quote, circulating_supply, max_supply }) => (
                            <CryptoRow
                                key={id}
                                id = {id}
                                cmc_rank={cmc_rank}
                                symbol={symbol}
                                name={name}
                                quote={quote}
                                circulating_supply={circulating_supply}
                                max_supply={max_supply}>
                            </CryptoRow>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CryptoTable;
