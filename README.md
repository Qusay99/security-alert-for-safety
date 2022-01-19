# security-alert-for-safety-

## User-Stories:
- As a person at risk I would like to press a button in order to inform my safety community in case of a potentially dangerous situation in order to get help if necessary.

## Planned Features:
- JSON file with telegram group IDs and according geographic information 
- Telegram Bot that can be invited to group chats
- Button -> When pressed: automatically send an emergency message to the telegram bot active in the group, that is geographically nearest to the user (using the distance calculator module) <br> Example: User is in Mannheim and presses button -> Emergency message is sent to "Mannheim Safety-Community" - Group in Telegram
 
## Currently Active Features:

### Telegram Bot:
- you can specify a city in the code...the telegram bot filters the "location_to_chat_id.json" for the according chatID and sends a message to the Telegram group of that city
- it's possible to insert a name to the emergency message and to add a custom message by the user that presses the button (still has to be automated)

### Distance Module:


### Website:


