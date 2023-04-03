let listaLivros = require('./livros_source')

function ordena(esq, dir) {
    let i = 0, j=0

    let result = []

    while(i < esq.length && j < dir.length) {

        if(esq[i].preco < dir[j].preco) {
            result.push(esq[i])
            i++;
        } else {
            result.push(dir[j])
            j++;
        }
    }

    return result.concat(i < j ? esq.slice(i) : dir.slice(j))
}

function mergeSort(array) {

    if(array.length > 1) {

        let meio = Math.floor(array.length / 2);
        let esq = mergeSort(array.slice(0,meio));
        let dir = mergeSort(array.slice(meio,array.length));
        array = ordena(esq, dir);
        
    }

    return array;

}
console.log(mergeSort(listaLivros))