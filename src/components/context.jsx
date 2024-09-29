import { createContext, useEffect } from "react";
import { useState } from "react";   

export const Context = new createContext();

const ContextProvider = (props)=>{

    const [inpMovie , setInpMovie] = useState('')
    const [mvList , setMvList] = useState([])
    const [startupMvList , setStartupMvList] = useState([]) 
    const [searchHider , setSearchHider] = useState(true)
    const [noMovie , setNoMovie] = useState(false)
    const [engPlayer , setEngPlayer] = useState(false)

   

    const autoGet = async()=>{
        const apis = import.meta.env.VITE_API_KEY


        const list  = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apis}`)
        const listRes = await list.json()
        console.log(listRes.results)
        setStartupMvList(listRes.results)

       

    }


    useEffect(()=>{
        autoGet()
    } , [])  


 

        const getMovies = async () => {
            const apis = import.meta.env.VITE_API_KEY
            console.log(apis)

            const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${inpMovie}&api_key=${apis}`)
            const orgRes = await res.json()
            setMvList(orgRes.results)
            console.log(mvList)
            setSearchHider(false)
            setInpMovie('') 
            
            if(orgRes.results.length === 0){
                setNoMovie(true)
            }
            else{
                setNoMovie(false)
            }

            
           
            

          }

 


    const contextValues = {
        setInpMovie,
        getMovies,
        inpMovie,
        mvList,
        startupMvList,
        searchHider,
        noMovie,
        engPlayer ,
        setEngPlayer

    }

    return(
        <Context.Provider value={contextValues}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider;