import { AuthContext } from "../contexts/AuthProvider"
import { useContext } from "react"
import { Link } from "react-router-dom"
import background1 from "../img/wallpaperhunt_Minimal_Nature_Landscape_82_1.jpg"
import background2 from "../img/e9b5f002e928f03e6eb828d26c00e634.jpg"
import background3 from "../img/20a44df32c5000ed82c68a2ebf644df7.jpg"
import background4 from "../img/ecd2596c672adcc609620742082122fe.jpg"
import background5 from "../img/l9pgfhc5xry51.jpg"
import background6 from "../img/26b625a7b2af7889da33008415de14d9.jpg"
import background7 from "../img/c0be80e4295c2cf8bf294b4373353e39.jpg"

export default function AnotherCityCard(props){

    function sentenceCase (str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
     
    return str.replace(/\w\S*/g,
    function(txt){return txt.charAt(0).toUpperCase() +
        txt.substr(1).toLowerCase();});
    }

    function getbackimg(icon){
        let num = ''
        num = icon.replace(icon.slice(-1), '')
        num = parseInt(num)
        if (icon.slice(-1) === 'd'){
            //day
            if (num == 1){
                //clear day
                return background1
            }
            else if(num == 2 || num == 3 || num == 4){
                //cloudy day
                return background1
            }
            else if (num == 9 || num == 10 || num == 11){
                //rainy day
                return background2
            }
            else if (num == 13){
                //snowy day
                return background3
            }
            else{
                //mist
                return background4
            }
        }else{
             //night
            if (num == 1){
                //clear night
                return background5
            }
            else if(num == 2 || num == 3 || num == 4){
                //cloudy night
                return background5
            }
            else if (num == 9 || num == 10 || num == 11){
                //rainy night
                return background6
            }
            else if (num == 13){
                //snowy night
                return background7
            }
            else{
                //mist
                return background4
            }
        }
    }

    return (
        <div>
            <div id="card" style={{backgroundImage: `url(${getbackimg(props.data.weather[0].icon)})`}}>
                <div>
                    <div id="header">
                        <h1>{props.data.name + ", " + props.data.sys.country}</h1>
                        <img src={props.image} alt="img" />
                        <h2>{Math.round(props.data.main.temp)}°</h2>
                        <p>{sentenceCase(props.data.weather[0].description)}</p>
                    </div>
                    <div id="info">
                        <h2>Other info</h2>
                        <p id="high">High: {Math.round(props.data.main.temp_max)}°</p>
                        <p id="low" >Low: {Math.round(props.data.main.temp_min)}°</p>
                        <p id="rf"  >Real Feel: {Math.round(props.data.main.feels_like)}°</p>
                        <p id="wind">Wind: {Math.round(props.data.wind.speed)} mph</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}