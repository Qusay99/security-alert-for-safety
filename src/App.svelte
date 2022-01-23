<header>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
		  <a class="navbar-brand" href="#/">Security Alert For Safety</a>
		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
			  <li class="nav-item">
				<a class="nav-link" aria-current="page" href="#/hello/svelte">Anleitung</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#/About">Über uns</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
</header>
<!-- Navigation links -->
<!-- <ul>
    <li><a href="#/">Home</a></li>
    <li><a href="#/wild/card">Wildcard route</a></li>
    <li><a href="#/does/not/exist">Not found</a></li>
</ul> -->

<!-- Show the router -->
<Router {routes} />

<script>
// Import the router component
// Normally, this would be: `import Router from 'svelte-spa-router'`
// import Router from '../../../Router.svelte'
import Router from 'svelte-spa-router'

// Import the list of routes
import routes from './routes'
</script>


