import "./Projects.css"
import rrltool from "../src/assets/images/rrltool.png"
import dsa from "../src/assets/images/dsa.png"
import breaktime from "../src/assets/images/breaktime.png"
import fide from "../src/assets/images/f-ide.png"
import francissoft from "../src/assets/images/francissoft.png"
import page from "../src/assets/images/pagestructure.png"
import music from "../src/assets/images/music.png"
import eden from "../src/assets/images/eden.png"
import newyear from "../src/assets/images/newyear.png"
import puzzle from "../src/assets/images/puzzle.png"
import boardpost from "../src/assets/images/boardpost.png"
import DM from "../src/assets/images/r.png"
import Spotify from "../src/assets/images/spotify.png"
import WriteScan from "../src/assets/images/writescan.jpg"
import WriteScan_BE from "../src/assets/images/writescan_back.png"
import MessengerGPT from "../src/assets/images/messenger.png"
import talatrapiko from "../src/assets/images/talatrapiko.png"
import verde from "../src/assets/images/verde.png"
import lblog from "../src/assets/images/lblog.png"

import { useRef, useEffect } from "react"



const Projectcontent = (props) => {
    
    useEffect(()=>{window.addEventListener("scroll",
    ()=>{console.log(window.scrollY)
     if (window.innerWidth >= 576){
    
    
        if (window.scrollY > 1600){
            props.id.current.style.opacity = "1";
            props.id.current.style.top = "0";
                        }
               
     }
    
    
        else {
    
             if (window.scrollY > 2100){
                props.id.current.style.opacity = "1";
                props.id.current.style.top = "0";
             }
                      
        }
    }    
    )
    } 
)



    return (

    <>

    <div class="col">
    <div class="card shadow-sm">
        <img src={breaktime} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            One of my first projects while I was learning Javascript. This was inspired by one of the sites from theuselessweb.com. <br/>
            Made with HTML + JS + CSS</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/Lucheezou-s_Breaktime")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
            <button onClick={()=>{window.open("https://lucheezou.github.io/Lucheezou-s_Breaktime")}} type="button" class="btn btn-sm btn-outline-secondary">View on Github Pages<i class="fa-solid fa-arrow-up-right-from-square"></i> </button>
          </div>
          
        </div>
      </div>
    </div>
    </div>


    <div class="col">
    <div class="card shadow-sm">
        <img src={fide} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            One of my requirements for my Software Engineering Course. I am the Lead Developer for F-IDE.
            F-IDE is an online IDE with a Model that assists users in retrieving information about standard code functions

            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/F-IDE")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
            <button onClick={()=>{window.open("https://f-ide.onrender.com/login")}} type="button" class="btn btn-sm btn-outline-secondary">View on Render <i class="fa-solid fa-arrow-up-right-from-square"></i> </button>
          </div>
          
        </div>
      </div>
    </div>
    </div>


    <div class="col">
    <div class="card shadow-sm">
        <img src={francissoft} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            This is the Homepage for FrancisSoft. I made this using React and Bootstrap

            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/FrancisSoft")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
            <button onClick={()=>{window.open("https://francissoft.onrender.com")}} type="button" class="btn btn-sm btn-outline-secondary">View on Render <i class="fa-solid fa-arrow-up-right-from-square"></i> </button>
          </div>
          
        </div>
      </div>
    </div>
    </div>


    <div class="col">
    <div class="card shadow-sm">
        <img src={page} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            This is one of my projects while learning CSS grids, flex, transitions, etc. This is a Tribute Page that shows how I structure a page

            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/Page_Structure")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
            <button onClick={()=>{window.open("https://lucheezou-s-pagestructuring.onrender.com")}} type="button" class="btn btn-sm btn-outline-secondary">View on Render <i class="fa-solid fa-arrow-up-right-from-square"></i> </button>
          </div>
          
        </div>
      </div>
    </div>
    </div>



    <div class="col">
    <div class="card shadow-sm">
        <img src={eden} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            My very first project. This is an animated greeting card I made for my highschool sweetheart. The secret word is CASE
            <br/>Better viewed on a desktop/laptop

            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/ValentineCard")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
            <button onClick={()=>{window.open("https://lucheezou.github.io/ValentineCard")}} type="button" class="btn btn-sm btn-outline-secondary">View on Github Pages<i class="fa-solid fa-arrow-up-right-from-square"></i> </button>
          </div>
          
        </div>
      </div>
    </div>
    </div>


    <div class="col">
    <div class="card shadow-sm">
        <img src={music} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            A music promo banner template for a friend's project

            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/MusicBanner")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
            <button onClick={()=>{window.open("https://lucheezou.github.io/MusicBanner/")}} type="button" class="btn btn-sm btn-outline-secondary">View on Github Pages <i class="fa-solid fa-arrow-up-right-from-square"></i> </button>
          </div>
          
        </div>
      </div>
    </div>
    </div>


    <div class="col">
    <div class="card shadow-sm">
        <img src={newyear} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            An animated greeting card I made for the New Year

            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/NewyearCard")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
            <button onClick={()=>{window.open("https://lucheezou.github.io/NewyearCard")}} type="button" class="btn btn-sm btn-outline-secondary">View on Github Pages<i class="fa-solid fa-arrow-up-right-from-square"></i> </button>
          </div>
          
        </div>
      </div>
    </div>
    </div>

    <div class="col">
    <div class="card shadow-sm">
        <img src={boardpost} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            Mini site where you can post for everyone to see. built with Mongo, Pug and Express.

            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/BoardPost")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
            <button onClick={()=>{window.open("https://boardpost.onrender.com")}} type="button" class="btn btn-sm btn-outline-secondary">View on Render<i class="fa-solid fa-arrow-up-right-from-square"></i> </button>
          </div>
          
        </div>
      </div>
    </div>
    </div>


    <div class="col">
    <div class="card shadow-sm">
        <img src={puzzle} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            A requirement for my Artificial Intelligence Course, a 3x3 puzzle solver written in C++

            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/DSA-Codes/tree/master/3x3%20puzzle%20solver%20using%20Astar%20and%20IDS%20search")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
          </div>
          
        </div>
      </div>
    </div>
    </div>


    <div class="col">
    <div class="card shadow-sm">
        <img src={dsa} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            A compilation of my Data Structures and Algorithms Code

            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/DSA-Codes")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
          </div>
          
        </div>
      </div>
    </div>
    </div>

   
    <div class="col">
    <div class="card shadow-sm">
        <img src={DM} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            My notes for my Data Mining course, R for Data Mining and Machine Learning

            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/R_DataMining")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
          </div>
          
        </div>
      </div>
    </div>
    </div>



    <div class="col">
    <div class="card shadow-sm">
        <img src={Spotify} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            A Spotify token generator for using Spotify's Web API
            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/spotify")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
            <button onClick={()=>{window.open("https://lucheezouspotify.onrender.com")}} type="button" class="btn btn-sm btn-outline-secondary">View on Render<i class="fa-solid fa-arrow-up-right-from-square"></i> </button>
          </div>
          
        </div>
      </div>
    </div>
    </div>


    <div class="col">
    <div class="card shadow-sm">
        <img src={MessengerGPT} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            An integration of OpenAI models to Meta's Messenger API. Currently Limited Access.
            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/MessengerGPT")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
          </div>
          
        </div>
      </div>
    </div>
    </div>



    <div class="col" >
    <div class="card shadow-sm">
        <img src={WriteScan} id="WriteScan" class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            A simple mobile app to read handwritten text, Made with React Native and Expo
            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/WriteScan")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
          </div>
          
        </div>
      </div>
    </div>
    </div>



    <div class="col">
    <div class="card shadow-sm">
        <img src={WriteScan_BE} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            The API server for WriteScan that processes images with a trained model made by my classmates. Made with Python and FastAPI
            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/WriteScanner_Backend")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
          </div>
          
        </div>
      </div>
    </div>
    </div>








    <div class="col">
    <div class="card shadow-sm">
        <img src={rrltool} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            A Related Literature Review Tool listing relevant information about a topic given a title.
            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/RRLTool")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
            <button onClick={()=>{window.open("https://rrltool.onrender.com")}} type="button" class="btn btn-sm btn-outline-secondary">View on Render<i class="fa-solid fa-arrow-up-right-from-square"></i> </button>

          </div>
          
        </div>
      </div>
    </div>
    </div>


    <div class="col">
    <div class="card shadow-sm">
        <img src={talatrapiko} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            A Web Application that can web scrape or analyze manually inputted news articles written in Filipino and identifies entities within the text using a roBERTa model and extracts statistics from the information, Made with spaCy transformers, FastAPI and React
            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/TalaTrapiko")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
          </div>
          
        </div>
      </div>
    </div>
    </div>


    <div class="col">
    <div class="card shadow-sm">
        <img src={lblog} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            A blog that I made when I was interning for a startup, made with Bootstrap Templates 
            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/LBlog")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
            <button onClick={()=>{window.open("https://lucheezou.github.io/LBlog")}} type="button" class="btn btn-sm btn-outline-secondary">View on Github Pages<i class="fa-solid fa-arrow-up-right-from-square"></i> </button>
          </div>
          
        </div>
      </div>
    </div>
    </div>


    <div class="col">
    <div class="card shadow-sm">
        <img src={verde} class="thumbnail"/> 
      <div class="card-body">
        <p class="card-text">
            A landing page for a Plant Shop made with React and Tailwind CSS
            </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button onClick={()=>{window.open("https://github.com/Lucheezou/Verde")}} type="button" class="btn btn-sm btn-outline-secondary">Github <i class="fa-brands fa-github"></i></button>
            <button onClick={()=>{window.open("https://lucheezou.github.io/Verde")}} type="button" class="btn btn-sm btn-outline-secondary">View on Github Pages<i class="fa-solid fa-arrow-up-right-from-square"></i> </button>
          </div>
          
        </div>
      </div>
    </div>
    </div>

    


  </>


  )
}



const Projects = () =>{
const proj = useRef("");
return(<>
<h1 class="text-center">PROJECTS</h1>
<p class="lead text-center">

Although not much, I have made some projects ranging from simple websites to slightly complex applications

</p>

<p class="blockquote-footer text-center">
I am still in the process of learning but these projects showcase the level of understanding I have with my skillset
</p>

<div class="album py-5 bg-light">
    <div class="container">

      <div ref={proj} id="projectcontainer"class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
        
            <Projectcontent id={proj}/>


        </div>
    </div>
  </div>

</>)
}


export default Projects