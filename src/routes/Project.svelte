<script lang="ts">
    export let name : string;
    export let projectPath : string;
    export let description : string;
    import Tag from './Tag.svelte';
</script>

<div class="rounded-xl bg-transparent p-5 mt-0 mx-1 mb-4 border border-stone-700 project-container">
    <div>
        <a class="text-xl font-mono" href={projectPath}>{name}</a>
        <div class="description-container">
            <p class="text-xs break-words">
                {description}
            </p>
        </div>
        <div>
            <Tag name="Python"></Tag>
            <Tag name="Javascript"></Tag>
            <Tag name="Go"></Tag>
            <Tag name="Java"></Tag>
            <Tag name="C#"></Tag>
        </div>
    </div>
</div>

<style>
.description-container {
    width: auto;
    overflow: hidden;
}

.project-container {
    width: auto;
    min-height: auto;
}
</style>