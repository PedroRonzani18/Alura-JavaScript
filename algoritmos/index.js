const { edGalho, edFolha } = require('./arrays_1');

function juntarListas(l1, l2) {

    let retorno = [];
    let i = 0;
    let j = 0;

    while(i < l1.length && j < l2.length) {

        if(l1[i].preco < l2[j].preco) {
            retorno.push(l1[i]);
            i++;
        } else {
            retorno.push(l2[j]);
            j++
        }
    }

    while(i < l1.length) {
        retorno.push(l1[i]);
        i++;
    }

    while(j < l2.length) {
        retorno.push(l2[j]);
        j++;
    }

    return retorno;
}

console.log(juntarListas(edGalho,edFolha))