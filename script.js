const id =['main_presentation','contactbuttonmain']
const translation = {
    fr: {
        main_presentation: "<p id=\"main_presentation\">Hey ! je suis Noan et je suis un étudiant dévelopeur. J'étudie actuellement la programmation dans le cadre de mes etudes a l'IUT.</p>",
        contactbuttonmain :"<a id=\"contactbuttonmain\" href=\"#\">Me contacter</p><div class=\"contactbutton\"></div></a>"
    },
    en: {
        main_presentation: "<p id=\"main_presentation\">Hey !  I'm Noan and i'm a student developer. I'm actually learning the programation at the IUT of Nantes</p>",
        contactbuttonmain :"<a id=\"contactbuttonmain\" href=\"#\">Contact Me</p><div class=\"contactbutton\"></div></a>"
    },
};
function chgLang(){
    var currentLoc=window.location.href
    var langPath=document.getElementById("lang").src;
    if(langPath==currentLoc+"imgs/fr.png"){//on change la langue en anglais
        document.getElementById("lang").src=currentLoc+"imgs/en.png";
        for (i=0;i<id.length;i++){
            iddata=id[i]
            document.getElementById(iddata).innerHTML=translation.en[iddata];
        }
    }else if(langPath==currentLoc+"imgs/en.png"){//on change la langue en francais
        document.getElementById("lang").src=currentLoc+"imgs/fr.png";
        for (i=0;i<id.length;i++){
            iddata=id[i]
            document.getElementById(iddata).innerHTML=translation.fr[iddata];
        }
    }
}
