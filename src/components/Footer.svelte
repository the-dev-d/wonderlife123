<script>
    const year = new Date().getFullYear();
</script>

<footer class="p-10 pb-5 text-slate-200 bg-green-950">
    <slot />
    <p class="w-full text-sm text-center">©{year} Wonder Life. All rights reserved.</p>
</footer>
