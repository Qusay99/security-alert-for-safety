# security-alert-for-safety-
User-Stories:
- As a person at risk I would like to press a button in order to inform my safety community in case of a potentially dangerous situation in order to get help if necessary.

Planned Features:
- JSON file with telegram group IDs and according geographic information 
- Telegram Bot that can be invited to group chats
- Button -> When pressed: automatically send an emergency message to the telegram bot active in the group, that is geographically nearest to the user (using the distance calculator module)
  Example: User is in Mannheim and presses button -> Emergency message is sent to "Mannheim Safety-Community" - Group in Telegram
 
Currently Active Features:
- after starting the bot you can type "/safety" or "/safetyHelp" in a chat with that bot...the bot will answer to your command
