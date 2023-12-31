import './Chart.css';

const ChartBar = props => {

    let barFillHeight = '0%';

    if(props.maxValue > 0){
        console.log(props.value);
        console.log(props.maxValue);
        console.log((props.value / props.maxValue) * 100);
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    console.log(props.label,barFillHeight);
    return <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>
}
export default ChartBar;