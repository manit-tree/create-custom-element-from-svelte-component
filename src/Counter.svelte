<script>
    let { color } = $props();
    let count = $state(0);

    let increase = () => {
        count++;
    }
</script>

<div>    
    <h1 style="--color:{ color||'blue' }">Counter : <span>{ count }</span></h1>
    <button onclick={increase}>Increase</button>
</div>

<style>
div {
    font-family: sans-serif, tahama;

    h1 {
        span {
            color: var(--color);
        }
    }

    button {
        padding: 0.5em 0.75em;
        text-transform: uppercase;
    }
}
</style>