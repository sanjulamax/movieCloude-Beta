import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Player = () => {

    const {id} = useParams() ;
    const [fsBlock , setFsBlock] = useState(false)
    const [frameHeight , setFrameHeight] = useState('725vh')
    

    const fscreen =()=>{

        const screen = document.getElementById('fsc');
        screen.requestFullscreen();
        setFsBlock(true)
        setFrameHeight('825vh')


    }

    const fscreenExit =()=>{
        
        document.exitFullscreen();
        setFsBlock(false)
        setFrameHeight('725vh')

    }

    useEffect(()=>{
        const fsExits = ()=>{
            if(!document.fullscreenElement){
                setFsBlock(false)
                setFrameHeight('725vh')
            }
            else{
                setFsBlock(true)
                setFrameHeight('825vh')
            }
        }

        document.addEventListener('fullscreenchange',fsExits)
    } , [])
       


    return (
        <div id="fsc">

            
            
            
            <iframe className="w-full md:max-lg:h-[400px]  " height={frameHeight} allowFullScreen="true" src={`https://www.NontonGo.win/embed/movie/${id}`}  ></iframe>
           

           
            
        </div>
        
    );
}   

export default Player;

