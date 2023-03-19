import { AuthContext } from "../contexts/AuthProvider"
import { useContext } from "react"
import { Link } from "react-router-dom"

export default function CityCard(props){
    const {user} = useContext(AuthContext)


    return (
        <div id='citycard'>
            {
                // I know this is a horrible way of doing this but
                (user.uid == props.city.uid) ?
                <div>
                    <h3>{props.city.city}</h3>
                    <Link to={`/CardSingle/${props.city.city}`}>Read More</Link>
                </div>
                :
                <></>
            }
            
        </div>
    )
}