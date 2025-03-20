import axios from 'axios'

import { ISendToTelegram } from './send-to-telegram.types'

export const sendToTelegram = async (body: ISendToTelegram) => {
  const BOT_TOKEN = process.env.NEXT_TELEGRAM_BOT_TOKEN
  const CHAT_ID = process.env.NEXT_TELEGRAM_CHAT_ID

  const { name, textarea, company, email } = body

  const fields: Array<[string, string | undefined]> = [
    ['Name', name],
    ['Company', company],
    ['Email', email],
    ['Message', textarea],
  ]

  const formattedString = fields
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n')

  return axios
    .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: formattedString,
    })
    .then((res) => res.data)
    .catch(function (error) {
      console.log(error)
    })
}
