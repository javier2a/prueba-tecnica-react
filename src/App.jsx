import { useEffect, useState } from "react"
import { getFacts } from "./helpers/getFacts"
import { useFetchGifs } from "./hooks/useFetchGifs"




export const App = () => {

    const { fact, imageUrl } = useFetchGifs()

  return (
        <>
            <h1 style={{ textAlign:'center'}}>App de Gatitos</h1>
            <div style={{ display:'flex', alignItems: 'center', gap:20}}>
                {imageUrl && <img src={ imageUrl} alt='Una foto de gato q acompanne el titulo anterior' style={{ maxWidth: 480}}/>}
                {fact && <p style={{ objectFit:'fill'}}>{ fact }</p>}
                {/* <button> Otro GIFF</button> */}
            </div>
        </>
            
        
  )
}
