let palabrita = ''; 
let cant_errores = 0;
let cant_aciertos = 0;

const palabras = [
    'desarrollar',
    'juego',
    'astronauta',
    'biologia',
    'cine',
    'quimica',
    'computadora',
    'hangman',
    'ballena',
    'programando',
]
const btn = id('jugar');
const btn_letras = document.querySelectorAll("#letras button");

/*Iniciar Juego*/
btn.addEventListener('click', iniciar );

function id(str) {
    return document.getElementById(str);
}

function obtener_random(num_min, num_max){
    const amplitud_valores = num_max - num_min;
    const valor_al_azar = Math.floor(Math.random()* amplitud_valores) + num_min;
    return valor_al_azar;
}


function iniciar (event){
    btn.disabled = true; 
    cant_errores = 0;
    cant_aciertos = 0;

    const parrafo = id('palabra_a_adivinar');
    parrafo.innerHTML = '';
    const cant_palabras = palabras.length;
    const valor_mas_bajo = 0;
    const valor_al_azar = obtener_random(valor_mas_bajo, cant_palabras);
    palabrita = palabras[valor_al_azar];
    const cant_letras = palabrita.length;
    console.log(palabrita);

    for (let i = 0; i< btn_letras.length; i++) {
        btn_letras[i].disabled = false;
    }

    for (let i = 0; i < cant_letras; i++) {
        const span = document.createElement('span');
        parrafo.appendChild(span);
    }
}

/*Adivinar Letra*/

for (let i = 0; i< btn_letras.length; i++) {
    btn_letras[i].addEventListener('click', click_letras);
}

function click_letras(event) {
    const spans = document.querySelectorAll('#palabra_a_adivinar span ' );
    const button = event.target; 
    button.disabled = true; 
    
    const letra = button.innerHTML.toLowerCase(); 
    const palabra = palabrita.toLowerCase();

   let acerto = false;
   for( let i = 0; i < palabra.length;  i++ ){
       if( letra == palabra[i] ){
           spans[i].innerHTML = letra;
           cant_aciertos++;
           acerto = true;
       }
   }


    if(acerto == false){
        cant_errores++;
    }
    if(cant_errores == 5){
        id('resultado').innerHTML = "Perdiste! la palabra a adivinar era"+" "+  palabrita;
        game_over();
    }else if(cant_aciertos == palabrita.length){
        id('resultado').innerHTML = "GANASTE!!! ERES GENIAL,FELICIDADES!!!"; 
        game_over();
    }




    console.log("letra" + letra + "en la palabra" + palabra + "¿existe?:" + acerto);
}



/*Fin del Juego Wiiii */
function game_over(){
    for (let i = 0; i< btn_letras.length; i++) {
        btn_letras[i].disabled = true;
        
    }
    btn.disabled = false;
}


game_over();