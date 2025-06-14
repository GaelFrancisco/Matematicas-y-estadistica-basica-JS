const PlatziMath = {};

PlatziMath.esPar = function esPar(lista) {
    // es como si usaramos un if else; es mucho mas facil
    return !(lista.length % 2);
}

PlatziMath.esImpar = function esImpar(lista) {
    return lista.length % 2;
}
// arrays a partir de objetos
// de objeto a array con objects.values(objeto): .entries(objeto) devuelve un array de arrays con las entradas del objeto
PlatziMath.calcularModa = function calcularModa(lista){
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimencional(listaArray, 1);
    const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
    const moda = listaMaxNumber[0];
    // console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber});
    // console.log("la moda es " + listaMaxNumber[0]);
    return moda;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);

    if (listaEsPar) {
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;
        // const mitad1ListaPar = lista[(lista.length / 2) - 1];
        // const mitad2ListaPar = lista[lista.length / 2];    

        // lista[indexMitad1ListaPar];
        // lista[indexMitad2ListaPar];
        // [lista[indexMitad1ListaPar], lista[indexMitad2ListaPar]];
        // const listaMitades = [mitad1ListaPar, mitad2ListaPar];

        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);

        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
        return medianaListaPar;
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) { 
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    } 
    // const sumarTodosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
    // arrow function = // const sumarTodosElementos = (valorAcumulado, nuevoValor) => {return valorAcumulado + nuevoValor;};
    // igual es una funcion

    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
    //    if (valorAcumulado > nuevoValor) {
    //     return 1;
    //    } else if (valorAcumulado == nuevoValor) {
    //     return 0;
    //    } else if (valorAcumulado < nuevoValor) {
    //     return -1;
    //    }

         return valorAcumulado - nuevoValor;
    //    return nuevoValor - valorAcumulado; // ordena de mayor a menor
    //    return nuevoValor - valorAcumulado; // ordena de mayor a menor
    // return 5 - 10 -> -5
    // return 5 -5 -> 0
    // return 10 - 5 -> 5
    }
    // const lista = listaDesordenada.sort((a, b) => a - b);
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

PlatziMath.ordenarListaBidimencional = function ordenarListaBidimencional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}