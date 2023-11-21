import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({message: 'This is a Next.js API route powered by Zeabur serverless functions!'})
}
