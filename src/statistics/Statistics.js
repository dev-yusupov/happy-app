import './Statistics.css'

const StatisticsItem = (props) => {
    return (
        <div className='Statistics-item'>
            <h1 className='Statistics-item-number'>{props.number}</h1>
            <p>{props.title}</p>
        </div>
    )
}

const Statistics = () => {
    return (
        <div className='Statistics'>
            <StatisticsItem number={ '400+' } title={ 'Pictures analyzed' } />
            <StatisticsItem number={ '25+' } title={ 'Operations per minute' } />
            <StatisticsItem number={ '95%' } title={ 'Accuracy' } />
        </div>
    )
}

export default Statistics