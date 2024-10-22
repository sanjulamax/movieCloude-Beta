
import { Context } from './context';
import { useContext } from 'react';


import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";  
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc } from 'firebase/firestore';
import log from '../assets/log.png'


    

const Loging = ()=>{

    const  {
        signIn,
        setEmail,
        setPassword,
        setLogHider ,
        auth
    } = useContext(Context)

      const navigate = useNavigate()

      onAuthStateChanged(auth,(user)=>{
        if(user){
            setLogHider(true)
            navigate("/")
          

            
        }
        else{
            setLogHider(false)
            console.log('User is signed out')
        }
})










    const [errClose , seErrClose] = useState(true) 

    const errCloseFunc = ()=>{
        const msg = document.getElementById('Logmsg')
        msg.style.display = 'none'   
    }


    return(
        <>
        
        <div className="flex w-screen  bg-logBack bg-cover h-screen align-middle items-center justify-center">
            <a href='/Register'><button className="absolute top-5 right-5 bg-red-500 text-white p-1 pl-3 pr-3 rounded-lg hover:bg-transparent hover:border-2 hover:border-red-500">Register</button></a>
            <button onClick={()=>navigate("/")} className="absolute top-5 right-28 bg-blue-500 hover:bg-transparent hover:border-2 hover:border-blue-500 text-white p-1 pl-3 pr-3 rounded-lg">Home</button>
            <div  id='Logmsg' className={` absolute top-5 border-2 border-red-500 p-2 bg-red-100 rounded-xl   hidden`}><p>Email Or Password Is Incorrect</p> <button className="ml-3 font-medium text-red-700 " onClick={errCloseFunc}>x</button></div>

            <div className=" container w-fit border-2 border-green-500 bg-white flex p-5 rounded-2xl h-fit">
              
                <div className="w-[50%] pr-6  mr-1 border-r-2 border-black">
                    <img src={log} alt="logo" className="h-[100%] w-fit"/>
                </div>
                <div className=" h-fit w-[50%] pl-3  ">
                    <h2 className="flex w-[100%] font-semibold text-2xl  align-middle justify-center items-center">Loging</h2>
                    <div className="w-[100%]  flex flex-col  mt-5 p-5">
                            <label className="mb-2">Email</label>
                            <input onChange={(e)=>setEmail(e.target.value)} className="p-1 pl-3 border-2 border-blue-200 mb-5 rounded-lg" type="text"  placeholder="Your Email"></input>
                            <label className="mb-2">Password</label>
                            <input  onChange={(e)=>setPassword(e.target.value)}  className="p-1 pl-3 rounded-lg border-2 border-blue-200" type="password" placeholder="Your Password"></input>
                    </div>
                    <div className="flex w-[100%]  mt-4 justify-center items-center align-middle">
                        <button onClick={signIn} className="bg-green-500 font-mono text-white text-lg p-1 pl-6 pr-6 rounded-lg hover:bg-transparent hover:border-2 hover:border-green-500 hover:text-black">Loging</button>   
                    </div>
                </div>
            </div>

        </div>
        </>
    )


}

export default Loging;