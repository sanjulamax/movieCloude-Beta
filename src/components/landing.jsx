
import React from 'react';
import { useContext } from 'react';
import { Context } from './context';
import Home from './home';
import loading from '../assets/loading.gif';

import Footer from './footer';



const Landing = () => { 

 

      

    const {
        startupMvList,
        searchHider ,
        engPlayer,
        setEngPlayer ,
        setLogHider,
        logHider ,
        LoadingGens

    }=useContext(Context)

    
    return (
        <div className='flex-1  bg-landBack bg-fixed bg-cover '>
            
            <Home />

        <div id='loading' className='hidden flex-row items-center justify-center align-middle w-screen bg-black bg-opacity-10 text-white h-screen text-5xl'><img className='rounded-full' src={loading} width="400"></img></div> :
        <div className=' grid grid-cols-6 max-[431px]:grid max-[431px]:grid-cols-3  ' >
            {searchHider ? startupMvList.map((item)=>{

if(item.original_language === 'en'){
    setEngPlayer(true)
}
else{
    setEngPlayer(false)
}

                return(
                    
                    <a href={`/FilmPage/${item.title}`} ><div className=' hover:bg-white overflow-hidden hover:text-black max-[431px]:h-[180px]  h-[280px] pb-10 hover:border-2 hover:border-amber-300  items-center  border-2 border-white p-2 m-2  text-white bg-transparent backdrop-blur-xl rounded-md'  >
                        <img className='w-full rounded-md max-[431px]:h-3/3 h-5/6' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                        <h1 className=' w-full h-fit mt-2 overflow-hidden font-semibold text-xs text-center '>{item.title}</h1>
                        <h2 className='text-center'>{item.release_date.slice(0,4)}</h2>
                    </div></a>
                )
            }) : null}
        </div> 

        <Footer/>
        </div>
        
    );
}
export default Landing;


                     
                     
                     
                     
                     
