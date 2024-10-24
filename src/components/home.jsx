
import React from 'react';
import { Context } from './context';
import { useContext } from 'react';
import Player from './player';
import NavBar from './navBar';
import { useNavigate } from 'react-router-dom';
import loading from '../assets/loading.gif'
import noRes from '../assets/search_no_result.png'



const Home = ()=>{

    const {
        setInpMovie,
        inpMovie,
        getMovies,
    
        mvList , 
        noMovie,
        engPlayer,
        setEngPlayer,
        setActiveButton,
        setMvList ,
        setNoMovie,
        saveId,
        setRecMovie ,
        LoadingGens

    }=useContext(Context)

    const navigate = useNavigate()


    return ( 

      /* <div >
       
        <div className='  items-center flex flex-row bg-opacity-10 bg-white rounded-lg border-l-2 border-b-2 border-r-2 border-rose-500 p-6 mb-2 backdrop-blur-lg' >
            <div className='flex flex-row  w-1/2'>

            <input className=' max-[431px]:h-5/ max-[431px]:w-5/6  border-2  h-10 border-blue-500 rounded-lg p-2 w-2/4 mr-6' type="text" placeholder="Enter Movie Name" value={inpMovie} onChange={(e)=>setInpMovie(e.target.value)} />

            
            <button className = 'max-[431px]:text-[10px] max-[431px]:pl-2 max-[431px]:pr-2 max-[431px]:font-normal  pl-6 pr-6 font-bold bg-green-600 h-10 p-2 text-white rounded-3xl hover:bg-red-600' onClick={getMovies}>Get Movies</button> 
            </div>
            <img src='/src/assets/logo .png' alt='logo' className='max-[431px]:w-2/6 max-[431px]:h-5/6 max-[431px]:flex max-[431px]:items-end w-1/3 h-16 ml-10 rounded-xl' />
            <div className='sm:max-lg:hidden max-[431px]:hidden flex flex-row w-1/2 align-middle justify-end '>
            <a href='https://www.linkedin.com/in/savindu-abeywickrama-58a828311?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT3J7IYuHRp%2BFyWWB8EO8%2FA%3D%3D'><img src='/src/assets/li23.png' alt='linkedin' className='w-11 h-11 ml-6' /></a> 

           <a href='http://www.youtube.com/@slnoobhacker4903'><img src='/src/assets/yts.png' alt='yt' className='w-16 h-12 ml-6' /></a> 
           <a href='mailto:sanjulasavindu400@gmail.com'><img src='/src/assets/mail.png' alt='mail' className='w-10 h-10 ml-6' /></a> 
            </div>
            </div>*/
            <div className='bg-landBack'>
            <NavBar />  
           {LoadingGens ?  <div className='flex flex-row items-center justify-center align-middle w-screen bg-black bg-opacity-10 text-white h-screen text-5xl'><img className='rounded-full' src={loading} width="400"></img></div> :
            
   <div className='grid grid-cols-6 max-[431px]:grid max-[431px]:grid-cols-3 ' >
              {noMovie ?<div className=' border-2 border-white w-screen h-screen flex items-start justify-center '> <div className='border-2 mt-20 border-white backdrop-blur-lg bg-white bg-opacity-10 rounded-lg '><img src={noRes} className='h-96  ' alt="no result found" /></div></div>:mvList.map((item)=>{
                       
     
                  return(
                 <a href={`/FilmPage/${item.title}`} ><div className=' hover:bg-white overflow-hidden hover:text-black max-[431px]:h-[180px]  h-[280px] pb-10 hover:border-2 hover:border-amber-300  items-center  border-2 border-white p-2 m-2  text-white bg-transparent backdrop-blur-xl rounded-md'  >
                    <img className='w-full rounded-md max-[431px]:h-3/3 h-5/6' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                    <h1 className=' w-full h-fit mt-2 overflow-hidden font-semibold text-xs text-center '>{item.title}</h1>
                    <h2 className='text-center'>{item.release_date.slice(0,4)}</h2>
                </div></a>
                  )
              })}
      
            
        </div>}
        </div>  
       
     
    )   
}

export default Home;    

/* <a className='absolute hover:bg-red-500  border-none  p-2  rounded-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 max-[431px]:pr-4 max-[431px]:pl-4 pl-6 pr-6 text-white'  href={`/player/${item.id}`}>Watch</a>
                          {engPlayer?  <a className='absolute hover:bg-red-500  border-none  p-2  rounded-xl left-1/2 top-[95%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 max-[431px]:pr-4 max-[431px]:pl-4 pl-6 pr-6'  href={`/EngPlayerPage/${item.id}`}>Watch English</a>:null} */