

// importar modulos
import {saludar} from './js/componentes'; //se puede omitir el .js y quedar './js/componentes'

import './styles.css';

const nombre = 'Marcelo';

// npm init
// npm install webpack webpack-cli --save-dev
// configurar el build en el package.json
// npm run build para actualizar el main.js

//la carpeta dist es de producción

// crear archivo webpack.config.js y agregar el modulo de development
//luego npm run build para actualizar el main.js

// agregar npm install --save-dev html-loader
// y agregar npm install --save-dev html-webpack-plugin
saludar(nombre);