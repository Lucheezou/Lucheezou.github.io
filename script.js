
//---------------------------------------------------
function intro(){
var elem = document.getElementById("remove1st");
var element = document.getElementById("glowbutton");
setTimeout(
  function(){elem.remove();
  element.classList.add("neonB");
  element.classList.add("text");
  element.classList.add("fadeinl");
},9300);
setTimeout(function(){element.classList.remove("fadeinl")},900);
}






//---------------------------------------------

function removebutton(){
    var play = document.getElementById("clicksfx");
    play.pause()
    play.currentTime = .01;
    var elemb = document.getElementById("exit");
    var element = document.getElementById("glowbutton");
    play.play()
    element.classList.remove("neonB");
    element.classList.add("fadeel");
    var element = document.getElementById("glowbutton");
    setTimeout(function(){element.remove();elemb.classList.add("salmon");},1000);

    setTimeout(function(){window.location.replace("superdupersecret.html");},4000);


}
