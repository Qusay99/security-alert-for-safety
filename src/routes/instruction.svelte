<script lang="ts">
    // import {TelegramBotForSafetyMania} from '../telegram_bot';
    import {NearestCityCalculator} from '../distance_calculator';
	import {TestClassImport} from '../test-import'
    // let start_the_bot = TelegramBotForSafetyMania

    import Geolocation from "svelte-geolocation"
	// let userCity = NearestCityCalculator.findNearestCity([49.4719058, 8.4852408]);
	let testImport = TestClassImport.findNearestCity()

    let getPosition = false;
	let coords = [];


    const handleClick = () =>{
        getPosition = true; 
    }
    let name = ""
	const handleInput = (e) => {
		name = e.target.value;
	};
  </script>


<main>
    <h1>Instructions</h1>
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
			<button class="danger-btn mx-auto" href="#" on:click={handleClick}><i class="fas fa-exclamation-triangle danger-symbol"></i></button>
		</div>
	</div>
	<p>wasdada</p>
	<div class="user-info mt-3 col-lg-8 col-md-8 mb-5 mb-md-0 mx-auto text-center">
		<p>
            
			<Geolocation getPosition="{getPosition}" bind:coords />
			<!-- {#await userCity}
				<p>waiting</p>
			{:then city}
				<p>city</p>
			{/await} -->
		</p> 
        
		
		<p>Your current position {coords}</p> 
        <!-- <p>the nearest city to your current position is {city}</p>  -->
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
	}
</style>