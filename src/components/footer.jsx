
import linked from '../assets/li23.png';
import git from '../assets/git10.png';
import ytsn from '../assets/ytsn.png';
import gmail from '../assets/gmail.webp';
import phone from '../assets/phone.png';
import logo from '../assets/logo .png';


const Footer = () => {  
    return (
        <div className=" absolute   w-full h-fit bg-black text-white p-3">
            <div className="flex justify-around">
                <div>
                    <h1 className=" text-lg">Feel Free To Contact Me</h1><br></br>
                    <div className="flex mb-3"><img src={phone}  width='30'></img><h2 className="ml-3 ">Tel : 077-7611408</h2></div>
                    <div className="flex"><img src={gmail}  width='30'></img><a href="mailto:sanjulasavindu@gmail.com" className="ml-3">Email : sanjulasavindu@gmail.com</a></div>
                </div>
                <div>
              <h1 className=" text-lg ml-3">Follow Us On</h1><br></br>
                <a href="https://www.linkedin.com/in/savindu-abeywickrama-58a828311"><div className="flex mb-3"><img src={linked}  width='30'></img><h2 className="ml-3">LinkedIn</h2></div></a>
                <a href="https://www.youtube.com/@slnoobhacker4903"><div className="flex mb-3"><img src={ytsn}  width='30'></img><h2 className="ml-3">Youtube</h2></div></a>
                <a href='https://github.com/sanjulamax'><div className="flex mb-3"><img src={git}  width='30'></img> <h2 className="ml-3">GitHub</h2></div></a>
                </div>
                <div className="max-[431px]:hidden">
                    <a href='https://github.com/sanjulamax/My_Portfolio'><h1 className=" mb-10 text-xl hover:text-green-500 p-2 hover:bg-white rounded-lg border-2 border-green-500 bg-transparent text-white flex justify-center align-middle items-center">About Me</h1></a>
                    <img src={logo}  width='200'></img>
                    <h2 className="w-full flex justify-center align-middle items-center">2024 ©</h2>
                </div>
            </div>
            <div className="hidden max-[431px]:flex  max-[431px]:flex-col">
                    <a href='https://sanjulamax.github.io/portfolio/'><h1 className=" mb-10 text-xl hover:text-green-500 p-2 hover:bg-white rounded-lg border-2 border-green-500 bg-transparent text-white flex justify-center align-middle items-center ">About Me</h1></a>
                    <div className="w-full flex justify-center align-middle items-center "><img  src="/src/assets/logo .png"  width='200'></img></div>
                    <h2 className="w-full flex justify-center align-middle items-center">2024 ©</h2>
                </div>
        </div>
    );
}

export default Footer;