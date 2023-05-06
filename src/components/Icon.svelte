<script>
    export let label = "";
</script>

<div class="flex items-center my-3">
    <div
        class={"grid mr-3 text-white transition-colors border-2 rounded-md w-11 place-items-center border-ayur-primary bg-ayur-primary aspect-square " +
            (label
                ? ""
                : "hover:shadow-md hover:bg-ayur-accent hover:text-ayur-primary ")}
    >
        <slot />
    </div>
    <span class="text-ayur-text">{label}</span>
</div>
