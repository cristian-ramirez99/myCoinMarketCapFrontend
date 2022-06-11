//import { useState } from 'react';
import classes from './crypto.row.module.css'
import { numberToFixed } from '../../../utils/numberToFixed';
import Percentage from '../../utils/percentage';
import ProgressBar from '../../utils/progressBar/progressBar';
//import ChartLine from '../../charts/chartLine/chartLine';

function CryptoRow({ id, cmc_rank, name, symbol, quote, circulating_supply, max_supply }) {
    const setStar = event => {
        event.currentTarget.classList.add(classes.starChecked);
    }

    const getCryptoVolume24h = () => {
        return quote.USD.volume_24h / quote.USD.price;
    }

    //TODO: Graphic last 7days how can I do that?
    //TODO: Don't render all the cryptos, render on scroll
    return (
        <>
            <div className={classes.rectLine}></div>
            <tr>
                <td >
                    <div onClick={setStar} className={`${classes.star} fa fa-star cursor`}></div>
                </td>
                <td>{cmc_rank}</td>
                <td >
                    <div className={classes.wrapperImg}>
                        <a href={`/currencies/${name}`}>
                            <img className={`${classes.imgCrypto} cursor`} alt={name} src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}>
                            </img>
                        </a>
                    </div>
                    {name}
                    <span className={`${classes.symbolPadding} text-muted`} >
                        {symbol}
                    </span>
                </td>
                <td >${numberToFixed(quote.USD.price)}</td>
                <td>
                    <Percentage value={numberToFixed(quote.USD.percent_change_24h)}></Percentage>
                </td>
                <td>
                    <Percentage value={numberToFixed(quote.USD.percent_change_7d)}></Percentage>
                </td>
                <td>${numberToFixed(quote.USD.market_cap)}</td>
                <td>
                    ${numberToFixed(quote.USD.volume_24h)}
                    <span className={classes.cryptoLast24h}>{numberToFixed(getCryptoVolume24h())} {symbol}</span>
                </td>
                <td>
                    {numberToFixed(circulating_supply)} {symbol}
                    <ProgressBar circulating_supply={circulating_supply} max_supply={max_supply} symbol={symbol}></ProgressBar>
                </td>
                <td>
                    <p>Grafica.....</p>
                    {/* <div className={classes.wrapperChartLine}>
                        <ChartLine></ChartLine>
                    </div> */}
                </td>
                <td ><i className="fas fa-ellipsis-v cursor"></i></td>
            </tr>
            <div className={classes.rectLine}></div>
        </>
    );
}

export default CryptoRow;
