<script>
    const year = new Date().getFullYear();
    export let color = "";
</script>

<footer class="p-10 pb-5 text-slate-200 bg-{color}">
    <slot />
    <p class="w-full text-sm text-center">©{year} Wonder Life. All rights reserved.</p>
</footer>
