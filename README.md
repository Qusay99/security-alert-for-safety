# SafetyMania
<p align="center">
  <img src="/SAFETYMANIA.png" alt="SafetyMania - Logo"/>
</p>

## How to use SafetyMania
#### Web-Application:
you can find the pre-release of our web application under the following link:
https://qusay99.github.io/security-alert-for-safety/

### ***Please note:*** The latest version of the application has not yet been deployed!
If you want to use the latest version, you have to download this repository and open the terminal in the root folder of the project's folder.
Then you have to run the following command:

````
trex run start
````

If you want to create your own SafetyCommunity please read this [instruction](https://github.com/Qusay99/security-alert-for-safety/edit/main/README.md#how-to-create-your-own-safetycommunity)

#### Telegram-Groups:

München: https://t.me/+GnzphUK1S5FhMjMy <br>
Berlin: https://t.me/+2zXFVfShHdQ4OWNi <br>
Mannheim: https://t.me/+4d7VemcUgUdmMjcy <br>
Köln: https://t.me/+9iVs_9bWXE5lYzIy <br>
Hamburg: https://t.me/+jeQRV0Yhh5s1MDdi <br>

## How to create your own SafetyCommunity

### Steps on Telegram
1. In Telegram, send the message "/start" to the "BotFather". You can find the BotFather by Searching for him.
2. Follow the BotFathers instructions to create a new bot. 
3. Remember the access token the BotFather sends you and keep sure that nobody is able to read it.
4. Create a group and inivite your bot into this group. Make sure he has rights to send messages.

### Steps on Github
1. Create your own fork of this repository.
2. Change the template.env to .env and insert your Telgrambot's token.
3. Use the telegram_root.ts to start the bot and send a message to the group your bot is in. In your terminal you will find the chatID of your group.
4. In src/telegram_bot.ts, insert the ChatID into the var chatID. (As a number, not as a string!)
5. Now commentate the following lines:

```js
data_json = await Request.get('https://raw.githubusercontent.com/Qusay99/security-alert-for-safety/Telegram-Bot-Developement/location_to_chat_IDs.json')
```
and
```js
for (let prop in data_json) {
            let entry = data_json[prop]
            if (Object.values(entry).includes(location)) {
                chatID = Object.values(entry)[2]
            }
        } 
```
6. Delete everything that has to do with "location".



## Helpful links for further development:
Create a Svelte App: https://svelte.dev/blog/the-easiest-way-to-get-started <br>
Svelte-Router: https://github.com/ItalyPaleAle/svelte-spa-router <br>
Telegram-Bot: https://deno.land/x/telegram_chatbot@v1.0.0 <br>
