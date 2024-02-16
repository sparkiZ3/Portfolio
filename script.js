const id =['profession','main_presentation','contactbuttonmain1','contactbuttonmain2','mona_ozouf','mona_ozouf_text','appert','appert_text','IUT','IUT_text']
const translation = {
    fr: {
        profession : "Développeur étudiant",
        main_presentation: "Hey ! je suis Noan et je suis un étudiant dévelopeur. J'étudie actuellement la programmation dans le cadre de mes etudes a l'IUT.",
        contactbuttonmain1 :"Me contacter<div class=\"contactbutton\"></div>",
        contactbuttonmain2 :"M'embaucher<div class=\"contactbutton\"></div>",
        mona_ozouf :"Collège Mona Ozouf",
        mona_ozouf_text :"C'est a partir du collège que je decouvre le développement via scratch.I really enjoy scratch and decided to take it to the next level by learning python via online courses. My 3rd year internship focused on the IT sector, I was able to meet developers there which confirmed my choice to become a developer",
        appert: "Lycée Nicolas Appert",
        appert_text: "Arrivé au lycée j'entame une seconde générale pour pouvoir en premiere et en terminale rejoindre une filière STI2D. En premiere, j'apprend les bases du HTML et du CSS ainsi que les bases du C afin de programmer des cartes arduinos. Puis en terminale, je consolide mes bases de C et découvre de nouveaux langages tel que le PHP, le SQL",
        IUT: "IUT de Nantes",
        IUT_text: "C'est ici que j'ai réellement senti une amélioration sur la maitrise des languages de programmation en HTML, CSS, Python ainsi que SQL. Mais j'ai aussi decouvert de nouveaux langages avec le golang, le bash et le kotlin ",
    },
    en: {
        profession : "Student developer",
        main_presentation: "Hey !  I'm Noan and i'm a student developer. I'm actually learning programing at the IUT of Nantes",
        contactbuttonmain1 :"Contact Me<div class=\"contactbutton\"></div>",
        contactbuttonmain2 :"Hire me<div class=\"contactbutton\"></div>",
        mona_ozouf :"Mona Ozouf middle school",
        mona_ozouf_text :"It was from middle school that I discovered development via scratch. Then I started learning python by myself . My 3rd year internship focused on the IT sector, I was able to meet developers there which confirmed my choice to become a developer",
        appert: "Nicolas Appert high school",
        appert_text: "Arriving at high school, I started a general second year to be able to join a STI2D sector in the first and final years. First, I learned the basics of HTML and CSS as well as the basics of C in order to program arduino cards. Then in final year, I consolidated my C bases and discovered new languages ​​such as PHP, SQL",
        IUT: "IUT of Nantes",
        IUT_text: "It is here that I really felt an improvement in my mastery of programming languages ​​in HTML, CSS, Python as well as SQL. But I also discovered new languages ​​with golang, bash and kotlin"
    },
};
function chgLang(){
    var currentLoc=window.location.href
    var langPath=document.getElementById("lang").src;
    console.log(currentLoc+"imgs/fr.png")
    document.getElementById("lang").src=currentLoc+"imgs/fr.png";
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

function printest(){
    console.log("test")
}