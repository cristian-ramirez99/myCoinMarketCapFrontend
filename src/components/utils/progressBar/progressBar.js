import classes from './progressBar.module.css'
import { numberToFixed } from '../../../utils/numberToFixed';

function ProgressBar({ circulating_supply, max_supply, symbol }) {
    const getCurrentPercentageSupply = () => {
        return (circulating_supply / max_supply) * 100
    }

    const fillProgressBar = () => {
        return {
            width: getCurrentPercentageSupply() + '%'
        }
    }
    return (
        <div className={classes.wrapperProgressBar}>
            <div id={classes.progressBar} style={fillProgressBar()} className='cursor'>
                <div className={classes.arrowUp}></div>
                <div className={classes.progressBarContent}>
                    <div className={classes.wrapperContent}>
                        <div className={classes.textAlignLeft}>
                            <p>Percentage </p>
                        </div>
                        <div className={classes.floatRight}>
                            <p>{numberToFixed(getCurrentPercentageSupply())}%</p>
                        </div>
                    </div>
                    <div className={`${classes.wrapperProgressBarInner} ${classes.marginTop1}`}>
                        <div id={classes.progressBar} style={fillProgressBar()}>
                        </div>
                    </div>
                    <div className={`${classes.wrapperContent} ${classes.marginTop2}`}>
                        <div className={classes.textAlignLeft}>
                            <p>Circulating Supply </p>
                            <p>Max Supply </p>
                        </div>
                        <div className={classes.floatRight}>
                            <p>{circulating_supply}  {symbol}</p>
                            <p>{max_supply} {symbol}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar