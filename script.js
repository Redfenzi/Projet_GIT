let tabResult = new Array();


function resultAleatoire() {
    
    for(let i =0;i<7;i++){
        tabResult[i]=Math.floor(Math.random() * (50 - 1) + 1);
    }
    console.log(tabResult);
}

resultAleatoire();

