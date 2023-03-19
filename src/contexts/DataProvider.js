import { useState, useEffect, createContext, useContext } from "react";
import {getFirestore, getDocs, collection, doc, getDoc, addDoc, collectionGroup, query} from '@firebase/firestore'
import { AuthContext } from "./AuthProvider";

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [cities, setCities] = useState([])
    const db = getFirestore()
    const {user} = useContext(AuthContext)
    
    useEffect(() => {
        async function getMyCities(){
            const cityQuery = query(collectionGroup(db, "cities"))

            const querySnapshot = await getDocs(cityQuery);

            const loadedCities=[]
            querySnapshot.forEach((doc) => {
                loadedCities.push({
                    id: doc.id,
                    uid: doc.ref.parent.parent.id,
                    ...doc.data()
                })
                setCities(loadedCities)
            })

            //const response = await fetch("https://cdn109-fakebook.onrender.com/api/posts")
            //const data = await response.json()
            //setPosts(data)
        }   
        getMyCities()
    }, [user])

    async function getCity(uid, id){
        
        const docRef = doc(db, 'users', uid, "cities", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data()
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            throw new Error
          }

        //const response = await fetch(`https://cdn109-fakebook.onrender.com/api/post/${id}`)
        //const data = await response.json()
        //return data

    }


    async function addCity(city){
        const newCity ={
            city
        }

        const docRef = await addDoc(collection(db, "users", user.uid, 'cities'), newCity)

        newCity.id = docRef.id

        setCities([
            newCity,
            ...cities
        ])

        return newCity
    }

    const key = "6fe16c293b97e77b1af943f5cae8a90e"

    async function getWeatherData(city){
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`)
        const data = await result.json()
        return data
    }

    const value ={
        addCity,
        cities,
        getCity,
        getWeatherData
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}    
        </DataContext.Provider>
    )
}