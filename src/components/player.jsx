import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Notification from "./addNotify";

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
               <Notification message='  තත්පර කිහිපයක් රැදී සිටින්න . PopUp Ads පැමිණ වෙනත් වෙබ් පිටු කරා ගියහොත් ඒවා Close කර නැවත , මෙම වෙබ් පිටුවටම පැමිණෙන්න. වෙනත් වෙබ් පිටු වලින් මෙම චිත්‍රපටය නැරබීමට නොහැක. මෙම  Player එකෙහි කිසිස්දු server එකකින්වත් නැරබීමට නොහැකි නම්  ප්ලයෙර් 02 උත්සහ කර බලන්න' duration={5000}/>

            
            
            
            <iframe className="w-full md:max-lg:h-[400px]  " height={frameHeight} allowFullScreen="true" src={`https://www.NontonGo.win/embed/movie/${id}`}  ></iframe>
           

           
            
        </div>
        
    );
}   

export default Player;

