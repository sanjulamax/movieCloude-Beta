
import React from 'react';
import { useContext } from 'react';
import { Context } from './context';
import Home from './home';


const Landing = () => { 

    const {
        startupMvList,
        searchHider ,
        engPlayer,
        setEngPlayer 

    }=useContext(Context)

    
    return (
        <div className='flex-1  bg-landBack bg-fixed bg-cover '>
            
            <Home />

        
        <div className=' grid grid-cols-6 max-[430px]:grid max-[430px]:grid-cols-3  ' >
            {searchHider ? startupMvList.map((item)=>{

if(item.original_language === 'en'){
    setEngPlayer(true)
}
else{
    setEngPlayer(false)
}

                return(
                    <div className='max-[430px]:h-[550px]  h-[600px] pb-6 hover:border-2 hover:border-amber-300  items-center  border-2 border-white p-2 m-2  text-white bg-transparent backdrop-blur-xl rounded-md'  key={item.id}>
                        <img className='w-full rounded-md max-[430px]:h-1/3 h-3/6' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                        <h1 className=' w-full h-10 mt-2 overflow-hidden font-semibold text-xl text-center '>{item.title}</h1>
                        <h2 className='text-center'>{item.release_date.slice(0,4)}</h2>
                        <p className=' mb-8 overflow-hidden max-[430px]:h-2/6 h-1/5 mt-2 rounded-md font-light text-sm text-start border-2 border-emerald-600 p-2'>{item.overview}</p>
                        <a className=' absolute hover:bg-red-500  border-none  p-2  rounded-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 max-[430px]:pr-4 max-[430px]:pl-4 pl-6 pr-6' href={`/player/${item.id}`}>Watch</a>
                        {engPlayer?  <a className='absolute hover:bg-red-500  border-none  font-extralight  text-[15px] w-4/6 p-2  rounded-xl left-1/2 top-[95%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 max-[430px]:pr-2 max-[430px]:pl-2 max-[430px]:text-[10px] max-[430px]:w-5/6 pl-4 pr-4'  href={`/EngPlayerPage/${item.id}`}>Watch Add Free</a>:null}

                    </div>
                )
            }) : null}
        </div>

        <div className='bg-white bg-opacity-10 text-center font-mono text-green-600'>🧑‍💻 DEVELOPED BY SAVINDU ABEYWICKRAMA 🧑‍💻</div>
        </div>
        
    );
}
export default Landing;