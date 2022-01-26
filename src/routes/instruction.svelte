<!-- <script>
    // import {TelegramBotForSafetyMania} from '../telegram_bot';
    import Geolocation from "svelte-geolocation";
    let coords = [];
</script> -->

<!--
<Geolocation getPosition bind:coords />

<pre>{JSON.stringify(coords)}</pre> -->
<script>
    import Geolocation from "svelte-geolocation";
  
    let getPosition = false;
  </script>
  <!-- for calling multiple methods -->
  <!-- <button on:click="{() => (getPosition = true)}"> Get geolocation </button> -->
  
<!-- <Geolocation
    getPosition="{getPosition}"
    let:coords
    let:loading
    let:success
    let:error
    let:notSupported
>
{#if notSupported}
    Your browser does not support the Geolocation API.
{:else}
    {#if loading}
        Loading...
    {/if}
    {#if success}
        {JSON.stringify(coords)}
    {/if}
    {#if error}
        An error occurred. {error.code} {error.message}
    {/if}
{/if}
</Geolocation> -->

<main>
	<div class="container">
		<div class="div-danger-btn vertical-center">
			<button class="danger-btn mx-auto" href="#" on:click="{() => (getPosition = true)}"><i class="fas fa-exclamation-triangle danger-symbol"></i></button>
		</div>
	</div>
	<div class="user-info mt-3 col-lg-8 col-md-8 mb-5 mb-md-0 mx-auto text-center">
		<p>
            <Geolocation
                getPosition="{getPosition}"
                let:coords
                let:loading
                let:success
                let:error
                let:notSupported
            >
            {#if notSupported}
                Your browser does not support the Geolocation API.
            {:else}
                {#if loading}
                    Loading...
                {/if}
                {#if success}
                    {JSON.stringify(coords)}
                {/if}
                {#if error}
                    An error occurred. {error.code} {error.message}
                {/if}
            {/if}
            </Geolocation>
        </p>
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