
import { useEffect, useState } from "react"
import { Context } from "./context"
import { useContext } from "react" 
import { Navigate, useNavigate } from "react-router-dom" 
import R4 from '../assets/R (4).png'
const Register = ()=>{

    const{
        setUname,
        setRegEmail,
        setRegPassword,
        register,
        regSuc,
        setRegSuc

    }=useContext(Context)

    const navigate = useNavigate()

    const [pass , setPass] = useState()
    const [cPass , setCPass] = useState()
    const [passMatch , setPassMatch] = useState(true)

    const checkPass = ()=>{
        if(pass === cPass){
            console.log('Password Match')
            setPassMatch(true)
            setRegPassword(pass)
        }
        else{
            console.log('Password Not Match')
            setPassMatch(false)
        }
    }

    useEffect(()=>{
        checkPass()
    },[cPass , pass])  

    useEffect(()=>{
        if(regSuc){
            navigate("/")
        }
        setRegSuc(false)
       
    },[regSuc])


    const [errClose , seErrClose] = useState(true) 

    const errCloseFunc = ()=>{
        const msg = document.getElementById('Regmsg')
        msg.style.display = 'none'   
    }


    return (
        <div className=" bg-regBack flex w-screen  h-screen align-middle items-center justify-center">
                        <div  id='Regmsg' className={` absolute top-5 border-2 border-red-500 p-2 bg-red-100 rounded-xl   hidden`}><p>Something wen wrong... Try again with different Email</p> <button className="ml-3 font-medium text-red-700 " onClick={errCloseFunc}>x</button></div>
                                    <a href='/Loging'><button className="absolute top-5 right-5 bg-red-500 text-white p-1 pl-3 pr-3 rounded-lg hover:bg-transparent hover:border-2 hover:border-red-500">Loging</button></a>
            <button onClick={()=>navigate("/")} className="absolute top-5 right-28 bg-blue-500 hover:bg-transparent hover:border-2 hover:border-blue-500 text-white p-1 pl-3 pr-3 rounded-lg">Home</button>
           

            <div className="flex bg-white rounded-lg border-2 border-green-400 p-3 max-[431px]:w-screen max-[431px]:pr-3  w-[50%]  h-fit">
                <div className=" flex max-[431px]:w-screen w-fit mt-2  mr-4">
                    <img src={R4} alt="" />
                </div>
                <div className="flex   flex-col w-[50%] h-full  pt-3 pr-3">
                    <label for='email' className=" font-semibold mb-2 ">Email</label>
                    <input onChange={(e)=>setRegEmail(e.target.value)} required className="border-2 pl-4 border-blue-200  rounded-lg" type="text"  placeholder="Your Email"></input>
                    <label for='User Name' className=" font-semibold mb-2 mt-3">User Name</label>
                    <input onChange={(e)=>setUname(e.target.value)} required className="border-2 pl-4 border-blue-200  rounded-lg" type="text"  placeholder="Your User Name"></input>
                   <div className="flex flex-row"><label for='password' className=" font-semibold mb-2 mt-3">Password</label>
                    <label  className={`${passMatch ? 'hidden' : ""} ml-5 rounded-sm flex align-middle items-center justify-center text-red-600 mb-2 mt-3`}>Password Miss-Match</label></div> 
                    <input required  onChange={(e)=>setPass(e.target.value)} className="border-2 pl-4 border-blue-200  rounded-lg" type="password"  placeholder="Password with At Least 6 Characters"></input>
                  
                   <div className="flex flex-row"><label for='confirm password' className="font-semibold mb-2 mt-3">Confirm Password</label>
                    <label  className={`${passMatch ? 'hidden' : ""} ml-5 rounded-sm flex align-middle items-center justify-center text-red-600 mb-2 mt-3`}>Password Miss-Match</label></div> 
                    <input required onChange={(e)=>setCPass(e.target.value)} className="border-2 pl-4 border-blue-200  rounded-lg" type="password"  placeholder="Confirm Password"></input>
               
                    <button onClick={register} className="bg-green-500 font-mono mt-4 text-white text-lg p-1 pl-6 pr-6 rounded-lg hover:bg-transparent hover:border-2 hover:border-green-500 hover:text-black">Register</button>

                </div>

            </div>
            
        </div>
    )

}

export default Register