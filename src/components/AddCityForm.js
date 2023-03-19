import { useState, useContext } from "react"
import { DataContext } from "../contexts/DataProvider"

export default function AddCityForm() {

    const [city, setCity] = useState('')
    const {addCity} = useContext(DataContext)

    async function handleSubmit(e){
        e.preventDefault()
        const newCity = await addCity(city)
        setCity('')
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="input-group mb-3" id='addcity'>
                <input type="text" className="form-control" placeholder="Add a city..." aria-describedby="button-addon2" onChange={(e) => {setCity(e.target.value)}} value={city}/>
                <button className="btn btn-primary" type="submit" id="button-addon2">Add City</button>
            </div>
        </form>
    )
}