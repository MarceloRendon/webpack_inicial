
import '../css/componentes.css';

//import webpacklogo from '../assets/img/webpack-logo.png';

//import img from '../assets/img/webpack-logo.png';

// función saludar

//para exportar la funcion y que pueda ser importada a otro archivo js
// se debe colocar la palabra export antes de la función
export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');

    h1.innerText = `Hola, ${ nombre } !!!`;

    document.body.append(h1);


    //img

    //const img = document.createElement('img');
    //img.src = webpacklogo;
    //document.body.append(img);
}

