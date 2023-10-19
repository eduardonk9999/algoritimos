function pesquisaBinaria(lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;

    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2);
        let chute = lista[meio];

        if (chute === item) {
            console.log('meio');
            return meio;
        }
        if (chute > item) {
            console.log('alto');
            alto = meio - 1;
        } else {
            console.log('baixo');
            baixo = meio + 1;
        }
    }

    return -1; // Retorna -1 se o item não for encontrado na lista
}

let minhaLista = [1, 3, 5, 7, 9, 12, 24];

const resposta = pesquisaBinaria(minhaLista, 9);
console.log(resposta);


// Ele retorna 4, que é a posicao no indice da nossa lista