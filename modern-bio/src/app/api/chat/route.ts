import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // You can forward messages to your LLM provider here later.
  return NextResponse.json({
    reply: "Thanks! I’m a placeholder. Connect me to your LLM in /api/chat/route.ts.",
  });
}
