
/* */
let tabResult = new Array();

let tabSaisi = new Array();

function enregistrementValeur() {
    for (let index = 0; index < 7; index++)
    {
        tabSaisi[index] = document.getElementById(String(index)).value;        
    }
    Affichage();
    console.log(tabSaisi);
}
function resultAleatoire() {
    
    for(let i =0;i<1;i++){
        tabResult[i]=Math.floor(Math.random() * (50 - 1) + 1);
    }
    console.log(tabResult);
}
function Affichage()
{
    resultAleatoire();
    console.log(compare(tabResult,tabSaisi));
}

//compare ticket joueur et ticket gagnant
function compare(tickGagnant, tickJoueur){
    
    return tickGagnant.every((value,index) => value == tickJoueur[index]);
}


//console.log(compare(tabResult,tabSaisi));
