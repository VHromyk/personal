import { NextResponse } from 'next/server'
import { sendToTelegram } from '@/lib/telegram'

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const response = await sendToTelegram(body)

    if (response?.ok) {
      return NextResponse.json({ status: 200, message: response })
    }

    return NextResponse.json({ status: 400, message: response })
  } catch (e) {
    if(typeof e === 'object') {
      return NextResponse.json({ status: 500, message: e })
    }
  }
}
