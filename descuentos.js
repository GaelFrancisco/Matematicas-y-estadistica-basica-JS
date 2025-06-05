const inputPrice = document.querySelector('#price');
const inputCupon = document.querySelector('#cupon');
const button = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

button.addEventListener('click', calcularDescuento);

    const cuponList = [];
    cuponList.push({
        name: 'gatito',
        discount: 30,
    });

function calcularDescuento() {
    //formula (p*(100-d))/100
    const price = Number(inputPrice.value);
    const cupon = inputCupon.value;

    if (!price || !cupon) {
        pResult.innerText = 'Por favor llena el formulario';
        return;
    }
    
    let discount;

    function isCuponInArray(cuponElemnt) {
        return cuponElemnt.name == cupon;  
    }

    const couponInArray = cuponList.find(isCuponInArray);

    if (couponInArray) {
        discount = couponInArray.discount;
    } else {
        pResult.innerText = 'El cupon no es valido ';
    }
    
    // else { 
    //     if (Object.keys(cuponList).includes(cupon)) {
    //         const newPrice = (price * (100 - cuponList[cupon])) / 100;
    //         pResult.innerText = `Cupon valido por ${cuponList[cupon]}% de descuento. Precio con descuento: $${newPrice}`;     
    //     } else {
    //         pResult.innerText = 'El cupon no es valido ';
    //     }
    // }

    // if (discount > 45) {
    //     pResult.innerText = 'Descuento inexistente';
    //     return;
    // }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}