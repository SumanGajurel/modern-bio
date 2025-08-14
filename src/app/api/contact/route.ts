import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  // TODO: send via your email provider (Resend, SendGrid, etc.)
  // For now we just log and return success so the UI works.
  console.log("CONTACT FORM SUBMISSION:", data);
  return NextResponse.json({ ok: true });
}
