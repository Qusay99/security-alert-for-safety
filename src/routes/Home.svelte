<script>
	// export let name;
	let word = "StudyMania";
	let name = "Qusay"
	const handleClick = () => {
		name = "Hostage";
	};

	const handleInput = (e) => {
		name = e.target.value;
	};
</script>

<main>
	<!-- <h1>Hello {word}!</h1>
	<h2 style="color: {name}">WAS LoS {name}</h2>
	<button on:click={handleClick}>Update was los</button>
	<input type="text" on:input={handleInput} value={name}>
	<input type="text" bind:value={name}>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
	<div class="container">
		<div class="div-danger-btn vertical-center">
			<a class="danger-btn mx-auto" href="#"><i class="fas fa-exclamation-triangle danger-symbol"></i></a>
		</div>
	</div>
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background-color: rgba(255, 255, 255, 0);
		color: #fff;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	.danger-btn {
		position: relative;
		display:block;
		margin-top: 25vh;
		height: calc(50px + 20vw);
		width: calc(50px + 20vw);
		border-radius: 50%;
		background-color: rgb(185 0 0);
		border-radius: 50%;
		color: #fff;
	}
	.danger-btn:hover{
		transition: 0.25s ease-in-out;
		color: yellow;
	}
	.danger-symbol{
		font-size: calc(20px + 10vw);
		fill: currentColor;
		margin-top: 23%;
	}
</style>