import "./Hero.css"
import songpic from "../src/assets/images/song.webp"
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"








const Hero = () => {
 let song;
  const[playertitle, setPlay] = useState("Currently Listening To :")
  const[description, setDesc] = useState("Welcome to Lucheezou's Portfolio")
  const [eastertitle, setEaster] = useState("Hello!")
  const [artist, setArtist] = useState("Not listening to anything")
  const [songname, setSong] = useState("")
  const [album, setAlbum] = useState(songpic)

  useEffect(()=>{
    fetch("https://lucheezouspotify.onrender.com/song").then(data => data.json())
    .then(data => {song = data
      console.log(song)
      setArtist(song.item.album.artists[0].name)
      setSong(song.item.name)
      setAlbum(song.item.album.images[2].url)
      songdiv.current.onclick = () => {
        window.open(song.item.external_urls.spotify)
      }
    })

    {/* KC */}
    let playing = 0;
    let count = 0;

    window.onkeydown = (e)=>{
      if(e.key == "k"){
        count++
      }
      if (count >= 10){
        
        if (playing == 0){
        var audio = new Audio('/easter.mp3');
        audio.play();
        playing = 1;
        }
        headerref.current.style.background ='url("easter.jpg")'
        headerref.current.style.backgroundPosition ='center'
        setEaster("Hello KC my baby!!")
        eastervid.current.style.visibility = "visible";
        herovid.current.style.visibility = "hidden";
        setDesc("Cheers to My Gatekeeper, My Late Night Haven, My Dream Getaway, My Memo Rixi")
        setPlay("Currently In Love With :")
        setArtist("")
        setSong("Memo")
        setAlbum("https://i.scdn.co/image/ab6775700000ee85732e133ac1a49dbed4b3e94d")
        songdiv.current.onclick = () => {
          window.open("https://open.spotify.com/user/31ou4xi42inqgwycxibvjadzyige")
        }
      }
    }
   
    easter.current.onclick = ()=>{
        count++
      
      if (count >= 10){
        if (playing == 0){
        var audio = new Audio('/easter.mp3');
        audio.play();
        playing = 1;
        }
        headerref.current.style.background ='url("easter.jpg")'
        headerref.current.style.backgroundPosition ='center'
        setEaster("Hello KC my baby!!")
        eastervid.current.style.visibility = "visible";
        herovid.current.style.visibility = "hidden";
        setDesc("Cheers to My Gatekeeper, My Late Night Haven, My Dream Getaway, My Memo Rixi")
        setPlay("Currently In Love With :")
        setArtist("")
        setSong("Memo")
        songdiv.current.onclick = () => {
          window.open("https://open.spotify.com/user/31ou4xi42inqgwycxibvjadzyige")
        }
        setAlbum("https://i.scdn.co/image/ab6775700000ee85732e133ac1a49dbed4b3e94d")
      }
    }
    {/* KC */}
    
    setInterval(()=>{fetch("https://lucheezouspotify.onrender.com/song").then(data => data.json())
    .then(data => console.log(data))},240000)

  },[])

{/* KC */}
const songdiv = useRef("")
const easter = useRef("")
const eastervid = useRef("")
const herovid = useRef("")
const headerref = useRef("")
{/* KC */}

const scroll = ()=> {
 window.scrollTo(0, window.innerHeight - 95)
}


    return(
      <>
      
    <header ref={headerref}>

        <div class="overlay" id="home"></div>
         <video id="herovid" ref={herovid} playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="/hero.mp4" type="video/mp4" ></source>
         </video>

        {/* KC */}
         <video id="eastervid" ref={eastervid} playsinline="playsinline" style={{visibility:"hidden"}} autoplay="autoplay" muted="muted" loop="loop">
         <source src="/easter.mp4" type="video/mp4"></source>         
         </video>
        {/* KC */}  
         

 
        <div class="container h-100">
          
            <div class="d-flex h-100 text-center justify-content-center align-items-center">
            
            <div id="peste" class="text-white">
            
                <h1 ref={easter} class="display-3">{eastertitle}</h1>
                <p class="lead mb-0">{description}</p>
                <div id="spotifycontainer">
                  <h6>{playertitle}</h6>
                  <div id="spotify" ref={songdiv}>
                  <div id="album" >
                  <img src={album} id="albumpic" />
                  </div>
                  
                  <div id="songtitle" >
                    <h5 id="song">{songname}</h5>
                    <h6 id="songartist">{artist}</h6>
                    <p class=""><i class="spotifyicon fa-brands fa-spotify"></i>Spotify</p>
                  </div>
                  </div>
                </div>
                <button type="button"  onClick={scroll} class="btn btn-outline-light"><i class="heroicon fa-solid fa-arrow-down"></i>About me</button>

            </div>
           
            </div>
        </div>

    </header>

    <style>
      
    </style>

      </>
    )

}


export default Hero;