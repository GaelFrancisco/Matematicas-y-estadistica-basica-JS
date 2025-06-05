console.group('Cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }
}

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

console.groupEnd('Cuadrado');

console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) {
        console.warn('este no es un triangulo isoseles');
    } else {
        //h= raizcuadrada (lado1**2 - (b**2)/4)
        return Math.sqrt((lado1**2) - ((base**2)) / 4);
    }
}

function calcularAlturaEscaleno(lado1, lado2, lado3) {
    const s = (lado1 + lado2 + lado3) / 2;
    const area = Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3));
    const baseLong = 1/2 * lado1;
    const h = area / baseLong;
    
    if (lado1 === lado2 && lado3 || lado2 === lado3 && lado1 || lado3 === lado1 && lado2) {
        return false;
    } else {
        return Math.trunc(h)    
    }
}

console.log({
    alturaTriangulo,
    areaTriangulo,
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
})

console.groupEnd('Triangulo');  

console.group('circulo');
const radioCirculo = 3;
const diametroCIrculo = radioCirculo * 2;
// const PI = 3.141516;

const circunferencia = diametroCIrculo * Math.PI.toFixed(3);
const areaCirculo = (radioCirculo ** 2) * Math.PI.toFixed(3);

console.log({
    radioCirculo,
    diametroCIrculo,
    // PI,
    circunferencia,
    areaCirculo,
});

function calcularCirculo(radio) {
    const diametro = (radio * 2);
    const radioAlCuadrado = Math.pow(radio, 2); //el radio se eleva a la potencia 2

    return { 
        circunferencia: diametro * Math.PI.toFixed(2),
        area: radioAlCuadrado * Math.PI.toFixed(2),
    }
}


console.groupEnd('circulo');