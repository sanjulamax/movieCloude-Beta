import React, { useEffect  , useState} from 'react'   
import Landing from './landing';
import { useParams } from 'react-router-dom';
import Recom from './recomended';
import { useContext } from 'react';
import { Context } from './context';
import Cart from './cart';
import loading from '../assets/loading.gif'

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut , createUserWithEmailAndPassword, updateProfile } from "firebase/auth"




const FilmPage = () => {

    const {
        saveMovie , 
        userId ,
        saved ,
        cutBtn
    } = useContext(Context)

    const {filmName} = useParams()
    


   

    useEffect(()=>{
        const showMovie = async()=>{
        const apis = import.meta.env.VITE_API_KEY
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${filmName}&api_key=${apis}`)
        const data = await res.json()
        setData(data)
     
         }

        showMovie()

    },[])
    const [data , setData] = useState([])

    if(data.results === undefined){
        return <div className='flex flex-row items-center justify-center align-middle w-screen bg-black bg-opacity-10 text-white h-screen text-5xl'><img className='rounded-full' src={loading} width="400"></img></div>
    }
    if(data.results[0].backdrop_path === null){
        data.results[0].backdrop_path = data.results[0].poster_path
    }



    return (
        <div className="flex w-screen h-full min-h-screen " style={{
            
            backgroundImage : `url("https://image.tmdb.org/t/p/w1280/${data.results[0].backdrop_path}")` ,
            backgroundSize : `cover` ,
            backgroundPosition: 'center',       
            backgroundRepeat: 'no-repeat',}}>
                <button className='absolute z-10 top-5 left-5 bg-black bg-opacity-50 text-white p-2 rounded-lg' onClick={()=>window.history.back()}>Back</button>
          
                <button className='absolute z-10 top-5 left-20 bg-black bg-opacity-50 text-white p-2 rounded-lg' onClick={()=>window.location.href = '/cart'}>Cart</button>
                <button className='absolute z-10 top-5 left-36 bg-black bg-opacity-50 text-white p-2 rounded-lg' onClick={()=>window.location.href = '/'}>Home</button>
            <div id='msg' className=' hidden absolute z-10 left-[15%] border-2 border-green-400 bg-green-500 top-[5%] pl-5 pr-5 text-white'> Save Successfully <button className='ml-3 text-xs' onClick={()=>cutBtn('msg')}>❌</button> </div>
               
                
           <div className='max-[431px]:flex max-[431px]:flex-col flex '>
            <div className=  ' max-[431px]:w-screen max-[431px]:h-fit max-[431px]:min-h-fit   text-white flex flex-col   w-[40%] h-full min-h-screen backdrop-blur-sm pl-10 pt-20 pr-5 bg-black bg-opacity-15'>

                <div className='flex w-[30%] '> <img className='mr-3 rounded-md' src={`https://image.tmdb.org/t/p/w1280/${data.results[0].poster_path}`}/>
                    <p className='text-6xl'> {data.results[0].title}</p> </div>
              <div><p className='text-xl mt-5'> 📅 {data.results[0].release_date} </p>
                <p className='text-xl mt-3 mr-10'> ⭐ {data.results[0].vote_average}</p></div>
                <div className='flex  mt-5'><a href={`/player/${data.results[0].id}`} className=' border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-green-500 text-sm  w-[100%] mr-5 pt-2 pb-2 bg-green-500 rounded-lg mt-5 text-white flex align-middle justify-center items-center'>Player One </a>
                <a href={`/EngPlayerPage/${data.results[0].id}`} className=' border-2 border-transparent text-sm hover:bg-transparent hover:border-2 hover:border-red-500   mr-5 w-[100%] pt-2 pb-2 bg-red-500 rounded-lg mt-5 text-white flex align-middle justify-center items-center'>Player Two </a>
                <button onClick={()=>saveMovie(data.results[0].id)} className=' border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-blue-500 text-sm    w-[100%] ml-0 pt-2 pb-2 bg-blue-500 rounded-lg mt-5 text-white'>Save </button></div>
                
               
               
                <p className='flex items-start justify-center align-middle mt-10 mb-5'>{data.results[0].overview}</p>
                
            </div>
            



            
<Recom movieId={data.results[0].genre_ids}/></div>
           

           
        </div>
        
    )
}

export default FilmPage;


