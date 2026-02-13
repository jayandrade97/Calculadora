//Seleccionamos pantalla

const Pantalla = document.getElementById('Pantalla');

//Función para agregar numeros para realizar las operaciones

function agregar(valor){
    Pantalla.value += valor;
}

function limpiar(){
    Pantalla.value = '';
}

function borrarUno(){
    Pantalla.value = Pantalla.value.slice(0, -1);
}

function raiz(){
    Pantalla.value += '√';
}

function porcentaje(){
    Pantalla.value += '%';
}

function calcular(){
    try{
        if(Pantalla.value.includes('√')){
            Pantalla.value = Pantalla.value.replace('√', 'Math.sqrt(') + ')';
        }

        if(Pantalla.value.includes('%')){
            Pantalla.value = Pantalla.value.replace('%', '/100');
        }

        Pantalla.value = eval(Pantalla.value);
    }
    catch(error){
        Pantalla.value = 'Sintax Error';
        setTimeout(()=> limpiar(), 1500);
    }
}