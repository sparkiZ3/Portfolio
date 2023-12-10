function chgLang(){
    var currentLoc=window.location.href
    var langPath=document.getElementById("lang").src;
    if(langPath==currentLoc+"imgs/fr.png"){
        document.getElementById("lang").src=currentLoc+"imgs/en.png";
    }else if(langPath==currentLoc+"imgs/en.png"){
        document.getElementById("lang").src=currentLoc+"imgs/fr.png";
    }
}