<script>
    export let label = "";
    export let color = "";
</script>

<div class="flex items-center my-3">
    <div
    class:label={`hover:shadow-md hover:bg-ayur-accent hover:text-${color}`}
        class="grid mr-3 text-white transition-colors border-2 rounded-md min-w-[2rem] place-items-center border-{color} bg-{color} aspect-square ">
        <slot />
    </div>
    <span class="text-sm text-slate-500">{label}</span>
</div>
