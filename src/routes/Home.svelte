<script>
	let name = ""

	const handleInput = (e) => {
		name = e.target.value;
	};

	let userPosition = "";
	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		} else { 
			userPosition = "Geolocation is not supported by this browser.";
		}
	}

	function showPosition(position) {
		userPosition = "Latitude: " + position.coords.latitude + 
		"<br>Longitude: " + position.coords.longitude;
	}

	function showError(error) {
		switch(error.code) {
			case error.PERMISSION_DENIED:
				userPosition = "User denied the request for Geolocation."
				break;
			case error.POSITION_UNAVAILABLE:
				userPosition = "Location information is unavailable."
				break;
			case error.TIMEOUT:
				userPosition = "The request to get user location timed out."
				break;
			case error.UNKNOWN_ERROR:
				userPosition = "An unknown error occurred."
				break;
		}
	}
</script>

<main>
	<div class="user-info mt-2 col-lg-8 col-md-8 mb-5 mb-md-0 mx-auto text-center">
		<h2>Hi {name}!</h2>
		<div class="form-group col-lg-5 col-md-5 mt-3 mb-md-0 mx-auto text-start">
			<label class ="mb-2" for="exampleInputEmail1">Please enter your name if you want it to be sent with the alarm message:</label>
			<input type="text" class="form-control" placeholder="Name" on:input={handleInput}>
			<small class="form-text text-white">This is an opitional field!</small>
		</div>
	</div>
	<div class="container">
		<div class="div-danger-btn vertical-center">
			<button class="danger-btn mx-auto" href="#" on:click={getLocation}><i class="fas fa-exclamation-triangle danger-symbol"></i></button>
		</div>
	</div>
	<div class="user-info mt-3 col-lg-8 col-md-8 mb-5 mb-md-0 mx-auto text-center">
		<p>{@html userPosition}</p>
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
		/* position: relative; */
		/* display:block; */
		/* margin-top: 25vh; */
		margin-top: 7vh;
		height: calc(50px + 20vw);
		width: calc(50px + 20vw);
		border-radius: 50%;
		background-color: rgb(185 0 0);
		border-radius: 50%;
		border-color: rgb(185 0 0);
		color: #fff;
	}
	.danger-btn:hover{
		transition: 0.25s ease-in-out;
		color: yellow;
	}
	.danger-symbol{
		font-size: calc(20px + 10vw);
		fill: currentColor;
		/* margin-top: 23%; */
	}
	/* .input-btn{
		display: block;
		position: relative;
	} */
</style>