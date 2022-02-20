<script>
  import Map from "https://deno.land/x/svelte_map/Maps.svelte"
  let long = 10;
  let lat = 50;
  export let name;

  // import {Test} from '~/test.ts'
  import {TelegramBotForSafetyMania} from '~/telegram_bot.ts';
  import {NearestCityCalculator} from '~/distance_calculator.ts';
    // let start_the_bot = TelegramBotForSafetyMania

  // import Geolocation from "svelte-geolocation"
	// let bot = new()
  let userCity="";
  const url = 'https://raw.githubusercontent.com/Qusay99/security-alert-for-safety/main/location_to_chat_IDs.json'
  let data;

  const handleClick = async () => {
    data = await fetch(url).then((x) => x.json());
    userCity = NearestCityCalculator.findNearestCity([49.4719058, 8.4852408], data);
    // TelegramBotForSafetyMania.startBot(49.488888, 8.469167, "Qusay", userCity); 
  };
  let getPosition = false;
	let coords = [];

  function handleClick2(){
    // userCity = NearestCityCalculator.findNearestCity([49.4719058, 8.4852408], data);
    alert('Bot should has been started')
    TelegramBotForSafetyMania.startBot(data,49.488888, 8.469167, "Qusay", userCity); 
  };
</script>

<h1>Hello {name}!</h1>
<p>
  Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how
  to build Svelte apps.
</p>
<Map long={long} lat={lat} button={true} />



<button on:click="{handleClick}">
  Click to Load Data
</button>
<!-- <pre>
  {JSON.stringify(data, null, 2)}
</pre> -->

<button on:click="{handleClick2}">
  Click to test Data
</button>
<h3>test:</h3>
<h2>{userCity}</h2>

<link
  href="https://fonts.googleapis.com/css?family=Overpass:100,400"
  rel="stylesheet"
/>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
