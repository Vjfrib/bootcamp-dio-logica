//Arquivo Js Lateral (msm dir)

//import Carro from './Carro.js'; 
//import * as CarroModule from './definindoClasse.js';
//import { Carro } from './Carro.js';

const Carro = require('./Carro');

// Criando uma instância para um Gol 99 vermelho
const gol99Vermelho = new Carro(1999, 'vermelho', 'Gol');

// Chamando o método andar
gol99Vermelho.andar();
gol99Vermelho.jsonar();
