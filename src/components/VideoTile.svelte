<script>
    import { each } from "svelte/internal";

    export let videos = [];
    export let primaryVideo = "";
</script>

<main class="grid gap-2 md:flex">
    <iframe
        class="w-full aspect-video"
        src={`https://www.youtube.com/embed/${primaryVideo}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
    />
    <div class="grid w-full grid-cols-2 gap-2">
        {#each videos as video}
            <iframe
                class="w-full aspect-video"
                src={`https://www.youtube.com/embed/${video}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            />
        {/each}
    </div>
</main>
