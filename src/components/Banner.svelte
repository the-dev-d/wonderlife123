<script></script>

<header class="relative w-full h-full">
    <div class="absolute top-0 left-0 w-full h-full -z-10">
        <slot name="background" />
    </div>
    <main class="top-0 left-0 flex flex-col w-full h-full">
        <slot name="header" />
        <div class="container flex-auto w-full h-full mx-auto">
            <slot name="foreground" />
        </div>
    </main>
</header>
