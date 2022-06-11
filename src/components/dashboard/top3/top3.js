import classes from './top3.module.css'
import Percentage from '../../utils/percentage';

function Top3() {

    return (
        <>
            <div className={classes.wrapperCards}>
                <div className={classes.card}>
                    <div className={classes.cardBody}>
                        <a href="/">More &gt;</a>
                        <div className={classes.wrapperTitle}>
                            <img className={classes.imgFire} alt="fire" src="https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=92cd1e5"></img>
                            <h3 className={classes.cardTitle}>Trending</h3>
                        </div>
                        <div className={classes.wrapperContent}>
                            <div>
                                <p><span className={classes.idNumber}>1</span> STEPN <span className={classes.textMuted}>GMT</span></p>
                                <p><span className={classes.idNumber}>2</span> PancakeSwap<span className={classes.textMuted}>CAKE</span></p>
                                <p><span className={classes.idNumber}>3</span> Optimism<span className={classes.textMuted}>OP</span></p>
                            </div>
                            <div>
                                <Percentage value="5.16"></Percentage>
                                <Percentage value="3.66"></Percentage>
                                <Percentage value="11.54"></Percentage>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.cardBody}>
                        <a href="/">More &gt;</a>
                        <div className={classes.wrapperTitle}>
                            <img className={classes.imgFire} alt="fire" src="https://s2.coinmarketcap.com/static/cloud/img/GainnerIcon.png?_=92cd1e5"></img>
                            <h3 className={classes.cardTitle}>Biggest Gainers</h3>
                        </div>
                        <div className={classes.wrapperContent}>
                            <div>
                                <p><span className={classes.idNumber}>1</span> STEPN <span className={classes.textMuted}>GMT</span></p>
                                <p><span className={classes.idNumber}>2</span> PancakeSwap<span className={classes.textMuted}>CAKE</span></p>
                                <p><span className={classes.idNumber}>3</span> Optimism<span className={classes.textMuted}>OP</span></p>
                            </div>
                            <div >
                                <Percentage value="5.16"></Percentage>
                                <Percentage value="3.66"></Percentage>
                                <Percentage value="11.54"></Percentage>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.card} ${classes.noMargin}`}>
                    <div className={classes.cardBody}>
                        <a href="/" >More &gt;</a>
                        <div className={classes.wrapperTitle}>
                            <img className={classes.imgFire} alt="fire" src="https://s2.coinmarketcap.com/static/cloud/img/AddIcon.png?_=92cd1e5"></img>
                            <h3 className={classes.cardTitle}>Recently Added</h3>
                        </div>
                        <div className={classes.wrapperContent}>
                            <div>
                                <p><span className={classes.idNumber}>1</span> STEPN <span className={classes.textMuted}>GMT</span></p>
                                <p><span className={classes.idNumber}>2</span> PancakeSwap<span className={classes.textMuted}>CAKE</span></p>
                                <p><span className={classes.idNumber}>3</span> Optimism<span className={classes.textMuted}>OP</span></p>
                            </div>
                            <div>
                                <Percentage value="5.16"></Percentage>
                                <Percentage value="3.66"></Percentage>
                                <Percentage value="11.54"></Percentage>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top3;