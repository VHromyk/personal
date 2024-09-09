import axios from 'axios'

type TBody = {
  name: string
  company: string
  email: string
  textarea: string
}

export const sendToTelegram = (body: TBody) => {
  const BOT_TOKEN = process.env.NEXT_TELEGRAM_BOT_TOKEN
  const CHAT_ID = process.env.NEXT_TELEGRAM_CHAT_ID

  const fields: Array<[string, string | undefined]> = [
    ['Name', body.name],
    ['Company', body.company],
    ['Email', body.email],
    ['Message', body.textarea],
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
