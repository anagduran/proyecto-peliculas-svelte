import Inicio from './Paginas/Inicio.svelte';
import Peliculas from './Paginas/Peliculas.svelte';
import ErrorRuta from './Paginas/ErrorRuta.svelte';

const route ={
    '/': Inicio,
    '/pelicula/:id':Peliculas,
    '*': ErrorRuta
}


export default route;
