<script lang="ts">
    export let name = "btn name";
    export let loader = false;
    export let loader_name = "loader name";
    export let style = "w-full p-2 bg-blue-500 rounded-lg text-white";
    export let type: "reset" | "submit" | "button" | null | undefined = "submit";
    export let title = "";
</script>

<!--
    @component
    style variable has a default config of "w-full p-2 bg-blue-500 rounded-lg text-white"
-->

<button {title} {type} class="{style} text-xs transition-all active:bg-opacity-50 {loader ? "cursor-progress" : ""}" disabled={loader} on:click>
    {#if loader}
        <div class="flex items-center justify-center gap-2 truncate">
            <p>{loader_name}</p>
            <div class="w-4 h-4 border-b-black border-[0.1rem] rounded-full animate-spin"></div>
        </div>
    {:else}
        <p class="truncate">{name}</p>
    {/if}
</button>