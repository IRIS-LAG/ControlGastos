

const lista = [];
let focoE = -1;
let cadenaDatos;

function clickBoton() {
    let categoria = document.getElementById('lisClasif').value;
    let nombreGas = document.getElementById('nombreGasto');
    let valor = document.getElementById('valorGasto');
    if (categoria == 'Categoria'){
        alert ("Escoja una CATEGORIA válida");
    } else if (nombreGas.value == "") {
        alert ("Ingrese algún DETALLE de gasto");
    } else if (isNaN(valor.value) || valor.value == "") {
        alert ("Ingrese algún VALOR de gasto");
    } else {
        if (focoE == -1) {
            cadenaDatos = {
                cate: categoria,
                nomb: nombreGas.value,
                val: valor.value
            };
            lista.push (cadenaDatos);
        } else {
            lista [focoE].cate = categoria;
            lista [focoE].nomb = nombreGas.value;
            lista [focoE].val = valor.value;
            focoE = -1
        };
        actualizaGastos();
        nombreGas.value = "";
        valor.value = "";
    }
}
function actualizaGastos() {
    const listaDG = document.getElementById('listaDeGastos');
    const total = document.getElementById('totalGastos');
    let htmlLista = '';
    let valorTot = 0;
    lista.forEach((item, position) => {
        htmlLista += 
        `<li>${item.cate}: ${item.nomb} ----> US$ ${item.val}    
            <div><button class="bpeq1" title="Editar" onclick="editar(${position})">E</button>
                <button class="bpeq2" title="Borrar" onclick="borrarItem(${position})">X</button>
            <div>
        </li>`
        valorTot += Number(item.val)
    }); 
    listaDG.innerHTML = htmlLista;
    total.innerHTML = valorTot.toFixed(2);
}
function borrarItem(unItem) {
    lista.splice(unItem, 1);
    actualizaGastos();
}
function editar(unItem) {
    focoE = unItem;
    let categoria = document.getElementById('lisClasif');
    let nombreGas = document.getElementById('nombreGasto');
    let valor = document.getElementById('valorGasto');

    categoria.value = lista [unItem].cate;
    nombreGas.value = lista [unItem].nomb;
    valor.value = lista [unItem].val;
}