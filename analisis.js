//console.log(salarios);

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);

    // const persona = salarios.find((persona) => {
    //     return persona.name == personaEnBusqueda;
    // });
    // return persona;
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    console.log(medianaSalarios);
    return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioAnterior = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioAnterior;
        const porcentajeCrecimiento = crecimiento / salarioAnterior;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
    
    console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento});

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;
    
    console.log(aumento + ' es el aumento');
    return nuevoSalario;
}

const empresas = {};
for (persona of salarios){
    for (trabajo of persona.trabajos) {
            if (!empresas[trabajo.empresa]) {
                empresas[trabajo.empresa] = {};
            }
            if (!empresas[trabajo.empresa][trabajo.year]) {
                empresas[trabajo.empresa][trabajo.year] = [];
            }
            empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}
 console.log({empresas});

function medianaPorEmpresaYAnio(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else if (!empresas[nombre][year]) {
        console.warn('La empresa no dio salarios ese anio');
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map(year => {
            return medianaPorEmpresaYAnio(nombre, year);
        });
        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioAnterior = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioAnterior;
            const porcentajeCrecimiento = crecimiento / salarioAnterior;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }
            const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

            const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
            const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
            const nuevaMediana = ultimaMediana + aumento;

            return nuevaMediana;
    }
}

// analisis general
function medianaGeneral() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const mediana = PlatziMath.calcularMediana(listaMedianas);

    return mediana;
}

function medianaTop10() {
    const listaMedianas = salarios.map(
        persona => medianaPorPersona(persona.name)
    );

    const listaMedianasOrdenada = PlatziMath.ordenarLista(listaMedianas);

    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;

    const top10 = listaMedianasOrdenada.splice(limite, listaMedianas.length);
    
    // slice; // devuelve un nuevo array con los elementos seleccionados
    // splice; modifica el array original 
    const medianaTop10 = PlatziMath.calcularMediana(top10);
    return medianaTop10;
}