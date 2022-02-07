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


### Website:


