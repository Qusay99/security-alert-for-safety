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

<header>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
		  <a class="navbar-brand" href="#">Security Alert For Safety</a>
		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
			  <li class="nav-item">
				<a class="nav-link" aria-current="page" href="#">Anleitung</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#">Über uns</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
</header>
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
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
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
		transition: 0.3s ease-in-out;
		color: yellow;
	}
	.danger-symbol{
		font-size: calc(20px + 10vw);
		fill: currentColor;
		margin-top: 23%;
	}
</style>