
<script lang="ts">

    let chars = "";
    let nameErr = "", bodyErr = "";
    let emailForm: HTMLFormElement|undefined;
    export let primaryClass = "";
    function sendToMail() {
        const form = new FormData(emailForm);
        const name = form.get('name');
        if(!name) {
            nameErr = "Name cannot be empty";
            return;
        }else nameErr = "";

        let body = form.get('body');
        if(!body) {
            bodyErr = "Body cannot be empty"
            return;
        }else bodyErr = ""

        body = `I'm ${name} \n ${body}`;
        body = encodeURIComponent(body);
        window.open(`mailto:contact@wonderlife123.in?subject=Support regarding my queries&body=${body}`);
    }
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
        <form bind:this={emailForm} class="grid gap-10 p-6 border-2 border-gray-200 rounded-md shadow-md lg:p-10" on:submit|preventDefault={sendToMail}>
            <div>
                <input
                type="text"
                class="w-full p-3 transition-colors border-2 rounded-md border-{primaryClass} border-opacity-20 focus:border-opacity-60 focus:outline-none bg-{primaryClass} bg-opacity-10"
                name="name"
                placeholder="Enter your name"
                id=""/>
            <span class="mx-1 text-sm text-red-400">{nameErr}</span>
            </div>
           <div class="relative">
                <div class="limi absolute right-0 bottom-0 m-3 opacity-40 text-sm">{chars.length}/600</div>
                <textarea
                class="w-full h-64 p-3 transition-colors border-2 rounded-md resize-none border-{primaryClass} border-opacity-20 focus:border-opacity-60 focus:outline-none bg-{primaryClass} bg-opacity-10"
                name="body"
                bind:value={chars}
                maxlength="600"
                placeholder="Enter your message..."/>
                <span class="mx-1 text-sm text-red-400">{bodyErr}</span>
           </div>
            <button class="w-full p-2 text-white rounded-md bg-{primaryClass}">
                Submit
            </button>
        </form>
    </div>
    <section />
</div>
