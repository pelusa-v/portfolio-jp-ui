<script lang="ts">
    export let enterprise : string;
    export let role : string;
    export let tools : string[];
    export let startDate: string;
    export let endDate: string;
    export let summary: string;
    import Tag from '../Tag.svelte';
</script>

<div class="rounded-xl bg-transparent px-5 py-2 mt-0 mb-4 border border-stone-700">
    <div class="flex justify-between">
        <span class="text-sm font-light text-left">{role}</span> 
        <span class="font-extralight text-xs text-right">{enterprise}</span>
    </div>
    <div class="mt-1.5">
        <p class="text-xs font-light text-left break-words">{summary}</p>
    </div>
    <div><span class="font-extralight text-xs text-right">{startDate} - {endDate}</span></div>
    <div>
        {#each tools as tool }
            <span class="me-1"><Tag name={tool}></Tag></span>
        {/each}
    </div>
</div>

<style>

</style>
