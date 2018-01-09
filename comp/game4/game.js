// Autor Caparos MIckael 




var g4Container = document.querySelector('#g4Container');
var g4question1 =[
  "Comment s'appelle habituellement la brance principale d'un repository Git ?",//question [0]
  "Master",// bonne réponse en [1]
  "Base",//mauvaises répons
  "Origin",//mauvaises répons
  "Remote",//mauvaises répons
];

var g4question2 =[
  "Quelle commande Git permet de voir sur quelle branche on se trouve ?",
  "git branch",//bonne réponse
  "git rebase",
  "git checkout",
  "got commit",
];

var g4question3 =[
  "Quelle est la bonne syntaxe pour créer une branche ?",
  "git branch ma-branche",//Bonne reponse
  "git branch",
  "git status",
  "git checkout ma-branche",
];

var g4question4 =[
  "Quelle est la bonne syntaxe pour créer une branche et se positionner dessus ?",
  "git checkout -b ma-branche",//Bonne reponse
  "git branch -b ma-branche",
  "git branch ma-branche",
  "git branch checkout ma-branche",
];

var g4question5 =[
  "Quel cas génère systématiquement une situation de conflit dans Git ?",
  "Si certains commits des deux branches que l'on fusionne affectent les mêmes lignes de code",//Bonne reponse
  "Si un autre utilisateur a rendu une branche invalide",
  "Si on fusionne deux branches qui ont été modifiées par deux utilisateurs différents ",
  "Si on fusionne deux branches dont l'une contient plusieurs commits appliqués à un même fichier",
];

var g4question6 =[
  "Comment supprimer une branche dans Git ?",
  "git branch -d ma-branche",//Bonne reponse
  "git delete ma-branche",
    "git remove -d ma-branche",
  "git branche delete ma-branche",
];

var g4question7 =[
  "Quelle commande permet de savoir qui a modifié une ligne donnée d'un fichier ?",
  "git status",//Bonne reponse
  "git blame",
  "git checkout",
  "git hist",
];

var g4question8 =[
  "Quelle est une bonne façon d'ignorer un fichier définitivement ?",
  "Utiliser un fichier .gitignore",//Bonne reponse
  "Utiliser la commande git ignore",
  "Enlever le fichier de l'index",
  "La meilleur défense c'est l'ignorance",
];

var g4question9 =[
  "Comment faire pour mettre de côté ses modifications de façon temporaire sans faire de commit ?",
  "En utilisant la commande git stash",//Bonne reponse
  "En copiant son code dans un autre répertoire",
  "En utilisant la commande git checkout",
  "En copiant son code dans une nouvelle branche",
];

var g4question10 =[
  "Comment s'appelle le processus qui consiste à proposer une suite de commits pour qu'ils soient acceptés dans un projet open source ?",
  "Un Pull Request",//Bonne reponse
  "Un Fork",
  "Un Fork Request",
  "Un Push Request",
];

var g4questiontab = [g4question1,g4question2,g4question3,g4question4,g4question5,g4question6,g4question7,g4question8,g4question9,g4question10];// tableau contenant les questions et reponses
var g4Score=0;
var g4Time=15;
//comptage des points
function addPoints(points){
  g4Score=g4Score+1;
  points=g4Score;
  document.getElementById('g4Score').value="Mon score : "+g4Score;
  return points;
}


// Le Timer
function g4Timer(){
  g4Time=g4Time-1;
  document.getElementById('g4Time').value="Il reste : "+g4Time;
  g4uptadeTime=setTimeout(function(){g4Timer()}, 1000);

  if (g4Time<1) {
    g4randomQ();
    g4Time=11;
  }
  if (g4questiontab.length<1) {
    clearTimeout(g4uptadeTime);
  }
}


function g4GameOver(){
  // si il n'y a plus de question je charge le nouveau jeu et je stop le timer
    var g4Container=document.querySelector("#g4Container");
    document.querySelector('.g4Qzone').innerHTML="";//je retire la question et les reponses
    var g4Result=document.querySelector('.g4Result');
    document.querySelector('.g4Rfield').innerHTML="";

    document.querySelector('#g4Form__submit').value="Next Game";
    document.querySelector('#g4Form__submit').disabled=false;
    document.querySelector('#g4Form__submit').addEventListener("click",loadNextMiniGame);
    g4result.style.display = "block";
    g4Container.appendChild(g4Result);
    clearTimeout();
}


function g4RandomQ(){
  g4Time=11;//reste time to 11 for new question
  if (g4questiontab.length<1) {
    g4GameOver();
  }
  document.querySelector('.g4Qzone').innerHTML="";//je retire la question et les reponses
  document.querySelector('.g4Rfield').innerHTML="";
  document.querySelector('#g4Form__submit').disabled=true;//button change de valeur
  var g4Result = document.querySelector('.g4Result');
  g4Result.style.display = "none";
  var g4rdQ=Math.floor(Math.random()*g4questiontab.length);//je selectionne une question au hasard
  var g4Q = document.querySelector(".g4Qzone");//
  g4Result.textContent+="\n"+g4questiontab[g4rdQ][0];
  g4Q.textContent=g4questiontab[g4rdQ][0];//j'affiche la question
  g4Container.appendChild(g4Q);
  g4Container.appendChild(g4Result);
  var g4R = document.querySelector('.g4Rfield');
  g4R.className="g4Rfield";
  g4questiontab[g4rdQ].shift();//je retire la question du tableau
  var g4tabReponse=[];//je crer un tableau qui contiendras les boutons des reponses des reponses

  for (var g4i = 0; g4i < g4questiontab[g4rdQ].length; g4i++) {// je crer mes boutons en attibuant des classes differents pour les mauvaises reponses
    var g4Reponse=document.createElement("button");

    g4Reponse.textContent=g4questiontab[g4rdQ][g4i];
    if (g4i==0) {
      g4Reponse.id="g4true";
      g4Reponse.addEventListener('click',g4RandomQ);
      g4Reponse.addEventListener('click',addPoints);
    } else {
      g4Reponse.className="g4false";
      g4Reponse.addEventListener('click',g4RandomQ);
    }
    g4tabReponse.push(g4Reponse);//j'ajoute les boutons dans mon tableau

  }

  g4tabReponse.sort(function(a, b){return 0.5 - Math.random()});//j'ordonne le tableau de boutons  ne comportant plus que les reponses de manière aléatoire
  for (var g4i = 0; g4i < g4tabReponse.length; g4i++) {//je parcours ce tableau et reinjecte les elements dans html
    g4R.appendChild(g4tabReponse[g4i]);
  }
  g4Container.appendChild(g4R);// je reinjecte tous les boutons  dans le contenu html
  g4questiontab.splice(g4rdQ,1);// je retire la question deja posée


}
