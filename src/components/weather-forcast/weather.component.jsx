import './weather.style.scss'

const WeatherComp = ({cityname , countryname ,temperature ,min_temp ,max_temp,}) => {
    return(
        <>


        
            <div className='weather'>
                <h1>Forcast</h1>
                <h3>{cityname},{countryname}</h3>
                
                <h3>{temperature}</h3>
                <h3>{min_temp}</h3>
                <h3>{max_temp}</h3>
            </div>
        
        </>
    )
}

export default WeatherComp