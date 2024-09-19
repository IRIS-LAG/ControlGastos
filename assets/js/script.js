

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
                id: Math.round(Math.random() * 100)+1,
                cate: categoria,
                nomb: nombreGas.value,
                val: valor.value
            };
            lista.push (cadenaDatos);
        } else {
            const itemEncon = lista.findIndex((elItem) => elItem.id === focoE);
            lista [itemEncon].cate = categoria;
            lista [itemEncon].nomb = nombreGas.value;
            lista [itemEncon].val = valor.value;
            focoE = 0
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
    lista.forEach((item) => {
        htmlLista += 
        `<li>${item.cate}: ${item.nomb} ----> US$ ${item.val}    
            <div><button class="bpeq1" title="Editar" data-id="${item.id}" onclick="editar(${item.id})">E</button>
                <button class="bpeq2" title="Borrar" data-id="${item.id}" onclick="borrarItem(${item.id})">X</button>
            <div>
        </li>`
        valorTot += Number(item.val)
    }); 
    listaDG.innerHTML = htmlLista;
    total.innerHTML = valorTot.toFixed(2);
}
function borrarItem(unItem) {
    const itemEncon = lista.findIndex((elItem) => elItem.id === unItem);
    lista.splice(itemEncon, 1);
    actualizaGastos();
}
function editar(unItem) {
    focoE = unItem;
    let categoria = document.getElementById('lisClasif');
    let nombreGas = document.getElementById('nombreGasto');
    let valor = document.getElementById('valorGasto');

    const itemEncon = lista.findIndex((elItem) => elItem.id === unItem);
    
    categoria.value = lista [itemEncon].cate;
    nombreGas.value = lista [itemEncon].nomb;
    valor.value = lista [itemEncon].val;
}