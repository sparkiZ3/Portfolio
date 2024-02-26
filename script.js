const id =['profession','main_presentation','contactbuttonmain1','contactbuttonmain2','mona_ozouf','mona_ozouf_text','appert','appert_text','IUT','IUT_text']
const translation = {
    fr: {
        profession : "Développeur étudiant",
        main_presentation: "Hey ! je suis Noan et je suis un étudiant dévelopeur. J'étudie actuellement la programmation dans le cadre de mes etudes a l'IUT.",
        contactbuttonmain1 :"Me contacter<div class=\"contactbutton\"></div>",
        contactbuttonmain2 :"M'embaucher<div class=\"contactbutton\"></div>",
        mona_ozouf :"Collège Mona Ozouf",
        mona_ozouf_text :"Mon intérêt pour le développement a débuter dès mes premières années au collège, lorsque j'ai découvert Scratch. Ayant apprécier ce langage de programmation , j'ai décidé d'approfondir mes connaissances en apprenant Python. Ce langage polyvalent m'a permis de réellement m’insérer dans le milieu du développement et comprendre les concepts fondamentaux de la programmation. Durant mon stage de troisième, j’ai intégré une entreprise dans le milieu de l’informatique ou j’ai pus y rencontrer des experts en cyberdéfenses et des développeurs. C’est ces rencontres qui m’ont permis de valider ce choix de vouloir devenir développeur ",
        appert: "Lycée Nicolas Appert",
        appert_text: "Au lycée, je choisi de suivre une seconde générale afin de pouvoir faire un bac STI2D en première et en terminale. En première année de STI2D, j’ai commencer a apprendre les bases du HTML, du CSS et du C afin de programmer des cartes arduinos. J’ai aussi suivi des cours d’énergie et environnement et de conception 3D dans le cadre du programme STI2D. Durant mon année nous avons pus faire 3 projets. C’est en terminale ou je choisis l’option SIN(système d’information et numérique). Ou j’apprends de nouveaux langages comme le SQL, le PHP ou encore les bases du réseaux. J’ai durant cette année effectué 2 projets",
        IUT: "IUT de Nantes",
        IUT_text: "C'est ici que j'ai réellement senti une amélioration sur la maitrise des languages de programmation en HTML, CSS, Python ainsi que SQL. Mais j'ai aussi decouvert de nouveaux langages avec le golang, le bash et le kotlin ",
    },
    en: {
        profession : "Student developer",
        main_presentation: "Hey !  I'm Noan and i'm a student developer. I'm actually learning programing at the IUT of Nantes",
        contactbuttonmain1 :"Contact Me<div class=\"contactbutton\"></div>",
        contactbuttonmain2 :"Hire me<div class=\"contactbutton\"></div>",
        mona_ozouf :"Mona Ozouf middle school",
        mona_ozouf_text :"My interest in development started in my early years in middle school, when I discovered Scratch. I really liked this programming language so i decided to begin by learn Python. This basic language allowed me to really insert myself into the development environment and understand the fundamental concepts of programming. During my third year internship, I joined a company in the IT sector where I met cyber defense experts and developers. It was these meetings that allowed me to validate this choice of wanting to become a developer",
        appert: "Nicolas Appert high school",
        appert_text: "In high school, I chose to follow a second general in order to be able to do a STI2D baccalaureate in my second and 3rd year. In the first year of STI2D, I started learning the basics of HTML, CSS and C in order to program arduino cards. I also took courses in energy, the environment and 3D design as part of the STI2D program. During my year we had to do 3 projects. for my final year, I choose the SIN option (système d’information et numérique)where I learn new languages ​​like SQL, PHP or even the basics of networking. During this year, we had 2 projects",
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