<script>
    export let role = "";
    export let summary = "";
    export let github_url = "";
    export let github_username = "";
    export let full_name = "";
</script>

<div class="mt-5">
    <div>
        <h3 class="text-center text-2xl">{full_name}</h3>
    </div>
    <div class="flex justify-center items-center">
        <hr class="my-2 w-8">
    </div>
    <div>
        <p class="text-center font-light text-gray-500">{role}</p>
    </div>
    <div class="flex justify-center items-center">
        <hr class="my-2 w-8">
    </div>
    <div>
        <p class="text-center font-light text-gray-500">{summary}</p>
    </div>
    <div class="flex justify-center items-center">
        <hr class="my-2 w-8">
    </div>
    <div>
        <p class="text-center font-light text-gray-500"><i class="fa-brands fa-github"></i> <a href={github_url}>{github_username}</a></p>
    </div>
</div>

<style>
</style>
