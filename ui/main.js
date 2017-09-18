console.log('Loaded!');
window.onload = fun;
function fun(){
    var a = getElementById("college-small-name");
    setInterval(function(){
        a.innerHTML = "IIT KGP";
        
    },2000);
    a.innerHTML= "MSIT";
}