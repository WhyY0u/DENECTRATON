import openai
import logging
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command, Text
from aiogram.utils import TelegramAPIError
from dotenv import load_dotenv
import os
import asyncio

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")
API_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")

logging.basicConfig(level=logging.INFO)

bot = Bot(token=API_TOKEN)
dp = Dispatcher()


async def search_and_filter(user_query):
    prompt = f"Найди и отфильтруй данные по следующему запросу: {user_query}"

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=200,
            temperature=0.7
        )
        return response['choices'][0]['message']['content'].strip()
    except Exception as e:
        logging.error(f"Ошибка при взаимодействии с OpenAI: {e}")
        return "Произошла ошибка при обработке вашего запроса."


@dp.message(Command(commands=['start']))
async def send_welcome(message: types.Message):
    await message.reply("Привет! Я бот для поиска и фильтрации. Введи запрос для поиска:")


@dp.message(Text())
async def handle_search(message: types.Message):
    user_query = message.text

    await message.reply("Ищу информацию, пожалуйста подождите...")

    result = await search_and_filter(user_query)

    await message.reply(f"Результаты поиска:\n{result}")


async def on_startup():
    logging.info("Bot is starting...")


if __name__ == '__main__':
    try:
        asyncio.run(dp.start_polling(on_startup=on_startup))
    except TelegramAPIError as e:
        logging.error(f"Ошибка Telegram API: {e}")
