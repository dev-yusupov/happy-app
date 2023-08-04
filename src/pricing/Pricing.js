import './Pricing.css'

const PricePlan = (props) => {
    return (
        <div className='PricePlan'>
            <h4 style={{ color: props.color }}>{props.title}</h4>
            <h1 style={{ color: props.color }}>{props.price}</h1>
            <h5>{props.duration}</h5>
            <button style={{ backgroundColor: props.color }} className='PriceButton'>Buy now</button>
        </div>
    )
}

const Price = () => {
    return (
        <div className='Pricing'>
            <div className='PricingText'>
                <span>Pricing</span>
                <h1>A plan for every need.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
            </div>
            <div className='Price'>
                <PricePlan title={'Standard'} color={ '#0278ED' } price="$9" duration="Monthly" />
                <PricePlan title={'Premium'} color={ '#FF5437' } price="$99" duration="Annually" />
                <PricePlan title={'Lifetime'} color={ '#FF9209' } price="$149" duration="Up front" />
            </div>
        </div>
    )
}

export default Price