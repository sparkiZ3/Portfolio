const id =['main_presentation','contactbuttonmain','mona_ozouf','mona_ozouf_text']
const translation = {
    fr: {
        main_presentation: "Hey ! je suis Noan et je suis un étudiant dévelopeur. J'étudie actuellement la programmation dans le cadre de mes etudes a l'IUT.",
        contactbuttonmain :"Me contacter<div class=\"contactbutton\"></div>",
        mona_ozouf :"College Mona Ozouf",
        mona_ozouf_text :"C'est a partir du collège ou je decouvre le développement via scratch. Puis par la suite je me suis mit a apprendre le python. Mon stage de 3eme se portant sur le milieu de l'informatique, j'ai pu y rencontrer des developpeurs ce qui a confirmé mon choix de devenir developpeur",
    },
    en: {
        main_presentation: "Hey !  I'm Noan and i'm a student developer. I'm actually learning the programation at the IUT of Nantes",
        contactbuttonmain :"Contact Me<div class=\"contactbutton\"></div>",
        mona_ozouf :"Mona Ozouf high school",
        mona_ozouf_text :"C'est a partir du collège where i discovered developement via scratch. Then, i started learning python. Mon stage de 3eme se portant sur le milieu de l'informatique, j'ai pu y rencontrer des developpeurs ce qui a confirmé mon choix de devenir developpeur",
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
    }else if(langPath==currentLoc+"imgs/en.png"){//on change la langue en français
        document.getElementById("lang").src=currentLoc+"imgs/fr.png";
        for (i=0;i<id.length;i++){
            iddata=id[i]
            document.getElementById(iddata).innerHTML=translation.fr[iddata];
        }
    }
}
