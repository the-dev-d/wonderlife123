<script>
    export let title = "titles";
    export let logo = "";
</script>

<nav class="flex justify-between w-full px-4 py-2 mx-auto mt-3">
    <div class="flex items-center justify-start">
        <img class="w-1/4" src={logo} alt="" />
        <span
            class="flex-wrap font-semibold underline md:text-2xl text-ayur-primary"
        >
            {title}
        </span>
    </div>
    <div class="text-ayur-primary">
        <slot name="options" />
    </div>
</nav>
