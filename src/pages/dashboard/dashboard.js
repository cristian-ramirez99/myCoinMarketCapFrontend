import Carousel from '../../components/dashboard/carousel/carousel';
import CryptoTable from '../../components/dashboard/crypto-table/crypto-table';
import Top3 from '../../components/dashboard/top3/top3';
import Percentage from '../../components/utils/percentage';
import classes from './dashboard.module.css';

function Dashboard() {
    return (
        <>
            <Carousel></Carousel>
            <h3 className={classes.title}>Today's Cryptocurrency Prices by Market Cap</h3>
            <div className={classes.wrapper}>
                <p className='text-muted'>Thte global crypto market cap is $1.17T, a</p>
                <Percentage value={-4.76}></Percentage>
                <p className='text-muted'>decrease over the last day</p>
            </div>
            <Top3></Top3>
            <CryptoTable></CryptoTable>
        </>
    );
}

export default Dashboard;
