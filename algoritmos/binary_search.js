let lista = [15, 20, 22, 25, 28, 30, 33, 35, 40, 45, 50]

function binary_search(arr, begin, end, value) {
    let mid = Math.floor((begin + end)/2);
    let atual = arr[mid];

    if(end > begin) return -1;

    if(value == atual) return mid;

    if(value < atual) return binary_search(arr, begin, mid-1, value);

    if(value > atual) return binary_search(arr, mid + 1, end, value);
}