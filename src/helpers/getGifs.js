
export const getGifs = async ( fact ) => {
    ///Lo necesario para hacer el llamado
    const firstWords = fact.split(' ', 3).join(' ')
    const GIPHY_API_KEY = "88q8rTHEYw7W9FdQShL9A2VquBYpheQL"
    ///

   
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${firstWords}`)
    const { data } = await resp.json()
    const { url } = await data[0].images.original
    return url
}
