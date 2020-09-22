<script>
    import Card from './Card.svelte';
    export let peliculas;
    import {push} from 'svelte-spa-router';
</script>


<div class="row mt-3">
    {#each peliculas as item}
        <div class="col-sm-4">
            <Card titulo={item.title} imagen={item.poster_path} on:ver-mas-pelicula={()=> push('/Pelicula/'+item.id)}></Card>
        </div>
    {/each}
</div>
