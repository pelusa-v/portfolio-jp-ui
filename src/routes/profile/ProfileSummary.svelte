<script>
    export let role = "";
    export let summary = "";
    export let github_url = "";
    export let github_username = "";
    export let full_name = "";
</script>

<div>
    <div class="flex justify-center items-center">
        Full name: {full_name}
    </div>
    <div class="flex justify-center items-center">
        Role: {role}
    </div>
    <div class="flex justify-center items-center">
        Summary: {summary}
    </div>
    <div class="flex justify-center items-center">
        Github: <a href={github_url}>{github_username}</a>
    </div>
</div>

<style>
</style>
