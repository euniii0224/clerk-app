import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    message: 'Hello, Next.js!!!',
    description: 'Next.js API 예제',
  }
  return NextResponse.json(data)
}
