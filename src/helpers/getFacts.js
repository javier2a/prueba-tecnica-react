

export const getFacts = async () => {
    ///Necesario para hacer el llamado
    const url = 'https://catfact.ninja/fact'
    ///
    
    const resp = await fetch(url)
    const  {fact} = await resp.json()
    return fact
}
