/* test compare()*/
let lotGagnant = [5,4,8,3,1,6,8];

let ticketPerdant = [3,4,5, 8, 9, 6, 3];
let ticketGagnant = [5,4,8,3,1,6,8];


/* */
let tabResult = new Array();

let tabSaisi = new Array();

function enregistrementValeur() {
    for (let index = 0; index < 7; index++)
    {
        tabSaisi[index] = document.getElementById(String(index)).value;        
    }
    console.log(tabSaisi);
}
function resultAleatoire() {
    
    for(let i =0;i<7;i++){
        tabResult[i]=Math.floor(Math.random() * (50 - 1) + 1);
    }
    console.log(tabResult);
}

//compare ticket joueur et ticket gagnant
function compare(tickGagnant, tickJoueur){
    
    return tickGagnant.every((value,index) => value === tickJoueur[index]);
}

resultAleatoire();

