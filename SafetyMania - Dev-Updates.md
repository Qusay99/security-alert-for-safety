## User-Stories:
- As a person at risk I would like to press a button in order to inform my safety community in case of a potentially dangerous situation in order to get help if necessary.

## Planned Features:
- JSON file with telegram group IDs and according geographic information 
- Telegram Bot that can be invited to group chats
- Button -> When pressed: automatically send an emergency message to the telegram bot active in the group, that is geographically nearest to the user (using the distance calculator module) <br> Example: User is in Mannheim and presses button -> Emergency message is sent to "Mannheim Safety-Community" - Group in Telegram
 
## Currently Active Features:

### Telegram Bot (Niklas Koch):
- after Telegrambot gets started, the bot is initialized with the Token in the .env
- getJSON() method returns the current "location_to_chat_ID.json" in the git repository. This contains the location, its coordinates and chatID of the according Telegram group
- After starting the bot (with parameters for user location, coordinates and eventually name of the user) a link for google maps is created.
- The bot generates an emergency message.
- Now the bot filters the JSON for the according chatID and sends the message to the according Telegram group.

### Distance Module:
- Distance Module is able to calculate the Distance between a live location and several cities and chooses the city with the smallest distance
- The class "NearestCityCalculator" includes the "findnearestcity" function which:
- takes the geo data of a city (which is written down in "location_to_chat_ID.json") by using the "DistanceCalculator" module 
- It calculates the distance to the "userGeo" (the live location of the user)
- The function includes a for loop, so that it will be calculated for each city written down in the JSON file
- Every time, the calculated distance is smaller than the previous city, the "location" variable will be overwritten
- At the end of the for loop we get the nearest city to the users geo data in the "location" variable 
- The value of "location" will be used for the telegram bot to find the chatID of the target telegram group
- The distance calculator module is currently working. Problem: Using the Class "NearesCityClculator" in Svelte causes error by importing the JSON file
-> import is commented and will be importet in Svelte directly


### Website:
- The website application was built with Svelte framework.
- The web application consists of 3 pages:
  - **Home**: On this site, the user is able to find the danger button and a name field where he can enter his name if he wants his name to be sent with the danger message to the telegram group
  - **About us**: On this site, the user is able to find some information about the contributors respectively the idea behind the project.
  - **Instruction**: On this site, the user is able to find the information needed to understand how the web application works respectively how he can use it.
- In the source code of the Home.Svelte component, the functions `getlocation()`, `showPosition()` and `showError()` are responsible for getting the location of the user. The location will be returned as a list of two components (latitude and longitude) which will be passed to the `NearestCityCalculator` module.
- In the source code of the Home.Svelte component, the JSON file of the cities locations' will also be imported by the `fetch()` method to pass it to the `NearestCityCalculator` with the user coordinates.
