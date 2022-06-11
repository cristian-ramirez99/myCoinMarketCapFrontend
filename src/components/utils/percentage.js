import classes from './percentage.module.css'

function Percentage({ value }) {

    const isValuePositive = () => {
        return value > 0;
    }

    const absValue = () => {
        return Math.abs(value);
    }
    return (
        <>
            {isValuePositive() ?
                <p className={classes.positivePercentage}>
                    <i className={`${classes.iconCaret} fas fa-caret-up`}></i>
                    {absValue(value)} %
                </p>
                :
                <p className={classes.negativePercentage}>
                    <i className={`${classes.iconCaret} fas fa-caret-down`}></i>
                    {absValue(value)} %
                </p>
            }
        </>
    )
}
export default Percentage