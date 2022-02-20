<script>
  import Home from "@/components/Home.svelte";
  import About from "@/components/About.svelte"
  import { fade } from "svelte/transition";

  let name = "World";
</script>

<header>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
		  <a class="navbar-brand" href="#/">Security Alert For Safety</a>
		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			  <span class="navbar-toggler-icon"></span>
		  </button>
		  <!-- <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/Instruction">Instruction</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/About">About us</a>
          </li>
        </ul>
		  </div> -->
		</div>
	</nav>
</header>

<main transition:fade>
  <Home/>
  <br>
  <br>
  <hr/>
  <br>
  <br>
  <About/>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 3px solid rgb(255, 255, 255);
  }
</style>
