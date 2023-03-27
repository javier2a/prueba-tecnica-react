import { useEffect, useState } from "react"
import { getFacts } from "../helpers/getFacts"
import { getGifs } from "../helpers/getGifs"



export const useFetchGifs = () => {

    const [ fact, setFact ] = useState()
    const [ imageUrl, setImageUrl] = useState('')

///tomar el fact de la primera API
    const getFact = async () => {
        const newFact = await getFacts()
        setFact(newFact)
    }

    useEffect(() => {
      getFact()
    }, [])
///

///Revisar si existe fact antes de nada, luego pasarlo como parametro donde la funcion va a sacar las 3s primeras palabras de la oracion y devolver el url de gif realcionados con esas 3s palabras
    const getGif = async () =>{
        if(!fact) return
        const newGifUrl = await getGifs(fact)
        setImageUrl(newGifUrl)
    }

    useEffect(() => {
     getGif()
    }, [fact])
///
    
    
  return{
    fact,
    imageUrl,
  }
}
