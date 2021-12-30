
//---------------------------------------------------
function intro(){
var elem = document.getElementById("remove1st");
var element = document.getElementById("glowbutton");
setTimeout(
  function(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      window.location.replace("HAPPYNEWYEARm.html");
    }else{
      // false for not mobile device
      window.location.replace("HAPPYNEWYEAR.html");
    }
},9300);
}






//---------------------------------------------

function removebutton(){
    var elemb = document.getElementById("exit");
    var element = document.getElementById("glowbutton");
    element.classList.remove("neonB");
    element.classList.add("fadeel");
    var element = document.getElementById("glowbutton");

}
