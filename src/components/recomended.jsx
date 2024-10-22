
import { useContext, useEffect, useState } from "react";
import { Context } from "./context";

const Recom = ({movieId}) => {  

    const [mvData , setMvData] = useState([])

    const {
        recMovie , 
        setRecMovie
    } = useContext(Context)
    let allList = []
    let page = 1

    const similer = async()=>{
        const apiKey = import.meta.env.VITE_API_KEY
    
       
      
        for (page ; page<=10 ; page++){

       
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${movieId}&language=en-US&page=${page}`);
        const data = await response.json();
        
        allList = [...allList , ...data.results.sort((a,b)=>b.vote_average - a.vote_average)]
        setMvData(allList)
        }
    
        
        
        
     
 
    }

    useEffect(()=>{
        similer()
    },[])

    return (
        <div className='grid grid-cols-4 w-[60%] max-[431px]:w-[100%]  max-[431px]:grid max-[431px]:grid-cols-3 overflow-auto h-screen ' >
        {mvData.map((item)=>{
                   

            return(
           <a href={`/FilmPage/${item.title}`} ><div className=' hover:bg-white overflow-hidden hover:text-black max-[431px]:h-[180px]  h-[280px] pb-10 hover:border-2 hover:border-amber-300  items-center  border-2 border-white p-2 m-2  text-white bg-transparent backdrop-blur-xl rounded-md'  >
              <img className='w-full rounded-md max-[431px]:h-3/3 h-5/6' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
              <h1 className=' w-full h-fit mt-2 overflow-hidden font-semibold text-xs text-center '>{item.title}</h1>
              <h2 className='text-center'>{item.release_date.slice(0,4)}</h2>
          </div></a>
            )
        })}

      
  </div>
    )
}

export default Recom ;