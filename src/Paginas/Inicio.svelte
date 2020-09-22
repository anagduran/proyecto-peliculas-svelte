<script>
    import Cargador from '../Componentes/Cargador.svelte';
    import Grid from '../Componentes/Grid.svelte';

    //9b327a1a015e4d7ba7892d9a4ae60617
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=9b327a1a015e4d7ba7892d9a4ae60617&language=en-US&page=1';

    let promesa = ajax();
    let peliculas = [];

    async function ajax(){
        const res = await fetch(url);
        peliculas = await res.json();

        if(res.ok){
            return peliculas.results
        } else {
            throw new Error('No hay conexion con la API')
        }
    }
</script>

<h1>Peliculas mas populares del momento 2020</h1>

{#await promesa} 
   <div align="center">
    <Cargador></Cargador>
   </div>
{:then peliculas}
    <Grid {peliculas}></Grid>
   <!--{#each peliculas as item}
        <li>{item.title}</li>

    {/each}-->


{:catch error}
    <p style="color: red;">{error}</p>
{/await}

