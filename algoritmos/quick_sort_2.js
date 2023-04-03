let lista = [45, 35, 30, 15, 50, 22, 40, 28, 25, 33, 20]

function swap(arr, i, j) {
    let aux = arr[i];
    arr[i] = arr[j];
    arr[j] = aux; 
}

function quickSort(arr, begin, end) {
  if (arr.length > 1) {
    let indiceAtual = particiona(arr, begin, end);
    if (begin < indiceAtual - 1) {
      quickSort(arr, begin, indiceAtual - 1);
    }
    if (indiceAtual < end) {
      quickSort(arr, indiceAtual, end)
    }
  }
  return arr;
}

function particiona(arr, begin, end) {

  let pivo = arr[Math.floor((begin + end) / 2)]
  let i = begin; //0
  let j = end; //10

  while (i <= j) {
    while (arr[i] < pivo) {
      i++
    }

    while (arr[j] > pivo) {
      j--
    }

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

console.log(quickSort(lista, 0, lista.length - 1))


