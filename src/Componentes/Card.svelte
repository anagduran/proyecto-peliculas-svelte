<script>
    export let titulo;
    export let imagen;
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    function ver(){
        dispatch('ver-mas-pelicula')
    }

</script>

<div class="card mb-3" style="width:18rem;">
    <img src="https://image.tmdb.org/t/p/w500{imagen}" alt={titulo} width="100%" height="500">
    <div class="card-body">
        <h5 class="card-title">{titulo}</h5>
        <button class="btn btn-primary" on:click={ver}>Ver mas...</button>
    </div>

</div>