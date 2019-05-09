#pip install pyTelegramBotAPI
import telebot

bot = telebot.TeleBot("878337221:AAEb7XdIlPMBgD9eauCTGbGfWOYAT77DsRY")

@bot.message_handler(content_types=['text'])
def send_echo(message):
	bot.reply_to(message, message.text)
	#bot.send_message(message.chat.id, message.text)

bot.polling(none_stop=True)



