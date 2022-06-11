import { useState } from 'react';
import { useEffect } from 'react';
import classes from './carousel.module.css';


const data = [{
    urlImg: 'https://s2.coinmarketcap.com/static/new-alerts/613f25cbef9a5a001905f323/img/1654882566604_Solana%20NFT%20Ecosystem%20(The%20Definitive%20Guide%20by%20CoinMarketCap)%20(1).jpg',
    title: 'Crypto Deep Dive',
    text: 'Where to Buy Solana NFTs?'
},
{
    urlImg: 'https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1653571323736_The-Capital-Conference-280x136.jpg',
    title: 'Time to Ship',
    text: 'CoinMarketCap Conferece Recap'
}, {
    urlImg: 'https://s2.coinmarketcap.com/static/new-alerts/613ff90685133600192a3b73/img/1654893549564_June-10-Daily-Thumbnail_280x136-min.jpg',
    title: 'Crypto Expresso',
    text: 'Seth Green Reunited With Bored Ape'
},
{
    urlImg: 'https://s2.coinmarketcap.com/static/new-alerts/6115224cb91ba00012e951d7/img/1653484280049_Meta%20Image%20280x136%20(1).png',
    title: 'Crypto Expresso',
    text: 'Seth Green Reunited With Bored Ape'
},
{
    urlImg: 'https://s2.coinmarketcap.com/static/new-alerts/611521ecc3074e0013b0c4a9/img/1654755788223_290x136_optimized.jpg',
    title: 'Crypto Expresso',
    text: 'Seth Green Reunited With Bored Ape'
},
{
    urlImg: 'https://s2.coinmarketcap.com/static/new-alerts/6115224cb91ba00012e951d7/img/1653484280049_Meta%20Image%20280x136%20(1).png',
    title: 'Crypto Expresso',
    text: 'Seth Green Reunited With Bored Ape'
}
]
const MAX_CARDS_IN_PAGE = 5;
function Carousel() {
    const page = 0;
    const [cards, setCards] = useState([]);

    const getCards = () => {
        return cards.slice(page * MAX_CARDS_IN_PAGE, MAX_CARDS_IN_PAGE);
    }

    const lastCardOfPage = (urlImg) => {
        const currentCards = getCards()
        return currentCards[currentCards.length - 1].urlImg === urlImg;
    }
    useEffect(() => {
        setCards(data);
    }, [])


    //TODO: USE css class imageBox in last child of carousel
    return (
        <>
            <div className={classes.wrapper}>
                {
                    getCards().map(({ urlImg, title, text }) => (
                        <div className={classes.card}>
                            <div className={classes.cardBody}>
                                <img alt='a' src={urlImg} height='500'></img>
                                {lastCardOfPage(urlImg)
                                    ? <i class={`fas fa-chevron-circle-right ${classes.iconArrow}`}></i>
                                    : <></>
                                }
                                <div className={classes.cardFooter}>
                                    <h5 className='text-muted'>{title}</h5>
                                    <p>{text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* <div className={classes.imageBox}></div> */}
        </>

    )
}


export default Carousel