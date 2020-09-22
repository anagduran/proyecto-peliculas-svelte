<script>
    import {onMount} from 'svelte';
    export let params = {};
    let id = params.id;
    const url ="https://api.themoviedb.org/3/movie/"
    const key= "?api_key=9b327a1a015e4d7ba7892d9a4ae60617&language=en-US"
    const urlFinal = url + id + key;

    let pelicula = [];
    let generos = [];
    onMount(async ()=>{
        const res = await fetch(urlFinal);
        pelicula = await res.json();
        generos = await pelicula.genres
        console.log(pelicula)
        console.log(generos)
    })
</script>

<div class="row mt-5 mb-5">
    <div class="col-lg-6">
        <img src="https://image.tmdb.org/t/p/w500{pelicula.poster_path}" alt={pelicula.title} width="100%" height="700">
    </div>
    <div class="col-lg-6">
        <h1>{pelicula.title}</h1>
        <p>{pelicula.overview}</p>
        <h3>Genero(s):</h3>
            {#each generos as genero}
                <h4>{genero.name}</h4>
            {/each}
        <div class="rating" align="center">
            {pelicula.vote_average}
        </div>
    </div>
</div>


<style>
    .rating {
        width: 300px;
        border: 4px solid black;
        font-size: 10rem;
        font-weight: bolder;
    }
</style>

