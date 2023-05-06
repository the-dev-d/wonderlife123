<script>
</script>

<div class="flex flex-col-reverse w-full gap-6 md:flex-row">
    <div class="flex flex-col w-full mt-10 md:w-1/2 md:mt-6">
        <h3 class="mb-6 text-lg text-ayur-darker">
            <slot name="head" />
        </h3>

        <slot name="body" />

        <div class="my-6">
            <slot name="foot" />
        </div>
    </div>
    <div class="w-full md:w-1/2">
        <form
            class="grid gap-10 p-6 border-2 border-gray-200 rounded-md shadow-md lg:p-10"
            action=""
        >
            <input
                type="text"
                class="w-full p-3 transition-colors border-2 rounded-md border-ayur-accent focus:border-ayur-primary focus:outline-none bg-ayur-accent"
                name="name"
                placeholder="Enter your name"
                id=""
            />
            <input
                type="text"
                class="w-full p-3 transition-colors border-2 rounded-md border-ayur-accent focus:border-ayur-primary focus:outline-none bg-ayur-accent"
                name="email"
                placeholder="Enter your email"
                id=""
            />
            <textarea
                class="w-full h-40 p-3 transition-colors border-2 rounded-md resize-none border-ayur-accent focus:border-ayur-primary focus:outline-none bg-ayur-accent"
                name="name"
                placeholder="Enter your message..."
            />
            <button class="w-full p-2 text-white rounded-md bg-ayur-primary">
                Submit
            </button>
        </form>
    </div>
    <section />
</div>
