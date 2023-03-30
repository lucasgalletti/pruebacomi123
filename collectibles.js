const fs = require('fs');

function importar(marca){

    if(marca == 'Hot Toys'){
        let hotToys = fs.readFileSync('./datos/figuras1.json', 'utf-8');
        return JSON.parse(hotToys);
    }else if (marca == 'Bandai'){
        let bandai = fs.readFileSync('./datos/figuras2.json', 'utf-8');
        return JSON.parse(bandai);
    }else if (marca == 'Star Wars'){
        let starWars = fs.readFileSync('./datos/figuras3.json', 'utf-8');
        return JSON.parse(starWars);
    }else{
       return `De la marca: ${marca} no contamos con stock`;
    }

}

module.exports = importar; 