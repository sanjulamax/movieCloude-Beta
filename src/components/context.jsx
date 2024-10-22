import React from "react";
import { createContext, useEffect } from "react";
import { useState } from "react"; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";  
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut , createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDoc, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import {doc , updateDoc , setDoc , arrayUnion} from 'firebase/firestore'




export const Context = new createContext();

const ContextProvider = (props)=>{

    const [inpMovie , setInpMovie] = useState('')
    const [mvList , setMvList] = useState([])
    const [startupMvList , setStartupMvList] = useState([]) 
    const [searchHider , setSearchHider] = useState(true)
    const [noMovie , setNoMovie] = useState(false)
    const [engPlayer , setEngPlayer] = useState(false)
    const [movieGenre , setMovieGenre] = useState('')   
    let allMovies = []
    const [corsel , setCorsel] = useState(false)

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [logHider , setLogHider] = useState(false)
    const [uname , setUname] = useState('')
    const [regEmail , setRegEmail] = useState('')
    const [regPassword , setRegPassword] = useState('')
    const [regSuc , setRegSuc] = useState(false)
    const[logUser , setLogUser] = useState('')
    const [activeButton , setbtNos] = useState('')


    const [recMovie , setRecMovie] = useState()
    const [LoadingGens , setLoadingGens] = useState(false) 
    const [savedMoviesArray , setSavedMovies] = useState([])
    const [userId , setUserId] = useState()
    const [oneMovie , setOneneMovie] = useState() 
    const [saved , setSaved] = useState(false)
    const [errClose , seErrClose] = useState(false) 
  


   





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const fbKey = import.meta.env.VITE_API_FIRE_KEY
const firebaseConfig = {
    
  apiKey: "fbKey",
  authDomain: "movieclaud.firebaseapp.com",
  projectId: "movieclaud",
  storageBucket: "movieclaud.appspot.com",
  messagingSenderId: "730310858388",
  appId: "1:730310858388:web:775892c545519305a00681",
  measurementId: "G-86PS8DZLPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const authentication = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            
            setUserId(user.uid) 
        } else {
            console.log("No user is signed in.");
        }
    });
};

const cutBtn = (id)=>{
    const msg = document.getElementById(id)
    msg.style.display = 'none'
}



const saveMovie = async (movieId)=>{
    const user = auth.currentUser
   

    const userRef = doc(db,'users',user.uid)
    await updateDoc(userRef , {
        savedMovie : arrayUnion(movieId)
    })
    const msg = document.getElementById('msg')
    msg.style.display = 'block'

}
let savedList  = []

const getSavedMovies = async () => {
    onAuthStateChanged(auth, async (user) => {
        
        if (user) {
            setUserId(user.uid);
            const userRef = doc(db, 'users', user.uid);
            const data = await getDoc(userRef);
            
            if (data.exists()) {
               
                
                savedList = data.data().savedMovie || [];
                setSavedMovies(savedList);
                
                
            } else {
                
                    alert('No Any Saved Movies!'); 
                 
            }
        } else {
            console.log("No user is signed in.");
        }
    });
   
};



const signIn  = async ()=>{
    if(email === '' || password === '') return alert('Please Enter Email and Password')
    try {const user = await signInWithEmailAndPassword(auth, email , password)
   
    const userName = await user.displayName
      }
    catch(err){
        
        const msg = document.getElementById('Logmsg')
        msg.style.display = 'flex'
    }
}


const LogOut = async ()=>{
    await signOut(auth)
    console.log('logouted')
}

const register = async ()=>{
    try  { const user = await createUserWithEmailAndPassword(auth , regEmail , regPassword)
    console.log('User Registered')
    

    const userAccount = await setDoc(doc(db , 'users' , user.user.uid) , {
        name: uname,
        email: regEmail,
        savedMovie : []
    })
 
    const update = await updateProfile(auth.currentUser,{
        displayName: uname 
    })
    setRegSuc(true) }
    catch(err){
        console.log(err)
        const msg = document.getElementById('Regmsg')
        msg.style.display = 'flex'
    }

}







   let page=1 ;

    const autoGet = async()=>{
        const apis = import.meta.env.VITE_API_KEY
        
        const loading = document.getElementById('loading')
        if(loading){
            loading.style.display = 'flex'
        }
        


        for(page ; page<=12 ; page++ ) {
        const today = new Date().toISOString().slice(0,10)
        const list = await fetch( `https://api.themoviedb.org/3/discover/movie?language=en-US&api_key=${apis}&sort_by=release_date.desc,popularity.desc&release_date.lte=${today}&page=${page}`);
   
        const listRes = await list.json()
            
        allMovies = [...allMovies , ...listRes.results]
       
        
     
    }
    
    setStartupMvList(allMovies)
  
    setCorsel(true) 
    if(loading){
    loading.style.display = 'none'}
    
}

    const saveId = (id )=>{
        setRecMovie(id)
    
    }


    useEffect(()=>{
        const aut=async ()=>{
            autoGet()
        }

        aut()
        
    } , [])  

    const getOneMovie = async (mvId) => {
        const apis = import.meta.env.VITE_API_KEY;
        const res = await fetch(`https://api.themoviedb.org/3/movie/${mvId}?api_key=${apis}`);
        
        if (res.ok) {
            const resData = await res.json();
            setOneneMovie(resData);
       
        } else {
            console.error(`Error: ${res.status} - ${res.statusText}`);
        }
    };


 

        const getMovies = async () => {
            const apis = import.meta.env.VITE_API_KEY
        

            const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${inpMovie}&api_key=${apis}`)
            const orgRes = await res.json()
            setMvList(orgRes.results)
       
            setSearchHider(false)
            setInpMovie('') 
            
            if(orgRes.results.length === 0){
                setNoMovie(true)
            }
            else{
                setNoMovie(false)
            }
        }

        let allMoviesgn =[]

        const genre = async(genreId , btnNo)=>{
            const apis = import.meta.env.VITE_API_KEY
            setbtNos(btnNo)
           
            for(page ; page<=10 ; page++ ) {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apis}&with_genres=${genreId}&page=${page}`);
            const orgRes = await response.json() 
            
            allMoviesgn = [...allMoviesgn , ...orgRes.results]
            setLoadingGens(true)

            }
            setMvList(allMoviesgn)
       
            setSearchHider(false)
            setInpMovie('') 
            setLoadingGens(false)
            
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
        setEngPlayer ,
      
        setMovieGenre  , 
        movieGenre , 
        corsel ,
        activeButton , 
        signIn,
        setEmail,
        setPassword , 
        LogOut ,
        setLogHider,
        logHider,
        setUname,
        setRegEmail,
        setRegPassword,
        register , 
        regSuc,
        setRegSuc ,
  
        setMvList,
        setSearchHider,
        setNoMovie,
        genre,
        setRecMovie,
        recMovie,
        saveId ,
        LoadingGens , 
        saveMovie ,
        getSavedMovies , 
        savedMoviesArray ,
        userId ,
        authentication ,
        oneMovie,
        getOneMovie ,
        setOneneMovie ,
        saved ,
        cutBtn ,
        errClose , seErrClose ,
     

       

    }

    return(
        <Context.Provider value={contextValues}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider;