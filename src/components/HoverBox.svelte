<script>
    export let image = "";
    export let beforeText = "";
    export let afterText = "";
</script>

<div class="relative w-full overflow-hidden rounded-md aspect-square">
    <img class="absolute w-full h-full brightness-50" src={image} alt="" />
    <h1
        class="absolute z-20 grid w-full h-full text-white transition-colors -translate-y-1/2 bg-transparent group hover:bg-ayur-primary hover:bg-opacity-90 align place-items-center top-1/2"
    >
        <span
            class="text-3xl transition-opacity md:text-4xl lg:text-6xl group-hover:opacity-0 group-hover:hidden"
            >{beforeText}</span
        >
        <span
            class="hidden text-lg font-semibold transition-opacity opacity-0 lg:text-2xl group-hover:opacity-100 group-hover:block"
            >{afterText}</span
        >
    </h1>
</div>
