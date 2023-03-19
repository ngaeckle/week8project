import { AuthContext } from "../contexts/AuthProvider"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataProvider";
import AnotherCityCard from "../components/AnotherCityCard";


export default function CardSingle(){
    const {getWeatherData} = useContext(DataContext)
    const [data, setdata] = useState({})
    const {city} = useParams()
    const [img, setImg] = useState('')
    const [loadingState, setLoadingState] = useState("Loading")

    useEffect(() => {
        async function handleLoad(){
            const weatherdata = await getWeatherData(city)
            console.log(weatherdata)
            console.log("data ^^^^")
            setdata(weatherdata)
            console.log("data:", data)
            setImg(`https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`)
            setLoadingState('Loaded')
        }
        handleLoad()
    }, [city])


    return (
        <div>
            {
                (loadingState === "Loading") ?
                <h1>Error</h1>
                :
                <AnotherCityCard data={data} image={img}/>
            }
        </div>
        
    )
}