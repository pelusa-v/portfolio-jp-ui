<script>
	import Counter from './Counter.svelte';
	import gopher_dancing from '$lib/images/dancing-gopher.gif';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<img src={gopher_dancing} alt="gopher_dancing"/>
			</picture>
		</span>

		Great!<br />Portfolio JP
	</h1>

	<h2>
		Try editing: <strong>This is a sample component</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

</style>
