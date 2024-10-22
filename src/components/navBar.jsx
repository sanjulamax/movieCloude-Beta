
import { Context } from './context';
import { useContext } from 'react';
import React from 'react';  
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";  
import log from '../assets/log.png'
import img12 from '../assets/121081.png'
import R from '../assets/R.png'
import dps from '../assets/dps.jpg'
import logo from '../assets/logo .png'




import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
const NavBar=()=>{

    const navigate = useNavigate()  
    const [ dname , setDname] = useState('')


    const {
        setInpMovie,
        inpMovie,
        getMovies,
    
        
        actionMovies ,
        activeButton ,
    
        LogOut,
        logHider,
        setLogHider ,
        genre,
        auth,
        

      
        

    }=useContext(Context)


 
     
 
      const [loading , setLoading] = useState(true)

      useEffect (()=>{
        
        const unSub = onAuthStateChanged(auth,(user)=>{
        if(user){
            setLogHider(true)
            setLoading(false)
            navigate("/")
 
            setDname(user.displayName)
           
          

            
        }
        else{
            setLogHider(false)
            setLoading(false)
            console.log('User is signed out')
         
        }
})




return()=>unSub},[])

    const [colNav , setColNav] = useState(false)
    const [colSearchBar , setColSearch] = useState(false)

    const colapsNav = ()=>{
        setColNav(!colNav)
        setColSearch(false)
    }
    const colSearch = ()=>{
        setColSearch(!colSearchBar)
        setColNav(false)
    }


  
    return (

    <div className='flex flex-col  '>

        <div className=' max-[431px]:h-auto max-[431px]:p-0  max-[431px]:pt-2 items-center flex flex-row  bg-black   border-b-2  border-white p-6  backdrop-blur-lg  max-[431px]:block ' >
            
        <img src={logo} alt='logo' className='hidden  max-[431px]:flex max-[431px]:w-3/6 max-[431px]:h-4/6  max-[431px]:items-center max-[431px]:mt-[-10px] max-[431px]:mb-2 max-[431px]:ml-[23%] w-1/3 h-16 ml-10 rounded-xl' />
       <div className='flex items-center justify-between'> <div className='h-[30px]  hidden max-[431px]:flex bg-white ml-3 mb-2 w-[30px] p-[1px] rounded--md ' onClick={colapsNav}><img className='h-[100%]' src={img12} alt=''></img></div>
        <div className='h-[20px] mr-3  mb-5 hidden max-[431px]:flex bg-transparent w-fit'  onClick={colSearch}><img className='h-[25px]' src='/src/assets/R.png' alt=''></img></div></div>


       {colSearchBar ? <div className='flex flex-row  w-1/2'>

<input className='  max-[431px]:ml-[40px] max-[431px]:h-5/ max-[431px]:w-screen  border-2  h-10 border-blue-500 rounded-lg p-2 w-2/4 mr-6' type="text" placeholder="Enter Movie Name" value={inpMovie} onChange={(e)=>setInpMovie(e.target.value)} />


<button className = 'max-[431px]:text-[10px]  max-[431px]:w-screen  max-[431px]:mk-[10px]   max-[431px]:font-normal  pl-6 pr-6 font-bold bg-green-600 h-10 p-2 text-white rounded-3xl hover:bg-red-600' onClick={getMovies}>Get movies</button> 
</div> : null }


        
     {colNav ?<div className=''> <div className='flex flex-row  w-1/2'>

<input className='  max-[431px]:ml-[40px] max-[431px]:h-5/ max-[431px]:w-screen  border-2  h-10 border-blue-500 rounded-lg p-2 w-2/4 mr-6' type="text" placeholder="Enter Movie Name" value={inpMovie} onChange={(e)=>setInpMovie(e.target.value)} />


<button className = 'max-[431px]:text-[10px]  max-[431px]:w-screen  max-[431px]:mk-[10px]   max-[431px]:font-normal  pl-6 pr-6 font-bold bg-green-600 h-10 p-2 text-white rounded-3xl hover:bg-red-600' onClick={getMovies}>Get movies</button> 
</div>
<img src={logo} alt='logo' className='max-[431px]:w-2/6  max-[431px]:hidden max-[431px]:h-5/6max-[431px]:items-end w-1/3 h-16 ml-10 rounded-xl' />

<div className='sm:max-lg:hidden max-[431px]:flex flex flex-row w-1/2 align-middle justify-end  max-[431px]:ml-[30%] max-[431px]:mt-2'>
{loading ?  null : <div><a href='/Cart'><button className={`${logHider? '' : 'hidden'} border-2 border-red-500 text-white m-3 p-1 rounded-xl bg-red-500  hover:bg-transparent hover:border-2 hover:border-red-500 `}>Cart</button></a>

<a href='/Register'><button className={`${logHider? 'hidden' : ''} text-white m-3 p-1 rounded-xl bg-blue-600 hover:bg-transparent hover:border-2 hover:border-blue-600`}>Register</button></a>
<a href='/Loging'><button  className={`${logHider? 'hidden' : ''} text-white m-3 p-1 rounded-xl bg-green-600 hover:bg-transparent hover:border-2 hover:border-green-600`}>Loging</button> </a>
<button  className={`${logHider? '' : 'hidden'} text-white m-3 p-1 rounded-xl bg-green-600 hover:bg-transparent hover:border-1 hover:border-green-600`} onClick={LogOut}>LogOut</button>
<p className={` ${logHider? '' : 'hidden'} text-white flex  border-2 border-emerald-50 w-[150px] overflow-hidden h-8 justify-center `}>🧑‍💻{dname} </p> </div>}



<img src={dps} alt='mail' className={`${logHider? '' : 'hidden'} w-10 h-10 ml-6 rounded-full`} />
</div></div>: null }

                <div className='flex flex-row max-[431px]:hidden   w-1/2'>

                        <input className='  max-[431px]:ml-[-10px] max-[431px]:h-5/ max-[431px]:w-screen  border-2  h-10 border-blue-500 rounded-lg p-2 w-2/4 mr-6' type="text" placeholder="Enter Movie Name" value={inpMovie} onChange={(e)=>setInpMovie(e.target.value)} />


                        <button className = 'max-[431px]:text-[10px]  max-[431px]:w-screen  max-[431px]:ml-[-10px]   max-[431px]:font-normal  pl-6 pr-6 font-bold bg-green-600 h-10 p-2 text-white rounded-3xl hover:bg-red-600' onClick={getMovies}>Get movies</button> 
                </div>
                <img src={logo} alt='logo' className='max-[431px]:w-2/6  max-[431px]:hidden max-[431px]:h-5/6max-[431px]:items-end w-1/3 h-16 ml-10 rounded-xl' />

                <div className='max-[431px]:hidden sm:max-lg:hidden flex flex-row w-1/2 align-middle justify-end  max-[431px]:ml-[40%] max-[431px]:mt-2'>
                {loading ?  null : <div><a href='/Cart'> <button className={`  ${logHider? '' : 'hidden'} border-2 border-red-500 text-white m-3 p-1 rounded-xl bg-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 `}>Cart</button></a>

                       <a href='/Register'><button className={`  ${logHider? 'hidden' : ''} text-white m-3 p-1 rounded-xl bg-blue-600 hover:bg-transparent hover:border-2 hover:border-blue-600`}>Register</button></a>
                       <a href='/Loging'><button className={`  ${logHider? 'hidden' : ''} text-white m-3 p-1 rounded-xl bg-green-600 hover:bg-transparent hover:border-2 hover:border-green-600`}>Loging</button></a>
                      <button className={`  ${logHider? '' : 'hidden'} text-white m-3 p-1 rounded-xl bg-green-600 hover:bg-transparent hover:border-2 hover:border-green-600`} onClick={LogOut}>LogOut</button>
                      <p className={` ${logHider? '' : 'hidden'} text-white flex  border-2 border-emerald-50 w-[150px] overflow-hidden h-8 justify-center `}>🧑‍💻{dname} </p></div>}



                       <img src={dps} alt='mail' className={`${logHider? '' : 'hidden'} w-10 rounded-full h-10 ml-6`} /> 
                </div>
        </div>

        <div className='bg-black pb-2 pt-2 rounded-br-xl rounded-bl-xl max-[431px]:overflow-auto max-[431px]:h-[60px]'>
            <div className='flex justify-around text-white '>
                <div className={` ${activeButton ==1?"bg-red-500" : "bg-black"} max-[431px]:h-[50%] hover:border-2 hover:border-red-500 border-2 border-transparent hover:bg-red-500 p-1 rounded-lg`}>
                    <button onClick={()=>genre(28,1)}>Action </button>
                </div>
                <div  className={` ${activeButton ==2?"bg-red-500" : "bg-black"} max-[431px]:h-[50%] hover:border-2 hover:border-red-500 border-2 border-transparent hover:bg-red-500 p-1 rounded-lg`}>
                    <button onClick={()=>genre(12,  2)}>Adventure  </button>
                </div>
                <div  className={` ${activeButton ==3?"bg-red-500" : "bg-black"} max-[431px]:h-[50%] hover:border-2 hover:border-red-500 border-2 border-transparent hover:bg-red-500 p-1 rounded-lg`}>
                    <button onClick={()=>genre(16 , 3)}>Animation </button>
                </div>
                <div  className={` ${activeButton ==4?"bg-red-500" : "bg-black"} max-[431px]:h-[50%] hover:border-2 hover:border-red-500 border-2 border-transparent hover:bg-red-500 p-1 rounded-lg`}>
                    <button onClick={()=>genre(10751 , 4)}>Family </button>
                </div>
                <div  className={` ${activeButton ==5?"bg-red-500" : "bg-black"} max-[431px]:h-[50%] hover:border-2 hover:border-red-500 border-2 border-transparent hover:bg-red-500 p-1 rounded-lg`}>
                    <button onClick={()=>genre(9648 , 5)}>Mystery  </button>
                </div>
                <div  className={` ${activeButton ==6?"bg-red-500" : "bg-black"} max-[431px]:h-[50%] hover:border-2 hover:border-red-500 border-2 border-transparent hover:bg-red-500 p-1 rounded-lg`}>
                    <button onClick={()=>genre(878 , 6)}>Science Fiction </button>
                </div>
                <div  className={` ${activeButton ==7?"bg-red-500" : "bg-black"} max-[431px]:h-[50%] hover:border-2 hover:border-red-500 border-2 border-transparent hover:bg-red-500 p-1 rounded-lg`}>
                    <button onClick={()=>genre(10752 , 7)}>War  </button>
                </div>
                <div  className={` ${activeButton ==8?"bg-red-500" : "bg-black"} max-[431px]:h-[50%] hover:border-2 hover:border-red-500 border-2 border-transparent hover:bg-red-500 p-1 rounded-lg`}>
                    <button onClick={()=>genre(35 , 8)}>Comedy  </button>
                </div>
                <div  className={` ${activeButton ==9?"bg-red-500" : "bg-black"} max-[431px]:h-[50%] hover:border-2 hover:border-red-500 border-2 border-transparent hover:bg-red-500 p-1 rounded-lg`}>
                    <button onClick={()=>genre(80 , 9)}>Crime  </button>
                </div>
                <div  className={` ${activeButton == 10?"bg-red-500" : "bg-black"} max-[431px]:h-[50%] hover:border-2 hover:border-red-500 border-2 border-transparent hover:bg-red-500 p-1 rounded-lg`}>
                    <button onClick={()=>genre(10749 , 10)}>Romance  </button>
                </div>
            </div>
        </div>
       

</div>
    )
}

export default NavBar;