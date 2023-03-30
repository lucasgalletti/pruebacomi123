let importar = require('./collectibles');

let hotToys = importar('Hot Toys');
let bandai = importar('Bandai');
let starWars = importar('Star Wars');

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];


let collectibles = {
    figuras: function(){
        let allFigures = [];
        for(i=0; i<unifiedCollectibles.length; i++){
            allFigures.push(unifiedCollectibles[i].nombre);
        }
        return allFigures
    },
    listFigures: () => unifiedCollectibles.forEach((e => {
        console.log('--------')
        console.log(`Marca: ${e.marca}`)
        console.log(`Nombre: ${e.nombre}`)
        console.log(`Precio: ${e.precio}`)
        console.log(`Stock: ${e.stock}`);
        
    } )),
    figuresByBrand: (marca) => unifiedCollectibles.filter((e) => e.marca == marca) 
    
}
collectibles.listFigures();
// console.log(collectibles.figuresByBrand('Star Wars'));
