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

resultAleatoire();

