import { Bot } from "https://deno.land/x/telegram@v0.1.1/mod.ts";
import {TelegramBot, UpdateType } from "https://deno.land/x/telegram_bot_api/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const token = Deno.env.get("TOKEN");

const bot = new TelegramBot("5084168171:AAFynbkC-112hpy8hmssBcJONjDsCuMZvHI");

bot.on(UpdateType.Message, async ({ message }) => {
    const chatID = message.chat.id;
    console.log("Chat-ID: " + chatID)
    await bot.sendMessage({
        chat_id: chatID,
        text: "Dog or Cat?",
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Dog", callback_data: "dog" },
              { text: "Cat", callback_data: "cat" },
            ],
          ],
        },
      });
    });


    bot.on(UpdateType.CallbackQuery, async ({ callback_query }) => {
        const { id, data, from } = callback_query;
        const text = data === "dog" ? "Wrong Answer" : "Correct Answer.";
      
        await bot.sendMessage({
          chat_id: from.id,
          text,
        });
      
        await bot.answerCallbackQuery({
          callback_query_id: id,
        });
      });
      
      bot.on(
        UpdateType.Error,
        ({ error }) => console.error("Error Occured", error.stack),
      );