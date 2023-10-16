import Pokedex from 'pokedex-promise-v2';
import fp from './fp.js'

const getMaxQueries = () => 10;

let Dexter ={};

Object.defineProperty(Dexter, 'maxQueries', {
    value: getMaxQueries,
    writable: false,
  });

Dexter.init = (locals) =>{
    console.log('Creating a new Pokedex!')        
    const P = new Pokedex();
    return fp.addObject(locals, 'dex', P);
};


export default Dexter;